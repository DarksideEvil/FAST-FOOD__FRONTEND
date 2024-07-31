import './chatContainer.css'
import Input from 'antd/es/input/Input';
import { SendOutlined } from '@ant-design/icons';
import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';


// interface ChatContainerProps {
//   user: string | number | undefined
//   msg: string

// }

let socket: Socket

interface Message {
  user: string;
  msg: string;
}

export const ChatContainer = (
  // props: ChatContainerProps
) => {
  const [state, setstate] = useState<any>('');

  const [formData, setFormData] = useState<{ msg: string }>({
    msg: '',
  });
  const [messages, setMessages] = useState<{ user: string; msg: string }[]>([]);
  const chatContainer_wrapper_Ref = useRef<HTMLDivElement>(null); // Ref for chat container


  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll chat container to the bottom
  const scrollToBottomOrg = () => {
    console.log("Chat container ref:", chatContainerRef.current);
    // chatContainerRef.current.scrollTop = chatContainerRef.current?.scrollHeight;
    if (chatContainerRef.current) {
      console.log("Scroll height:", chatContainerRef.current.scrollHeight);
      chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);
    }
  };


  useEffect(() => {
    socket = io('http://localhost:8080');
    socket.on('connect', () => {
      setstate(`You've connected with ${socket.id} ID`)
    })
    if (!socket) return;

    socket.on('receive-message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      // scrollToBottom();
    });

    scrollToBottom()
    scrollToBottomOrg()

    return () => {
      socket.off('receive-message');
    };
  }, [messages]);
  // const { user, msg } = props
  // const [formData, setFormData] = useState<{ [key: string]: string }>({
  //   msg: ''
  // });


  // const changeHandler = (e: ChangeEvent) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData, '- formdata');
  // console.log(messages, '- messages');

  // const sendMessage = () => {
  //   if (formData.msg.trim() === '') return; // Prevent sending empty messages

  //   setMessages([...messages, { user: 'Me', msg: formData.msg }]);
  //   setFormData({ ...formData, msg: '' });
  // };

  const sendMessage = () => {
    if (!socket || formData.msg.trim() === '') return;

    socket.emit('send-message', { user: 'Me', msg: formData.msg });
    setFormData({ ...formData, msg: '' });
  };

  function scrollToBottom() {
    if (chatContainer_wrapper_Ref.current) {
      // console.log(chatContainer_wrapper_Ref.current, 'ssssssssss');

      chatContainer_wrapper_Ref.current.scrollTop = chatContainer_wrapper_Ref.current.scrollHeight;
    }
  };

  return (
    <>
      <div className="chat_header">
        <h4>{state}</h4>
      </div>
      <div className="container chat_container_wrapper" ref={chatContainer_wrapper_Ref}>
        <div className='chat_inside_wrapper' ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div key={index} className={message.user === 'Me' ? 'chat_own_side_place' : 'chat_client_side_place'}>
              <h5 className={message.user === 'Me' ? 'own_side' : 'client_side'}>{message.user}: {message.msg}</h5>
            </div>
          ))}
        </div>

      </div>

      <div className="chat_wrapper">
        <Input
          name='msg'
          value={formData.msg}
          onChange={changeHandler}
          onPressEnter={sendMessage} // Allow sending message by pressing Enter key
          placeholder="Send message"
          className='chat_msg_inp'
          suffix={<SendOutlined className='chat_send_btn' onClick={sendMessage} />} // Send message on click
        />
      </div>
    </>
  )
}

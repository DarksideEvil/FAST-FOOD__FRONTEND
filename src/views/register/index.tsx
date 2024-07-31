import './register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import axios, {AxiosError} from 'axios';
// @ts-ignore
import URL from '../../../config.js'

export const Register = () => {

  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const [customer, setCustomer] = useState({
    phone: '',
    email: '',
    password: '',
  })


  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      const dataFromBackend = await axios.post(`${URL}/${isLogin ? 'signin' : 'signup'}`, customer)
      localStorage.setItem('token', dataFromBackend.data.jwt_token)
      navigate('/')
      alert(dataFromBackend.data.message)

    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        const responseData = axiosError.response.data as { message: string };
        alert(responseData.message);
      } else {
        // Handle other types of errors here
        alert(axiosError.message)
      }
    }
  }

  const registerSwitch = (e: any) => {
    e.preventDefault()
    setIsLogin(!isLogin)
  }

  const changeHandler = (name: string, value: string | number) => {
    setCustomer({ ...customer, [name]: value });
  };


  return (
    <>
      <div className="register_wrapper">
        <div className="register_container">
          <div className="register_header">
            <h1 className='register_header_txt'>semolina's registration</h1>
          </div>

          <div className="register_form_wrapper">
            <div className="r_form_title_place">
              <h1 className='r_form_title'>{isLogin ? 'sign in*' : 'sign up*'}</h1>
            </div>

            <div className="r_form_desc_place">
              <p className='r_form_desc'>Be in the know about deals, MySemolina’s Rewards, news and more by signing up.</p>
            </div>

            <div className="r_form_desc2_place">
              <p className='r_form_desc2'>* Indicates a required field</p>
            </div>

            <div className="r_inp_place">
              <form onSubmit={submitHandler}>
                <label htmlFor="phone" className="r_label" style={{ marginBottom: '10px', }}>*Phone</label>
                <PhoneInput
                  country={'us'}
                  value={customer.phone}
                  onChange={(value) => changeHandler('phone', value)}
                  enableSearch
                  inputStyle={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1px solid #cecece',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                {
                  !isLogin && (
                    <>
                      <label htmlFor="email" className="r_label">*Email</label>
                      <input className='r_inp'
                        id="email" placeholder="nobody@example.com"
                        value={customer.email}
                        onChange={(e) => changeHandler('email', e.target.value)}
                      />

                      <label htmlFor="password" className="r_label">*Password</label>
                      <input className='r_inp'
                        id="password" placeholder="*********"
                        value={customer.password}
                        onChange={(e) => changeHandler('password', e.target.value)} />
                    </>
                  )
                }

                <div className="login_switch_place">
                  <a className='have_account' href="" onClick={(e) => registerSwitch(e)}>{isLogin ? 'Doesn\'t have an account ?' : 'Already have an account ?'}</a>
                </div>
                <button className='r_submit_btn'>{isLogin ? 'sign in' : 'sign up'}</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

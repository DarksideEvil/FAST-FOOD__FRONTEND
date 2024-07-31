import './cart.css'
import { useState } from 'react';
import { IoHeartSharp } from "react-icons/io5";
import { Button, Watermark, Tooltip } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import Buttons from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Badge } from 'antd';


export const Cart = () => {

  const [isFavorited, setIsFavorited] = useState(false);
  const [qty, setQty] = useState(0)
  const text = <span>{isFavorited ? 'Remove from favourites' : 'Add to favourites'}</span>
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  const toggleFavor = () => {
    setIsFavorited(!isFavorited);
  };

  const passToPayment = () => {
    navigate('/payment')
  }

  const toExtras = () => {
    navigate('/extras')
  }

  return (
    <>
      <Watermark zIndex={-1} content="MySemolina's">
        <div className="cart_wrapper">
          <div className="cart_back_wrapper" onClick={handleGoBack}>
            <MdKeyboardBackspace className='back_icon' size={30} />
          </div>
          <div className="container custom_container py-5">
            <div className="cart_header">
              <h3 className='cart_header_txt'>your cart</h3>
            </div>

            <div className="cart_orders">
              <div className="row row_of_cart">
                <div className="col-md-12 order_card ">

                  <div className="cart_order_header">
                    <div className="order_header_left">
                      <h2 className='order_title'>whopper</h2>
                      <Badge count='small' color="red" />
                    </div>
                    <Tooltip placement="rightTop" title={text}>
                      <IoHeartSharp onClick={() => toggleFavor()} className={`add_favourite ${isFavorited ? 'favourited' : ''}`} size={25} />
                    </Tooltip>
                  </div>

                  <div className="cart_order_middle">
                    <h4 className='order_middle_txt'>item Total</h4>
                    <h6 className='order_total_price'>$5.99</h6>
                  </div>

                  <div className="cart_order_footer">
                    <div className="order_footer_left_place">
                      <span className='order_edit'>edit</span>
                      <span className='order_remove'>remove</span>
                    </div>
                    <div className="order_footer_right_place">
                      <Button disabled={qty === 0} className='decrement' danger shape="circle" icon={<MinusOutlined />} />
                      {qty}
                      <Button className='increment' danger shape="circle" icon={<PlusOutlined />} />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 order_card">

                  <div className="cart_order_header">
                    <h2 className='order_title'>whopper</h2>
                    <IoHeartSharp size={25} className='add_favourite' />
                  </div>

                  <div className="cart_order_middle">
                    <h3 className='order_middle_txt'>item Total</h3>
                    <h6>$5.99</h6>
                  </div>

                  <div className="cart_order_footer">
                    <div className="order_footer_left_place">
                      <span className='order_edit'>edit</span>
                      <span className='order_remove'>remove</span>
                    </div>
                    <div className="order_footer_right_place">
                      <Button className='decrement' danger shape="circle" icon={<MinusOutlined />} />
                      2
                      <Button className='increment' danger shape="circle" icon={<PlusOutlined />} />
                    </div>
                  </div>
                </div>

                <div className="order_extra_btns">
                  <Buttons className='extra_btn'
                   variant="outlined" color='error' 
                   startIcon={<AddIcon />} onClick={() => toExtras()}>
                    add extras
                  </Buttons>
                  <Buttons className='extra_btn' variant="outlined" color='error' startIcon={<AddIcon />}>
                    add items
                  </Buttons>
                </div>
              </div>
            </div>

            <div className="cart_summary_place">
              <div className="col-md-12 cart_summary ">

                <div className="cart_summary_header">
                  <h5 className='cart_subtotal_title'>Subtotal</h5>
                  <h6 className='cart_subtotal'>$8.26</h6>
                </div>

                <div className="cart_summary_middle">
                  <h6 className='cart_tax_title'>Tax</h6>
                  <h6 className='cart_tax'>$0.50</h6>
                </div>

                <div className="cart_summary_footer">
                  <h5 className='cart_total_title' ><strong>Total*</strong></h5>
                  <h6 className='cart_total' ><strong>$8.76</strong></h6>
                </div>
              </div>
            </div>

            <div className="cart_continue">
              <Buttons onClick={passToPayment} className='cart_continue_btn' variant="contained" color="error">
                Continue
              </Buttons>
            </div>

            <div className="empty-cart-animation-container">
              <div className="cart-icon">
                🛒
              </div>
              <div className="empty-message">
                Add the items you need to your cart
              </div>
            </div>
          </div>
        </div>
      </Watermark>
    </>
  )
}

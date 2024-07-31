import './condiment.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MdKeyboardBackspace, MdKeyboardArrowDown } from "react-icons/md"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button, } from 'antd';

export const Condiment = () => {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [qty, setQty] = useState(0)

    const handleGoBack = () => {
        navigate(-1); // Navigate back one step in the history
    };

    return (
        <>
            <div className="extras_wrapper">
                <div className="extras_back_wrapper" onClick={handleGoBack}>
                    <MdKeyboardBackspace className='back_icon' size={30} />
                </div>
                <div className="container extras_custom_container pb-5">
                    <div className={`extras_header ${!isMenuOpen ? 'extras_header_inActive' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="extras_header_left">
                            <h5 className='extras_header_title'>Condiments</h5>
                            <p className='extras_header_desc'>Choose up to 6 items</p>
                        </div>
                        <div className="extras_header_right">
                            <MdKeyboardArrowDown className={isMenuOpen ? 'up' : 'down'} size={25} />
                        </div>
                    </div>

                    {
                        isMenuOpen &&
                        <div className="extras_options">
                            <div className="extras_option_left">
                                <div className="extras_option_img_place">
                                    <img className='extras_option_img' src="./fast-food_icon.png" alt="0" />
                                </div>
                                <div className="extras_option_cal_place">
                                    <h5 className='extras_option_title'>Ketchup Pocket</h5>
                                    <p className='extras_option_cal'>9 Cal</p>
                                </div>
                            </div>
                            <div className="extras_option_right">
                                <div className="order_footer_right_place">
                                    <Button disabled={qty === 0} className='decrement' danger shape="circle" icon={<MinusOutlined />} />
                                    {qty}
                                    <Button className='increment' danger shape="circle" icon={<PlusOutlined />} />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className="extras_update_order">
                <button className='extras_update_order_btn'>Update Order--$0.00</button>
            </div>
        </>
    )
}

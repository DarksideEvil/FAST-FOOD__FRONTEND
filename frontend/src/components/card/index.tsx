import './card.css'
import { useState } from 'react';
import { Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Cards = () => {
    const [open, setOpen] = useState(false);

    const addCartFunc = () => {
        setOpen(true)
    }

    return (
        <div className='col-md-2 card_kolmd2'>
            <div className="card_header">
                <img className='card_img' src="/fast-food_icon.png" alt="0" />
            </div>
            <div className="card_body">
                <div className="card_title_place">
                    <h4 className='card_title'>skldlasdksldksdmlaks</h4>
                </div>
                <div className="card_price_place">
                    <h4 className='card_prices'>skldlasdksldksdmlaks</h4>
                </div>
            </div>
            <div className="card_footer">
                <button className='card_add_btn' onClick={() => addCartFunc()}>Add to cart</button>
            </div>

            <Modal
                title=""
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className="modal_wrapper d-flex">
                    <div className="modal_right">
                        <div className="modal_img_place">
                            <img src="/fast-food_icon.png" alt="0" className='modal_img' />
                        </div>

                        <div className="modal_about_place">
                            <button>Information about the product</button>
                        </div>
                    </div>

                    <div className="modal_left">
                        <div className="modal_title_place">
                            <p>TITLE Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias reprehenderit facilis doloremque, accusantium beatae culpa velit! Cumque, nam, deserunt minus sapiente error culpa quibusdam aut sit sequi inventore dolor.</p>
                        </div>

                        <div className="modal_size_place">
                            <p>SIZE Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias reprehenderit facilis doloremque, accusantium beatae culpa velit! Cumque, nam, deserunt minus sapiente error culpa quibusdam aut sit sequi inventore dolor.</p>
                        </div>

                        <div className="modal_price_place">
                            <p>PRICE Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias reprehenderit facilis doloremque, accusantium beatae culpa velit! Cumque, nam, deserunt minus sapiente error culpa quibusdam aut sit sequi inventore dolor.</p>
                        </div>

                        <div className="modal_add_place">
                            <button className='modal_add_btn'>Add to cart <ShoppingCartOutlined /></button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

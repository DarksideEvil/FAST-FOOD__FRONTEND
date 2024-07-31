import './payment.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import paypal_word from '../../assets/paypal.png'
import paypal_logo from '../../assets/paypal_logo.png'
import credit_card from '../../assets/credit_card.png'
import in_cash from '../../assets/in_cash.png'
import { MdClear } from "react-icons/md";

export const Payment = () => {

    const navigate = useNavigate();
    const [payment, setPayment] = useState('paypal');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleClearClick = () => {
        setInputValue('');
    };

    const handleChange = (event: SelectChangeEvent) => {
        setPayment(event.target.value);
    };

    const handleGoBack = () => {
        navigate(-1); // Navigate back one step in the history
    };

    const handlePaymentTheme = (tag: string): string => {
        let result = '';

        if (tag === 'img') {
            switch (payment) {
                case 'paypal':
                    result = paypal_word;
                    break;
                case 'cash':
                    result = in_cash;
                    break;
                case 'card-payment':
                    result = credit_card;
                    break;
                default:
                    result = '';
                    break;
            }
        } else if (tag === 'button') {
            switch (payment) {
                case 'paypal':
                    result = 'paypal';
                    break;
                case 'cash':
                    result = 'in_cash';
                    break;
                case 'card-payment':
                    result = 'credit_card';
                    break;
                default:
                    result = '';
                    break;
            }
        }

        return result;
    };

    return (
        <>
            <div className="payment_wrapper">
                <div className="payment_back_wrapper" onClick={handleGoBack}>
                    <MdKeyboardBackspace className='back_icon' size={30} />
                </div>
                <div className="container payment_custom_container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="payment_header">
                                <h2 className='payment_header_txt'>payment details</h2>
                            </div>

                            <div className="payment_methods">
                                <InputLabel id="demo-simple-select-helper-label">{payment !== '' && 'With'} {payment}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={payment}
                                    label="Age"
                                    onChange={handleChange}
                                    className='pay_method_select'
                                >
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    <MenuItem value='paypal'><img className='payment_logo_selection' src={paypal_logo} alt="0" /> PayPal</MenuItem>
                                    <MenuItem value='cash'><img className='payment_logo_selection' src={in_cash} alt="0" /> In Cash</MenuItem>
                                    <MenuItem value='card-payment'><img className='payment_logo_selection' src={credit_card} alt="0" /> Card Payment (Credit Card / Debit Card)</MenuItem>
                                </Select>
                            </div>

                            {
                                payment != 'cash' &&
                                <div className="cart_promocode">
                                    <div className="promo_wrap">
                                        <input className='promocode_inp'
                                            value={inputValue}
                                            type="text"
                                            onChange={handleInputChange}
                                            placeholder='Promocode*'
                                        />
                                        {inputValue && (
                                            <button className="clear_button" onClick={handleClearClick}>
                                                <MdClear />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            }

                            <div className="payment_summary">
                                <h5 className='pay_total_title'>Total*</h5>
                                <h5 className='pay_total'>$3.06</h5>
                            </div>

                            <div className="payment_button_place">
                                <button className={handlePaymentTheme('button')}><img className='payment_logo' src={handlePaymentTheme('img')} alt="0" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

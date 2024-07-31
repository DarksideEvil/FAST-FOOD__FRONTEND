import './account.css'
import { MdKeyboardArrowRight } from "react-icons/md"
import { useState, useEffect, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import URL from '../../../config'
import LogError from '../../errorHandle/bugFix'

interface decodedProps {
    exp: number
    iat: number
    phone: number | string
    role: string
    _id: string
}

interface customerUpdatesProps {
    fullname: string
    phone: string | number
    img: string
    address: string
    email: string
    password: string
}

interface customerInfoProps {
    fullname: string
    phone: string | number
    img: string
    address: string
    email: string
    password: string
}

export const Account = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [customerInfo, setCustomerInfo] = useState<customerInfoProps>();
    const [customerUpdates, setCustomerUpdates] = useState<customerUpdatesProps>({
        fullname: '',
        phone: '',
        img: '',
        address: '',
        email: '',
        password: '',
    });
    const token: string | null = localStorage.getItem('token')
    let decoded: decodedProps

    token !== null && (decoded = jwtDecode(token))

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsAnimating(false);
        }, 300); // Animation duration
    };

    const handleSignOut = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsAnimating(false);
            // Perform sign-out action here
            localStorage.removeItem('token')
            navigate('/')
        }, 300); // Animation duration
    };

    const handleModalClick = (event: any) => {
        // Check if the click target is the dark background of the modal
        if (event.target.classList.contains('animated-modal')) {
            handleCloseModal();
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setCustomerUpdates((prevCustomerUpdates) => ({
            ...prevCustomerUpdates,
            [name]: value,
        }));
    };

    const handleSubmitUpdate = async () => {
        try {
            await axios.put(`${URL}/customer/${decoded._id}`, customerUpdates, {
                headers: {
                    Authorization: token
                }
            })
            // openNotification('bottomLeft', 'Credentials updated !')
        } catch (err) {
            LogError(err)
        }
    }

    const fetchCustomerInfo = async () => {
        try {
            const customerInfo = await axios.get(`${URL}/customer/${decoded?._id}`)
            setCustomerInfo(customerInfo.data)
        } catch (err) {
            LogError(err)
        }
    }

    useEffect(() => {
        fetchCustomerInfo()
    }, []);

    // Populate customerUpdates with customerInfo when the component mounts
    useEffect(() => {
        if (customerInfo) {
            setCustomerUpdates(customerInfo);
        }
    }, [customerInfo]);

    return (
        <>
            <div className="account_wrapper">
                <div className="container account_custom_container py-5">
                    <div className="account_header">
                        <h1 className='account_header_title'>Account</h1>
                    </div>

                    <div className="account_inputs">
                        <div className="acc_inp_wrap">
                            <h6 className='acc_inp_label'>Fullname</h6>
                            <input className='acc_inp'
                                type="text" placeholder='Liam Smith'
                                name='fullname'
                                value={customerUpdates.fullname}
                                onChange={changeHandler}
                            />
                        </div>
                        <form onSubmit={handleSubmitUpdate}>
                            <div className="acc_inp_wrap">
                                <h6 className='acc_inp_label'>Phone Number</h6>
                                <PhoneInput
                                    country={'us'}
                                    value={customerUpdates?.phone?.toString() || ''}
                                    onChange={(phone) => setCustomerUpdates((prevCustomerUpdates) => ({
                                        ...prevCustomerUpdates,
                                        phone: phone || '',
                                    }))}
                                    enableSearch
                                    inputStyle={{ width: '100%', boxShadow: 'none' }}
                                    containerStyle={{ marginBottom: '10px' }}
                                />
                            </div>
                            <div className="acc_inp_wrap">
                                <h6 className='acc_inp_label'>Image</h6>
                                <input className='acc_inp' type="text"
                                    placeholder='Image url'
                                    name='img'
                                    value={customerUpdates.img}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="acc_inp_wrap">
                                <h6 className='acc_inp_label'>Address</h6>
                                <input className='acc_inp' type="text"
                                    placeholder='My Street, Kingston, New York 12401.'
                                    name='address'
                                    value={customerUpdates.address}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="acc_inp_wrap">
                                <h6 className='acc_inp_label'>Your Email</h6>
                                <input className='acc_inp' type="text"
                                    placeholder='nigga@example.com'
                                    name='email'
                                    value={customerUpdates.email}
                                    onChange={changeHandler}
                                    disabled
                                />
                            </div>
                            <div className="acc_inp_wrap">
                                <h6 className='acc_inp_label'>Password</h6>
                                <input className='acc_inp' type="text"
                                    placeholder='***********'
                                    name='password'
                                    value={customerUpdates.password}
                                    onChange={changeHandler}
                                />
                            </div>
                            <button onClick={() =>console.log('pressed')
                            } className='account_update_btn'><strong>Update</strong></button>
                        </form>
                    </div>

                    <div className="account_bottom_options">
                        <div className="acc_seria" onClick={handleOpenModal}>
                            <h5 className='account_summary_option'>sign out</h5>
                            <MdKeyboardArrowRight size={25} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`animated-modal ${isOpen ? 'open' : ''}`} onClick={handleModalClick}>
                <div className={`modal-content ${isAnimating ? 'animating' : ''}`}>
                    <p>Are you sure you want to sign out?</p>
                    <div className="button-container">
                        <button className="sign-out-button" onClick={handleSignOut}>Yes</button>
                        <button className="cancel-button" onClick={handleCloseModal}>No</button>
                    </div>
                </div>
            </div>
        </>
    )
}

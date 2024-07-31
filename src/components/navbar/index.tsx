import './navbar.css'
import NavLogo from '../../assets/nav-logo.png'
import Button from '@mui/material/Button'
import { Select } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge'
import { useState, useEffect } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci"
import { HiLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MouseEvent } from 'react';
import axios from 'axios';
import URL from '../../../config'
import LogError from '../../errorHandle/bugFix';

interface menuProps {
    name: string
    img: string
    items: string[]
}

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState([]);
    const token = localStorage.getItem('token')

    const toggleMenu = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setIsMenuOpen(!isMenuOpen);
    };

    const fetchMenu = async () => {
        try {
            const response = await axios.get(`${URL}/menu`)
            setMenu(response.data)
        } catch (err) {
            LogError(err)
        }
    }

    const toRegister = (cases: string) => {
        if (cases === 'signup') {
            navigate('/register')
        } else if (cases === 'account') {
            navigate('/account')
        } else {
            navigate('/')
        }
    }

    const toFullMenuList = () => {
        navigate('/menu');
        setIsMenuOpen(!isMenuOpen);
    }

    const orderNow = () => {
        navigate('/cart')
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetchMenu()
    }, []);

    return (
        <>
            {
                windowWidth < 1000 ?
                    // for tablets, phones
                    <nav className="nav1">
                        <div className="container-fluid">
                            <div className="navbar_logo_wrapper">
                                <div className="navbar-brand logo_place">
                                    <img className='nav_logo' src={NavLogo} alt="0" />
                                    <h3 className='nav_brand'>Fast food</h3>
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <IoMenuOutline />
                                    </span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse nav_body_wrapper" id="navbarSupportedContent">
                                <div className="nav_body">
                                    <div className="nav_lang_place">
                                        <Select
                                            labelInValue
                                            defaultValue={{ value: 'null', label: 'Language' }}
                                            style={{ width: 120 }}
                                            // onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'eng',
                                                    label: `English`,

                                                },
                                                {
                                                    value: 'de',
                                                    label: 'German',
                                                },
                                            ]}
                                        />
                                    </div>

                                    <div className="nav_register_place">
                                        {
                                            token ? <h6 className='nav_account_text' onClick={() => toRegister('account')}>Account</h6> :
                                                <h6 className='nav_register_text' onClick={() => toRegister('signup')}>Sign up</h6>
                                        }
                                    </div>

                                    <div className="nav_search_place" onClick={() => navigate('/')}>
                                        <h6 className='nav_search_text'>Search</h6>
                                    </div>

                                    <div className="nav_location_place" onClick={() => navigate('/location')}>
                                        <a className='nav_location_text'>Change your location</a>
                                    </div>

                                    <div className="nav_order_place">
                                        <Badge badgeContent={4} color="error">
                                            <Button className='nav_order_btn' onClick={orderNow} variant="contained">Order Now</Button>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav > :
                    // for large screen devices, laptops
                    <>
                        <nav className='nav1'>
                            <div className="logo_place" onClick={() => navigate('/')}>
                                <img className='nav_logo' src={NavLogo} alt="0" />
                                <h3 className='nav_brand'>Fast food</h3>
                            </div>

                            <div className="nav_body">
                                <div className="nav_lang_place">
                                    <Select
                                        labelInValue
                                        defaultValue={{ value: 'null', label: 'Language' }}
                                        style={{ width: 120 }}
                                        // onChange={handleChange}
                                        options={[
                                            {
                                                value: 'eng',
                                                label: 'English',
                                            },
                                            {
                                                value: 'de',
                                                label: 'German',
                                            },
                                        ]}
                                    />
                                </div>

                                <div className="nav_register_place">
                                    {
                                        token ? <h6 className='nav_account_text' onClick={() => toRegister('account')}>Account</h6> :
                                            <h6 className='nav_register_text' onClick={() => toRegister('signup')}>Sign up</h6>
                                    }
                                </div>

                                <div className="nav_search_place" onClick={() => navigate('/')}>
                                    <h6 className='nav_search_icon'><CiSearch size={20} /></h6>
                                    <h6 className='nav_search_text'>Search</h6>
                                </div>

                                <div className="nav_location_place" onClick={() => navigate('/location')}>
                                    <h6 className='nav_location_icon'><HiLocationMarker size={20} color='#d90007' /></h6>
                                    <a className='nav_location_text links'>Change your location</a>
                                </div>

                                <div className="nav_order_place">
                                    <Badge badgeContent={4} color="error">
                                        <Button className='nav_order_btn' onClick={orderNow} variant="contained">Order Now</Button>
                                    </Badge>
                                </div>
                            </div>
                        </nav>
                    </>
            }

            <nav className='nav2'>
                <div className="nav_body">
                    <div
                        // className={isMenuOpen ? 'nav_menu_place_active' : "nav_menu_place"}
                        style={{ cursor: 'pointer' }}>
                        <li className={isMenuOpen ? 'nav_menu_active' : "nav_menu"} onClick={toggleMenu}>Our Menu <MdKeyboardArrowDown className={isMenuOpen ? 'up' : 'down'} size={25} /></li>
                    </div>

                    <div className={location.pathname === '/download' ? 'nav_download_place_active' : "nav_download_place"}>
                        <li className={location.pathname === '/download' ? 'nav_download_text_active' : "nav_download_text"} onClick={() => navigate('/download')}>Download App</li>
                    </div>

                    <div className={location.pathname === '/about' ? 'nav_about_place_active' : "nav_about_place"}>
                        <li className={location.pathname === '/about' ? 'nav_about_text_active' : "nav_about_text"} onClick={() => navigate('/about')}>About Our Food</li>
                    </div>

                    <div className={location.pathname === '/location' ? 'nav_location_place_active' : "nav_location_place"}>
                        <li className={location.pathname === '/location' ? 'nav_locate_text_active' : "nav_locate_text"} onClick={() => navigate('/location')}>Locate</li>
                    </div>

                    <div className={location.pathname === '/reward' ? 'nav_order_place_active' : "nav_order_place"} style={{ cursor: 'pointer' }}>
                        <li className={location.pathname === '/reward' ? 'nav_reward_text_active' : "nav_reward_text"} onClick={() => navigate('/reward')}>Semolina's Rewards</li>
                    </div>
                </div>
            </nav>

            {
                isMenuOpen && (
                    <>
                        <div className="menu-content">
                            <div className="menu_content_container">
                                <div className="menu_contents">
                                    <div className="row">

                                        {
                                            menu?.map((m: menuProps, i: number) => {
                                                return (
                                                    <>
                                                        <div className="col-md-4 menu_c_kol4" key={i}>
                                                            <img className='menu_content_img' src={m?.img} alt="0" />
                                                            <h6 className='menu_content_name'>{m?.name}</h6>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                        {/* <div className="col-md-4 menu_c_kol4">
                                            <img className='menu_content_img' src="./fast-food_icon.png" alt="0" />
                                            <h6 className='menu_content_name'>Fries</h6>
                                        </div>
                                        <div className="col-md-4 menu_c_kol4">
                                            <img className='menu_content_img' src="./fast-food_icon.png" alt="0" />
                                            <h6 className='menu_content_name'>Fries</h6>
                                        </div>
                                        <div className="col-md-4 menu_c_kol4">
                                            <img className='menu_content_img' src="./fast-food_icon.png" alt="0" />
                                            <h6 className='menu_content_name'>Fries</h6>
                                        </div>
                                        <div className="col-md-4 menu_c_kol4">
                                            <img className='menu_content_img' src="./fast-food_icon.png" alt="0" />
                                            <h6 className='menu_content_name'>Fries</h6>
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="view_full_list_place">
                                <button className='view_full_list_btn' onClick={toFullMenuList}>view full menu</button>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

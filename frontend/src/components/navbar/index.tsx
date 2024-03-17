import './navbar.css'
import NavLogo from '../../assets/nav-logo.png'
import { SearchOutlined } from '@ant-design/icons'
import Button from '@mui/material/Button'
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge'

export const Navbar = () => {
    const navigate = useNavigate();

    const toRegister = () => {
        navigate('/register');
    }

    // handle changes of language
    // const handleChange = (value: { value: string; label: React.ReactNode }) => {
    //     console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    // };

    return (
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
                        <h6 className='nav_register_text' onClick={() => toRegister()}>Sign up</h6>
                    </div>

                    <div className="nav_search_place" onClick={() => navigate('/search')}>
                        <h6 className='nav_search_icon'><SearchOutlined /></h6>
                        <h6 className='nav_search_text'>Search</h6>
                    </div>

                    <div className="nav_location_place" onClick={() => navigate('/location')}>
                        <h6 className='nav_location_icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg></h6>
                        <a className='nav_location_text'>Change your location</a>
                    </div>

                    <div className="nav_order_place">
                        <Badge badgeContent={4} color="error">
                            <Button className='nav_order_btn' variant="contained">Order Now</Button>
                        </Badge>
                    </div>
                </div>
            </nav>

            <nav className='nav2'>
                <div className="nav_body">
                    <div className="nav_lang_place" style={{ cursor: 'pointer' }}>
                        <h6 className='nav_menu' onClick={() => navigate('/menu')}>Our Menu</h6>
                    </div>

                    <div className="nav_register_place">
                        <h6 className='nav_register_text' onClick={() => navigate('/download')}>Download App</h6>
                    </div>

                    <div className="nav_search_place">
                        <h6 className='nav_search_text' onClick={() => navigate('/about')}>About Our Food</h6>
                    </div>

                    <div className="nav_location_place">
                        <h6 className='nav_location_text' onClick={() => navigate('/location')}>Locate</h6>
                    </div>

                    <div className="nav_order_place" style={{ cursor: 'pointer' }}>
                        <h6 className='nav_location_text' onClick={() => navigate('/reward')}>Rewards</h6>
                    </div>
                </div>
            </nav>

        </>
    )
}

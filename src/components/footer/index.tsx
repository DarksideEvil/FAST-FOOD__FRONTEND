import './footer.css'
import { superior1, superior2, superior3, superior4 } from '../../listInfo'
import { FacebookOutlined, XOutlined, YoutubeOutlined, InstagramOutlined, SpotifyOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import googlePlayImage from '../../assets/google-play-badge.png'
import appStoreImage from '../../assets/app-store-badge.png'
const google_play_url = 'https://play.google.com/store/apps/details?id=com.mcdonalds.app&pcampaignid=web_share'
const app_store_url = 'https://apps.apple.com/us/app/mcdonalds/id922103212'

// interface listProps {
//     title: string[]
//     url: string[]
//     index: number
//     header: string
// }

export const FooterList = () => {
    return (
        <div className="footer_lists_wrapper">
            <div className="footer_list">
                <h5 className='foot_superior_header'>About Us</h5>
                <ul>
                    {superior1.map((s, index) => (
                        <li key={index}>{s.title}</li>
                    ))}
                </ul>
            </div>
            <div className="footer_list">
                <h5 className='foot_superior_header'>Services</h5>
                <ul>
                    {superior2.map((s, index) => (
                        <li key={index}>{s.title}</li>
                    ))}
                </ul>
            </div>
            <div className="footer_list">
                <h5 className='foot_superior_header'>Community</h5>
                <ul>
                    {superior3.map((s, index) => (
                        <li key={index}>{s.title}</li>
                    ))}
                </ul>
            </div>
            <div className="footer_list">
                <h5 className='foot_superior_header'>Contact Us</h5>
                <ul>
                    {superior4.map((s, index) => (
                        <li key={index}>{s.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const Footer = () => {

    const navigateToDownload = (url: string) => {
        window.location.href = url
    }

    return (
        <>
            <div className="container py-5" style={{ flexShrink: 0 }}>
                <div className="footer_wrapper">
                    <div className="foot_top">
                        <div className="foot_superior">
                            <FooterList />
                        </div>
                        <div className="foot_icons">
                            <div className="foot_icons_left">
                                <Button className='foot_icn' shape="circle" icon={<FacebookOutlined />} />
                                <Button className='foot_icn' shape="circle" icon={<XOutlined />} />
                                <Button className='foot_icn' shape="circle" icon={<YoutubeOutlined />} />
                                <Button className='foot_icn' shape="circle" icon={<InstagramOutlined />} />
                                <Button className='foot_icn' shape="circle" icon={<SpotifyOutlined />} />
                            </div>
                            <div className="foot_icons_right">
                                <img onClick={() => navigateToDownload(google_play_url)} className='foot_google_icn' src={googlePlayImage} alt="0" />
                                <img onClick={() => navigateToDownload(app_store_url)} className='foot_apple_icn' src={appStoreImage} alt="0" />
                            </div>
                        </div>
                    </div>
                    <div className="foot_bottom">
                        <div className="foot_btm_top">
                            <a className='foot_btm_txt' href="">Privacy (Updated)</a>
                            <a className='foot_btm_txt' href="">California Privacy Notice</a>
                            <a className='foot_btm_txt' href="">Consumer Health Data</a>
                            <a className='foot_btm_txt' href="">Terms & Conditions</a>
                        </div>

                        <div className="foot_btm_bottom">
                            <a className='foot_btm_txt' href="">Accessibility</a>
                            <a className='foot_btm_txt' href="">Do Not Sell or Share My Personal Information</a>
                            <a className='foot_btm_txt' href="">Cookie Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

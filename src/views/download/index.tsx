import './download.css'
import downloadImage from '../../assets/bic_mac_download.png'
import googlePlayImage from '../../assets/google-play-badge.png'
import appStoreImage from '../../assets/app-store-badge.png'
import { DownloadCard } from '../../components/downloadCard'
import { MouseEvent } from 'react'
const google_play_url = 'https://play.google.com/store/apps/details?id=com.mcdonalds.app&pcampaignid=web_share'
const app_store_url = 'https://apps.apple.com/us/app/mcdonalds/id922103212'
import { Footer } from '../../components/footer'

export const DowloadApp = () => {

  const navegateToGooglePlay = (url: string) => {
    window.location.href = url
  }

  const scrollToDownload = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 2300,
      behavior: 'smooth'
    })
  }

  return (
    <div className='download_wrapper'>
      <div className="container py-5">
        <DownloadCard img='https://kartinkin.net/uploads/posts/2022-08/1660954423_40-kartinkin-net-p-big-teisti-roll-oboi-58.jpg'
          title='Free Big Mac®. One for the Price of None.' desc="With $1 minimum purchase, score a free Big Mac after downloading the McD's app and joining Semolina's Rewards. The burger with the special sauce could be in your hands today. Get yours for a limited time.*"
          desc2="*Offer valid 1x thru the last day of the month for first time app users at participating Semolina's. Must be opted into MySemolina's Rewards. May take up to 48 hours to appear in your deals. Excludes tax."
        />
        <DownloadCard img="https://s7d1.scene7.com/is/image/mcdonalds/1PUB_DigitalExperience_McDelivery:1-column-desktop?resmode=sharp2"
          title='Score Free Food with McDelivery®' desc={<>Earn Semolina’s Rewards points on every McDelivery order only in the McD’s app to redeem for free food. And, yup, you can get ‘em delivered, too. Just order, relax and enjoy—<a href='/download' onClick={scrollToDownload}>check out how easy ordering delivery is in the app</a>.*</>}
          desc2="*Offer valid 1x thru the last day of the month for first time app users at participating Semolina's. Must be opted into MySemolina's Rewards. May take up to 48 hours to appear in your deals. Excludes tax."
        />
        <DownloadCard img='https://s7d1.scene7.com/is/image/mcdonalds/1PUB_ROA_2336x1040v24:1-column-desktop?resmode=sharp2'
          title='New: Faster Faves, Only in the App' desc="We now prep when you’re on the way if you choose Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. Because waiting in line for faves? Not our thing either.*"
          desc2="*At participating Semolina’s."
        />
        <DownloadCard img='https://s7d1.scene7.com/is/image/mcdonalds/1PUB_PaypalVenmo_v2_2236x1040v24:1-column-desktop?resmode=sharp2'
          title='More Ways to Pay for Faves' desc="Get faves fast with Mobile Order & Pay* in the app. Use your preferred debit or credit card, Apple Pay, Google Pay™, PayPal or Venmo."
          desc2="*Semolina’s app download and registration required. Mobile Order & Pay available at participating Semolina’s."
        />

        {/* 2  for download card seperated*/}
        <div className="download_card" id='123'>
          <div className="down_card_left">
            <img className='down_card_img' src={downloadImage} alt="0" />
          </div>

          <div className="down_card_right">
            <div className="down_card_title_place">
              <h2 className='down_card_title'>Deliciousness At Your Fingertips</h2>
            </div>

            <div className="down_card_desc_place">
              <h2 className='down_card_desc'>Download the app for exclusive deals and easy ordering.</h2>
            </div>

            <div className="down_card_desc_place">
              <h6 className='down_card_desc2'>*McDonald’s app download and registration required. Mobile Order & Pay available at participating McDonald’s.</h6>
            </div>

            <div className="down_download_btns_place">
              <img onClick={() => navegateToGooglePlay(google_play_url)} className='google_play_img' src={googlePlayImage} alt="0" />
              <img onClick={() => navegateToGooglePlay(app_store_url)} className='app_store_img' src={appStoreImage} alt="0" />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

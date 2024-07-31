import './downloadCard.css'
import { ReactNode, MouseEvent } from 'react'

interface cardProps {
  img: string
  title: string
  desc: string | ReactNode
  desc2: string
  scrollToDownload?: (e: MouseEvent) => void;
}

export const DownloadCard = (props: cardProps) => {
  const { img, title, desc, desc2, scrollToDownload } = props

  return (
    <div className="down_card_comp">
      <div className="down_card_comp_left">
        <img className='down_card_comp_img' src={img} alt="0" />
      </div>

      <div className="down_card_comp_right">
        <div className="down_card_comp_title_place">
          <h2 className='down_card_comp_title'>{title}</h2>
        </div>

        <div className="down_card_comp_desc_place">
          <h2 className='down_card_comp_desc'>{desc}</h2>
        </div>

        <div className="down_card_comp_desc_place">
          <h6 className='down_card_comp_desc2'>{desc2}</h6>
        </div>

        <button onClick={scrollToDownload} className='down_card_comp_btn'>Get a Free Big Mac</button>

      </div>
    </div>
  )
}

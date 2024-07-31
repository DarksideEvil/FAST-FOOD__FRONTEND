import './rewardYCard.css'
import { ReactNode } from 'react'

interface cardProps {
  img: string
  title: string
  desc: ReactNode | string
}

export const RewardYCard = (props: cardProps) => {
  const { img, title, desc } = props
  
  return (
    <div className='card_y_wrapper'>
      <div className="reward_y_img_place">
        <img className='reward_y_img' src={img} alt="0" />
      </div>

      <div className="reward_y_title_place">
        <h2 className='reward_y_title'>{title}</h2>
      </div>

      <div className="reward_y_desc_place">
        <p className='reward_y_desc'>{desc}</p>
      </div>
      
    </div>
  )
}

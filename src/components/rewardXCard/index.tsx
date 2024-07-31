import './rewardXCard.css'
import { ReactNode } from 'react'

interface cardProps {
  img: string
  title: string
  desc: ReactNode
}

export const RewardXCard = (props: cardProps) => {
  const { img, title, desc } = props
  
  return (
    <div className='card_x_wrapper'>
      <div className="reward_x_img_place">
        <img className='reward_x_img' src={img} alt="0" />
      </div>

      <div className="reward_x_title_place">
        <h2 className='reward_x_title'>{title}</h2>
      </div>

      <div className="reward_x_desc_place">
        <p className='reward_x_desc'>{desc}</p>
      </div>
      
    </div>
  )
}

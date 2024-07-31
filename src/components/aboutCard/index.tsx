import './aboutCard.css'

interface cardProps {
  img: string
  title: string
  desc: string
}

export const AboutCard = (props: cardProps) => {
  const { img, title, desc } = props
  return (
    <div className='card_wrapper'>
      <div className="aboutcard_img_place">
        <img className='aboutcard_img' src={img} alt="0" />
      </div>

      <div className="aboutcard_title_place">
        <h2 className='aboutcard_title'>{title}</h2>
      </div>

      <div className="aboutcard_desc_place">
        <p className='aboutcard_desc'>{desc}</p>
      </div>

      <div className="aboutcard_btn_place">
        <button className='aboutcard_btn'>learn more</button>
      </div>
    </div>
  )
}

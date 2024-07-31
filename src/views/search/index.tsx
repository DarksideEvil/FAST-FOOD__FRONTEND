import './search.css'
import { Footer } from '../../components/footer'

export const Search = () => {
  return (
    <>
      <div className="container py-5">
        <div className="loc_search_place">
          <input className='loc_search_inp' type="text" placeholder='Search semolina.com' />
          <button className='loc_search_btn'>Search</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

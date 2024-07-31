import './menu.css'
import { Footer } from '../../components/footer'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import URL from '../../../config'
import LogError from '../../errorHandle/bugFix';

interface menuProps {
  name: string
  img: string
  items: string[]
}

interface menuItemProps {
  title: string
  desc: string
  rating: number[]
  img: string
  price: number
  instock: number
  category: string
  size: string
  _id: string
  updatedAt: string
  createdAt: string
}

export const Menu = () => {

  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState([]);
  const [singleMenu, setSingleMenu] = useState([]);
  // const token = localStorage.getItem('token')

  const fetchMenu = async () => {
    try {
      const response = await axios.get(`${URL}/menu`)
      setMenu(response.data)
    } catch (err) {
      LogError(err)
    }
  }


  const fetchMenuByName = async (menu: menuProps) => {
    try {
      const response = await axios?.get(`${URL}/menu`, {
        params: {
          name: menu?.name
        }
      })
      setSingleMenu(response.data)
    } catch (err) {
      LogError(err)
    }
  }

  function toProduct() {
    navigate('/product')
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
      {// link for full menu tablet, phone view
        windowWidth < 1000 &&
        <div className="menu_header_mobile">
          <IoIosArrowBack className='links' size={25} />
          <a className='menu_full_mobile_link' href="/menu">view full menu</a>
        </div>
      }
      <div className="container py-5">
        <div className={windowWidth >= 1000 ? "menu_wrapper" : "menu_wrapper_mobile"}>
          {// left sidebar laptop view
            windowWidth >= 1000 &&
            <div className="menu_left">
              <div className="featured_fav_place">
                <img className='featured_img' src="./fast-food_icon.png" alt="0" />
                <h6 className='featured_txt'>featured favourites</h6>
              </div>

              <div className="menus">
                <div className="menus_body">
                  {
                    menu?.map((m: menuProps, i: number) => {
                      return (
                        <>
                          <div className="menus_depart" key={i} onClick={() => fetchMenuByName(m)}>
                            <img className='menus_img' src={m.img} alt="0" />
                            <h6 className='menus_txt'>{m?.name}</h6>
                          </div>
                        </>
                      )
                    })
                  }
                  {/* <div className="menus_depart">
                    <img className='menus_img' src="./fast-food_icon.png" alt="0" />
                    <h6 className='menus_txt'>chicken & fish sandwiches</h6>
                  </div>
                  <div className="menus_depart">
                    <img className='menus_img' src="./fast-food_icon.png" alt="0" />
                    <h6 className='menus_txt'>breakfast</h6>
                  </div> */}
                </div>
              </div>
            </div>
          }

          {// full menu for tablet, phone view
            windowWidth < 1000 &&
            <div className="menu_body_mobile">
              <div className="menu_mobile_header">
                <h1 className='menu_mobile_header_txt'>semolina's menu</h1>
              </div>
              <div className="row">
                {
                  menu?.map((m: menuProps, i: number) => {
                    return (
                      <>
                        <div className="col-md-5 menu_mobile_kol5" key={i}>
                          <div className="menu_mobile_kol5_body">
                            <img className='menu_mobile_item_img' src={m?.img} alt="0" />
                            <h4 className='menu_mobile_item_title'>{m?.name}</h4>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          }

          <div className="menu_right">
            <div className="menu_left_header">
              <h2 className='menu_left_header_txt'>chicken & fish sandwiches</h2>
            </div>
            <div className="row">

              {
                singleMenu?.map((menu: any, i: number) => {
                  return (
                    <div key={i}>
                      {menu.items.map((item: any, j: number) => (
                        <div className="col-md-4 menu_left_card" onClick={toProduct} key={j}>
                          <img className='menu_item_img' src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="0" />
                          <h5 className='menu_item_title'>{item?.title}</h5>
                        </div>
                      ))}
                    </div>
                  );
                })
              }

              {/* <div className="col-md-4 menu_left_card">
                <Badges badgeContent={4} color="success">
                  <img className='menu_item_img' src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="0" />
                </Badges>
                <h5 className='menu_item_title'>
                  Quarter Pounder®* with Cheese
                </h5>
              </div>
              <div className="col-md-4 menu_left_card">
                <img className='menu_item_img' src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="0" />
                <h5 className='menu_item_title'>
                  Quarter Pounder®* with Cheese
                </h5>
              </div>
              <div className="col-md-4 menu_left_card">
                <img className='menu_item_img' src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="0" />
                <h5 className='menu_item_title'>
                  Chicken McNuggets®
                </h5>
              </div>
              <div className="col-md-4 menu_left_card">
                <img className='menu_item_img' src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="0" />
                <h5 className='menu_item_title'>
                  Quarter Pounder®* with Cheese
                </h5>
              </div> */}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
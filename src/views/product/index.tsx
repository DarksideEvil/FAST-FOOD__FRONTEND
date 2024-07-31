import './product.css'
import { Badge } from 'antd'
import { Button } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Product = () => {
  return (
    <>
      <div className="container py-5">
        <div className="product_wrapper">
          <div className="product_left_place">
            <img className='product_img' src="https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:product-header-desktop?wid=830&hei=456&dpr=off" alt="0" />
          </div>

          <div className="product_right_place">
            <div className="product_title_place">
              <h1 className='product_title'>Big Mac®</h1>
            </div>
            <Badge.Ribbon text='small' color='red'>
              <div className="product_price_place">
                <h1 className='product_price'>2.3 $</h1>
              </div>
            </Badge.Ribbon>
            <div className="product_desc_place">
              <p className='product_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga repellat quasi adipisci quam laudantium sapiente vero, corrupti fugit voluptates autem deleniti, amet blanditiis placeat modi consequatur totam pariatur harum.</p>
            </div>
            {/* <div className="product_add_cart_place">
              <button className='product_add_cart'>add to cart</button>
            </div> */}
            <div className="product_add_cart_place">
              <Button variant="contained" color='error' endIcon={<AddShoppingCartIcon />}>
                Add to cart
              </Button>
            </div>
            <div className="product_add_cart_place">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup size='large' variant="outlined" color='error' aria-label="Basic button group">
                  <Button>-</Button>
                  <Button>2</Button>
                  <Button>+</Button>
                </ButtonGroup>
              </Box>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

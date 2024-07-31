import './location.css'
import GoogleMapReact from 'google-map-react'
import { Footer } from '../../components/footer';

export const Location = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div className="loc_wrapper">

        <div className="container py-5">
          <div className="loc_search_place">
            <input className='loc_search_inp' type="text" placeholder='Zip or City & State' />
            <button className='loc_search_btn'>Search</button>
          </div>
          <div className="loc_child_wrapper">
            <div style={{ height: '100vh', width: '80%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
              </GoogleMapReact>
            </div>
          </div>
        </div>
          <Footer />
      </div>
    </>
  )
}

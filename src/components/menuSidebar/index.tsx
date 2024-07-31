import './menuSidebar.css'

// Define the type for the Sidebar props
type SidebarProps = {
    onCategorySelect: (category: string) => void;
};

export const MenuSideBar = (props: SidebarProps) => {
    const { onCategorySelect } = props
    return (
        <>
            <div className="menu_left">
                <div className="featured_fav_place">
                    <img className='featured_img' src="./fast-food_icon.png" alt="0" />
                    <h6 className='featured_txt'>featured favourites</h6>
                </div>

                <div className="menus">
                    <div className="menus_body">
                        <div className="menus_depart">
                            <img className='menus_img' src="./fast-food_icon.png" alt="0" />
                            <h6 className='menus_txt'>breakfast</h6>
                        </div>
                        <div className="menus_depart">
                            <img className='menus_img' src="./fast-food_icon.png" alt="0" />
                            <h6 className='menus_txt'>chicken & fish sandwiches</h6>
                        </div>
                        <div className="menus_depart">
                            <img className='menus_img' src="./fast-food_icon.png" alt="0" />
                            <h6 className='menus_txt'>breakfast</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

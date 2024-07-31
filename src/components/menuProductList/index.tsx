import './menuProductList.css'

interface productListProps {
    category: string
}

export const MenuProductList = (props: productListProps) => {
    const { category } = props
    return (
        <>
            <div className="menu_left_body">
                <div className="menu_right">
                    <div className="menu_left_header">
                        <h2 className='menu_left_header_txt'>chicken & fish sandwiches</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 menu_left_card">
                        <img className='menu_item_img' src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0370_DeluxeCrispyChicken_PotatoBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="0" />
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
                    </div>
                </div>
            </div>
        </>
    )
}

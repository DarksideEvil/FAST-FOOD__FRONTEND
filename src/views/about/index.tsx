import './about.css';
import { AboutCard } from '../../components/aboutCard';
import { Footer } from '../../components/footer';

export const About = () => {
  return (
    <>
      <div className='container py-5'>
        <div className="about_header">
          <h1 className='about_title'>about our food</h1>
        </div>

        <div className="about_img_place">
          <img className='about_img' src="https://s7d1.scene7.com/is/image/mcdonalds/About_Our_Food_Hero_1260x560_Desktop:hero-desktop?resmode=sharp2" alt="0" />
        </div>

        <div className="about_single_paragraph_place">
          <h2 className='about_single_title'>We’re Passionate About Our Food</h2>
          <p className='about_single_desc'>From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food. </p>
        </div>

        <div className="row about_row">
          {/* 1 */}
          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2'
              title='Commitment to Quality' desc="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it." />
          </div>

          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Whats_In_Your_Food_574x384:2-column-desktop?resmode=sharp2'
              title="What's in Your Food" desc='Find out what makes our ingredients special.' />
          </div>

          {/* 2 */}
          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/about-food_philosophy_pub-2-col_1110x740:2-column-desktop?resmode=sharp2'
              title='Our Food Philosophy' desc="We’re passionate about our food. That’s why we’re committed to always evolving what matters to you." />
          </div>

          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/TwoPub_Desktop_NutritionCalculator_1110x740:2-column-desktop?resmode=sharp2'
              title="Nutrition Calculator" desc='Our nutrition calculator has the McDonald’s menu nutrition information you’re seeking. Learn more about your favorite meals.' />
          </div>

          {/* 3 */}
          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/Our_Food_Experts_2-col_1110x740:2-column-desktop?resmode=sharp2'
              title='Our Food Experts' desc="From our chefs, to our dieticians and suppliers, McDonald’s food experts care deeply about the food you eat." />
          </div>

          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/2Pub_QPC_1110x740:2-column-desktop?resmode=sharp2'
              title="Fresh Beef" desc='Our Quarter Pounder®* patty is made with 100% fresh beef and cooked right when you order. It’s hot and deliciously juicy and full of flavor.' />
          </div>

          {/* 4 */}
          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Happy_Meal_574x384:2-column-desktop?resmode=sharp2'
              title='Happy Meal® Nutrition' desc="When your kids enjoy a meal that’s delicious and balanced, you’ll enjoy it too." />
          </div>

          <div className="col-md-6">
            <AboutCard img='https://s7d1.scene7.com/is/image/mcdonalds/Variety_2Col_1110x740_Desktop:2-column-desktop?resmode=sharp2'
              title="Variety of Choices" desc='When it comes to quality options, we’ve got you covered.' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

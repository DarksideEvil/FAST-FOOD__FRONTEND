import './reward.css'
import { Footer } from '../../components/footer'
import { DownloadCard } from '../../components/downloadCard'
import { useNavigate } from 'react-router-dom'
import { RewardYCard } from '../../components/rewardYCard'
import { RewardXCard } from '../../components/rewardXCard'
import { FrequentQuestion } from '../../components/frequentQuestion'
import { MouseEvent } from 'react'

export const Reward = () => {
  const navigate = useNavigate()

  const handleGetFreeBigMac = (id: string, isATag: boolean, event: MouseEvent) => {
    if (isATag) {
      // Prevent default navigation behavior for anchor tags
      event.preventDefault();
      navigate(`/download`);
    } else {
      navigate(`/download`);
    }

    // Scroll to the specified element with the given ID after a short delay to ensure the element is rendered
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  return (
    <>
      <div className="reward_wrapper">
        <div className="container py-5">
          <div className="rew_header">
            <h1 className='rew_header_txt'>Semolina's rewards</h1>
            <h6 className='rew_header_desc'>
              Download the app and join Semolina’s Rewards to earn bonus points on your Semolina’s orders—then, start getting fave after fave for free.*
            </h6>
            <p className='rew_header_desc2'>
              *At participating Semolina’s. Refer to <a className='links' href="/reward">Semolina’s Program Terms</a> for details. Must opt in to Rewards.
            </p>
          </div>

          <div className="reward_down_offer_place">
            <DownloadCard img='https://kartinkin.net/uploads/posts/2022-08/1660954423_40-kartinkin-net-p-big-teisti-roll-oboi-58.jpg'
              title='Free Big Mac®. One for the Price of None.' desc="With $1 minimum purchase, score a free Big Mac after downloading the McD's app and joining MyMcDonald's Rewards. The burger with the special sauce could be in your hands today. Get yours for a limited time.*"
              desc2="*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. Must be opted into MyMcDonald's Rewards. May take up to 48 hours to appear in your deals. Excludes tax."
              scrollToDownload={(e) => handleGetFreeBigMac('123', false, e)}
            />
          </div>

          <div className="reward_after_down_place">
            <h2 className='rew_after_down_header'>How to Earn Points and Redeem Faves</h2>
            <h6 className='rew_after_down_desc'>Order like a pro––all it takes is one code or one scan to earn Semolina’s Rewards points, quickly pay and redeem your favorites.</h6>
          </div>

          <div className="reward_y_card_place">
            <div className="row">
              <div className="col-md-4">
                <RewardYCard title='Easily Earn Points' img='https://s7d1.scene7.com/is/image/mcdonalds/3PUB_Loyalty_LP_EarnPoints_2336x1040:3-column-desktop?resmode=sharp2'
                  desc={<>Select the ‘Earn Points’ tab in the <a onClick={(e) => handleGetFreeBigMac('123', true, e)} className='links' href="/download">Semolina's</a> app found on the bottom menu bar. Access the 4-digit Drive Thru Code or code to scan at the counter or kiosk. When you place your order in the app, you'll automatically earn your points.</>} />
              </div>

              <div className="col-md-4">
                <RewardYCard title='Pay & Earn All in One Step' img='https://s7d1.scene7.com/is/image/mcdonalds/3PUB_Loyalty_LP_PayEarn_2336x1040:3-column-desktop?resmode=sharp2'
                  desc={<>Link your card details to the app so you can conveniently pay and earn points at the same time—including an extra 1500 Bonus Points on your first payment using your linked card. Then, simply tell us your Drive Thru code before placing your order at the speaker or scan the code in-restaurant.</>} />
              </div>

              <div className="col-md-4">
                <RewardYCard title='Redeem Free McDonald’s' img='https://s7d1.scene7.com/is/image/mcdonalds/3PUB_Loyalty_LP_Redeem_2336x1040:3-column-desktop?resmode=sharp2'
                  desc={<>Go to the Rewards & Deals tab. There you can select the menu item you want to redeem. Choose ‘Use at Restaurant’ to get the Drive Thru code, or select ‘Use Restaurant Code’ when you’re inside to reveal the code to use at the counter or kiosk.</>} />
              </div>
            </div>
          </div>

          <div className="reward_after_down_place">
            <h2 className='rew_after_down_header'>More Points Unlock More Rewards</h2>
            <h6 className='rew_after_down_desc'>It's easy to track your Semolina's points and see how far you are from unlocking the next tier of free Semolina's.</h6>
          </div>

          <div className="reward_x_card_place">
            <div className="row">

              <div className="col-md-6">
                <RewardXCard title='1500 Points' img='https://s7d1.scene7.com/is/image/mcdonalds/2PUB_Loyalty_Tiers_1500_574x384:2-column-desktop?resmode=sharp2'
                  desc={<>Choose your Semolina's item, whether you’re craving a <a className='links' href='/menu'>McChicken®</a> (Regular or Hot ‘N Spicy), <a className='links' href="/menu">Hash Browns</a>, <a className='links' href="/menu">Vanilla Cone</a> or our classic <a className='links' href="/menu">Cheeseburger</a>.</>} />
              </div>

              <div className="col-md-6">
                <RewardXCard title='3000 Points' img='https://s7d1.scene7.com/is/image/mcdonalds/2PUB_Loyalty_Tiers_3000_574x384:2-column-desktop?resmode=sharp2'
                  desc={<>Step up and take your pick between <a className='links' href="/menu">medium Fries</a>, <a className='links' href="/menu">Sausage Burrito</a>, <a className='links' href="/menu">6 piece Chicken McNuggets®</a>  or a <a className='links' href="/menu">large Iced Coffee</a>.</>} />
              </div>

              <div className="col-md-6">
                <RewardXCard title='4500 Points' img='https://s7d1.scene7.com/is/image/mcdonalds/2PUB_Loyalty_Tiers_4500_574x384:2-column-desktop?resmode=sharp2'
                  desc={<>We’re going large with your choice of <a className='links' href="/menu">large Fries</a>, large <a className='links' href="/menu">Frappé</a>, <a className='links' href="/menu">Filet-O-Fish®</a> or <a className='links' href="/menu">Sausage McMuffin® with Egg</a>.</>} />
              </div>

              <div className="col-md-6">
                <RewardXCard title='6000 Points' img='https://s7d1.scene7.com/is/image/mcdonalds/2PUB_Loyalty_Tiers_6000_574x384:2-column-desktop?resmode=sharp2'
                  desc={<>Save up your points and you could get a <a className='links' href="/menu">Big Mac®</a>, <a className='links' href="/menu">Quarter Pounder®* with Cheese</a>, <a className='links' href="/menu">Happy Meal®</a> or <a className='links' href="/menu">Bacon, Egg & Cheese Biscuit</a>!</>} />
              </div>

            </div>
          </div>

          <div className="frequent_question_wrapper">
            <div className="row">
              <h2 className='frequent_question_header'>
                Frequently Asked Questions
              </h2>
              {/* 1 */}
              <FrequentQuestion question='What Do I Have to Do to Earn Points?'
                desc={<>Earning rewards points is very easy—simply <a onClick={(e) => handleGetFreeBigMac('123', true, e)} className='links' href="/download">download our app</a> and agree to participate in Semolina’s Rewards. Present the 4-digit code before ordering, or get points automatically when you order in the app.</>} />
              {/* 2 */}
              <FrequentQuestion question='How Much Are Points Worth?'
                desc={<>For every dollar you spend on eligible products, you will receive 100 points. You can start redeeming your MyMcDonald’s Rewards when you have 1500 points.</>} />
              {/* 3 */}
              <FrequentQuestion question='Do My Points Expire?'
                desc={<>Unfortunately, nothing can last forever. Your points will expire on the first day of the month after the sixth month from the day your points were earned. Plenty of time to save up for your favorite!</>} />
              {/* 4 */}
              <FrequentQuestion question='Can I Get More Than One Reward at a Time?'
                desc={<>At this time, you are limited to redeeming one reward per order. </>} />
              {/* 5 */}
              <FrequentQuestion question='Can I Share My Points?'
                desc={<>Your Semolina's Rewards points are yours alone. Once you have your food, it’s up to you whether you want to share!</>} />
              {/* 6 */}
              <FrequentQuestion question='How Do I Redeem Points for Free Semolina’s?'
                desc={<>You can redeem with contactless mobile ordering in the Semolina's app by selecting Rewards, choosing the favorite you want to redeem and choosing “Add to Mobile Order”. To redeem in store or Drive Thru, select rewards and choose the item you want to redeem, then choose “Use at Restaurant” to get the 4-digit code you can provide the crew before you start ordering. For delivery orders placed using the Semolina's app, select your reward item and add that to your McDelivery order. Rewards cannot be redeemed for delivery orders placed with a third party operator such as DoorDash and Uber Eats.</>} />
              {/* 7 */}
              <FrequentQuestion question='Can I Redeem a Reward And Earn Points in the Same Order?'
                desc={<>Yes! You earn points on every eligible purchase, so if you’re redeeming a reward and ordering more food in addition to that, you will still earn 100 points for every dollar you spend.</>} />
              {/* 8 */}
              <FrequentQuestion question='What If I Forgot to Provide My Code?'
                desc={<>If you’re enjoying your order and suddenly realized you never provided your code, no worries! Take these steps to contact us in the app:</>}
                options={[
                  'Select More in the bottom navigation',
                  'Select Add Missing Points from Receipt',
                  'Select Enter Receipt Details',
                  'Provide the restaurant number from where your order was placed, the date of your visit, the time of your visit, your order number and your order total. All of this information can be found on your receipt.',
                  'Select Submit'
                ]} />
              {/* 9 */}
              <FrequentQuestion question='I Just Made a Purchase and My Points Aren’t There—Can You Help?'
                desc={<>Of course, we’d be glad to help you. The first step is wait 24 hours; sometimes it takes a little time for MyMcDonald's Rewards points to appear in the app. If after 24 hours you still don’t have points, here are the steps for you to contact us in the app:</>}
                options={[
                  'Select More',
                  'Choose Careers, Contact & Legal',
                  'Select Contact Us',
                  'Enter your comments regarding your order, including your account email, order number, subtotal, and if there’s any reason you think you might be missing points (example: forgot to scan)'
                ]} />
              {/* 10 */}
              <FrequentQuestion question='Do I have to Provide Two Codes If I Want to Redeem a Reward or Deal and Earn Points in the Same Transaction?'
                desc={<>No, you only need to provide one code. When redeeming, provide the 4-digit reward code (found on the Rewards tab)—this will help you redeem your free item while also earning points for products you are purchasing. The same is true for a deal, use the 4-digit deal code to save and you will automatically earn points for products you purchase in that transaction.</>} />
              {/* 11 */}
              <FrequentQuestion question='Are There Any Purchases That Don’t Qualify For Points?'
                desc={<>Qualifying purchases where an active reward, mobile offer or promotional offer is redeemed will earn points, but you will only earn points for U.S. dollars actually spent in the transaction. When a McDonald’s Arch card is used to make a qualifying purchase, you will earn points. The following are not considered qualifying purchases and will not earn any points:</>}
                options={[
                  'taxes, bags and bottle fees, other surcharges or fees',
                  'loading any money on a McDonald’s Arch Card® (gift card)',
                  'delivery fees for orders placed using the McDonald’s app',
                ]} />
              {/* 12 */}
              <FrequentQuestion question='How do I link my card for payment in the app?'
                desc={<>Linking you card for more convenient payment in the app is easy: Simply,</>}
                options={[
                  'Go to ‘Earn Points’ in the McDonald’s app',
                  'Select “Pay with Linked Card” at the top',
                  'Insert your card information and hit save',
                ]} />
              {/* 13 */}
              <FrequentQuestion question='I Lost My Phone! Did I Lose My Points?'
                desc={<>We’re sorry about your phone! Contact your service provider and once you have a new phone, your Semolina's Rewards should still be waiting for you when you log in to <a onClick={(e) => handleGetFreeBigMac('123', true, e)} className='links' href="/download">our app</a>.</>} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

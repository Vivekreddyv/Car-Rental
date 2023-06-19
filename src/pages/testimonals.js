import Footer from '../footer.js'
import Navpagecomponent from './components/navpagecomponent.js'
import Pagesbanner from './components/pagesbanner.js'
import Review from '../review.js'
const Testimonials=()=>{
    return(
        <div>
        <Navpagecomponent name="Testimonials"/>
        <Review/>
        <Pagesbanner/>
        <Footer/>
        </div>
    )
}
export default Testimonials
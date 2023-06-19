import aboutbg from '../../utils/aboutbg.png'
import Nav from '../../nav.js'
import Homecomponent from './homecomponent'
const Navpagecomponent=({name})=>{
    return(
         <div  className='aboutnav'>
            <img className='aboutbg' src={aboutbg} alt=''></img>
            <Nav/>
            <Homecomponent name={name}/>
        </div>
    )
}
export default Navpagecomponent
import Footer from '../footer.js'
import Navpagecomponent from './components/navpagecomponent.js'
import Pagesbanner from './components/pagesbanner.js'
const Contactpage=()=>{
    return(
        <div className='contact'>
            <div className='contact1'>
                <h1 style={{fontFamily:'poppins',fontSize:'2.6rem',marginBottom:'0px',lineHeight:'1.5'}}>Need additional information?</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.5',marginBottom:'30px'}}>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                <button style={{fontFamily:'poppins'}} className="contactbtn"><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-9876543210</button>
                <button style={{fontFamily:'poppins'}} className="contactbtn"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;carrental@gmail.com</button>
                <button style={{fontFamily:'poppins'}} className="contactbtn"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Bengaluru,India</button>
            </div>
            <div>
                <p style={{fontFamily:'poppins',fontWeight:'600'}}>Full Name&nbsp;<b style={{color:"red"}}>*</b></p>
                <input className='contactinput' placeholder='E.g:"Jack Ryan"'></input>
                <p style={{fontFamily:'poppins',fontWeight:'600'}}>Email&nbsp;<b style={{color:"red"}}>*</b></p>
                <input className='contactinput' placeholder='youremail@example.com'></input>
                <p style={{fontFamily:'poppins',fontWeight:'600'}}>Tell us about it&nbsp;<b style={{color:"red"}}>*</b></p>
                <input style={{height:'30%'}} className='contactinput' placeholder='Write Here..'></input>
                <button className='sendmsg'><i class="fa-solid fa-envelope-open-text"></i>&nbsp;&nbsp;&nbsp;Send Message</button>
            </div>
        </div>
    )
}
const Contact=()=>{
    return(
        <div>
        <Navpagecomponent name="Contact"/>
        <Contactpage/>
        <Pagesbanner/>
        <Footer/>
        </div>
    )
}
export default Contact
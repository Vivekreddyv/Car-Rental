import aboutimg2 from '../../utils/aboutimg2.jpg'
const Pagesbanner=()=>{
    return(
        <div className='aboutbanner'>
            <img src={aboutimg2} alt=''></img>
        <div  className='aboutbanner1'>
        <h1 style={{color:'white',fontFamily:'poppins',fontSize:'2rem',margin:'0 0 0 0'}}>Book a car by getting in touch with us</h1>
        <h2 style={{color:'#ff4d30',fontFamily:'poppins',margin:'10px 0 0 0',fontWeight:'800',fontSize:'2rem'}}><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-9876543210</h2>
        </div>
    </div>
    )
}
export default Pagesbanner
import landing from './utils/landing.png'
const Landing=()=>{
    return(
        <div className='landing'>
           <div className='landingtext'>
           <div>
                <h3 style={{fontFamily:'Rubik', fontWeight:"bolder",fontSize:"1.6rem",margin:"0",padding:"0" }}
                 >Plan your trip now</h3>
                <p style={{fontFamily:'poppins',fontSize:"3.3rem",margin:"0",padding:"0"}}>Save <span className="big">big</span> with our car rental</p>
                <p style={{color:'#706F7B',fontFamily:'rubik',margin:"0",padding:"0"}}>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            </div>
            <div>
                <button className='btnland1'>Book Ride&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-circle-check"></i></button>
                <button className='btnland2'>Learn More&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-angle-right"></i></button>
            </div>
           </div>
           <div>
            <img className='landingimg' src={landing}></img>
           </div>
        </div>
    )
}
export default Landing
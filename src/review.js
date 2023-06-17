import reviewimg1 from './utils/demo.jpg'
const Review=()=>{
    return(
        <div>
            <div className="review1">
                <h2 style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Reviewed by People</h2>
                <h1 style={{fontFamily:'poppins',margin:'0 0 0 0',fontSize:'2.7rem'}}>Client's Testimonials</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center'}}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="review2">
                <div className="review3">
                    <div>
                        <p style={{fontFamily:'poppins',fontSize:'1.3rem'}}>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    </div>
                    <div  className="review4">
                        <div className='review5'>
                        <img style={{borderRadius:'50%',width:'4.5rem',height:'4.5rem'}} src={reviewimg1} alt=""></img>
                        <div className='review6'>
                            <h3 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Parry Hotter</h3>
                            <p style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Belgrade</p>
                            </div>
                        </div>
                         <i style={{fontSize:'4em',marginTop:'10px',color:'red'}} className='reviewicon' class="fa-solid fa-quote-right"></i>
                    </div>
                </div>
                <div  className="review3">
                    <div>
                        <p style={{fontFamily:'poppins',fontSize:'1.3rem'}}>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    </div>
                    <div  className="review4">
                        <div className='review5'>
                        <img style={{borderRadius:'50%',width:'4.5rem',height:'4.5rem'}} src={reviewimg1} alt=""></img>
                        <div className='review6'>
                            <h3 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Parry Hotter</h3>
                            <p style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Belgrade</p>
                            </div>
                        </div>
                         <i style={{fontSize:'4em',marginTop:'10px',color:'red'}} className='reviewicon' class="fa-solid fa-quote-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review
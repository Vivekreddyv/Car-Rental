const Booking=()=>{
    return(
        <div>
             <div className="booking1">
            <div>
                <h2 style={{fontFamily:'poppins'}}>Book a car</h2>
            </div>
            <div className="booking2">
            <div className="bookingcar">
            <div>
                <p style={{fontFamily:'poppins',fontWeight:'500',fontSize:"1.1rem"}}><span style={{color:"red"}}><i class="fa-solid fa-car"></i></span>&nbsp;&nbsp;&nbsp;Select Your Car Type&nbsp;<b style={{color:"red"}}>*</b></p>
                <select className="bookingdropdowns1">
                    <option value="fruit">Select your car type</option>
                    <option value="car1">car1</option>
                    <option value="car2">car2</option>
                    <option value="car3">car3</option>
                    <option value="car4">car4</option>
                    <option value="car5">car5</option>
                </select>
            </div>
            <div>
                <p style={{fontFamily:'poppins',fontWeight:'500',fontSize:"1.1rem"}}><span style={{color:"red"}}><i class="fa-solid fa-location-dot"></i></span>&nbsp;&nbsp;&nbsp;Pick-up&nbsp;<b style={{color:"red"}}>*</b></p>
                <select className="bookingdropdowns1">
                    <option value="fruit">Select your car type</option>
                    <option value="car1">car1</option>
                    <option value="car2">car2</option>
                    <option value="car3">car3</option>
                    <option value="car4">car4</option>
                    <option value="car5">car5</option>
                </select>
            </div>
            <div>
                <p style={{fontFamily:'poppins',fontWeight:'500',fontSize:"1.1rem"}}><span style={{color:"red"}}><i class="fa-solid fa-location-dot"></i></span>&nbsp;&nbsp;&nbsp;Drop-of&nbsp;<b style={{color:"red"}}>*</b></p>
                <select className="bookingdropdowns1">
                    <option value="fruit">Select your car type</option>
                    <option value="car1">car1</option>
                    <option value="car2">car2</option>
                    <option value="car3">car3</option>
                    <option value="car4">car4</option>
                    <option value="car5">car5</option>
                </select>
            </div>
            </div>
            <div className="bookingdate">
                <div>
                <p style={{fontFamily:'poppins',fontWeight:'500',fontSize:"1.1rem"}}><span style={{color:"red"}}><i class="fa-regular fa-calendar-days "></i></span>&nbsp;&nbsp;&nbsp;Pick-up&nbsp;<b style={{color:"red"}}>*</b></p>
                <input type="date" className="bookingdropdowns2"></input>
                </div>
                <div>
                <p style={{fontFamily:'poppins',fontWeight:'500',fontSize:"1.1rem"}}><span style={{color:"red"}}><i class="fa-regular fa-calendar-days "></i></span>&nbsp;&nbsp;&nbsp;Drop-of&nbsp;<b style={{color:"red"}}>*</b></p>
                <input type="date" className="bookingdropdowns2"></input>
                </div>
                <button className="bookingbtn">Search</button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Booking
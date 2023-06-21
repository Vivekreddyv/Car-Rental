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
                <p style={{fontFamily:'poppins',fontWeight:'600',fontSize:"1rem"}}><span style={{color:"red"}}><i class="fa-solid fa-car"></i></span>&nbsp;&nbsp;&nbsp;Select Your Car Type&nbsp;<b style={{color:"red"}}>*</b></p>
                <select className="bookingdropdowns1">
                    <option value="selectcar">Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 Modernline">BMW 320 Modernline</option>
                    <option value="Mercedes-Benz Glk">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                </select>
            </div>
            <div>
                <p style={{fontFamily:'poppins',fontWeight:'600',fontSize:"1rem"}}><span style={{color:"red"}}><i class="fa-solid fa-location-dot"></i></span>&nbsp;&nbsp;&nbsp;Pick-up&nbsp;<b style={{color:"red"}}>*</b></p>
                <select className="bookingdropdowns1">
                    <option value="fruit">Select pick up location</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </div>
            <div>
                <p style={{fontFamily:'poppins',fontWeight:'600',fontSize:"1rem"}}><span style={{color:"red"}}><i class="fa-solid fa-location-dot"></i></span>&nbsp;&nbsp;&nbsp;Drop-of&nbsp;<b style={{color:"red"}}>*</b></p>
                <select className="bookingdropdowns1">
                <option value="fruit">Select drop off location</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </div>
            </div>
            <div className="bookingdate">
                <div>
                <p style={{fontFamily:'poppins',fontWeight:'600',fontSize:"1rem"}}><span style={{color:"red"}}><i class="fa-regular fa-calendar-days "></i></span>&nbsp;&nbsp;&nbsp;Pick-up&nbsp;<b style={{color:"red"}}>*</b></p>
                <input type="date" className="bookingdropdowns2"></input>
                </div>
                <div>
                <p style={{fontFamily:'poppins',fontWeight:'600',fontSize:"1rem"}}><span style={{color:"red"}}><i class="fa-regular fa-calendar-days "></i></span>&nbsp;&nbsp;&nbsp;Drop-of&nbsp;<b style={{color:"red"}}>*</b></p>
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
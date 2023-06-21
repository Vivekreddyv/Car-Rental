import car1 from './utils/vehicle1.jpg'
const Vehicles =()=>{
    return(
        <div className="vehicles1">
                <div className="vehicles2">
                    <h2 style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Vehicle Models</h2>
                    <h1 style={{margin:'0 0 0 0',fontFamily:'poppins',fontSize:'2.5rem'}}>Our rental fleet</h1>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center'}}>Choose from a variety of our amazing vehicles to rent for your next<br></br> adventure or business trip</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',margin:'0 35px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <button className="vehiclebtn">Audi A1 S-Line</button>
                        <button className="vehiclebtn">VW Golf 6</button>
                        <button className="vehiclebtn">Toyota Camry</button>
                        <button className="vehiclebtn">BMW 320 ModernLine</button>
                        <button className="vehiclebtn">Mercedes-Benz GLK</button>
                        <button className="vehiclebtn">VW Passat CC</button>
                    </div>
                    <div>
                        <img style={{transform:'scale(107%)',marginTop:'3rem',marginLeft:'20px'}} src={car1} alt=""></img>
                    </div>
                    <div>
                        <button className='reservebtn'>RESERVE NOW</button>
                    </div>
                </div>
        </div>
    )
}
export default Vehicles
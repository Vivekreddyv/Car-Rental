import team1 from '../utils/team1.png'
import team2 from '../utils/team2.png'
import team3 from '../utils/team3.png'
import team4 from '../utils/team4.png'
import team5 from '../utils/team5.png'
import team6 from '../utils/team6.png'
import Footer from '../footer.js'
import Navpagecomponent from './components/navpagecomponent.js'
import Pagesbanner from './components/pagesbanner.js'
const Pageteam=()=>{
    return(
        <div className='ourteam'>
            <div className='ourteam1'>
                <img src={team1} alt=''></img>
                <div className='ourteam2'>
                <h2 style={{fontFamily:'poppins',fontSize:'1.4rem',marginTop:'35px',marginBottom:'0'}}>Luke Miller</h2>
                <p style={{color:'#777777',fontWeight:'600',fontSize:'1.1rem',marginTop:'0',marginBottom:'35px'}}>Salesman</p>
                </div>
            </div>
            <div className='ourteam1'>
                <img src={team2} alt=''></img>
                <div className='ourteam2'>
                <h2 style={{fontFamily:'poppins',fontSize:'1.4rem',marginTop:'35px',marginBottom:'0'}}>Michael Diaz</h2>
                <p style={{color:'#777777',fontWeight:'600',fontSize:'1.1rem',marginTop:'0',marginBottom:'35px'}}>Business Owner</p>
                </div>
            </div>
            <div className='ourteam1'>
                <img src={team3} alt=''></img>
                <div className='ourteam2'>
                <h2 style={{fontFamily:'poppins',fontSize:'1.4rem',marginTop:'35px',marginBottom:'0'}}>Briana Ross</h2>
                <p style={{color:'#777777',fontWeight:'600',fontSize:'1.1rem',marginTop:'0',marginBottom:'35px'}}>Photographer</p>
                </div>
            </div>
            <div className='ourteam1'>
                <img src={team4} alt=''></img>
                <div className='ourteam2'>
                <h2 style={{fontFamily:'poppins',fontSize:'1.4rem',marginTop:'35px',marginBottom:'0'}}>Lauren Rivera</h2>
                <p style={{color:'#777777',fontWeight:'600',fontSize:'1.1rem',marginTop:'0',marginBottom:'35px'}}>Car Detailist</p>
                </div>
            </div>
            <div className='ourteam1'>
                <img src={team5} alt=''></img>
                <div className='ourteam2'>
                <h2 style={{fontFamily:'poppins',fontSize:'1.4rem',marginTop:'35px',marginBottom:'0'}}>Martin Rizz</h2>
                <p style={{color:'#777777',fontWeight:'600',fontSize:'1.1rem',marginTop:'0',marginBottom:'35px'}}>Mechanic</p>
                </div>
            </div>
            <div className='ourteam1'>
                <img src={team6} alt=''></img>
                <div className='ourteam2'>
                <h2 style={{fontFamily:'poppins',fontSize:'1.4rem',marginTop:'35px',marginBottom:'0'}}>Caitlyn Hunt</h2>
                <p style={{color:'#777777',fontWeight:'600',fontSize:'1.1rem',marginTop:'0',marginBottom:'35px'}}>Manager</p>
                </div>
            </div>
        </div>
    )
}
const Ourteam=()=>{
    return(
        <div>
        <Navpagecomponent name="Our Team"/>
        <Pageteam/>
        <Pagesbanner/>
        <Footer/>
        </div>
    )
}
export default Ourteam
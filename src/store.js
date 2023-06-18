import play from './utils/googleplay.svg'
import app from './utils/appstore.svg'
const Store=()=>{
    return(
        <div className='store'>
            <div className='store1'>
                <h1 style={{fontFamily:'poppins',fontSize:'2.65rem',marginTop:'100px'}}>Download our app to get most out of it</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.5'}}>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div>
                    <img style={{margin:'25px 30px 0 0'}} src={play} alt=""></img>
                    <img style={{margin:'25px 0 0 0'}} src={app} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Store
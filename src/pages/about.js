import Footer from '../footer.js'
import Quickeasy from '../quickeasy.js'
import aboutasset1 from '../utils/aboutasset1.png'
import aboutasset2 from '../utils/aboutasset2.png'
import aboutasset3 from '../utils/aboutasset3.png'
import aboutimg1 from '../utils/aboutimg1.jpg'
import Navpagecomponent from './components/navpagecomponent'
import Pagesbanner from './components/pagesbanner'
const Aboutpage=()=>{
    return(
       <div className='aboutcompany'>
        <img style={{height:'80%',marginTop:'30px'}} src={aboutimg1} alt=''></img>
        <div className='aboutcompany1' >
            <h3 style={{fontFamily:'rubik',fontSize:'1.4rem',fontWeight:'500',margin:'10px 0'}}>About Company</h3>
            <h1 style={{fontFamily:'poppins',fontSize:'2.7rem',lineHeight:1.2,margin:'0 0 0 0'}}>You start the engine and your adventure begins</h1>
            <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:1.5}}>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            <div className='aboutcompany2'>
                <div  className='aboutcompany3'>
                    <img src={aboutasset1} alt=''></img>
                    <div className='aboutcompany4'>
                        <h1 style={{fontFamily:'poppins',fontSize:'3rem',margin:'15px 0'}}>20</h1>
                        <p style={{fontFamily:'rubik',color:'#706f7b',margin:'15px 10px',lineHeight:'1.5'}}>Car<br></br>Types</p>
                    </div>
                </div>
                <div  className='aboutcompany3'>
                    <img src={aboutasset2} alt=''></img>
                    <div className='aboutcompany4'>
                        <h1 style={{fontFamily:'poppins',fontSize:'3rem',margin:'15px 0'}}>85</h1>
                        <p style={{fontFamily:'rubik',color:'#706f7b',margin:'15px 10px',lineHeight:'1.5'}}>Rental<br></br> Outlets</p>
                    </div>
                </div>
                <div  className='aboutcompany3'>
                    <img src={aboutasset3} alt=''></img>
                    <div className='aboutcompany4'>
                        <h1 style={{fontFamily:'poppins',fontSize:'3rem',margin:'15px 0'}}>75</h1>
                        <p style={{fontFamily:'rubik',color:'#706f7b',margin:'15px 10px',lineHeight:'1.5'}}>Repair<br></br>Shop</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const About=()=>{
    return(
        <div>
        <Navpagecomponent name="About"/>
        <Aboutpage/>
        <Quickeasy/>
        <Pagesbanner/>
        <Footer/>
        </div>
    )
}
export default About
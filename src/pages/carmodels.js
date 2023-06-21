import img1 from '../utils/pagecar1.png'
import img2 from '../utils/pagecar2.png'
import img3 from '../utils/pagecar3.png'
import img4 from '../utils/pagecar4.png'
import img5 from '../utils/pagecar5.png'
import img6 from '../utils/pagecar6.png'
import Footer from '../footer.js'
import Navpagecomponent from './components/navpagecomponent.js'
import Pagesbanner from './components/pagesbanner.js'
import { Link } from 'react-router-dom'
const Cardata=[
    {
        name:'Audi A1',
        price:'4000',
        car:'Audi',
        transmission:'Manual',
        fuel:'Petrol',
        img: img1
    },
    {
        name:'Golf 6',
        price:'3000',
        car:'Volkswagen',
        transmission:'Manual',
        fuel:'Diesel',
        img: img2
    },
    {
        name:'Camry',
        price:'2500',
        car:'Toyota',
        transmission:'Automatic',
        img: img3,
        fuel:'Hybrid'
    },
    {
        name:'BMW 320',
        price:'3000',
        car:'BMW',
        transmission:'Manual',
        img: img4,
        fuel:'Diesel'
    },
    {
        name:'Benz GLK',
        price:'4500',
        car:'Mercedes',
        transmission:'Manual',
        img: img5,
        fuel:'Diesel'
    },
    {
        name:'Passat CC',
        price:'2000',
        car:'Volkswagen',
        transmission:'Automatic',
        img: img6,
        fuel:'Petrol'
    },
]
const Carcard=({data})=>{
    return(
        <div className='carmodels'>
            <div>
                <img style={{width:'100%',height:'270px'}} src={data.img} alt=''></img>
            </div>
            <div className='carmodels1'>
                <div style={{width:'45%'}}>
                    <h1 style={{fontFamily:'poppins',lineHeight:'1',fontSize:'24px'}}>{data.name}<br></br><span style={{fontSize:'0.9rem',color:'#ffc933'}}><i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i>&nbsp;<i class="fa-solid fa-star"></i></span></h1>
                    <p style={{fontFamily:'poppins',color:'#777777',fontSize:'18px',fontWeight:'500',marginTop:'30px'}}><span style={{color:'black'}}><i class="fa-solid fa-car-side"></i></span>&nbsp;&nbsp;&nbsp;{data.car}</p>
                    <p style={{fontFamily:'poppins',color:'#777777',fontSize:'18px',fontWeight:'500'}}><span style={{color:'black'}}><i class="fa-solid fa-car-side"></i></span>&nbsp;&nbsp;&nbsp;{data.transmission}</p>
                </div>
                <div style={{width:'29%'}}>
                    <h1 style={{fontFamily:'poppins',lineHeight:'1',fontSize:'28px',textAlign:'end'}}><i style={{fontSize:'26px'}} class="fa-solid fa-indian-rupee-sign"></i>{data.price}<br></br><span style={{fontSize:'1rem',fontWeight:'400'}}>per day</span></h1>
                    <p style={{fontFamily:'poppins',color:'#777777',fontSize:'18px',fontWeight:'500',textAlign:'end'}}>4/5&nbsp;&nbsp;&nbsp;<span style={{color:'black'}}><i class="fa-solid fa-car-side"></i></span></p>
                    <p style={{fontFamily:'poppins',color:'#777777',fontSize:'18px',fontWeight:'500',textAlign:'end'}}>{data.fuel}&nbsp;&nbsp;&nbsp;<span style={{color:'black'}}><i class="fa-solid fa-car-side"></i></span></p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <div className='line'></div>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to='/'><button className='bookridebtn'>Book Ride</button></Link>
                </div>
        </div>
    )
}
const Cars=()=>{
    return(
        <div className='cars'>
        {Cardata.map((ele)=>(
        <Carcard data={ele}/>))}
        </div>
    )
}
const Carmodels=()=>{
    return(
        <div>
        <Navpagecomponent name="Vehicle Models"/>
        <Cars/>
        <Pagesbanner/>
        <Footer/>
        </div>
    )
}
export default Carmodels
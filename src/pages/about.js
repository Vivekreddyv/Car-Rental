import Nav from '../nav.js'
const Aboutnav=()=>{
    return(
    <div  className='aboutnav'>
    <Nav/>
    <div style={{marginLeft:'40px',height:'15rem'}}>
        <h1 style={{marginTop:'80px',marginBottom:'0',fontFamily:'poppins',fontSize:'2.3rem'}}>About</h1>
        <h4 style={{marginTop:'7px',fontFamily:'poppins'}}><span>Home</span>&nbsp;/&nbsp;About</h4>
    </div>
    </div>
    )
}
const About=()=>{
    return(
        <Aboutnav/>
    )
}
export default About
import { Link } from "react-router-dom"

const Homecomponent=({name})=>{
    return(
        <div style={{marginLeft:'40px',height:'15rem'}}>
            <h1 style={{marginTop:'80px',marginBottom:'0',fontFamily:'poppins',fontSize:'2.3rem'}}>{name}</h1>
            <Link style={{marginTop:'7px',fontFamily:'poppins',fontWeight:'600'}} to='/'>Home</Link><span style={{marginTop:'7px',fontFamily:'poppins',fontWeight:'600'}}> / {name}</span>
        </div>
    )
}
export default Homecomponent
import logo from './utils/logo.png'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='nav'>
      <div>
      <Link to='/'><img className="logo" src={logo} alt=''></img></Link>
      </div>
      <div>
        <ul className='navlist'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/carmodels'><li>Vehicle Models</li></Link>
            <Link to='/testimonals'><li>Testimonals</li></Link>
            <Link to='/ourteam'><li>Our Team</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
      </div>
      <div>
      <Link className='navbtnlink' to='/'><button className='navbtn1'>Sign In</button></Link>
      <Link to='/'><button className='navbtn2'>Register</button></Link>
      </div>
    </div>
  );
};
export default Nav;

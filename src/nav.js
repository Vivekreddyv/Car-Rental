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
            <Link to='/'><li>About</li></Link>
            <Link to='/'><li>Vehicle Models</li></Link>
            <Link to='/'><li>Testimonals</li></Link>
            <Link to='/'><li>Our Team</li></Link>
            <Link to='/'><li>Contact</li></Link>
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


import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Our Services</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Contact Us</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Login</Link></li>

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBars></FaBars>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} className="w-[100px] ml-5" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">


                </div>
            </div>
        </div>
    );
};

export default Navbar;
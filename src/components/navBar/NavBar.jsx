import { NavLink } from "react-router-dom";
import userIcon from '../../assets/user.png'


const NavBar = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className=""></div>

            <div className="buttons flex gap-3">
                <NavLink to='/' className='text-gray-500'>Home</NavLink>
                <NavLink className='text-gray-500' to='/about'>About</NavLink>
                <NavLink className='text-gray-500' to='/career'>Career</NavLink>
            </div>

            <div className="login flex gap-2 items-center">
                <div className="image">
                    <img src={userIcon} alt="" />
                </div>
                <div>
                    <button className="btn btn-neutral rounded-none">Login</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
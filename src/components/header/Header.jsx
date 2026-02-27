import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={logo} alt="" className='' />
            <h3 className='py-1 text-gray-500 text-xl font-poppins'>Journalism Without Fear or Favour</h3>
            <p>
                {
                    moment().format("dddd, MMMM Do YYYY")
                }
            </p> 
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col jus items-center gap-2 py-2'>
            <div className="logo">
                <img src={logo} alt="" className='w-[350px]' />
            </div>
            <h2 className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</h2>
        <p>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;
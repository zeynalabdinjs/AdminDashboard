import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import en from '../assets/img/en.png'
import profile from "../assets/img/profile.jpg"
import { modeToggle } from '../store/mode'

const Navbar = () => {
    const dispatch = useDispatch();
    const modeState = useSelector(state => state.mode.value)


    console.log(modeState)



    return (
        <nav className='navbar box-color shadow-custom px-3 my-3 me-3 d-flex align-content-center'>
            <div className="navbar-wrapper d-flex justify-content-end w-100">
                <div className="language d-none d-sm-flex cursor-pointer me-3 d-flex align-items-center">
                    <img src={en} width={25} alt="" />
                    <span className='ms-1 font-xssss fw-400'>English</span>
                </div>

                <div className="dark-light-mode cursor-pointer d-flex font-sm align-items-center me-3" onClick={() => dispatch(modeToggle())}>
                    <i className={` ${modeState ? 'bx bx-sun' : 'bx bx-moon'}`}></i>
                </div>

                <div className="search cursor-pointer d-flex font-sm align-items-center me-3">
                    <i className='bx bx-search'></i>
                </div>

                <div className="cart d-none d-sm-flex cursor-pointer posr d-flex font-sm align-items-center me-3">
                    <i className='bx bx-cart'></i>
                    <span className='custom-badge bg-linear-purple fw-600'>6</span>
                </div>
                <div className="notification cursor-pointer posr d-flex font-sm align-items-center me-3">
                    <i className='bx bx-bell'></i>
                    <span className='custom-badge bg-linear-danger fw-600'>6</span>
                </div>

                <div className="profile cursor-pointer d-flex align-items-center flex-row">
                    <div className='profile-detail d-flex flex-column align-items-end me-2'>
                        <span className='name fw-500 font-xssss'>Zeynalabdin</span>
                        <span className='status font-xsssss'>CEO</span>
                    </div>
                    <div className="picture">
                        <span></span>
                        <img src={profile} alt="" />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
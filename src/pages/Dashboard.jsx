import React from 'react'
import logo from '../assets/img/logo.png'


const Dashboard = () => {
    return (
        <div className='dashboard box-color py-3 text-center d-flex flex-column justify-content-between'>
            <div className="row mb-4">
                <div className="col">
                    <img src={logo} width={25} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <i className='bx bx-home-alt'></i>
                </div>
            </div>

            <span>
                <i className='bx bx-dots-horizontal-rounded opacity-25'></i>
            </span>


            <div className="row">
                <div className="col">
                    <i className='bx bx-cart'></i>
                </div>
            </div>



            <div className="row">
                <div className="col">
                    <i className='bx bx-message'></i>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <i className='bx bx-calendar-week'></i>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <i className='bx bx-user'></i>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <i className='bx bx-stats'></i>
                </div>
            </div>




            <span>
                <i className='bx bx-dots-horizontal-rounded opacity-25'></i>
            </span>

            <div className="row">
                <div className="col">
                    <i className='bx bx-slider-alt' ></i>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
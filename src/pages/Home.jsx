import React from 'react'
import Chart from "../components/Chart"
import ChartLine from '../components/ChartLine'

const Home = () => {
  return (
    <div className='container-fluid ps-0 pe-3 pb-5'>
      <div className="row">
        <div className="col-md-4 mb-3 ">
          <div className="box box-color br-4 min-h-180 px-4 py-3">
            <div className="messages-header">
              <h2 className='font-xss'>Congratulations<span className='font-sm'>&#127881;</span> Zeynalabdin!</h2>
            </div>
            <div className="messages-content font-xssss mt-2 opacity-75 fw-300">
              You have won gold medal!
            </div>
            <h4 className='text-purple font-sm mt-4'>$48.9k</h4>
            <button className='bg-purple btn btn-sm font-xssss px-3 text-white'>View more</button>
          </div>
        </div>

        <div className="col-md-8 mb-3 ">
          <div className="box box-color br-4 min-h-180 px-4 py-3">
            <div className="messages-header d-flex justify-content-between">
              <h2 className='font-xss'>Statistics</h2>
              <p className='font-xsssss opacity-75 fw-300'>Updated 1 month ago</p>
            </div>

            <div className="statistic-icons d-flex flex-wrap gap-4 flex-row justify-content-between mt-3 pb-3 pt-3">

              <div className="statistic-elements d-flex flex-row align-items-center">
                <i className='bx bx-stats font-md me-2'></i>
                <span className='d-flex justify-content-center flex-column'>
                  <h4 className='font-xss mb-0'>230k</h4>
                  <span className='opacity-75 font-xsssss'>Sales</span>
                </span>
              </div>


              <div className="statistic-elements d-flex flex-row align-items-center">
                <i className='bx bx-user font-md me-2'></i>
                <span className='d-flex justify-content-center flex-column'>
                  <h4 className='font-xss mb-0'>8.549k</h4>
                  <span className='opacity-75 font-xsssss'>Customers</span>
                </span>
              </div>

              <div className="statistic-elements d-flex flex-row align-items-center">
                <i className='bx bx-package font-md me-2'></i>
                <span className='d-flex justify-content-center flex-column'>
                  <h4 className='font-xss mb-0'>1.423k</h4>
                  <span className='opacity-75 font-xsssss'>Products</span>
                </span>
              </div>

              <div className="statistic-elements d-flex flex-row align-items-center">
                <i className='bx bx-dollar font-md me-2'></i>
                <span className='d-flex justify-content-center flex-column'>
                  <h4 className='font-xss mb-0'>$9745</h4>
                  <span className='opacity-75 font-xsssss'>Revenue</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-6">
              <div className=" min-h-180 box-color br-4 py-3 px-3">
                <h4 className='font-xssss opacity-75'>Orders</h4>
                <h3 className='font-md'>2.76k</h3>
                <Chart />
              </div>
            </div>
            <div className="col-6">
              <div className="min-h-180 box-color br-4 py-3 px-3">
                <h4 className='font-xssss opacity-75'>Profit</h4>
                <h3 className='font-md'>6.24k</h3>
                <ChartLine />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>

        <div className="col-md-8">

        </div>
      </div>
    </div>
  )
}

export default Home
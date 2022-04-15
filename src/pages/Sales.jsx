import React from 'react'
import { useSelector } from 'react-redux'
import sales from '../data/sales.json'

const Sales = () => {
    const searchValue = useSelector(state => state.modal.searchValue)

    const filteredData = sales.filter(item => item.product.toLowerCase().includes(searchValue.toLowerCase()))



    return (
        <div className='sales container-fluid ps-0 pe-3 pb-5 py-4 font-xsss'>
            <div className="row">
                <div className="col-12">
                    <table className="table bg-color table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Sale Amount</th>
                            </tr>
                        </thead>
                        <tbody className='border-top'>

                            {
                                filteredData.map((item) => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.product}</td>
                                        <td>{item.price}</td>
                                        <td>{item.amount}</td>
                                    </tr>

                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Sales
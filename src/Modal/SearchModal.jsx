import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle, searchValue } from '../store/modal'

const SearchModal = () => {
    const dispatch = useDispatch();
    const modalStatus = useSelector(state => state.modal.value);
    const search = useSelector(state => state.modal.searchValue);
    console.log(search)

    const activeModal = modalStatus ? "active" : '';

    return (
        <div className={`${activeModal} d-flex justify-content-center pt-3 pt-md-0 align-items-start align-items-md-center search-overlay w-100 vh-100`}>
            <span className='close-search' onClick={() => dispatch(modalToggle())}>
                <i className='bx bx-x font-xxl text-purple'></i>
            </span>
            <div className="search-box d-flex flex-column align-items-center">
                <label htmlFor="search" className='searchLabel posr me-2 '>
                    <i className='bx bx-search font-lg text-purple ms-3 posa'></i>
                    <input type="text" id='search' className='form-control text-purple font-xss'
                        placeholder='Axtarmaq üçün yazın . . .'
                        onChange={(e) => dispatch(searchValue(e.target.value))}
                    />
                </label>
                <button className='btn bg-purple mt-3' onClick={() => dispatch(modalToggle())}>Nəticəyə get</button>

            </div>
        </div>
    )
}

export default SearchModal
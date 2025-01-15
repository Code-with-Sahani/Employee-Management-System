import React from 'react'

const Header = ({ data, logOut }) => {
    return (
        <div className='w-full flex justify-between items-center p-4 mt-4 text-black'>
            <h1>
                <div>Hello,</div>
                <div className='text-2xl  font-bold'>{data.firstName}</div>
            </h1>
            <button
                className='bg-red-600 text-white p-2 rounded-md hover:bg-red-700'
                type="submit"
                onClick={logOut}
            >Logout</button>
        </div>
    )
}

export default Header
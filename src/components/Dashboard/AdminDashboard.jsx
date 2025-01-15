import React from 'react' 
import CreateTask from './othercomponents/CreateTask'
import AllTask from './othercomponents/AllTask'
import Header from './othercomponents/Header'

const AdminDashboard = ({data,logOut}) => {
    return (
        <div className="bg-[url('/Images/adminBackgroundMobile.jpg')] bg-contain bg-repeat-y w-full h-fit flex flex-col justify-center items-center px-2 md:bg-[url('/Images/adminBackground.jpg')] md:bg-cover " >   
            <Header data={data} logOut={logOut}/>
            <CreateTask/>
            <AllTask />

        </div>
    )
}

export default AdminDashboard
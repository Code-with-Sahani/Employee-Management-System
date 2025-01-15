import React from 'react' 
import EmployeeTaskInfo from './othercomponents/EmployeeTaskInfo'
import EmployeeTaskFullDetails from './othercomponents/EmployeeTaskFullDetails'
import Header from './othercomponents/Header'

const EmployeeDashboard = ({data,logOut}) => {
    
    return (
        <div className="bg-[url('/Images/employeeBackgroundMobile.jpg')] bg-contain bg-repeat-y w-full min-h-screen flex flex-col justify-start items-start px-2 md:bg-[url('/Images/employeeBackground.jpg')] md:bg-cover">
            <Header data={data} logOut={logOut} />
            <EmployeeTaskInfo data={data.tasks} />
            <EmployeeTaskFullDetails data={data.tasks} />

        </div>
    )
}

export default EmployeeDashboard
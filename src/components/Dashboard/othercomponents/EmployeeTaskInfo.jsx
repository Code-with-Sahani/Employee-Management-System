import React from 'react'

const EmployeeTaskInfo = ({data}) => {
    const taskCount = {
        newTask: 0,
        completedTask: 0,
        acceptedTask: 0,
        failedTask: 0
    }
    data.forEach((items)=>{
        if(items.taskStatus==="New Task"){
            taskCount.newTask += 1
        }
        if(items.taskStatus==="Completed Task"){
            taskCount.completedTask += 1
        }
        if(items.taskStatus==="Accepted Task"){
            taskCount.acceptedTask += 1
        }
        if(items.taskStatus==="Failed Task"){
            taskCount.failedTask += 1
        }
    })

     
  return (
     <div className='w-full flex flex-row justify-start items-center flex-wrap gap-6 p-2 mt-12 rounded-md'>
        
        <div className='bg-[#dad4d4] border-[1px] border-white  text-black w-40 h-24 font-bold text-xl flex flex-col justify-center items-start gap-2 p-2 mt-2 rounded-xl shadow-lg shadow-[#828661] md:w-56 md:h-32'>
            <h2>{taskCount.newTask}</h2>
            <h3>New Task</h3>
        </div>
        <div className='bg-[#dad4d4] border-[1px] border-white  text-black w-40 h-24 font-bold text-xl flex flex-col justify-center items-start gap-2 p-2 mt-2 rounded-xl shadow-lg shadow-[#828661] md:w-56 md:h-32'>
            <h2>{taskCount.completedTask}</h2>
            <h3>Completed Task</h3>
        </div>
        <div className='bg-[#dad4d4] border-[1px] border-white  text-black w-40 h-24 font-bold text-xl flex flex-col justify-center items-start gap-2 p-2 mt-2 rounded-xl shadow-lg shadow-[#828661] md:w-56 md:h-32'>
            <h2>{taskCount.acceptedTask}</h2>
            <h3>Accepted Task</h3>
        </div>
        <div className='bg-[#dad4d4] border-[1px] border-white  text-black w-40 h-24 font-bold text-xl flex flex-col justify-center items-start gap-2 p-2 mt-2 rounded-xl shadow-lg shadow-[#828661] md:w-56 md:h-32'>
            <h2>{taskCount.failedTask}</h2>
            <h3>Failed Task</h3>
        </div>
    
     </div>
  )
}

export default EmployeeTaskInfo
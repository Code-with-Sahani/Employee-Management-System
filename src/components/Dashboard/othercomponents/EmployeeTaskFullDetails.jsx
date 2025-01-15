import React from 'react'
import { TbHandFingerRight } from "react-icons/tb";

const EmployeeTaskFullDetails = ({ data }) => {
    return (

        <div
            id='tasklist'
            className='max-w-full flex flex-col justify-start items-start flex-nowrap gap-2 p-4 mt-12 rounded-md md:flex-row md:flex-wrap md:gap-6 max-h-[500px]'>
            {data.map((task, index) => {
                return (
                    <div
                        key={index}
                        className='bg-[#f4be88] border-[1px] border-white w-80 h-fit text-black flex flex-col justify-center items-start flex-shrink-0 gap-2 p-4 mt-2 rounded-lg shadow-lg shadow-[#828661] md:h-56'>
                       
                        <div className='w-full flex flex-row justify-start items-center gap-2'>
                            <h2 className='w-fit rounded-md p-1 text-center'>DeadLine</h2>
                            <TbHandFingerRight className='text-red-600' />
                            <h2 className='bg-slate-200 w-fit rounded-md px-1 text-sm text-center'>{task.taskDeadline}</h2>
                        </div>

                        <h1 className='text-xl font-bold mt-2'>{task.taskTitle}</h1>

                        <p className='mt-2 overflow-hidden text-ellipsis line-clamp-3'>{task.taskDescription}</p>
                    </div>
                );
            })}
        </div>

    )
}

export default EmployeeTaskFullDetails
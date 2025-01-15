import React, { useContext } from 'react';
import AuthContext from '../../../LocalStorage/ContextAPI/AuthContext';

const AllTask = () => {
  const authData = useContext(AuthContext);
  const allEmployee = authData.employees;
 
  return (
    <div id="tasklist" className="w-full flex flex-col items-center  p-2 mt-4">
      
      <div className="text-white w-full p-1 flex flex-row justify-start items-start gap-2 font-bold text-sm md:text-base rounded-t-lg">
        <div className="flex-1 text-center">Employee ID</div>
        <div className="flex-1 text-center">New Task</div>
        <div className="flex-1 text-center">Accepted Task</div>
        <div className="flex-1 text-center">Completed Task</div>
        <div className="flex-1 text-center">Failed Task</div>
      </div>
 
      {allEmployee.map((emp, index) => {
        const taskCount = {
          newTask: 0,
          completedTask: 0,
          acceptedTask: 0,
          failedTask: 0,
        };

        emp.tasks.forEach((items) => {
          if (items.taskStatus === 'New Task') taskCount.newTask += 1;
          if (items.taskStatus === 'Completed Task') taskCount.completedTask += 1;
          if (items.taskStatus === 'Accepted Task') taskCount.acceptedTask += 1;
          if (items.taskStatus === 'Failed Task') taskCount.failedTask += 1;
        });

        return (
          <div
            key={index}
            className=" text-white w-full p-1 flex flex-row justify-start items-center font-bold text-sm md:text-base rounded-t-lg"
          >
            <div className="flex-1 text-center">{emp.employeeID}</div>
            <div className="flex-1 text-center">{taskCount.newTask}</div>
            <div className="flex-1 text-center">{taskCount.acceptedTask}</div>
            <div className="flex-1 text-center">{taskCount.completedTask}</div>
            <div className="flex-1 text-center">{taskCount.failedTask}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;

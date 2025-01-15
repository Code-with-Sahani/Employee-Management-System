import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../LocalStorage/ContextAPI/AuthContext'
import { getLocalStorage } from '../../../LocalStorage/LocalStorage'

const CreateTask = () => {

    let data = useContext(AuthContext)
    data = data.employees

    const [formData, setFormData] = useState({
        employeeID: "",
        taskTitle: "",
        deadLine: "",
        assignTo: "",
        category: "",
        description: ""
    })

    function handlesubmit(e) {
        e.preventDefault()
        const enterTask = {
            "taskTitle": formData.taskTitle,
            "taskDescription": formData.description,
            "taskDeadline": formData.deadLine,
            "taskCategory": formData.category,
            "taskStatus": "New Task"
        }
        console.log(enterTask)

        data.forEach((emp) => {
            if (emp.employeeID == formData.employeeID) {
                console.log('Yey hi hai Vo')
                emp.tasks.push(enterTask)
                localStorage.setItem("employees", JSON.stringify(data))
            }
        })
        console.log(getLocalStorage())

        setFormData({
            employeeID: "",
            taskTitle: "",
            deadLine: "",
            category: "",
            description: ""
        })
    }
    return (
        <form
            onSubmit={(e) => {
                handlesubmit(e)
            }}
            className='w-auto my-2 flex flex-col justify-center items-center p-4 rounded-lg gap-2 md:flex-row md:gap-72 md:border-[1px] md:border-white'>

            <div className='flex flex-col justify-center items-start gap-2'>
                <label className='text-white'>Employee ID</label>
                <input
                    className='w-72 h-10 p-1 rounded-md'
                    value={formData.employeeID} // Controlled Input
                    onChange={(e) => setFormData({ ...formData, employeeID: e.target.value })}

                    type="text"
                    placeholder='Enter Employee ID' />
                <label className='text-white'>Task Title</label>
                <input
                     className='w-72 h-10 p-1 rounded-md'
                    value={formData.taskTitle}
                    onChange={(e) => {
                        setFormData({ ...formData, taskTitle: e.target.value })
                    }}
                    type="text"
                    placeholder='Add Task Title' />

                <label className='text-white'>Deadline</label>
                <input
                     className='w-72 h-10 p-1 rounded-md'
                    value={formData.deadLine}
                    onChange={(e) => {
                        setFormData({ ...formData, deadLine: e.target.value })
                    }}
                    type="date"
                    placeholder='Enter DeadLine' />
                <label className='text-white'>Category</label>
                <input
                     className='w-72 h-10 p-1 rounded-md'
                    value={formData.category}
                    onChange={(e) => {
                        setFormData({ ...formData, category: e.target.value })
                    }}
                    type="text"
                    placeholder='Add Task category' />
            </div>
            <div className='  flex flex-col justify-center items-start gap-2'>

                <label className='text-white'>Description</label>
                <textarea
                    className='w-72 p-1 h-48 rounded-md '
                    cols="30" rows="10"
                    value={formData.description}
                    onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value })
                    }}
                    placeholder='Add Task Title'
                >
                </textarea>
                <button
                    className='w-72 p-1 h-8 rounded-md bg-green-600 text-white'
                    type="submit">Create Task</button>
            </div>
        </form>
    )
}
export default CreateTask
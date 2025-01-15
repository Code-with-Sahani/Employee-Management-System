
const admin = [
    {
        "firstName": "Admin Sir",
        "email": "admin@example.com",
        "password": "123456"
    }
];

const employees =[
    {
        "employeeID": 101,
        "firstName": "Aarav Sharma",
        "email": "a@a.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Develop Login Page",
                "taskDescription": "Design and implement a responsive login page for the company portal.",
                "taskDeadline": "2025-01-17",
                "taskCategory": "Frontend",
                "taskStatus": "Failed Task"
            },
            {
                "taskTitle": "Setup CI/CD Pipeline",
                "taskDescription": "Configure Jenkins for automated deployment.",
                "taskDeadline": "2025-01-12",
                "taskCategory": "DevOps",
                "taskStatus": "New Task"
            },
            {
                "taskTitle": "Write Test Cases",
                "taskDescription": "Create test cases for the user authentication module.",
                "taskDeadline": "2025-01-11",
                "taskCategory": "Testing",
                "taskStatus": "New Task"
            },
            {
                "taskTitle": "API Integration",
                "taskDescription": "Integrate payment gateway API into the backend system.",
                "taskDeadline": "2025-01-27",
                "taskCategory": "Backend",
                "taskStatus": "New Task"
            }
        ]
    },
    {
        "employeeID": 102,
        "firstName": "Priya Singh",
        "email": "priya.singh@example.com",
        "password": "Priya@2025",
        "tasks": [
            {
                "taskTitle": "Backend Optimization",
                "taskDescription": "Optimize database queries to reduce API response time.",
                "taskDeadline": "2025-01-26",
                "taskCategory": "Backend",
                "taskStatus": "New Task"
            },
            {
                "taskTitle": "UI Component Redesign",
                "taskDescription": "Redesign dashboard components for better user experience.",
                "taskDeadline": "2025-01-27",
                "taskCategory": "Frontend",
                "taskStatus": "New Task"
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review PRs for the new analytics module.",
                "taskDeadline": "2025-01-26",
                "taskCategory": "Frontend",
                "taskStatus": "Accepted Task"
            },
            {
                "taskTitle": "Wireframe Review",
                "taskDescription": "Provide feedback on design wireframes for the admin panel.",
                "taskDeadline": "2025-01-27",
                "taskCategory": "Design",
                "taskStatus": "Accepted Task"
            },
            {
                "taskTitle": "Debug Authentication",
                "taskDescription": "Fix login issues on the production server.",
                "taskDeadline": "2025-01-26",
                "taskCategory": "Frontend",
                "taskStatus": "Failed Task"
            }
        ]
    },
    {
        "employeeID": 103,
        "firstName": "Rahul Verma",
        "email": "rahul.verma@example.com",
        "password": "Rahul@123",
        "tasks": [
            {
                "taskTitle": "Setup Cloud Environment",
                "taskDescription": "Configure AWS environment for the new project.",
                "taskDeadline": "2025-01-22",
                "taskCategory": "DevOps",
                "taskStatus": "Completed Task"
            },
            {
                "taskTitle": "Regression Testing",
                "taskDescription": "Perform regression testing for the payment module.",
                "taskDeadline": "2025-01-26",
                "taskCategory": "Testing",
                "taskStatus": "Failed Task"
            },
            {
                "taskTitle": "Create Design Mockups",
                "taskDescription": "Create mockups for the new landing page.",
                "taskDeadline": "2025-01-27",
                "taskCategory": "Design",
                "taskStatus": "Failed Task"
            },
            {
                "taskTitle": "Logo Redesign",
                "taskDescription": "Redesign the company logo for the rebranding campaign.",
                "taskDeadline": "2025-01-18",
                "taskCategory": "Design",
                "taskStatus": "Failed Task"
            }
        ]
    },
    {
        "employeeID": 104,
        "firstName": "Ananya Iyer",
        "email": "ananya.iyer@example.com",
        "password": "Ananya@321",
        "tasks": [
            {
                "taskTitle": "Frontend Bug Fixes",
                "taskDescription": "Fix UI bugs in the employee dashboard.",
                "taskDeadline": "2025-01-13",
                "taskCategory": "Frontend",
                "taskStatus": "Failed Task"
            },
            {
                "taskTitle": "Illustration Design",
                "taskDescription": "Design illustrations for the marketing page.",
                "taskDeadline": "2025-01-16",
                "taskCategory": "Design",
                "taskStatus": "Accepted Task"
            },
            {
                "taskTitle": "Update Login System",
                "taskDescription": "Implement OTP-based authentication for login.",
                "taskDeadline": "2025-01-12",
                "taskCategory": "Frontend",
                "taskStatus": "Completed Task"
            }
        ]
    },
    {
        "employeeID": 555,
        "firstName": "Checking",
        "email": "c@c.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Frontend Bug Fixes",
                "taskDescription": "Fix UI bugs in the employee dashboard.",
                "taskDeadline": "2025-01-13",
                "taskCategory": "Frontend",
                "taskStatus": "Failed Task"
            }
        ]
    },
    {
        "employeeID": 105,
        "firstName": "Karan Patel",
        "email": "karan.patel@example.com",
        "password": "Karan@567",
        "tasks": [
            {
                "taskTitle": "Database Schema Update",
                "taskDescription": "Modify schema to include audit logs for user actions.",
                "taskDeadline": "2025-01-21",
                "taskCategory": "Backend",
                "taskStatus": "Accepted Task"
            },
            {
                "taskTitle": "Design Feedback Session",
                "taskDescription": "Conduct feedback session for the revamped homepage.",
                "taskDeadline": "2025-01-25",
                "taskCategory": "Design",
                "taskStatus": "Failed Task"
            },
            {
                "taskTitle": "Integrate Email Service",
                "taskDescription": "Setup email service for password recovery functionality.",
                "taskDeadline": "2025-01-17",
                "taskCategory": "Backend",
                "taskStatus": "New Task"
            },
            {
                "taskTitle": "Cross-Browser Testing",
                "taskDescription": "Test the application on different browsers for compatibility.",
                "taskDeadline": "2025-01-20",
                "taskCategory": "Frontend",
                "taskStatus": "Accepted Task"
            }
        ]
    }
]



export function setLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export function getLocalStorage() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { admin, employees };
}



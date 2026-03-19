
const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "e@e.com",
    password: "123",
    taskCount:{
      active:2,
      newTask:1,
      complate:1,
      failed:0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2026-02-01",
        category: "Reports",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Team Meeting",
        description: "Attend weekly team meeting",
        date: "2026-02-02",
        category: "Meeting",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Bug Fix",
        description: "Fix login page bug",
        date: "2026-01-28",
        category: "Development",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstname: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskCount:{
      active:1,
      newTask:0,
      complate:1,
      failed:0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Design Banner",
        description: "Create banner for website",
        date: "2026-02-03",
        category: "Design",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Client Call",
        description: "Discuss project requirements",
        date: "2026-02-04",
        category: "Communication",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Update Content",
        description: "Update homepage content",
        date: "2026-02-01",
        category: "Content",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstname: "Vikram",
    email: "employee3@example.com",
    password: "123",
    taskCount:{
      active:3,
      newTask:1,
      complate:2,
      failed:1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Database Backup",
        description: "Take database backup",
        date: "2026-02-01",
        category: "Database",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Optimize Query",
        description: "Improve slow SQL queries",
        date: "2026-01-30",
        category: "Database",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Security Check",
        description: "Check app vulnerabilities",
        date: "2026-02-05",
        category: "Security",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstname: "Rohit",
    email: "employee4@example.com",
    password: "123",
    taskCount:{
      active:2,
      newTask:1,
      complate:1,
      failed:1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Write Blog",
        description: "Write tech blog article",
        date: "2026-02-02",
        category: "Writing",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "SEO Audit",
        description: "Perform SEO audit",
        date: "2026-01-29",
        category: "Marketing",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Email Campaign",
        description: "Send marketing emails",
        date: "2026-02-06",
        category: "Marketing",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstname: "Neeraj",
    email: "employee5@example.com",
    password: "123",
    taskCount:{
      active:1,
      newTask:0,
      complate:1,
      failed:0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Test Application",
        description: "Perform app testing",
        date: "2026-02-01",
        category: "Testing",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Create Test Cases",
        description: "Write test cases",
        date: "2026-01-30",
        category: "Testing",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Deploy Build",
        description: "Deploy new version",
        date: "2026-02-04",
        category: "Deployment",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorege = ()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorege = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees,admin}


}
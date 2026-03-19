import React from 'react'

const ComplateTask = ({data}) => {
  return (
   <div className='shrink-0 w-75 h-full p-5 bg-purple-400 rounded-xl '> 
    <div className="flex justify-between">
      <h3 className="bg-green-600 px-3 py-1 text-sm rounded ">{data.category}</h3>
      <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className='mt-2'>
        <button className='w-full bg-green-500 rounded font-medium py-1 px-2 text-xs mt-3'>Completed</button>
      </div>
      </div>
  )
}

export default ComplateTask

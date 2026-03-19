import AcceptTask from "./AcceptTask"
import ComplateTask from "./ComplateTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='flex h-[55%] w-full  items-center justify-start gap-5 flex-nowrap mt-10 py-5 overflow-x-auto '>
      {data.tasks.map((elem, idx)=>{

        if(elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.complete){
          return <ComplateTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
   
  </div>
  )
}

export default TaskList

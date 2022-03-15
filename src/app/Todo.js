import React,{useState,useEffect} from 'react'
import Alltodo from './Alltodo';

// const getTododata = ()=>{
//     let localdata = localStorage.getItem('user');
//     if(localdata){
//         return JSON.parse(localStorage.getItem('user'))
//     }else{
//         return [];
//     }
// }
const Todo = () => {
    const [todoItem, setTodoItem] = useState('');
    const [toggle, setToggle] = useState(true);
    const [Editable, setEditable] = useState(null);
    const [todolist, setTodolist] = useState((localStorage.hasOwnProperty('user') === true) ? JSON.parse(localStorage.getItem('user')) : []);

    const inputHandle = (e) =>{
        setTodoItem(e.target.value);
        
    }
    // console.log(todoItem);
    const addItem = (e)=>{
        e.preventDefault();
       if(!todoItem){

       }else if(todoItem && !toggle){
           console.log(Editable);
           
        setTodolist(
            todolist.map((elem)=>{
                // console.log(elem);
                console.log('here1');
                if(elem.id === Editable){
                    // console.log();
                    return {...elem,name:todoItem}
                }
                return elem;
            })
        )
       }else{
        const newItems = {id:new Date().getTime().toString(),name:todoItem}   
        setTodolist([...todolist,newItems]);
        setTodoItem('');
       }
    }

    const DeleteItems = (id)=>{
        const updateUserData = todolist.filter((elem)=>{
            return elem.id !== id
        });
        setTodolist(updateUserData);
    }

    const EditItems = (id)=>{
        let getData = todolist.find((elem)=>{
            return elem.id === id
        });

        setTodoItem(getData.name);
        setToggle(false);
        setEditable(id);
        
    }
    
    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(todolist));
    }, [todolist])
    

  return (
    <>  
        
        <form className='todo-form' id='todo-form' method='post' >
            <div className='form-group'>
            <input type='text' placeholder='Enter Text...' className='form-control' name='todoList' value={todoItem} onChange={inputHandle} />
            {
                toggle ? <button type='submit' className='btn-primary' onClick={addItem}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button> : <button type='button' className='btn edit-items btn-primary' onClick={addItem}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
            }
            
            </div>
        </form>
        <Alltodo todolistinfo={todolist} deleted={DeleteItems} edit={EditItems} />
        
    </>
  )
}

export default Todo
import React from 'react'

const Alltodo = ({todolistinfo,deleted,edit}) => {
    

  return (
    <>
    <div className='all-todo'>
            <ul>
                {
                    todolistinfo.map((currElem)=>{

                        // const {id,name} = currElem;
                        
                        return  <li key={currElem.id}>
                                    <div className='list-info'>
                                        <span className='item-name'>{currElem.name}</span>
                                        <span className='item-name'>
                                            <button type='button' className='btn edit-items' onClick={()=>edit(currElem.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
                                            <button type='button' className='btn delete-items' onClick={()=>deleted(currElem.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
                                        </span>
                                    </div>
                                </li>
                    })
                }
               
            </ul>
        </div>
    </>
  )
}

export default Alltodo
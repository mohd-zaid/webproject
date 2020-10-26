import React from 'react';

const Ninjas =(props)=>{
    

    const onSubmit=(e)=>{
        e.preventDefault()
       props.show()      
    }
   
  
        return(
           <form onSubmit={onSubmit}>
                <input type="text" value={props.name} name="name" onChange={(e)=>props.setName(e.target.value)} />
                <input type="text" value={props.email} name="email" onChange={(e)=>props.setEmail(e.target.value)} />

           <button type="submit">Submit</button>

            {props.sh?<h1>{props.name}{'          '}{props.email}</h1>:null}
           </form>
           
        )
    }



export default Ninjas
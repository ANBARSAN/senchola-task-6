import React from 'react'

const Sin = ({popup,setPopup}) => {

   
    function handleSp(e){
  e.preventDefault()
    }
    if(!popup ) return null

    function close(){
        setPopup(false)
    }

  return (
    <div>
        <div>
       <form action="" className='form' onSubmit={handleSp}>
       <i class="fa fa-times" aria-hidden="true" id='close' onClick={close}></i>
         <h2> Singup </h2>
         <label htmlFor="name">Username</label>
         <input type="text" placeholder='Enter Username'/>
         <label htmlFor="pass">Password</label>
         <input type="password" placeholder='Enter Password'/>
         <label htmlFor="pass">Confirm Password</label>
         <input type="password" placeholder='Enter Password'/>
         <button> Submit </button>
         
       </form>

    </div>
    </div>
  )
}

export default Sin;
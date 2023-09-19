import './Log.css'


const Log = ({show,setShow}) => {

    function handleSum(e){
    e.preventDefault()
    }

    function close(){
        setShow(false)
    }

    if(!show ) return null

  return (
    <div>
       <form action="" className='form' onSubmit={handleSum}>
       <i class="fa fa-times" aria-hidden="true" id='close' onClick={close}></i>
         <h2> Login </h2>
         <label htmlFor="name">Username</label>
         <input type="text" placeholder='Enter Username'/>
         <label htmlFor="pass">Password</label>
         <input type="password" placeholder='Enter Password'/>
         <button> Submit </button>
         <label htmlFor="" id='fg'>Forget password ?</label>
       </form>

    </div>
  )
}

export default Log;
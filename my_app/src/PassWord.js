import React, { useRef, useState} from 'react'

export default function PassWord() {

    let[password,setPassword]=useState("")
    let [hobby , setHobby] = useState({
        ischar : false,
        isnum : false,
    })
    // let[len,setLength]=useState(8)
    let inputRef=useRef()


    let passwordGen=(event)=>
    {
             let str="ABCDabcd"
             setHobby({
                ...hobby,
                [event.target.name] : event.target.checked
            });

            //  setChar(event.target.checked)
            // //  setNum(event.target.checked)

             if(hobby.ischar)
             {  
               
                str=str+"!@#$%^&*"
                setPassword(str)
             }
             if(hobby.isnum)
             {
               

                str=str+"123456789"
                setPassword(str)
             }
             
             console.log(str)
    }

    let copyPassword=()=>
    {
        let x=inputRef.current.value
        console.log(x)

    }

  return (
   <React.Fragment>
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-8'>
                <div className='card '>

                      <div className='card-header'>
                      <div class="input-group mt-3">
                            <input ref={inputRef} onChange={passwordGen} value={password} type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button onClick={copyPassword} class="btn btn-sm btn-info" type="button">Copy</button>
                            </div>
                        </div>

                      </div>

                      <div className='card-body'>

                      {/* <label for="customRange1" class="form-label">Example range</label>
                      <input type="range" class="form-range bg-warning" id="customRange1"/> */}

                      <div class="form-check">
  <input name="ischar" onChange={passwordGen} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Charcter
  </label>
</div>
<div class="form-check">
  <input name="isnum" onChange={passwordGen} class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label" for="flexCheckChecked">
    Number
  </label>
</div>

                      </div>
                       
                </div>

            </div>

        </div>

    </div>
   </React.Fragment>
  )
}

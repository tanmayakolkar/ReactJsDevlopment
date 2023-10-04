import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../CounterSlice'
import{decrement } from '../CounterSlice'


export default function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.count)

    console.log(count)


    let update=()=>
    {
      
        dispatch(increment())
    }
    let updateDec=()=>
    {
      
        dispatch(decrement())
    }

  return (
    <>
       <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Counter App</h3>
                    </div>
                    <div className='card-body'>
                        <p>Count:{count}</p>

                    </div>

                    <div className='card-footer'>
                        <button onClick={update} className='btn btn-sm btn-danger'>Click</button>
                        <button onClick={updateDec} className='btn btn-sm btn-danger mx-3'>Click</button>
                    </div>

                </div>

            </div>

        </div>

       </div>
    </>
  )
}

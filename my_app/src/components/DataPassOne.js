import React, { Component } from 'react'
import DatsPassTwo from './DatsPassTwo'

export default class DataPassOne extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      ParentData:"I am from Parent"
    }
  }

  update=()=>{
    this.props.send(this.state.ParentData)
  }
  render() {
    return (
      <>
      <div>DataPassOne</div>
      <button onClick={this.update} className='btn btn-sm btn-danger'>Click</button>

      <DatsPassTwo/>

      </>
    )
  }
}

import React, { Component } from 'react'

export default class DatsPassTwo extends Component {

 constructor(props)
 {
   super(props)
 }

  render() {
    return (
      <>
     <h6 className='text-info'>Hello I am comming from data one components{this.props.sendData}</h6>
      </>

    )
  }
}

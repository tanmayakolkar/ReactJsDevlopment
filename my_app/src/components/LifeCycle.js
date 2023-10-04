import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props)
    {
        super(props)
        console.log("constructure one")
    }
    componentDidMount()
    {
        console.log("component did mount")
    }
    componentWillUnmount()
    {
        console.log("componentWillUnmount")
    }
  render() {
    console.log("render method")
    return (
      <div>LifeCycle</div>
    )
  }
}

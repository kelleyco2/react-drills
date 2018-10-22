import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
      value: ''
    }

    this.updateList = this.updateList.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  updateList(e){
    let newList = this.state.list.slice(0)
    newList.push(this.state.value)
    this.setState({
      list: newList
    })
  }

  updateValue(e){
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let list = this.state.list.map((element, i) => {
      return(
        <Todo key={i} task={element}/>
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.value} onChange={this.updateValue}/>
        <button onClick={this.updateList}>Add</button>
        <br />
        {list}
      </div>
    );
  }
}

export default App;

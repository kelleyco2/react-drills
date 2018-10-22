import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
    }

    this.updateList = this.updateList.bind(this)
  }

  updateList(value){
    let newList = this.state.list.slice(0)
    newList.push(value)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.updateList}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;

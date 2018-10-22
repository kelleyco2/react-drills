import React, { Component } from 'react';

class NewTask extends Component {
    constructor(){
        super()

        this.state = {
            input: ''
        }

        this.updateInput = this.updateInput.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    updateInput(e){
        this.setState({
            input: e.target.value
        })
    }

    handleAdd(){
        this.props.add(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
          <div>
              <input value={this.state.input} onChange={this.updateInput} />
              <button onClick={this.handleAdd}>Add</button>
          </div>
        );
      }
}

export default NewTask
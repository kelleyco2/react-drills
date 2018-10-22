import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()
    
        this.state = {
          username: '',
          password: ''
        }

        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.login = this.login.bind(this)
      }
    
      updateUsername(e){
        this.setState({
          username: e.target.value
        })
      }
    
      updatePassword(e){
        this.setState({
          password: e.target.value
        })
      }

      login(){
          alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
      }

    render(){
        return(
            <div>
                <input value={this.state.username} onChange={this.updateUsername}/>                <input value={this.state.password} onChange={this.updatePassword}/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;
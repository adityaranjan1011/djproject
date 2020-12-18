import React from 'react';
import Button from "@material-ui/core/Button";

class LoginComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            emailId:'',
            password:''
        }
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = () => {
        
        if(this.state.emailId === "digital" && this.state.password === "12345"){
                this.props.history.push('/profile-page');
        }              
        else{
            alert('Register Yourself First');
            this.props.history.push('/register-page');
        }
    }

    render(){
        return(
            <div className="login-page">
            <h2>Login Here</h2>
            <div className="input-container">
                <div className="input-mobile">                       
                <input className="input-box" type="text" name='emailId' placeholder="Enter email" onChange={this.handleChange}/>
                <input className="input-box" type="text" name='password' placeholder="Password" onChange={this.handleChange}/>
                </div>
               <div>
                 <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                        </Button>
                        </div>                   
            </div>
        </div>
        )
    }
}

export default LoginComponent;
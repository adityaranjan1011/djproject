import React from "react";
import Button from "@material-ui/core/Button";
import fire from '../fire';

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      msg: false,
      password:''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
   
    let user_data = fire.database().ref('userData').orderByKey().limitToLast(100);
    fire.database().ref('userData').push(this.state);
   
    // localStorage.setItem('userData',JSON.stringify(this.state));
      setTimeout(() => {
         alert('Register successfully!');
         this.props.history.push('/');
     },100)
    e.preventDefault();

  };

//   componentWillReceiveProps(props) {
//     if (props.signUp_status) {
//       this.setState({
//         msg: true,
//       });
//       this.props.history.push("/profile-page");
//     }
//   }

  render() {
    return (
      <div className="signup-page">
        <h2>Register Here</h2>

        <div className="signup-container">
          <form className="container-page" onSubmit={this.handleSubmit}>
            <div>
              <input
                className="input-box"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => this.handleChange(e)}
                value={this.state.firstName}
              />
              <input
                className="input-box"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => this.handleChange(e)}
                value={this.state.lastName}
              />
              <input
                className="input-box"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => this.handleChange(e)}
                value={this.state.email}
              />
              <input
                className="input-box"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={(e) => this.handleChange(e)}
                value={this.state.phoneNumber}
              />
              <input
                className="input-box"
                type="text"
                name="password"
                placeholder="Password"
                onChange={(e) => this.handleChange(e)}
                value={this.state.password}
              />
             
              
            </div>

            {/* <input type="text" name="firstName" placeholder="First Name" onChange={e=>this.handleChange(e)}  value={this.state.firstName} /> */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterComponent ;

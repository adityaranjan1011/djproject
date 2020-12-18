import React from "react";
import Button from "@material-ui/core/Button";
import fire from "../fire";
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: "",
      list: [],
    };
  }

  componentDidMount(props) {
    // console.log(this.props);
    fire.database()
      .ref("table").on("value", (item) => {
        let data_list = [];
        item.forEach((data) => {
          data_list.push(data.val());
        });

        data_list.map((item) =>
          this.setState({
            ratings: item.product_rating,
          })
        );
        this.setState({
          list: data_list,
        });
      });
    //   fire.database().ref("ratings").on("value",(item)=> {
    //       let rating =[];
    //       item.forEach((ele) => {
    //         //   console.log(ele.val());
    //         this.setState({
    //             rating:ele.val()
    //         })
    //       })

    //   })
  }

  handleChange = (e) => {
    this.setState({
      ratings: e.target.value,
    });
  };

  handleSubmit = (e) => {
    
    let userRatings = fire.database().ref('ratings').orderByKey().limitToLast(100);
    fire.database().ref('ratings').push(this.state);
    e.preventDefault();
  }


  handleLogOut = () => {
    setTimeout(() => {
      this.props.history.push("/");
    }, 100);
  };

  render() {
   
    const data = this.state.list;

    return (
      <div>
        <div className="profile">
          <div className="profile-header">
            <h2>Profile Page</h2>
            <p onClick={this.handleLogOut}>Log Out</p>
          </div>
        </div>

        <div className="profile-container">
          {data.map((item) => (
            <div>
              <h2>{item.product_name}</h2>

              <div className="product-details">
            <div> <img className="profile-pic" src={item.product_image} alt="imag"></img> </div>
               <div className="product_price"> <p>Price: {item.product_price}</p>
                <p>MRP: {item.product_MRP}</p>
                <p>Save: {item.save}</p>
                </div>
              </div>
            </div>
          ))}
         
          <div className="product-rating">
            <label>Ratings :</label>
            <input
              className="input-boxes"
              name="ratings"
              value={this.state.ratings}
              onChange={this.handleChange}
            />
             <label>out of 5</label>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit ratings
          </Button>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

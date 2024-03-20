import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "dummy6789",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vaish2020561");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {login}</h2>
        <img src={avatar_url}></img>
        <h4>Contact: vaishuridhu@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>about class component</h1>
                <UserClass />
            </div>
        );
    }
}


export default About;
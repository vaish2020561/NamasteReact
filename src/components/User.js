import {useState} from "react";

const User = ({name}) => {
    const [count ,setCount] = useState(0);
    const [count2 ] = useState(0);

    return(
        <div className="user-card">
            <h1>count= {count}</h1>
            <h1>count2= {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Kanpur</h3>
            <h4>Contact: vaishuridhu@gmail.com</h4>
        </div>
    )
}

export default User;
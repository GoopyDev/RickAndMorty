import React from "react";
import "./Form.modules.css"

export default function Form () {
    const [userData, setUserData] = React.useState({
        username: '',
        password: '' });
    const [errors, setErrors] = React.useState({
        username: '',
        password: '' });

    function handleChange(event) {
        setUserData({...userData, [event.target.id]: event.target.value})
    }

    function submitHandler(event) {
        event.preventDefault();
    }

    return (
        

        <div className="mainDiv">
            <form onSubmit={submitHandler}>
                <h1>Bienvenido!</h1>
                <label htmlFor="username">Username</label>
                <input type="text"     id="username" value={userData.username} onChange={handleChange} />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={userData.password} onChange={handleChange} />
                
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
import { useState, useEffect } from "react";
import { useContext } from "react";
import "./LoginPopup.css"
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = ({setShowLogin}) => {
    const [curState, setCurState] = useState("login");
    const [data,setData]= useState({
        name:"",
        email:"",
        password:"",
    });

    const onChangeHandler = (e) =>{
        const {name, value} = e.target;
        setData({...data,[name]:value});
    }
}

return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curState!=="login"?(
                    <input type="text" name="name" value={data.name} onChange={onChangeHandler} placeholder="Your name" required/>
                ): (<></>)}

                <input type="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Your email" required/>
                <input type="password" name="password" value={data.password} onChange={onChangeHandler} placeholder="Password" required/>
            </div>
        <div>
            <button type="submit">{curState}</button>
            <div className="login-popup-condition">
                <input type="checkbox" />
                <p>By continuing i agree to terms and privacy policy</p>
            </div>
            {curState}==="Log In"?(
                <p>
                    Create new account?{" "}
                    <span onClick={()=>setCurState("Sign up")}>Click here</span>
                </p>):
                (<p>
                    Already have an account?{""}
                    <span onClick={()=>setCurState("log in")}>Log in here</span>
                </p>
            )
        <form/>
        </div>
    </div>

)
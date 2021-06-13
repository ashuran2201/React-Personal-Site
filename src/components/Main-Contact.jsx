import React, { Component } from 'react';
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import '../style/css/style.css';

const style1 = { color: "#00aced", fontSize: "5em" }
const style2 = { color: "#ffffff", fontSize: "5em", background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"}
const style3 = { color: "white", fontSize: "5em" }

class MainContact extends Component{
render() {
return(
<div className="container">
    {/* Main Content */}
    <div className="contact-container">
        <h1 className="contact-titles">Have a Question??</h1>

    </div>
    {/* middle content */}
    <div className="mid-contact-container">
        <h1 className="sns-title">
            Feel free to ask me on
        </h1>
            <div className="sns-icons">
                <a href="/">
                <FaTwitter style={style1}/>
                <p className="title1">Twitter</p>
                </a>
                <a href="">
                <FaInstagram style={style2}/>
                <p className="title2">Instagram</p>
                </a>
                <a href="">
                <FaEnvelope style={style3}/>
                <p className="title3">Gmail</p>
                </a>
            </div>
    </div>
</div>
)
}

}


export default MainContact;
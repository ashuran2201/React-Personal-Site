import React, { Component } from 'react';
import propic from '../style/images/DSC_0011.png';
import chill from '../style/images/chill.png';
import '../style/css/style.css'
import {
Row,
Col,
} from 'reactstrap';
class Main extends Component{
render() {
return(
<div className="container">
    {/* Head CONTENT */}
    <div className="head-container">
        <img className="propic" src={propic} alt="Profile pic" />
        <h1 className="name"> Hi, I'm Sultan Naufal</h1>
        <h5 className="title">a Web Developer</h5>
    </div>
    {/* middle content */}
    <div className="mid-container">
        <Row>
            <Col sm="6">
            <div className="text-box1">
                <h3 className="what">What I do?</h3>
                <p className="what-desc">I'm a Web Developer, specifically I'm a Frontend Developer and my job is
                    creating
                    website for you to use. <br /> I also enjoy Writing short-story as one of my wish is to create a
                    sci-fi
                    novel, so you might found my writing on this site, if you do feel free to give a review.</p>
            </div>
            </Col>
            <Col sm="6">
            <div className="text-box2">
                <h3 className="short">Short Intro</h3>
                <p className="short-desc">Hi, everyone. <br /> My name is Sultan Naufal Fardhan Prima, but you can call
                    me
                    Sultan. I'm a Web Developer who willing to work in a company or freelance</p>
            </div>
            </Col>
        </Row>
        <img src={chill} alt="chill" className="vectorimg" />
    </div>
</div>
)
}

}


export default Main;
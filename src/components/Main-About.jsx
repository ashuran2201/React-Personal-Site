import React, { Component } from 'react';
import skills from '../style/images/skill.png';
import '../style/css/style.css'
import {
Row,
Col,
} from 'reactstrap';
class MainAb extends Component{
render() {
return(
<div className="container">
    {/* Main Content */}
    <div className="about-container">
        <div className="square1"></div>
        <div className="square2"></div>
        <div className="square3"></div>
        <div className="square4"></div>
        <div className="about-area">
            <h1 className="abou-title">About Me</h1>
            <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eum ipsam sunt
                facere magnam reiciendis alias eius enim perspiciatis illo culpa incidunt natus, ab aperiam, animi nemo.
                Voluptatum explicabo eligendi reiciendis doloremque soluta quasi quas dolor recusandae, ducimus fuga
                quae iusto minima, placeat iste cum vel, unde facilis tempora sint dolorum a architecto consectetur
                magni possimus! Vero et illo repellendus dolor a maiores laborum consequatur commodi placeat ducimus,
                culpa nemo reiciendis, molestiae facere, magni fuga voluptatum ipsam aliquam cupiditate aliquid.
                Repellat sequi in nulla. Fugit assumenda nihil sint facere corrupti, pariatur quisquam aperiam, autem
                inventore doloribus, ipsum nulla quis eligendi!</p>
        </div>
    </div>
    {/* middle content */}
    <div className="mid-about-container">
        <Row>
            <Col sm="6">
            <div className="about-box1">
                <h1 className="webdev">
                    Web Development
                </h1>
                <p className="skill1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis veniam perspiciatis in natus
                    delectus culpa incidunt eos earum quia totam ipsam nihil doloremque iste placeat reprehenderit rerum
                    vitae repellendus laboriosam, dolore eligendi amet voluptatem magni. Placeat doloremque quia harum,
                    iure libero dignissimos dicta. Consequatur nostrum error sunt quas culpa commodi dicta perspiciatis
                    quidem inventore laboriosam reprehenderit, aliquam atque dolore ullam repudiandae placeat. Eaque
                    eveniet molestiae error ipsum. Incidunt temporibus minus vel a, eius quia sequi?
                </p>
            </div>
            </Col>
            <Col sm="6">
            <div className="about-box2">
            <h1 className="other">
                    Other Skill
                </h1>
                <p className="skill2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis pariatur eum
                    exercitationem sit accusantium harum qui velit laboriosam accusamus excepturi rem consequuntur odio
                    ipsam culpa, aspernatur numquam praesentium atque, asperiores ipsum quas molestias eligendi vel.
                    Vero ullam autem rem, dolores cupiditate corporis odit commodi nam, aspernatur, sit vitae! Expedita
                    neque laborum placeat nobis, nemo harum quia repellendus, debitis sed deleniti nisi voluptatem vero
                    nam nulla incidunt? Labore ipsa voluptatum cupiditate, voluptates sed tempore necessitatibus!
                </p>
            </div>
            </Col>
        </Row>
        <h3 className="myskill">
            My Skills
        </h3>
        <img className="skillimg" src={skills} alt="skill" />
    </div>
</div>
)
}

}


export default MainAb;
import React, { Component } from 'react';
import '../style/css/style.css'
class Footer extends Component {
render () {
return(
<div className="container">
    {/* footer */}
    <footer className="foo">
        <h5 className="foo-logo">
            SultanNaufal
        </h5>
        <p className="howto">How to contact me?</p>
        <div className="contact">
            
            <li><a href="http://">Gmail</a></li>
            <li> <a href="http://">Instagram</a></li>
            <li> <a href="http://">Twitter</a></li>
        </div>
        <p className="arr">© 2021 Sultan Naufal.  All rights reserved.</p>
    </footer>
</div>
)
}

}


export default Footer;
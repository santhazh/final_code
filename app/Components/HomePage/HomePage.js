import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Background from '../../../assets/Images/home.png';
import logo from '../../../assets/Images/Overstock_logo.png';
import Modal from '../Modal/modal';

const bgStyle = {
    width: "100%",
    float: "left",
}

class HomePage extends React.Component{
    constructor() {
      super();
      this.state = ({isModalAppear: true});
    }

    

    closeModel = () => {
       // history.push('./home');
       console.log("clicked")
        this.setState({ isModalAppear: false })
        let ele = document.getElementById("bgImg")
        ele.style.opacity = 'initial';
    }


    render() {
        const {isModalAppear } = this.state;
        return (
            <Fragment>
            <img src={Background} alt="home background" style={bgStyle} onClick={this.closeModel} id="bgImg"/>
            <div>
                {isModalAppear && <Modal showModal ={isModalAppear} onClose={this.closeModel} />}
            </div>
        </Fragment>  
        );
    }
}

export default HomePage;

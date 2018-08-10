import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import logo from '../../../assets/Images/Overstock_logo.png';
import './Login.css';


const LoginPage = () => {
    return(
        <Fragment>
            <div className="bgStyle">
            <Grid>
                <Row>
                    <LoginForm />
                </Row>
            </Grid>
            </div>
        </Fragment>    
    );
};

export default LoginPage;

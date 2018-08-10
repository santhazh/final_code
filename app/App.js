import React, { Component } from 'react';
import LoginPage from './Components/Login/LoginPage';
import { Router, Route, browserHistory } from 'react-router'
import Com from '../app/Components/Com/Com';
import Govt from '../app/Components/Govt/Govt';
import history from './history';
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";
import HomePage from '../app/Components/HomePage/HomePage';
import Header from './Components/HeaderComponent/HeaderComponent';
import Footer from './Components/FooterComponent/FooterComponent';
import Layout from './Components/Layout';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <section id="mainWrap">
          <Router history={history}>
            <React.Fragment>
                <PrivateRoute exact  path="/" component={LoginPage} />
                {/* /render={matchProps => (<React.Fragment><Header /><Com /><Footer /></React.Fragment>)} */}
                {/* /render={matchProps => (<React.Fragment><Header /><Govt /><Footer /></React.Fragment>} */}
                <Route path="/com"  component={Com}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={HomePage} />               
                <Route path="/gov" component={Govt} />
            </React.Fragment>
          </Router>
        </section>
      </Layout>
    );
  }
}
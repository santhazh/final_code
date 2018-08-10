import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import React, {Component} from 'react'


export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
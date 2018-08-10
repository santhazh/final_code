import { Modal, Button } from 'react-bootstrap';
import React from "react";
import success from '../../../assets/Images/success_modal.png';
import close from '../../../assets/Images/close_icon.png';

const modalPopupHeaderStyles ={
    position: 'relative',
    padding: 80,
    fontSize: 30,
    textAlign: 'center'
}

const modalPopupStyles = {
    margin: 150
};
const closeIconStyle = {
    height: 50,
    float: 'right',
    marginRight: -75,
    marginTop: -75
};

export default class ModalPopup extends React.Component {
    constructor() {
      super();
    }

    
    render() {
         const { showModal, onClose } = this.props;

        return(
            <div className="static-modal">          
                <Modal.Dialog style={{"margin" : "15%","paddingLeft":"0px"}}>
                    <Modal.Body style={modalPopupHeaderStyles}>
                        <div style={{"display": "block"}}>
                            <img style={{height: 80}} src={success}  alt="success"/>
                        </div>    
                        <div>You have successfully created your Overstock Professional account.</div> 
                    </Modal.Body>
                </Modal.Dialog>
        </div>
        )
    }
}
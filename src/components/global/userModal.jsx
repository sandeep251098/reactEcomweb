import React, { useState, useEffect } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RemoveAllArrIdAction, RemoveAllDataAction } from "../../redux/action/productlistAction";

const UserModal = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signupData = useSelector((state) => state.signupData);

    const OnClickHandler = () => {
       props.onHide();
    }

    const LogoutHandler = () => {
        navigate("/");
        sessionStorage.setItem('token',false);
        dispatch(RemoveAllArrIdAction());
        dispatch(RemoveAllDataAction());

    }

    return (
        <Modal id="offerListModal" size="sm"  {...props} className="terms-Conditions-modal">

            <Modal.Header closeButton>
                <Modal.Title className="position-r">
                    @{signupData.firstname}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="red-scrollbar">
                <Col className="md">
                    <Row style={{ marginTop: "10px" }}>
                        <Col lg={12} style={{marginLeft: "100px"}}>
                            <span>
                                <Button onClick={() => OnClickHandler()} variant="primary" >Cancel</Button>
                            </span>
                            <span style={{marginLeft: "10px"}}>
                                <Button onClick={() => LogoutHandler()} variant="danger" >LogOut</Button>
                            </span>
                        </Col>
                    </Row>

                </Col>
            </Modal.Body>
        </Modal>
    )
}
export default UserModal;
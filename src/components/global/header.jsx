import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from "react-redux";
import CardItemListModal from "./cardItemModal";
import UserModal from "./userModal";

const style = {
    backgroundColor: "#03A9F4",
    height: "57px",
    width: "100%"
}

const Header = (props) => {

    const addToCardData = useSelector((state) => state.addToCardData);
    const [show, setShow] = useState(false);
    const [userModal, setUserModal] = useState(false);
    // console.log(props.headerType);

    return (
        <header style={style}>
            <Container fluid>
                {
                    props.headerType === "1" ?
                        <Row>
                            <Col md={4} >
                                <h4 style={{ lineHeight: "50px", textAlign: "center" }}>{props.title}</h4>
                            </Col>
                            <Col md={4} style={{ marginTop: "14px" }}>

                            </Col>
                            <Col md={4} style={{ marginTop: "14px" }}>

                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col md={4} >
                                <h4 style={{ lineHeight: "50px", textAlign: "center" }}>{props.title}</h4>
                            </Col>
                            <Col md={4} style={{ marginTop: "14px" }}>
                                <span>HOME</span>
                                <span style={{ marginLeft: "15px" }}>CLOTHINGS</span>
                                <span style={{ marginLeft: "15px" }}>ACCESSORIES</span>
                            </Col>
                            <Col md={4} style={{ marginTop: "14px" }}>
                                <span style={{cursor: "pointer"}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span>
                                <span onClick={()=>setShow(true)} style={{ marginLeft: "20px", cursor: "pointer" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>
                                <span style={{ position: "relative", top: "-11px", fontSize: "14px", }}>{addToCardData.length > 0 && addToCardData.length}</span>
                                <span onClick={()=>setUserModal(true)} style={{ marginLeft: "20px", cursor: "pointer" }}><FontAwesomeIcon icon="fa-solid fa-user" /></span>
                            </Col>
                        </Row>
                }
            </Container>
            <CardItemListModal show={show} onHide={()=>setShow(false)}/>
            <UserModal show={userModal} onHide={()=>setUserModal(false)}/>
        </header>
    )
}

export default Header;
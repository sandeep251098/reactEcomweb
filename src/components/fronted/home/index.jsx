import React, { useState } from "react";
import { Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';

import LoginPage from "./login";
import SignupPage from "./singnup";
import Header from "../../global/header";

const Home = (props) => {

    const [key, setKey] = useState('signup');

    return (
        <>
            <Header title={`Login Page`} headerType={props.headerType}/>
        <Container fluid>


            <Row style={{margin: "10px"}}>
                <Col md={6}></Col>
                <Col md={6}>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                        <Tab eventKey="login" title="LOGIN" style={{width: "100%"}}>
                            <LoginPage />
                        </Tab>
                        <Tab eventKey="signup" title="SIGNUP" style={{width: "100%"}}>
                            <SignupPage setKey={setKey}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home;
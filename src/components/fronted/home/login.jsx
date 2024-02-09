import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../../redux/action/loginAction";

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupData = useSelector((state) => state.signupData);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if ((signupData.cnfpassword === password) && (signupData.email === email)) {
            dispatch(LoginAction({ email: email, pass: password }));
            sessionStorage.setItem('token',true);
            navigate("/productList");
            setEmail("");
            setPassword("");
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid email or password.");
        }
    };

    return (
        <Container style={{ marginTop: "20px" }}>
            <Form>
                <Row>
                    {
                        errorMsg !== "" &&
                        <Col lg={12}>
                            <p style={{ display: "flex" }} className="text-danger">{errorMsg}</p>
                        </Col>
                    }
                    <Col lg={12}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ display: "flex" }}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ display: "flex" }}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={12}>
                        <div style={{ position: "absolute", right: "49px" }}>
                            <Link to="/forgotPassword">Forgot password</Link>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <Button style={{ width: "100%", marginTop: "40px" }} variant="primary" type="submit" onClick={handleLogin}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default LoginPage;
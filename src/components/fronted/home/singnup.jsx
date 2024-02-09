import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { SignUpAction } from "../../../redux/action/singnupAction";
import { StateDataAction } from "../../../redux/action/stateDataAction";
import { CityDataAction } from "../../../redux/action/cityDataAction";

const SignupPage = (props) => {

    const dispatch = useDispatch();
    const stateData = useSelector((state) => state.stateData);
    const cityData = useSelector((state) => state.cityData);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

    const [matchPass, setMatchPass] = useState("");

    const SubmitHandler = (data) => {
        //console.log(data);
        if (data.password === data.cnfpassword) {
            dispatch(SignUpAction({ ...data }))
            props.setKey("login");
            reset();
        } else {
            setMatchPass("Confirm password are not match.");
        }

    };

    useEffect(() => {
        if (watch("password") === watch("cnfpassword")) {
            setMatchPass("");
        } else {
            setMatchPass("Confirm password are not match.");
        }
    }, [watch("cnfpassword")])

    useEffect(() => {
        if (watch("state") !== "" && watch("state") !== null) {
            stateData?.filter(val => {
                if (val.name === watch("state")) {
                    dispatch(CityDataAction({ "state_id": val.id }))
                }
            })
        }
    }, [watch("state")])

    useEffect(() => {
        dispatch(StateDataAction());
    }, [])

    return (
        <Container style={{ marginTop: "20px" }}>
            <Form onSubmit={handleSubmit(SubmitHandler)} autoComplete="off">
                <Row className="row">

                    <Col lg={12}>

                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Individual/Enterprise/Government<span className="text-danger">*</span></Form.Label>
                            <Row>
                                <Col lg={4}>
                                    <Form.Check
                                        type="radio"
                                        label="Individual"
                                        checked={watch("indentgov") === "Individual" ? true : false}
                                        name="indentgov"
                                        value="Individual"
                                        style={{ display: "table" }}
                                        {...register("indentgov", {
                                            required: "This field is required.",
                                        })}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <Form.Check
                                        type="radio"
                                        label="Enterprise"
                                        checked={watch("indentgov") === "Enterprise" ? true : false}
                                        name="indentgov"
                                        value="Enterprise"
                                        style={{ display: "table" }}
                                        {...register("indentgov", {
                                            required: "This field is required.",
                                        })}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <Form.Check
                                        type="radio"
                                        label="Government"
                                        checked={watch("indentgov") === "Government" ? true : false}
                                        name="indentgov"
                                        value="Government"
                                        style={{ display: "table" }}
                                        {...register("indentgov", {
                                            required: "This field is required.",
                                        })}
                                    />
                                </Col>
                            </Row>
                            {errors.indentgov && <span className="text-danger" style={{ display: "flex" }}>{errors.indentgov.message}</span>}
                        </Form.Group>

                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>First Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstname"
                                {...register("firstname", {
                                    required: "Please enter valid first name.",
                                })}
                            />
                            {errors.firstname && <span className="text-danger" style={{ display: "flex" }}>{errors.firstname.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                {...register("lastname")}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Email<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                name="email"
                                {...register("email", {
                                    required: "Please enter valid email.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && <span className="text-danger" style={{ display: "flex" }}>{errors.email.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Address<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                placeholder="Address"
                                {...register("address", {
                                    required: "Please enter valid address.",
                                })}
                            />
                            {errors.address && <span className="text-danger" style={{ display: "flex" }}>{errors.address.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Country<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                type="text"
                                placeholder="Country"
                                name="country"
                                {...register("country", { required: "Please select your countru." })}
                            >
                                <option ></option>
                                <option >India</option>
                            </Form.Select>
                            {errors.country && <span className="text-danger" style={{ display: "flex" }}>{errors.country.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>State<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                type="text"
                                placeholder="State"
                                name="state"
                                {...register("state", { required: "Please select your state." })}
                            >
                                <option ></option>
                                {
                                    stateData?.map((val, ind) => {
                                        return (
                                            <option key={ind}>{val.name}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            {errors.state && <span className="text-danger" style={{ display: "flex" }}>{errors.state.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>City<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                type="text"
                                placeholder="City"
                                name="city"
                                {...register("city", { required: "Please select your city." })}
                            >
                                <option ></option>
                                {
                                    cityData?.map((val, ind)=>{
                                        return(
                                            <option key={ind}>{val.name}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            {errors.city && <span className="text-danger" style={{ display: "flex" }}>{errors.city.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Pincode<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Pincode"
                                name="pincode"
                                {...register("pincode", {
                                    required: "Please enter valid pincode.",
                                    pattern: {
                                        value: /^[1-9][0-9]{5}$/,
                                        message: 'Invalid PinCode format',
                                    },
                                })}
                            />
                            {errors.pincode && <span className="text-danger" style={{ display: "flex" }}>{errors.pincode.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Mobile Number<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mobile Number"
                                name="number"
                                {...register("number", {
                                    required: "Please enter valid number.",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid Phone Number',
                                    },
                                })}
                            />
                            {errors.number && <span className="text-danger" style={{ display: "flex" }}>{errors.number.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Fax</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Fax"
                                name="fax"
                                {...register("fax")}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={6}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                {...register("phone")}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Password<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                {...register("password", {
                                    required: "Please enter valid password.",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                        message: 'Must contain at least one one number and one uppercase and lowercase latter and at least 8 or more characters',
                                    },
                                })}
                            />
                            {errors.password && <span className="text-danger" style={{ display: "flex" }}>{errors.password.message}</span>}
                        </Form.Group>
                    </Col>

                    <Col lg={12}>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label style={{ display: "flex" }}>Confirm Password<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="password"
                                name="cnfpassword"
                                placeholder="Confirm Password"
                                {...register("cnfpassword", {
                                    required: matchPass !== "" ? "Please enter valid cnfpassword." : "Confirm password are not match.",
                                })}
                            />
                            {
                                matchPass === "" ? errors.cnfpassword && <span className="text-danger" style={{ display: "flex" }}>{errors.cnfpassword.message}</span>
                                    : <span className="text-danger" style={{ display: "flex" }}>{matchPass}</span>
                            }
                        </Form.Group>
                    </Col>

                    <Col lg={12} style={{ marginTop: "10px" }}>
                        <Button style={{ width: "100%" }} variant="primary" type="submit">
                            SignUp
                        </Button>
                    </Col>

                </Row>
            </Form>
        </Container>
    )
}

export default SignupPage;
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemoveToCardAction, RemoveToCardArrIDAction } from "../../redux/action/productlistAction";

const CardItemListModal = (props) => {

    const dispatch = useDispatch();
    const addToCardData = useSelector((state) => state.addToCardData);
    const [quantities, setQuantities] = useState([...addToCardData.map(item => item.quantity || 1)]);

    const DecrementData = (id) => {
        setQuantities((prevQuantities) => prevQuantities.map((quantity, index) =>
            index === id ? Math.max(quantity - 1, 1) : quantity
        ));
    }

    const IncrementData = (id) => {
        setQuantities((prevQuantities) => prevQuantities.map((quantity, index) =>
            index === id ? quantity + 1 : quantity
        ));
    }

    const RemoveToCardHandler = (item, id) => {
        dispatch(RemoveToCardAction(item));
        dispatch(RemoveToCardArrIDAction(id));
    }

    useEffect(() => {
        setQuantities([...addToCardData.map(item => item.quantity || 1)]);
    }, [addToCardData])

    return (
        <>
            <Modal id="offerListModal" size="lg"  {...props} className="terms-Conditions-modal">

                <Modal.Header closeButton>
                    <Modal.Title className="position-r">
                        Add Item(s)
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body className="red-scrollbar">
                    {
                        addToCardData.length > 0 ?
                            <Col className="lg">
                                <Row className="mt-2 fontsize-14" >
                                    {
                                        addToCardData?.map((item, ind) => {
                                            //console.log(item)
                                            return (
                                                <Col lg={12} className="py-3 pt-0 border-bottom" key={ind}>
                                                    <Row>
                                                        <Col lg={4}>
                                                            <img src={item.image} height={200} className="img-fluid"></img>
                                                        </Col>

                                                        <Col lg={4}>

                                                        </Col>

                                                        <Col lg={4}>
                                                            <Row>
                                                                <Col lg={12}>
                                                                    <span className="fw-600 me-2">{item.title}</span><br />
                                                                    <span className="fw-600 me-2">{item.category}</span>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={12}>
                                                                    {console.log()}
                                                                    <span className="fw-600 me-2">Rs. {quantities[ind] !== undefined ? quantities[ind]*item.price : item.price}</span>
                                                                </Col>
                                                            </Row>
                                                            <Row style={{ marginTop: "160px" }}>
                                                                <Col lg={12}>
                                                                    <span className="fw-600 me-2">
                                                                        <Button onClick={() => DecrementData(ind)} disabled="" style={{ margin: "10px" }} variant="primary" className="ml-3">-</Button>
                                                                        <span style={{ marginRight: "10px" }}>{quantities[ind] || 1}</span>
                                                                        <Button onClick={() => IncrementData(ind)} variant="primary" >+</Button>
                                                                    </span>
                                                                    <span>
                                                                        <Button onClick={() => RemoveToCardHandler(item, item.id)} variant="danger" >Remove</Button>
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <p>{item.description}</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                            :
                            <Col lg={12} style={{textAlign: "center", padding: "50px"}}>
                                <h2>Product Not Added.</h2>
                            </Col>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}
export default CardItemListModal;
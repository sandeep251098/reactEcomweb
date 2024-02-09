import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

import Header from "../../global/header";
import { AddToCardAction, AddToCardArrIDAction, DecrementAction, IncrementAction, ProductListAction, RemoveToCardAction, RemoveToCardArrIDAction } from "../../../redux/action/productlistAction";

const ProductList = (props) => {

    const dispatch = useDispatch();
    const productListData = useSelector((state) => state.productListData);
    const addToCardData = useSelector((state) => state.addToCardData);
    const addToCardArrayId = useSelector((state) => state.addToCardArrayId);


    const [count, setCount] = useState(0);

    const AddToCardHandler = (item, id) => {
        dispatch(AddToCardAction(item));
        dispatch(AddToCardArrIDAction(id));
    }

    const RemoveToCardHandler = (item, id) => {
        dispatch(RemoveToCardAction(item));
        dispatch(RemoveToCardArrIDAction(id));
    }

    useEffect(() => {
        dispatch(ProductListAction());
    }, [])

    // const DecrementData = (item) => {
    //     setCount(count - 1);
    //     dispatch(DecrementAction(item))
    // }

    // const IncrementData = (item) => {
    //     setCount(count + 1);
    //     dispatch(IncrementAction(item));
    // }
    return (
        <>
            <Header title={`SHOP/LANE`} headerType={props.headerType} />
            <Container fluid>
                <Row style={{ margin: "10px" }}>
                    <Container className='p-4'>
                        <Row xs={1} sm={2} md={3} lg={4} xl={4}>
                            {
                                productListData.map((item, ind) => (
                                    <Col key={ind} className="mt-3">
                                        <Card>
                                            <div className="product-image-container">
                                                <Card.Img className="product-image" variant="top" src={item.image} />
                                            </div>
                                            <Card.Body className="product-body">
                                                <Card.Title className="product-category">{item.category}</Card.Title>
                                                <Card.Text className="product-title">{item.title}</Card.Text>
                                                <div className="product-details">
                                                    <div className="product-price">
                                                        <span>Rs </span>
                                                        <span>{item.price}</span>
                                                    </div>
                                                    <div className="product-action">
                                                        {
                                                            addToCardArrayId.includes(item.id) ?
                                                                <Button onClick={() => RemoveToCardHandler(item, item.id)} variant="danger" >Remove To Card</Button>
                                                                :
                                                                <Button onClick={() => AddToCardHandler(item, item.id)} variant="primary" >Add To Card</Button>
                                                        }
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}

export default ProductList;
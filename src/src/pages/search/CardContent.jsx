import React from 'react';
import { Divider, Space, Button, Row, Col } from 'antd';

import { FaPlus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const CardContent = props => {

    return (
        <div className='card-content-wrapper'>
            <Row>
                <Col span={8}>
                    <Space.Compact direction='vertical'>
                        <Button><FaPlus size="25"/></Button>
                        <Button><GrLinkNext size="25"/></Button>
                    </Space.Compact>
                </Col>
                <Col className='product-details' span={16}>
                    <price>{props.price}€</price>
                    <market>{props.market}</market>
                </Col>
            </Row>
            <Divider />
            <Row>
                <p>{props.name}</p>
            </Row>
        </div>
    );
}

export default CardContent;
import React from 'react';
import { Divider, Space, Button, Row, Col } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchedProducts, selectedProducts } from './SearchActions';

import { FaPlus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const CardContent = props => {

    const product = props.product;
    const selectProduct = _ => props.selectedProducts(product);
    
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
                    <price>{product.price}€</price>
                    <market>{product.market}</market>
                </Col>
            </Row>
            <Divider />
            <Row>
                <p>{product.name}</p>
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({}) 
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CardContent);
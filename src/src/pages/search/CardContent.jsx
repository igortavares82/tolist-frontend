import React from 'react';
import { Divider, Space, Button, Row, Col } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchedProducts, selectedProducts, unselectedProduct } from './SearchActions';

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const CardContent = props => {
    
    const product = props.product;
    const view = props.view;
    const selected = props.products.selected;

    const selectedSum = _ => {

        let sum = selected.map(it => it.price).reduce((a, b) => a + b, 0);
        return (Math.round(sum * 100) / 100).toFixed(2);
    }

    const setSelectedCount = _ => {

        props.setSelectedCount(selected.lenght);
    }

    const selectProduct = _ => {
        
        if (selected.map(it => it.id).includes(product.id))
            return;
    
        var card = document.getElementById(product.id);
        card.style.opacity = "50%";
        props.selectedProducts(product);
        props.setSelectedCount(selected.length);
        props.setSelectedSum(selectedSum());
    }

    const unselectProduct = _ => {

        var card = document.getElementById(product.id);
        card.style.opacity = "100%";
        props.unselectedProduct(product);
        props.setSelectedCount(selected.length);
        props.setSelectedSum(selectedSum());

        if (view == "list") {
            card.remove();
        }
    }

    const isSelected = _ => selected.map(it => it.id).includes(product.id)

    return (
        <div className='card-content-wrapper'>
            <Row>
                <Col span={8}>
                    <Space.Compact direction='vertical'>
                        {
                            isSelected() ? 
                            <Button onClick={_ => unselectProduct()}><FaMinus size="25"/></Button>
                            :
                            <Button onClick={_ => selectProduct()}><FaPlus size="25"/></Button> 
                        }
                        
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

const mapStateToProps = state => ({ products: { selected: state.search.products.selected } }) 
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts, unselectedProduct}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CardContent);
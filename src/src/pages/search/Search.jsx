import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Avatar, Card, Row, Popover, Button } from 'antd';
import { GiFruitBowl } from "react-icons/gi";

import { searchedProducts, selectedProducts } from './SearchActions';
import PageTitle from '../../components/page-title/PageTitle';
import NotFoundImg from '../../assets/bg-no-picture-128x128.png';
import SearchBar from './SearchBar';
import CardContent from './CardContent';

import { CiCirclePlus } from "react-icons/ci";

const { Meta } = Card;

const Search = props => {
    
    const products = props.products.searched ? props.products.searched : [];
    const loadHandler = _ => props.searchedProducts();

    const renderProducts = _ => {

        return products.length > 0 ?
            <>
                <Row justify='center'>
                    {
                        products.map((product, index) => {
                            return (
                                <Card   key={index}
                                        style={{ maxWidth: '250px' }}
                                        cover={<img alt="no-content" src={NotFoundImg} />}>
                                        <CardContent {...product}/>
                                </Card>
                            );
                        })
                    }
                </Row>
                <Row justify='center'>
                    <Button className='load-more' onClick={() => loadHandler()}>
                        <CiCirclePlus size={35} />
                    </Button>
                </Row>
            </>
        :
            <Row justify='center'>
                <GiFruitBowl size={300} />
            </Row>
    }

    useEffect(() => {
        
        let container = createRoot(document.getElementById('products-container'));
        container.render(renderProducts());

    }, [products.length])

    return (
        <>
            <PageTitle title="Search" subtitle="search products with nice prices" />
            <Row>
                <SearchBar />
                <div id='products-container'>
                </div>
            </Row>
            <Row className='load-more-row'>
                {
                    products.length > 0 ? 
                    null
                    :
                    null
                }
            </Row>
        </>
    ); 
}

const mapStateToProps = state => ({products: { searched: state.search.products.searched, selected: state.search.selected }}) 
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Search);
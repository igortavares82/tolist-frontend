import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Avatar, Card, Row, Popover, Button, Empty, Col } from 'antd';

import { searchedProducts, selectedProducts } from './SearchActions';
import PageTitle from '../../components/page-title/PageTitle';
import NotFoundImg from '../../assets/bg-no-picture-128x128.png';
import SearchBar from './SearchBar';
import CardContent from './CardContent';
import store from '../../store';

import { CiCirclePlus } from "react-icons/ci";

const { Meta } = Card;

const Search = props => {

    const products = props.products.searched ? props.products.searched : [];
    const loadHandler = _ => props.searchedProducts();

    const renderProducts = _ => {

        return products.length > 0 ?
            <>
                <Row>
                    {
                        products.map((product, index) => {
                            return (
                                
                                <Card   key={index}
                                        style={{ maxWidth: '250px' }}
                                        cover={<img alt="no-content" src={NotFoundImg} />}>
                                        <CardContent store={store} product={product} />
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
            <Row justify="center">
                <Empty  imageStyle={{ height: 300 }} 
                        description={<span className='no-data-to-display'>no data to display</span>}/>
            </Row>
    }

    useEffect(() => {
        
        let container = createRoot(document.getElementById('products-container'));
        container.render(renderProducts());

    }, [products.length])

    return (
        <>
            <PageTitle title="Search" subtitle="search products with nice prices" />
            <Row justify='center'>
                <SearchBar />
                <div id='products-container'>
                </div>
            </Row>
        </>
    ); 
}

const mapStateToProps = state => ({ state: state, products: { searched: state.search.products.searched, selected: state.search.selected }});
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Search);
import React, { useState, useEffect, useRef } from 'react';
import { Provider, connect } from 'react-redux';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { bindActionCreators } from 'redux';

import { Avatar, Card, Row, Popover, Button, Empty, Col, Modal, Input, Alert } from 'antd';

import { searchedProducts, selectedProducts, loadedMoreProducts, changeSearchBarState } from './SearchActions';
import PageTitle from '../../components/page-title/PageTitle';
import NotFoundImg from '../../assets/bg-no-picture-128x128.png';
import SearchBar from './SearchBar';
import CardContent from './CardContent';
import store from '../../store';

import { FloatButton } from 'antd';
import { CiCirclePlus } from "react-icons/ci";
import { TfiViewListAlt } from "react-icons/tfi";
import { RiSave2Line } from "react-icons/ri";
import { AiFillSave } from "react-icons/ai";
import { IoReloadOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaThList } from "react-icons/fa";

import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Search = props => {

    let products = props.products.searched;
    let selected = props.products.selected;

    const [modalOpen, setModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [view, setView] = useState(props.view);
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedSum, setSelectedSum] = useState(0);
    const [searchBarState, setSearchBarState] = useState(props.searchrBar);

    const loadedMoreProducts = _ => {

        props.loadedMoreProducts();
        props.searchedProducts();
    }
    
    const opacity = (value) => selected.map(it => it.id).includes(value.id) ? '50%' : '100%';

    const reload = _ => {}
    
    const showModal = _ => {

        if (selected.length === 0)
            return;

        setModalOpen(true);
    };

    const closeModal = _ => setModalOpen(false);

    const okModal = _ => {
        setTest(test + 1)
        setConfirmLoading(true);
        setTimeout(() => {
            setModalOpen(false);
            setConfirmLoading(false);
        }, 2000);
    }

    const changeView = _ => {

        if (!selected || selected.length === 0) {

            setView("search");
            return;
        }
        
        view == "search" ? setView("list") : setView("search");
    }

    const getBadge = _ => {

        if (view == "search")
            return selectedCount;

        return selectedSum == 0 ? 0 : `${selectedSum} €`
    }

    const renderProducts = _ => {
        
        var result = view == 'search' ? products : selected;

        return (products.length > 0 ?
            <Row name={view}>
                {
                    result.map((product, index) => {
                        return (
                            
                            <Card   key={product.id}
                                    id={product.id}
                                    style={{ maxWidth: '250px', opacity: opacity(product) }}
                                    cover={<img alt="no-content" src={NotFoundImg} />}>
                                    <CardContent    store={store} 
                                                    product={product} 
                                                    view={view} 
                                                    setSelectedCount={setSelectedCount} 
                                                    setSelectedSum={setSelectedSum}/>
                            </Card>
                        );
                    })
                }
            </Row>
        :
            <Row justify="center">
                <Empty  imageStyle={{ height: 300 }}
                        description={<span className='no-data-to-display'>no data to display</span>}/>
            </Row>)
    }

    useEffect(() => {

        var resultContainer = createRoot(document.getElementById('products-container'));
        resultContainer.render(renderProducts());
        
    }, [products.length, selected.length, view]);

    const changeSearchBarState = (status) => {
        
        props.changeSearchBarState();
        setSearchBarState(status);
        setTimeout(_ => document.getElementById("product-name-input").focus(), 500)
    }

    return (
        <>
            <PageTitle title="Search" subtitle="search products with nice prices" />
            <Row justify='center'>
                <SearchBar changeSearchBarState={changeSearchBarState}/>
                <div id='products-container'></div>
                <FloatButton.Group  type="primary"
                                    style={{ left: 28, bottom: 80 }}
                                    icon={<TfiViewListAlt />}>
                    <FloatButton icon={<CiSearch />} onClick={() => changeSearchBarState(true)} />
                    <FloatButton icon={modalOpen == true ? <AiFillSave /> : <RiSave2Line />} onClick={showModal} />
                    <FloatButton icon={<IoReloadOutline />} onClick={loadedMoreProducts} />
                    <FloatButton    icon={view == "search" ? <TfiViewListAlt /> : <FaThList />} 
                                    badge={{ count: getBadge() }}  
                                    onClick={changeView} />
                </FloatButton.Group>
            </Row>
            <Modal  title="Save your list"
                    open={modalOpen}
                    confirmLoading={confirmLoading}
                    onOk={okModal}
                    onCancel={closeModal}
                    width={300}>
                    <Input placeholder="type list name" />
            </Modal>
        </>
    ); 
}

const mapStateToProps = state => ({ products: state.search.products, view: state.search.view, searchrBar: state.search.searchrBar });
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts, loadedMoreProducts, changeSearchBarState}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Search);
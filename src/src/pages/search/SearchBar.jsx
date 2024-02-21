import React, { useRef, useState } from 'react';
import { Row, Col, Button, Divider, Flex } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CiSearch } from "react-icons/ci";
import { SiMarketo } from "react-icons/si";
import { TbMenuOrder } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";

import SearchInput from './SearchInput';
import SearchMarket from './SearchMarket';
import SearchrOrder from './SearchOrder';
import SearchPrice from './SearchPrice';

import { searchedProducts, selectedProducts } from './SearchActions';

const SearchBar = props => {
    
    const sideBar = useRef(null);
    const optionsArea = useRef(null);
    const [menuBar, setMenuBar] = useState(true);
    const filter = props.filter;
    
    const hideBarHandler = _ => {

        let optionsAreaWidth = optionsArea.current.offsetWidth;
        let position = menuBar ? -optionsAreaWidth : 0

        sideBar.current.style.right = `${position}px`;
        setMenuBar(!menuBar);
    }

    const searchHandler = _ => props.searchedProducts();
    
    const isDisabled = _ => {
        
        var name =  !filter.name || filter.name.length < 3
        var markets = filter.marketIds.length === 0

        return name || markets;
    }

    return (
        <div ref={sideBar} className='search-products-side-bar' style={{ right: '0px' }}>
            <Row>
                <Col>
                    <div className='search'>
                        <Button className="search-icon" onClick={hideBarHandler}>
                            <CiSearch size={20} />
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div ref={optionsArea} className='options'>
                        <SearchInput />
                        <Divider orientation="left" plain orientationMargin="0">Markets</Divider>
                        <SearchMarket />
                        <Divider orientation="left" plain orientationMargin="0">Order by</Divider>
                        <SearchrOrder />
                        <Divider orientation="left" plain orientationMargin="0">Price</Divider>
                        <SearchPrice />
                        <Divider />
                        <Button type='primary' block onClick={searchHandler} disabled={isDisabled()}>Search</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({ state: state, filter: state.search.filter }) 
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
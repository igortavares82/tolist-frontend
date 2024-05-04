import React, { useRef, useState } from 'react';
import { Row, Col, Button, Divider, Flex, Drawer } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FaList } from "react-icons/fa";

import SearchInput from './SearchInput';
import SearchMarket from './SearchMarket';
import SearchrOrder from './SearchOrder';
import SearchPrice from './SearchPrice';
import ListImput from './ListInput';

import { searchedProducts, selectedProducts, getProducts } from './SearchActions';

const SearchBar = props => {
    
    const sideBar = useRef(null);
    const optionsArea = useRef(null);
    const filter = props.filter;
    const searchrBar = props.searchrBar;
    const [menuBar, setMenuBar] = useState(true);
    
    const sideBarHandler = () => {
        
        setMenuBar(!menuBar);
        let optionsAreaWidth = optionsArea.current.offsetWidth;
        let position = menuBar ? -optionsAreaWidth : 0
        
        sideBar.current.style.right = `${position}px`;
    }

    const changeSearchBarState = _ => props.changeSearchBarState(false);

    const searchedProducts = _ => {

        props.searchedProducts();
    }

    const isDisabled = _ => {
        
        var name =  !filter.name || filter.name.length < 3
        var markets = filter.marketIds.length === 0

        return name || markets;
    }

    return (
        <Drawer title="Search products" open={searchrBar} onClose={changeSearchBarState} closable={false}>
            <SearchInput changeSearchBarState={changeSearchBarState} />
            <Divider orientation="left" plain orientationMargin="0">Markets</Divider>
            <SearchMarket />
            <Divider orientation="left" plain orientationMargin="0">Order by</Divider>
            <SearchrOrder />
            <Divider orientation="left" plain orientationMargin="0">Price</Divider>
            <SearchPrice />
            <Divider />
            <Button type='primary' 
                    block 
                    onClick={searchedProducts}
                    disabled={isDisabled()}>Search</Button>
        </Drawer>
    );
}

const mapStateToProps = state => ({ state: state, filter: state.search.filter, searchrBar: state.search.searchrBar }) 
const mapDispatchToProps = dispatch => bindActionCreators({searchedProducts, selectedProducts}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
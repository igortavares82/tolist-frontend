import React from 'react';

import { Avatar, Card, Row, Popover, Button } from 'antd';
import { FaPlus } from "react-icons/fa";
import { CiSearch, CiFilter } from "react-icons/ci";
import { SiMarketo } from "react-icons/si";
import { TbSum } from "react-icons/tb";
import { TbMenuOrder } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";

import SearchInput from './SearchInput';
import SearchMarket from './SearchMarket';
import SearchrOrder from './SearchOrder';
import SearchPrice from './SearchPrice';

const SearchBar = props => {

    return (
        <div className="search-products-side-bar">
            <Popover    className="search-products-side-bar-popover" 
                        title={"Search"} 
                        trigger="click" 
                        placement="right" 
                        content={<SearchInput />}>
                <Button className="search-products-side-bar-button">
                    <CiSearch size={20} />
                </Button>
            </Popover>
            <Popover    className="search-products-side-bar-popover" 
                        title="Markets" 
                        trigger="click" 
                        placement="right"
                        content={<SearchMarket />}>
                <Button className="search-products-side-bar-button">
                    <SiMarketo size={20} />
                </Button>
            </Popover>
            <Popover    className="search-products-side-bar-popover" 
                        title="Order By" 
                        trigger="click" 
                        placement="right"
                        content={<SearchrOrder />}>
                <Button className="search-products-side-bar-button">
                    <TbMenuOrder size={20} />
                </Button>
            </Popover>
            <Popover    className="search-products-side-bar-popover" 
                        title="Price" 
                        trigger="click" 
                        placement="right"
                        content={<SearchPrice />}>
                <Button className="search-products-side-bar-button">
                    <TfiMoney size={20} />
                </Button>
            </Popover>
        </div>
    );
}

export default SearchBar;
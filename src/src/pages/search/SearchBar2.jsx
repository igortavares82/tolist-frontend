import React, { useRef } from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { CiSearch } from "react-icons/ci";

import { SiMarketo } from "react-icons/si";
import { TbMenuOrder } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";

import SearchInput from './SearchInput';
import SearchMarket from './SearchMarket';
import SearchrOrder from './SearchOrder';
import SearchPrice from './SearchPrice';

const SearchBar2 = props => {
    
    const sideBar = useRef(null);
    const optionsArea = useRef(null);

    const getSideBarPosition = () => {
        
        let value = 0;
        let str = sideBar.current.style.right.replace('px', '');

        return isNaN(str) ? value : parseInt(str);
    }

    const handler = e => {

        let optionsAreaWidth = optionsArea.current.offsetWidth;
        let orientation = getSideBarPosition() >= 0 ? -1 : 1;
        let start = orientation > 0 ? -optionsAreaWidth : 1;
        let end = orientation > 0 ?  1 : -optionsAreaWidth;

        console.log(getSideBarPosition(), orientation)
        return
        
        for (var i = start; i != end; i = i + orientation) {
            
            if (i == 212 || i == -212)
                break;

            console.log(start, end, orientation, i)
            sideBar.current.style.right = `${i}px`
        }
    }

    return (
        <div ref={sideBar} className='search-products-side-bar' style={{ right: '0px' }}>
            <Row>
                <Col>
                    <div className='search'>
                        <Button className="search-icon" onClick={handler}>
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
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default SearchBar2;
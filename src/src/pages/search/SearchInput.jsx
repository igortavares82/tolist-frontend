import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureName, searchedProducts } from './SearchActions';
import { Input } from 'antd';
import { FiDelete } from "react-icons/fi";

const { Search } = Input;

const SearchInput = props => {

    const [name, setName] = useState(props.name);

    const setProductName = (value) => {
        
        setName(value);
        props.configureName(value);
    } 

    const searchedProducts = e => {

        if (e.key != "Enter")
            return;

        props.searchedProducts();
        props.changeSearchBarState();
    }

    return (
        <div>
            <Search placeholder="product name" 
                    id="product-name-input"
                    enterButton={<FiDelete size={20} style={{marginTop: '25%'}}/>}
                    value={props.name}
                    onChange={(e) => setProductName(e.target.value)}
                    onKeyDown={searchedProducts} />
        </div>
    );
}

const mapStateToProps = state => ({name: state.search.filter.name}) 
const mapDispatchToProps = dispatch => bindActionCreators({configureName, searchedProducts}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
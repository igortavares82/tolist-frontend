import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureName } from './SearchActions';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = props => {

    const [name, setName] = useState(props.name);
    
    const setProductName = (value) => {
        
        setName(value);
        props.configureName(value);
    }

    const clearField = _ => {

        setName(null);
        props.configureName(null);
    } 

    return (
        <div>
            <Search placeholder="product name" 
                    enterButton="X" 
                    value={name}
                    onChange={(e) => setProductName(e.target.value)}
                    onSearch={clearField} />
        </div>
    );
}

const mapStateToProps = state => ({name: state.search.filter.name}) 
const mapDispatchToProps = dispatch => bindActionCreators({configureName}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
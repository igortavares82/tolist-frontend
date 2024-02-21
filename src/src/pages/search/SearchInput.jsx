import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureName } from './SearchActions';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = props => {

    const [nameInput, setNameInput] = useState(props.name);

    const onChange = (value) => {

        props.configureName(value)
    } 

    return (
        <div>
            <Input  placeholder="product name" 
                    enterButton="go" 
                    size='large' 
                    name='search'
                    onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

const mapStateToProps = state => ({name: state.search.filter.name}) 
const mapDispatchToProps = dispatch => bindActionCreators({configureName}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
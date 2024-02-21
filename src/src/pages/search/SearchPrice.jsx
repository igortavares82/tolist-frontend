import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configurePrice } from './SearchActions';
import { InputNumber, Slider, Space } from 'antd';

const SearchPrice = props => {

    const {min, max} = props.price;
    const [minInput, setMinInput] = useState(min);
    const [maxInput, setMaxInput] = useState(max);

    const onChange = (value) => {

        if (isNaN(value[0]) || isNaN(value[1]))
            return;
        
        setMinInput(value[0]);
        setMaxInput(value[1]);
        props.configurePrice({ min: value[0], max: value[1] })
    }

    return (
        <div>
            <Space>
                <InputNumber    min={1} 
                                placeholder='min' 
                                value={minInput} 
                                onChange={(e) => onChange([e, maxInput])}/>

                <InputNumber    max={200} 
                                placeholder='max' 
                                value={maxInput}
                                onChange={(e) => onChange([minInput, e])}/>
            </Space>
            <Slider     range 
                        defaultValue={[minInput, maxInput]} 
                        onChange={onChange} 
                        value={[minInput,maxInput]}/>
        </div>
    );
}

const mapStateToProps = state => ({price: state.search.filter.price}) 
const mapDispatchToProps = dispatch => bindActionCreators({configurePrice}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchPrice);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureOrder } from './SearchActions';
import { Divider, Radio, Space, Switch, Row, Col } from 'antd';

const SearchOrder = props => {

    const [order, setOrder] = useState(props.order);

    const onRadioChange = (value) => {

        setOrder({...order, field: value.target.value});
        props.configureOrder(order);
    }

    const onSwitchChange = (value) => {

        setOrder({...order, direction: value ? 1 : -1});
        props.configureOrder(order);
    }

    return (
        <Row>
            <Col>
                <Radio.Group defaultValue="name" >
                    <Space direction='vertical'>
                        <Radio value="name" onChange={onRadioChange}>Name</Radio>
                        <Radio value="price" onChange={onRadioChange}>Price</Radio>
                    </Space>
                </Radio.Group>
            </Col>
            <Col>
                <Switch     checkedChildren="Asc" 
                            unCheckedChildren="Desc" 
                            defaultChecked 
                            onChange={onSwitchChange} />
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({order: state.search.order}) 
const mapDispatchToProps = dispatch => bindActionCreators({configureOrder}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchOrder);
import React from 'react';
import { Input, Row } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ListInput = props => {

    return (
        <Row>
            <Input  placeholder='type list name'/>
        </Row>
    );
}

const mapStateToProps = state => ({ state: state }) 
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ListInput);
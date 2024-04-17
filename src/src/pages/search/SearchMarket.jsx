import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureMarkets } from './SearchActions';
import { Form, Switch, Row, Col } from 'antd';

var markets = [
    { id: 1, name: 'Pingo Doce', isEnabled: true },
    { id: 2, name: 'Auchan', isEnabled: true },
    { id: 3, name: 'Continente', isEnabled: true }
]

const SearchMarket = props => {
    
    const onChange = (checked, marketId) => {

        markets = markets.map(it => {

            if (it.id === marketId)
                return {...it, isEnabled: checked}
            else
                return it;
        });

        props.configureMarkets(markets.filter(it => it.isEnabled).map(it => it.id));
    }

    return (
        markets.map((market, index) =>  {
                    
            return (
                <Row style={{marginBottom: '2%'}}>
                    <Col>
                        <Switch defaultChecked onChange={(checked) => onChange(checked, market.id)}/>{` ${market.name}`}
                    </Col>
                </Row>
            );
        })
    );
}

const mapStateToProps = state => ({marketIds: state.search.filter.marketIds}) 
const mapDispatchToProps = dispatch => bindActionCreators({configureMarkets}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchMarket);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { configureMarkets } from './SearchActions';
import { Form, Switch } from 'antd';

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
        <ul>
            {
                markets.map((market, index) => 
                {
                    return (
                        <li key={index}><Switch defaultChecked onChange={(checked) => onChange(checked, market.id)}/>{` ${market.name}`}</li>
                    );
                })
            }
        </ul>
    );
}

const mapStateToProps = state => ({marketIds: state.search.marketIds}) 
const mapDispatchToProps = dispatch => bindActionCreators({configureMarkets}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchMarket);
import React, { useContext, useState } from 'react';
import { Space, Divider } from 'antd';
import { connect, ReactReduxContext } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from './SearchActions';

import { CiSearch, CiFilter } from "react-icons/ci";
import { SiMarketo } from "react-icons/si";
import { TbSum } from "react-icons/tb";
import { TbMenuOrder } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";

var markets = [
    { id: 1, name: 'Pingo Doce', isEnabled: true },
    { id: 2, name: 'Auchan', isEnabled: true },
    { id: 3, name: 'Continente', isEnabled: true }
]

const SearchSummary = props => {

    var store = useContext(ReactReduxContext).store.getState();
    var filter = store.search;
    var _markets = markets.map(it => {
        
        if (filter.marketIds.indexOf(it.id) >= 0)
            return it.name;
    });

    return (

        <div className='search-product-summary-side-bar'>
            <Divider orientation='vertical'>
                <CiSearch size={20}/>
            </Divider>
            <p>{filter.name ? `Search by ${filter.name}` : 'No product'}</p>
            <Divider orientation='vertical'>
                <SiMarketo size={20} />
            </Divider>
            <p>{_markets.filter(it => it != null).join(', ')}</p>
           <Divider orientation='vertical'>
                <TbMenuOrder size={20} />
           </Divider>
           <p>{`Order by ${filter.order.field}, ${filter.order.direction > 0 ? 'ascending' : 'descending'}`}</p>
            <Divider orientation='vertical'>
                <TfiMoney size={20} />
            </Divider>
            <p>{`Price between ${filter.price.min} and ${filter.price.max}`}</p>
        </div>
    );
}

const mapStateToProps = state => ({search: state.search}) 
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchSummary);
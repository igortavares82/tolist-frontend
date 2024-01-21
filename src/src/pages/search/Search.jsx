import React from 'react';
import { Avatar, Card, Row, Popover, Button } from 'antd';
import { GiFruitBowl } from "react-icons/gi";

import PageTitle from '../../components/page-title/PageTitle';
import NotFoundImg from '../../assets/bg-no-picture-128x128.png';
import SearchBar2 from './SearchBar2';
import CardContent from './CardContent';
import SearchSummary from './SearchSummary';

const { Meta } = Card;

const Search = _ => {

    let products = [
        {
            name: 'What is Lorem Ipsum?',
            price: 112.03,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            lateUpdate: '01/01/2024',
            market: 'Pingo Doce'
        },
        {
            name: 'Where does it come from?',
            price: 0.53,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            lateUpdate: '01/01/2024',
            market: 'Continente'
        },
        {
            name: 'Where does it come from?',
            price: 1.50,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            lateUpdate: '01/01/2024',
            market: 'Auchan'
        },
        {
            name: 'Where does it come from?',
            price: 2.50,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            lateUpdate: '01/01/2024',
            market: 'Pingo Doce'
        },
        {
            name: 'Where does it come from?',
            price: 1.50,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            lateUpdate: '01/01/2024',
            market: 'Pingo Doce'
        }
    ];

    //products = [];

    return (
        <>
            <PageTitle title="Search" subtitle="search products with nice prices" />
            <Row>
                <SearchBar2 />
                {
                    products.length > 0 ? 
                        <div className="search-products-box">
                            {
                                products.map((product, index) => {
                                    return (
                                        <Card   key={index}
                                                style={{ maxWidth: '250px' }}
                                                cover={<img alt="no-content" src={NotFoundImg} />}>
                                                <CardContent {...product}/>
                                        </Card>
                                    );
                                })
                            }
                        </div> 
                    :
                        <div className="search-no-products-box">
                            <GiFruitBowl className='search-no-products' size={300} />
                        </div>
                }
            </Row>
        </>
    ); 
}

export default Search;
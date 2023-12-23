import React, { useState } from 'react';
import { 
    Row, 
    Col, 
    Form, 
    FormInput, 
    Card, 
    Alert, 
    ListGroup, 
    ListGroupItem,
    InputGroup,
    CardBody,
    CardHeader,
    CardImg,
    FormCheckbox
 } 
from 'shards-react';

import Product from '../../types/Product.ts';
import noPicture from '../../assets/bg-no-picture-128x128.png'

const Search = props => {

    const [filter, setFilter] = useState({
        product: null,
        markets: [
            {
                id: '1',
                name: 'Ping Doce',
                isActive: true
            },
            {
                id: '2',
                name: 'Auchan',
                isActive: true
            },
            {
                id: '3',
                name: 'Mini Preço',
                isActive: true
            },
        ]
    });
    const [state, setVisibility] = useState({ visible: true });
    const dismiss = _ => setVisibility({ visible: false });

    let products: Product[] = [
        {
            name: 'Arroz Bastimat',
            price: 1.20,
            image: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
            lastUpdate: '01/01/2024',
            brand: 'Brand XPTO'
        },
        {
            name: 'Arroz Doce',
            price: 0.80,
            image: null,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.',
            lastUpdate: '01/01/2024',
            brand: 'Brand XPTO'
        },
        {
            name: 'Arroz Doce 123',
            price: 0.95,
            image: null,
            description: null,
            lastUpdate: '01/01/2024',
            brand: 'Brand XPTO'
        }
    ];

    const hideDescription = (input: string) => {
        var newString = null;
        var length = 150;

        if (input && input.length > length)
            newString = input.substring(0, length);
        else
            return input;

        return (
            <span>{newString}<a href='javascript:void(0)' onClick={showDescription}> ...</a></span>
        );
    }

    const showDescription = () => {
        console.log(123);
    }

    const setImage = (image) => {

        if (!image)
            return noPicture;
    }

    const changeMarket = (market) => {
        
        var markets = filter.markets.map(it => { 
            
            if (it.id != market.id)
                return it
            
            return {...market, isActive: !it.isActive} 
        });

        console.log(markets)
        setFilter({...filter, markets: markets})
    }

    return (
        <>
             <Card small>
                <CardBody>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Alert theme="warning" dismissible={dismiss} open={state.visible}>Prices can be different from virtual stores</Alert>
                                <InputGroup>
                                    <FormInput id="search" placeholder="Type a product name such as rice" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg="6" sm="12">
                                {filter.markets.map((market) => <FormCheckbox   key={market.id} 
                                                                                small 
                                                                                toggle 
                                                                                checked={market.isActive}
                                                                                onChange={() => changeMarket(market)}>
                                                                                    {market.name}
                                                                </FormCheckbox>)}
                            </Col>
                        </Row>
                        <div className='search-options'>
                            <div className='search-options-markets'>
                                
                            </div>
                            <div className=''></div>
                        </div>
                    </Form>
                </CardBody>
            </Card>

            <Row className="card-contaier">
                {products.map((product, index) => {

                    return(
                        <Card key={index} small className="card-product">
                            <CardHeader>
                                <h4>{product.price} €</h4>
                                <p>{product.name}</p>
                            </CardHeader>
                            <CardImg src={setImage(product.image)} />
                            <CardBody>
                                <div className='card-details'>
                                    <ul>
                                        <li><strong>{product.brand}</strong></li>
                                        <li>{hideDescription(product.description)}</li>
                                        <li><small>last update: {product.lastUpdate}</small></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    );
                })}
            </Row>
        </>
    );
}

export default Search;
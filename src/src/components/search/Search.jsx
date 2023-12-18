import React from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    FormInput, 
    Card, 
    CardHeader, 
    ListGroup, 
    ListGroupItem } 
from 'shards-react';

const Search = props => {
    
    return (
        <Container className="main-content-container px-4">
            <Card small className="mb-3">
                <CardHeader className="border-bottom">
                    <h4 className="m-0">Try It!</h4>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form>
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <label htmlFor=""></label>
                                            <FormInput  id="search"
                                                        placeholder="Search" />
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Container>
        
    );
}

export default Search;
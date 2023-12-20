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
    ListGroupItem,
    InputGroup,
    InputGroupAddon,
    Button
 } 
from 'shards-react';

const Search = props => {
    
    return (
        <Container className="main-content-container px-3">
            <Card small className="mb-2">
                <CardHeader>
                    <h4 className="m-0">Search your product.</h4>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form>
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <InputGroup>
                                                <FormInput id="search" placeholder="Type a product name such as rice" />
                                                <InputGroupAddon type="append">
                                                    <Button theme="primary">Search</Button>
                                                </InputGroupAddon>
                                            </InputGroup>
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
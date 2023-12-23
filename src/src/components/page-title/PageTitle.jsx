import React from 'react';
import { Col } from "shards-react";

const PageTitle = ({title, subtitle, className, ...attrs}) => {

    return (
        <Col className={`page-title-wrapper text-center text-md-left mb-sm-0 ${className}`} { ...attrs }>
            <small className="text-uppercase page-subtitle">{subtitle}</small>
            <h3 className="page-title">{title}</h3>
        </Col>
    );
}

export default PageTitle;
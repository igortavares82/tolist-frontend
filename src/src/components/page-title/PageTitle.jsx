import React from "react";

const PageTitle = props => {

    return (
        <div className="page-title">
            <p>{props.title}</p>
            <span>{props.subtitle}</span>
        </div>
    );
};

export default PageTitle;
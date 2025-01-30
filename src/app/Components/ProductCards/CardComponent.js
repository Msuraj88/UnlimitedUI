import React from "react";

const CardComponent = ({ image, title, category, licience }) => {
    return (
        <div className="template-card app-bg-Dark">
            <div className="tempate-image">
                {image && <img src={image} className="card-img-top" alt={title} />}
            </div>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-body-row2">
                    <p className="card-category-label">{category}</p>
                    <p className="card-licience-label"> {licience}</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;

import React from '../../../node_modules/react';
import { Link } from '../../../node_modules/react-router-dom';

export const ProductCard = (props) => {
    return (
        <React.Fragment>
            <div className="card">
                <img src={props.products.image} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.products.title}</h5>
                    <Link to={'/services/' + props.products.id} className="btn btn-primary">Read more</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

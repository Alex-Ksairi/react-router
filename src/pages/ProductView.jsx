import React from '../../node_modules/react';
import { useParams } from "../../node_modules/react-router-dom";

export default function ProductView (props) {
    let params = useParams();
    let dataOfObjects = props.productsData;
    let targetObject = dataOfObjects[params.productId];

    // console.log( 'useParams --> ', params);

    return (
        <React.Fragment>
            <div className="check mt-5 w-50">
                <h2>{targetObject.title}</h2>
                <img style={{ width: '30%' }} src={targetObject.image} alt="..." />
                <h4>{targetObject.price}</h4>
                <p>{targetObject.body}</p>
            </div>
        </React.Fragment>
    )
}

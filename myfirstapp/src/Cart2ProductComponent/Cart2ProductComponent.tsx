import { useState } from "react";

export const Cart2ProductComponent = (props:any) => {
    const [product,setProduct] = useState(props.product);
    console.log('props',props);

    return(
       <div className="card-group col-lg-3 text-center col-xs-12 col-sm-12 mb-3 mt-3 h-20">
  <div className="card h-20 w-20 m-1">
    <h4 className="ml-3 pl-3 text-end"><span className="badge text-bg-secondary pl-3 ml-3 ">{props.product.id}</span></h4>
    <img src={props.product.photoUrl} className="col-lg-12 p-2 border border-black shadow" alt={props.product.name} />
    <div className="card-body">
      <h5 className="card-title">{props.product.name}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      {props.children}
    </div>
  </div>
  </div>
    )
};

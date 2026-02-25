import { useState, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface Iproduct {
  id: number;
  name: string;
  quantity: number;
  photoUrl: string;
  price: number;
}


interface Props {
  product: Iproduct;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  children?: React.ReactNode;
}

export const Cart2ProductComponent = ({product,onIncrement,onDecrement,children}:Props) => {
  const [product1, setProduct] = useState(product);
  console.log("product1", product1);

  return (
    <div className="card-group col-lg-3 text-center col-xs-12 col-sm-12 mb-3 mt-3 h-20 ">
      <div className="card h-20 w-20 m-1 bg-info border border-secondary rounded">
        <h4 className="ml-3 pl-3 text-end">
          <span className="badge text-bg-secondary pl-3 ml-3 ">
            {product.id}
          </span>
        </h4>
        <img
          src={product.photoUrl}
          className="col-lg-12 p-2 border border-black hover:w-20"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer row">
          <div className="float-left col-4 text-center justify-center m-auto"> Qnt:
            <span className="badge rounded-pill text-bg-info">{product.quantity}</span>
          </div>
           <div className="btn-group col-4 m-auto">
                <button className="btn btn-outline-success"  onClick={() => { onIncrement(product.id)}} >+</button>
                <button className="btn btn-outline-danger" onClick={() => { onDecrement(product.id)}} >-</button>
            </div>
          <div className="float-right col-4 align-self-end m-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

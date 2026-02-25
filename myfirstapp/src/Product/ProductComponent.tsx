import { useEffect, useRef, useState } from "react";
import './Product.css';


interface ProductProps {
    title:string,
    name:string,
    price:number,
    quantity?:number,
    imageUrl:string
}

export const ProductComponent = ({title,name,price,imageUrl}:ProductProps) =>{
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const noteRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (noteRef.current) {
        console.log(noteRef.current);
      noteRef.current.value = `You have selected ${quantity} ${name}(s) with total price of $${quantity* price}.`;
      noteRef.current.style.backgroundColor = quantity > 2 ? "lightgreen" : "lightcoral";
      noteRef.current.focus();
      noteRef.current.style.border = "2px solid black";
      noteRef.current.style.color= "blue";
      noteRef.current.readOnly = true;
    }
  }, [quantity]);
  return (
    <>

    {/* <link rel="stylesheet" href="./Product.css" /> */}

    <img src={imageUrl} alt={name} className="p-20 m-20 " />
   
      <div className="product-title pl-5 title-primary border border-primary item-align-center ml-10 float-right border-rounded w-50 mb-1"> {title}</div>
      <table  className="product-table table table-primary bg-yellow w-50 m-5 p-5 pb-10 table-striped-columns table-stripped table-hover border border-primary rounded">
        <tr className="form-group">
          <th className="form-label">Product Name</th>
          <td className="form-control form-default">{name}</td>
        </tr>
        <tr className="form-group">
          <th className="form-label">Price</th>
          <td className="form-control form-default">{price}</td>
        </tr>
        <tr className="form-group">
          <th className="form-label">Quantity</th>
          <td className="form-control form-default">{quantity}</td>
        </tr>
        <tr>
          <th> </th>
          <td>
            <button onClick={(e) => setQuantity(quantity + 1)}  className="btn btn-success  text-green p-2 m-2">+</button>
            <button className="btn btn-danger p-2 m-2  text-red  "
              onClick={(e) => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
          </td>
        </tr>
        <tr className="form-group">
        <th className="form-label">Total Price</th>
        <td> <textarea className="form-textarea"  value={quantity * price} readOnly={true} onChange={(e)=>{
        setTotalPrice(quantity * price);
        }}></textarea></td>

        </tr>
        <tr className="form-group">
            <th className="form-label">Buyers Customizations </th>
            <td><textarea ref={noteRef} className="form-textarea overflow-visible h-100 fit-content border border-primary border-rounded ml-5 p-5 w-75 align-self-center"
            placeholder="Enter any customizations you want for the product here. "></textarea></td>
        </tr>
        <tr className="form-group">
          <th className="form-label">Description</th>
          <td className="form-control form-default" style={{ height: "auto" }}>
            The iPhone 14 Pro Max features a stunning 6.7-inch Super Retina XDR
            display, A16 Bionic chip for lightning-fast performance, and an
            advanced camera system with ProRAW and ProRes video capabilities.
            With its sleek design and powerful features, it's the ultimate
            smartphone for photography, gaming, and productivity.
          </td>
        </tr>
      </table>
    </>
  );
};

import { useState } from "react";

const Content = (props) => {
  const { Products } = props;

  const [addCart, setAddCart] = useState({});

  const handleAddToCart = (index) => {
    setAddCart({ ...addCart, [index]: true });
  };

  const handleRemoveFromCart = (index) => {
    setAddCart({ ...addCart, [index]: false });
  };

  return (
    <div class="container d-flex px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {Products.map((item, i) => {
          return (
            <div class="col mb-5" key={i}>
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h4 class="fw-bolder">{item.name}</h4>
                    <h5>{item.price}</h5>
                    
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <div>
                      {addCart[i] ? (
                        <button className="btn btn-dark"  onClick={() => handleRemoveFromCart(i)}>
                          Remove Cart
                        </button>
                      ) : (
                        <button className="btn btn-primary"  onClick={() => handleAddToCart(i)}>
                          Add Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;

// const Content = (props) => {
//   const { Products } = props;

//   // Create an object to keep track of the added to cart status for each item
//   const [cartItems, setCartItems] = useState({});

//   const handleAddToCart = (index) => {
//     // Add logic to add item to cart
//     setCartItems({ ...cartItems, [index]: true });
//   };

//   const handleRemoveFromCart = (index) => {
//     // Add logic to remove item from cart
//     setCartItems({ ...cartItems, [index]: false });
//   };

//   return (
//     <div className="container d-flex px-4 px-lg-5 mt-5">
//       <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//         {Products.map((item, i) => {
//           return (
//             <div className="col mb-5" key={i}>
//               <div className="card h-100">
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     <h5 className="fw-bolder">{item.name}</h5>
//                     ${item.price}
//                   </div>
//                 </div>
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <div>
//                       {cartItems[i] ? (
//                         <button onClick={() => handleRemoveFromCart(i)}>
//                           Remove from Cart
//                         </button>
//                       ) : (
//                         <button onClick={() => handleAddToCart(i)}>
//                           Add to Cart
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Content;

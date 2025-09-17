import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const View = () => {
  const redirect = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function singleProduct() {
    await axios
      .get(`https://68be8fd39c70953d96ecb6a2.mockapi.io/user/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    singleProduct();
  }, []);


   const discountedPrice = (product.price - (product.price * product.discount) / 100).toFixed(0);

    


  return (
    <>


   
      <div className="container py-5 d-flex justify-content-center">
        <div className="product-detail-card shadow">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="product-detail-img"
          />

          <div className="product-detail-body">
            <h2 className="product-detail-title">{product.productName}</h2>

            <p className="product-detail-price">

              <span className="fw-bold me-2">
               Price :
              </span>
              <span className="text-muted text-decoration-line-through">₹{product.price}{" "}</span>
              <span className="product-detail-discount">
                ({product.discount}% OFF)
              </span>
            </p>

            <p className="product-detail-price fw-bold">

               <span className="product-detail-discount-offerPrice me-2">
               Offer Price :
              </span>
              ₹ {discountedPrice}{" "}
             
            </p>

            <p className="product-detail-desc">{product.description}</p>

           <div className="d-flex">
             <button
              type="button"
              onClick={() => redirect(-1)}
              className="btn-back mt-4"
            >
              Back
            </button>

            <button
              type="button"
              className="btn-buy mt-4"
            >
              Buy Now
            </button>

           </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default View;

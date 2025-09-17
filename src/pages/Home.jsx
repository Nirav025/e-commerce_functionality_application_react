import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaEye, FaTrash, FaPencilAlt } from "react-icons/fa";


const Home = () => {
  const [products, setProducts] = useState([]);

  const ShowApi = async () => {
    await axios
      .get("https://68be8fd39c70953d96ecb6a2.mockapi.io/user")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ShowApi();
  }, []);

  

  async function trash(id) {
    if (confirm("Do you want to delete this product?")) {
      await axios
        .delete(`https://68be8fd39c70953d96ecb6a2.mockapi.io/user/${id}`)
        .then(() => {
          alert("Product Deleted ❌");
          ShowApi();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="text-center mt-4">
        <NavLink
          to="/AddStd"
          className="btn btn-black btn-lg rounded-pill px-5 shadow-sm"
        >
          + Add Product
        </NavLink>
      </div>

      <div className="container mt-5">
        <div className="row g-4">
          {products &&
            products.map((item, index) => {
              const discountedPrice = (
                item.price -
                (item.price * item.discount) / 100
              ).toFixed(0);

              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card shadow-sm h-100 border">
                    <img
                      src={item.imageUrl}
                      alt={item.productName}
                      className="card-img-top p-3 product-img"
                    />

                    <div className="card-body text-center border">
                      <h5 className="card-title">{item.productName}</h5>

                      <div className="mb-2">
                        M.R.P :{" "} 
                        <span className="text-muted text-decoration-line-through me-2">
                           ₹ {item.price}
                        </span>
                        <span className="fw-bold text-success">
                          ₹ {discountedPrice}
                        </span>
                        <span className="badge bg-warning text-dark ms-2">
                          {item.discount}% OFF
                        </span>
                      </div>

                      <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => trash(item.id)}
                        >
                          <FaTrash className="me-1" />
                          Delete
                        </button>

                        <NavLink
                          to={`update-std/${item.id}`}
                          className="btn btn-outline-warning btn-sm"
                        >
                          <FaPencilAlt className="me-1" />
                          Update
                        </NavLink>

                        <NavLink
                          to={`view-std/${item.id}`}
                          className="btn btn-outline-success btn-sm"
                        >
                          <FaEye className="me-1" />
                          View
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;

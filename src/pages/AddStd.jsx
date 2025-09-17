import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


const AddStd = () => {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();
  const { id } = useParams();

  async function singleStd() {
    await axios
      .get(`https://68be8fd39c70953d96ecb6a2.mockapi.io/user/${id}`)
      .then((res) => reset(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (id) {
      singleStd();
    }
  }, [id]);

  async function addData(data) {
    if (id == null) {
      await axios
        .post("https://68be8fd39c70953d96ecb6a2.mockapi.io/user", data)
        .then(() => {
          alert("Product Added ✅");
          reset();
        })
        .catch((err) => console.log(err));
    } else {
      await axios
        .put(
          `https://68be8fd39c70953d96ecb6a2.mockapi.io/user/${id}`,
          data
        )
        .then(() => {
          alert("Product Updated ✏️");
        })
        .catch((err) => console.log(err));
    }
    redirect("/");
  }

  return (
    <div className="container d-flex justify-content-center align-items-start mt-5 mb-5">
      <div className="addstd-card p-4 w-50 shadow-sm">
        <h3 className="text-center mb-4">
          {id ? "Update Product" : "Add Product"}
        </h3>

        <form method="post" onSubmit={handleSubmit(addData)} >
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              {...register("productName")}
              className="form-control"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input
              type="number"
              {...register("price")}
              className="form-control"
              placeholder="Enter price"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Discount (%)</label>
            <input
              type="number"
              {...register("discount")}
              className="form-control"
              placeholder="Enter discount %"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="url"
              {...register("imageUrl")}
              className="form-control"
              placeholder="Paste image URL"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Description</label>
            <textarea
              {...register("description")}
              className="form-control"
              rows="3"
              placeholder="Enter short description"
            ></textarea>
          </div>

          <div className="btn-row mt-3">
            {id == null ? (
              <button className="btn btn-primary">Submit</button>
            ) : (
              <button className="btn btn-warning">Update</button>
            )}
            <button
              type="button"
              onClick={() => redirect(-1)}
              className="btn btn-secondary"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStd;

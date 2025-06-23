import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");

  useEffect(() => {
    // Get the product details when the component is mounted
    axios
      .get(`http://localhost:5002/products/${id}`)
      .then((response) => {
        const product = response.data;
        setProductName(product.title);
        setProductDescription(product.description);
        setProductPrice(product.price);
        setProductCategory(product.category);
        setProductImage(product.images[0]);
        setProductThumbnail(product.thumbnail);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while fetching the product details.",
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  }, [id]);

  const handleEditProduct = (event) => {
    event.preventDefault();

    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productCategory
    ) {
      Swal.fire({
        title: "All fields are required!",
        text: "Please fill in all the fields to update the product.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else {
      const updatedProduct = {
        title: productName,
        description: productDescription,
        price: productPrice,
        category: productCategory,
        images: [productImage],
        thumbnail: productThumbnail,
        stock: 99,
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 1 month",
        returnPolicy: "30 days return policy",
        meta: {
          updatedAt: new Date().toISOString(),
        },
      };

      axios
        .put(`https://dummyjson.com/products/${id}`, updatedProduct)
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: "Product Updated!",
            text: "Your product has been updated successfully.",
            icon: "success",
            confirmButtonText: "Great!",
          });
          setTimeout(() => {
            navigate(`/Product-Detail/${id}`);
          }, 1000);
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while updating the product.",
            icon: "error",
            confirmButtonText: "Try again",
          });
          console.log(error);
        });
    }
  };

  return (
    <div className="container-fluid mt-5">
      <h2>Edit Product</h2>
      <form onSubmit={handleEditProduct}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            rows="3"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(event) => setProductDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Product Category
          </label>
          <select
            className="form-select"
            id="productCategory"
            value={productCategory}
            onChange={(event) => setProductCategory(event.target.value)}
          >
            <option>Select category</option>
            <option value="groceries">Groceries</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Enter product image URL"
            value={productImage}
            onChange={(event) => setProductImage(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productThumbnail" className="form-label">
            Product Thumbnail URL
          </label>
          <input
            type="text"
            className="form-control"
            id="productThumbnail"
            placeholder="Enter product thumbnail URL"
            value={productThumbnail}
            onChange={(event) => setProductThumbnail(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;

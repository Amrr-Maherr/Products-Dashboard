import React from "react";

function AddProduct() {
  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Product Category
          </label>
          <select className="form-select" id="productCategory">
            <option>Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="books">Books</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;

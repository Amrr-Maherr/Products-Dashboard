import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); // تعيين التحميل إلى true عند بدء التحميل
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, [id]);


  return (
    <div className="container mt-5">
      {loading ? (
        <>
          <div className="loader">
            <div className="spinner"></div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4">{product.title}</h2>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <img
                  src={product.thumbnail} 
                  className="card-img-top"
                  alt="Product Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">Product Info</h5>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p>
                    <strong>Discount:</strong> {product.discountPercentage}%
                  </p>
                  <p>
                    <strong>Rating:</strong> {product.rating} / 5
                  </p>
                  <p>
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <p>
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <p>
                    <strong>SKU:</strong> {product.sku}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Description</h5>
                  <p>{product.description}</p>
                  <h5 className="mt-4">Shipping & Warranty</h5>
                  <p>
                    <strong>Warranty:</strong> {product.warrantyInformation}
                  </p>
                  <p>
                    <strong>Shipping Info:</strong>{" "}
                    {product.shippingInformation}
                  </p>
                  <p>
                    <strong>Availability:</strong> {product.availabilityStatus}
                  </p>
                  <p>
                    <strong>Return Policy:</strong> {product.returnPolicy}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="mt-4">Dimensions</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>Width</strong>
                    </td>
                    <td>{product.dimensions?.width || "N/A"} cm</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Height</strong>
                    </td>
                    <td>{product.dimensions?.height || "N/A"} cm</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Depth</strong>
                    </td>
                    <td>{product.dimensions?.depth || "N/A"} cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h4 className="mt-4">Reviews</h4>
              <ul className="list-group">
                {product.reviews?.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <li key={index} className="list-group-item">
                      <p>
                        <strong>{review.reviewerName}</strong> ({review.rating}{" "}
                        stars):
                      </p>
                      <p>{review.comment}</p>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item">No reviews available.</li>
                )}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h4 className="mt-4">Product Images</h4>
              <div className="row">
                {product.images?.length > 0 ? (
                  product.images.map((image, index) => (
                    <div key={index} className="col-md-4">
                      <img
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        className="img-fluid mb-3"
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available.</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;

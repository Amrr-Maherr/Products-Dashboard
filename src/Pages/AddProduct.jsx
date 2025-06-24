import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion"; // استيراد framer-motion
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const Navigate = useNavigate()
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, []);
})
  const AddProduct = (event) => {
    event.preventDefault();

    // التأكد من أن جميع الحقول تم تعبئتها
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productCategory
    ) {
      Swal.fire({
        title: "All fields are required!",
        text: "Please fill in all the fields to add a product.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else {
      const ProductData = {
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
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      };

      axios
        .post("https://dummyjson.com/products/add", ProductData)
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: "Product Added!",
            text: "Your product has been added successfully.",
            icon: "success",
            confirmButtonText: "Great!",
          });
          setTimeout(() => {
            Navigate("/products");
          }, 1000);
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while adding the product.",
            icon: "error",
            confirmButtonText: "Try again",
          });
          console.log(error);
        });
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // إضافة تأثير fade-in عند تحميل الصفحة
    >
      <h2>Add New Product</h2>
      <form onSubmit={AddProduct}>
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
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.slug}
              </option>
            ))}
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
          Add Product
        </button>
      </form>
    </motion.div>
  );
}

export default AddProduct;

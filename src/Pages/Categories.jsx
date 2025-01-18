import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // استيراد Framer Motion

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5003/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);

  // تصفية الفئات بناءً على قيمة البحث
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <h1 className="my-4">Categories</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              className="form-control mb-3"
              placeholder="Search by Category"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
          <div className="col-12 my-4">
            <button className="btn btn-success">Add New Product</button>
          </div>
        </div>

        <div className="col-12">
          <motion.table
            className="table table-bordered"
            initial={{ opacity: 0 }} // بدء الحركة بالشفافية 0
            animate={{ opacity: 1 }} // الانتقال إلى الشفافية 1
            transition={{ duration: 1 }} // مدة الحركة
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
                <th scope="col">Slug</th>
                <th scope="col">Description</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No categories found.
                  </td>
                </tr>
              ) : (
                <>
                  {filteredCategories.map((category, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }} // بداية الحركة مع الشفافية 0
                      animate={{ opacity: 1 }} // الانتقال إلى الشفافية 1
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1, // تأخير الحركة لكل صف
                      }}
                    >
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td>{category.slug}</td>
                      <td>
                        <a
                          href={category.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {category.url}
                        </a>
                      </td>
                      <th>
                        <button className="btn btn-danger mx-2">Delete</button>
                        <button className="btn btn-primary">Edit</button>
                      </th>
                    </motion.tr>
                  ))}
                </>
              )}
            </tbody>
          </motion.table>
        </div>
      </div>
    </>
  );
}

export default Categories;

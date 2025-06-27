import { motion } from "framer-motion";

function Home() {
  // بيانات وهمية للتجربة
  const totalProducts = 48;
  const totalUsers = 12;

  const topSellingProducts = [
    { id: 1, title: "iPhone 13", price: 999, sold: 350 },
    { id: 2, title: "Samsung Galaxy S22", price: 899, sold: 300 },
    { id: 3, title: "MacBook Air M2", price: 1200, sold: 270 },
    { id: 4, title: "Sony Headphones", price: 199, sold: 250 },
    { id: 5, title: "Smart Watch", price: 150, sold: 200 },
  ];

  return (
    <>
      <h1 className="my-4">Admin Dashboard</h1>
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Total Products Card */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card text-white bg-info mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Products</h5>
                <p className="card-text">{totalProducts} Products</p>
              </div>
            </div>
          </motion.div>

          {/* Total Users Card */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card text-white bg-success mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text">{totalUsers} Users</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Table: Top Selling Products */}
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                Top 5 Best Selling Products
              </div>
              <div className="card-body table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price ($)</th>
                      <th>Units Sold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topSellingProducts.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.sold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;

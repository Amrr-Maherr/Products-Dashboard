import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function AllUsers() {
  const Navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "Hady Elsayad", email: "hady@example.com" },
    { id: 2, name: "Salma Ali", email: "salma@example.com" },
    { id: 3, name: "Mohamed Tarek", email: "mohamed@example.com" },
    { id: 4, name: "Sara Ahmed", email: "sara@example.com" },
  ]);

  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <motion.h1
        className="my-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Users
      </motion.h1>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              className="form-control mb-3"
              placeholder="Search by name"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="container-fluid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="row"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="col-12 my-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
          </motion.div>
          <motion.div
            className="col-12 table-responsive-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {users.length === 0 ? (
              <div className="text-center py-5 fs-4">No users available</div>
            ) : (
              <motion.table
                className="table table-hover table-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <thead>
                  <motion.tr
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </motion.tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No matching users found.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => (
                      <motion.tr
                        key={user.id}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "#f8f9fa",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <motion.button
                            onClick={() => handleDeleteUser(user.id)}
                            className="btn btn-danger btn-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Delete
                          </motion.button>
                          <motion.button
                            onClick={() => Navigate(`/user/${user.id}`)}
                            className="btn btn-info mx-2 btn-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </motion.table>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

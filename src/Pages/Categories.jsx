import axios from "axios";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, ssetCategories] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5003/categories")
      .then((response) => {
        console.log(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(true)
      });
  },[])
    return (
      <>
        <h1>Categories</h1>
      </>
    );
}
export default Categories
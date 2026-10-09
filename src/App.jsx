import { useSelector, useDispatch } from "react-redux";
import { addProduct, editProduct, deleteProduct } from "./redux/action";
import { useState } from "react";

function App() {

  const dispatch = useDispatch();

  const [pname, setPname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [editId, setEditId] = useState(null);

  const allData = useSelector((state) => {
    return state.products;
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editId) {

      dispatch(editProduct({
        id: editId,
        name: pname,
        category: category,
        price: price,
        brand: brand
      }));

      setEditId(null);

    } else {

      dispatch(addProduct({
        id: allData.length + 1,
        name: pname,
        category: category,
        price: price,
        brand: brand
      }));

    }

    setEditId(null);
    setPname("");
    setCategory("");
    setPrice("");
    setBrand("");
  }

  const handleEdit = (product) => {

    setEditId(product.id);
    setPname(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setBrand(product.brand);

  }

  return (
    <>

      <div className="container-fluid min-vh-100 bg-light px-4">

        <div className="row min-vh-100 g-0 bg-white shadow rounded-3 overflow-hidden">

          <div className="col-lg-3 border-end">

            <div className="bg-primary text-white text-center py-4">
              <h3 className="fw-bold mb-0"> Products </h3>
            </div>

            <div className="p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark mb-2">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                    value={pname}
                    onChange={(e) => setPname(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark mb-2"> Category </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>


                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark mb-2"> Price </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-5">
                  <label className="form-label fw-semibold text-dark mb-2"> Brand </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-semibold py-2">
                  ADD Product
                </button>

                <button type="reset"
                  onClick={() => {
                    setEditId(null);
                    setPname("");
                    setCategory("");
                    setPrice("");
                    setBrand("");
                  }}
                  className="btn btn-secondary w-100 fw-semibold py-2 mt-2
                ">
                  Reset
                </button>

              </form>

            </div>

          </div>

          <div className="col-lg-9">

            <div className="bg-dark text-white text-center py-4">
              <h3 className="fw-bold mb-0"> Product List </h3>
            </div>


            <div className="p-4">

              <div className="table-responsive">

                <table className="table table-bordered table-hover align-middle text-center mb-0">

                  <thead className="table-primary">

                    <tr>
                      <th className="fw-bold py-3">ID</th>
                      <th className="fw-bold py-3">Name</th>
                      <th className="fw-bold py-3">Category</th>
                      <th className="fw-bold py-3">Price</th>
                      <th className="fw-bold py-3">Brand</th>
                      <th className="fw-bold py-3">Action</th>
                    </tr>

                  </thead>

                  <tbody>

                    {allData.map((product) => (

                      <tr key={product.id}>
                        <td className="fw-semibold py-3"> {product.id} </td>
                        <td className="fw-semibold py-3"> {product.name} </td>
                        <td className="py-3">
                          <span className="badge bg-info text-dark fw-semibold px-3 py-2"> {product.category} </span>
                        </td>
                        <td className="fw-semibold py-3"> ₹{product.price} </td>
                        <td className="fw-semibold py-3"> {product.brand} </td>

                        <td className="py-3">

                          <button
                            onClick={() => handleEdit(product)}
                            className="btn btn-warning btn-sm fw-semibold me-2 px-3"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => { dispatch(deleteProduct(product.id)) }}
                            className="btn btn-danger btn-sm fw-semibold px-3">
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default App;
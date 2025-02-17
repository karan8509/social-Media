import React, { useContext } from "react";
import { ContextProvideData } from "../store/SliceAdminData";
import "../style/home.css"; 

export const Home = () => {
  const { uploadData , deleteProduct } = useContext(ContextProvideData);

  const handleDelete = (index) => {
    deleteProduct(index)
  }
  return (
    <div className="home-container">
      <div className="uploaded-items">
        {uploadData.length > 0 ? (
          uploadData.map((data, index) => (
            <div className="item-card" key={index}>
              <img src={data.file} alt="Uploaded" />
              <p><strong>Title:</strong> {data.title}</p>
              <p><strong>Description:</strong> {data.description}</p>
              <p className="item-price"><strong>Price:</strong> ₹{data.price}</p>
              <button onClick={() => handleDelete(index)}>remove</button>
            </div>
          ))
        ) : (
          <p>No Image Uploaded</p>
        )} 
      </div>
    </div>
  );
};

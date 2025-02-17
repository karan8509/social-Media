import React, { createContext, useState } from "react";
export const ContextProvideData = createContext([
  {
    addData: () => {},
    uploadData: [],
    deleteOneId: () => {},
  },
]);
export const SliceAdminData = ({ children }) => {
  const [uploadData, setUploadData] = useState([]);
  const addData = (file, title, message, price) => {
    const newData = { file, title, message, price };
    setUploadData([...uploadData, newData]);
  };

  const deleteProduct = (id) => {
    const deleteOneId = uploadData.filter((_, _id) => _id !== id);
    setUploadData(deleteOneId);
  };

  return (
    <ContextProvideData.Provider value={{ addData, uploadData, deleteProduct }}>
      {children}
    </ContextProvideData.Provider>
  );
};

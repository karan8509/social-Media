import React, { useContext, useRef, useState } from "react";
import { ContextProvideData } from "../store/SliceAdminData";
import "../style/sign.css";
export const SignUpUser = () => {
  const { addData } = useContext(ContextProvideData);
  const [file, setFile] = useState(null);
  const UploadTitle = useRef();
  const UpdoadMessage = useRef();
  const UploadPrice = useRef();

  // const OnchangeUploadfiles = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //     event.target.value = "";
  //   }
  // };


  const OnchangeUploadfiles = (event) => {
   setFile(event.target.files[0])
   event.target.value = "";
    };


  const handlClicked = () => {
    if (!file) {
      alert("Please Choose A Image ");
      return;
    }
    if (!file.type.startsWith("image/")) {
      alert("Please Enter Valid Image file");
      return;
    }
    const newCreteUrl = URL.createObjectURL(file);
    const title = UploadTitle.current.value;
    const message = UpdoadMessage.current.value;
    const price = UploadPrice.current.value;
    addData(newCreteUrl , title , message , price )
  };

  return (
    <div className="containerdd">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underling"></div>
        <div className="inputs">
          <div className="input">
            <label htmlFor="fileUpload">Upload File:</label>
            <input
              type="file"
              name="uploadfiles"
              id=""
              accept="image/*"
              onChange={OnchangeUploadfiles}
            />
          </div>
          <div className="input">
            <label htmlFor="titleName">Title:</label>
            <input
              type="text"
              name="titleName"
              id=""
              placeholder="Type Your Title "
              ref={UploadTitle}
            />
          </div>
          <div className="input">
            <label htmlFor="message">Description:</label>
            <textarea
              name="message"
              placeholder="Type Your Message"
              ref={UpdoadMessage}
            ></textarea>
          </div>
          <div className="input">
            <input
              type="price"
              name=""
              id=""
              placeholder="Enter Your Price"
              ref={UploadPrice}
            />
          </div>
        </div>
        <button onClick={handlClicked}>Submit</button>
      </div>
    </div>
  );
};

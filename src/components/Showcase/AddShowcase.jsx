import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import "../../styles/AddEmployeeForm.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  PostShowCaseImage,
  getBlogById,
  postBlog,
  updateBlogs,
} from "../../redux/api";
import LoadingPage from "../utils/LoadingPage";
import LoadingComponent from "../utils/LoadingButton";

const initialData = {
  sequence: "",
  image: "",
};

const AddShowcase = () => {
  const [GallaryData, setGallaryData] = useState(initialData);
  const [LoadingUi, setLoadingUi] = useState(false);
  const [LoadingButton, setLoadingButton] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name } = e.target;
    setGallaryData({ ...GallaryData, [name]: e.target.value });
  };

  const handleinput2 = async () => {
    try {
      const formdata = new FormData();
      formdata.append("file", GallaryData.image);
      formdata.append("upload_preset", "eduvisor");
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/sinox-technology/image/upload`,
        formdata
      );
      console.log(response);
      return response?.data?.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingButton(true);
      const url = await handleinput2();
      await PostShowCaseImage({ sequence: GallaryData.sequence, image: url });
      history.push("/gallary");
      setLoadingButton(false);
    } catch (error) {
      setLoadingButton(false);
      console.log(error);
    }
  };

  // edit

  const { id } = useParams();

  useEffect(() => {
    blogById();
  }, []);

  const blogById = async () => {
    try {
      setLoadingUi(true);
      const response = await getBlogById(id);
      // setblogData(response?.data?.data)
      setLoadingUi(false);
    } catch (error) {
      setLoadingUi(false);
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoadingButton(true);
      // await updateBlogs(blogData)
      history.push("/blogs");
      setLoadingButton(false);
    } catch (error) {
      setLoadingButton(false);
      console.log(error);
    }
  };
  return (
    <div className="addEmployee-container">
      {LoadingUi ? (
        <LoadingPage />
      ) : (
        <div className="addEmployee-personalDetails">
          <div className="addEmployee-alignRow">
            <div className="addEmployee-inputFieldDiv">
              <label className="addEmployee-inputLabel">
                Sequence{" "}
                <span style={{ color: "red", fontSize: "1.2rem" }}>*</span>{" "}
              </label>
              {/* <input
                  type='text'
                  name='title'
                  placeholder='Title'
                  // value={blogData?.title}
                  className='addEmployee-inputField'

                /> */}
              <select
                onChange={handleChange}
                name="sequence"
                id=""
                className="addEmployee-inputField"
              >
                <option value="1">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="addEmployee-inputFieldDiv">
              <label className="addEmployee-inputLabel">Gallary Image </label>
              <input
                type="file"
                name="image"
                placeholder="Image"
                // value={blogData?.author}
                className="addEmployee-inputField"
                onChange={(e) =>
                  setGallaryData({ ...GallaryData, image: e.target.files[0] })
                }
              />
            </div>
          </div>

          <div className="addEmployee-submitDetailDiv">
            {!!id ? (
              <button
                className="addEmployee-submitDetailBtn"
                onClick={handleUpdate}
              >
                Update
                {LoadingButton && <LoadingComponent />}
              </button>
            ) : (
              <button
                className="addEmployee-submitDetailBtn"
                onClick={handlesubmit}
              >
                Submit
                {LoadingButton && <LoadingComponent />}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddShowcase;

import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://strange-sweater-lamb.cyclic.app/api",
  // baseURL: "http://localhost:8080/api",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("fanstarAdmin")) {
    req.headers["authorization"] = `Bearer ${Cookies.get("fanstarAdmin")}`;
  }
  return req;
});

export const login = (loginData) => API.post("/public/login", loginData);

//blogs
export const getBlogs = () => API.get("/blogs");
export const postBlog = (data) => API.post("/blogs", data);
export const getBlogById = (id) => API.get(`/blogs/${id}`);
export const deleteBlogs = (id) => API.delete(`/blogs/${id}`);
export const updateBlogs = (payload) =>
  API.put(`/blogs/${payload?._id}`, payload);

//university
export const getUniversity = () => API.get("/universities");
export const DeleteUniversity = (id) => API.delete(`/universities/${id}`);
export const getUniversityById = (id) => API.get(`/universities/${id}`);
export const updateUniversity = (payload) =>
  API.put(`/universities/${payload?._id}`, payload);

//colleges
export const getColleges = () => API.get("/colleges");
export const deleteCollege = (id) => API.delete(`/colleges/${id}`);
export const postColleges = (data) => API.post("/colleges", data);
export const getCollegeById = (id) => API.get(`/colleges/${id}`);
export const updateCollege = (payload) =>
  API.put(`/colleges/${payload._id}`, payload);

//course
export const getCourses = (id) => API.get(`/colleges/course/${id}`);
export const addCourses = (payload) =>
  API.post(`/colleges/course/add`, payload);
export const deleteCourse = (payload) =>
  API.post(`/colleges/course/delete`, payload);

// users
export const getUsers = () => API.get("/users");
//enquiry
export const getEnquiry = () => API.get("/enquiry");

//testimonial
export const PostTestimonial = (payload) =>
  API.post(`/testimonial/add`, payload);
export const getTestimonial = () => API.get("/testimonial");
export const deleteTestimonial = (id) => API.delete(`/testimonial/${id}`);

// update reveiw
export const UpdateReview = (payload) =>
  API.post(`/colleges/review/update/${payload?.courseid}`, payload);

//gallary data
export const PostGallaryImage = (payload) => API.post(`/gallary/add`, payload);
export const getGallaryImages = () => API.get(`/gallary`);
export const deleteGallaryImage = (id) => API.delete(`/gallary/${id}`);

//showcase data
export const PostShowCaseImage = (payload) =>
  API.post(`/showcase/add`, payload);
export const getShowcaseImages = () => API.get(`/showcase`);
export const deleteShowcaseImages = (id) => API.delete(`/showcase/${id}`);

// table
export const PostDyanmicTable = (payload) =>
  API.post(`/colleges/table/add`, payload);
export const getDyanmicTable = () => API.get(`/colleges/table`);
export const deleteDyanmicTable = (payload) =>
  API.post(`/colleges/table/delete`, payload);
export const getDyanmicTableById = (id) => API.get(`/colleges/table/${id}`);
export const updateDyanmicTable = (payload) =>
  API.put(`/colleges/table/${payload?.collegeId}/${payload?.tableId}`, payload);

//subpage
export const PostSubpage = (payload) => API.post(`/subpage/add`, payload);
export const getSubpages = () => API.get(`/subpage`);
export const getSubpagesById = (id) => API.get(`/subpage/${id}`);
export const deleteSubpages = (id) => API.delete(`/subpage/${id}`);
export const updateSubpages = (payload) =>
  API.put(`/subpage/${payload._id}`, payload);

import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://college-veda-backend.onrender.com/api",
  // baseURL: "http://localhost:8080/api",
});

API.interceptors.request.use((req) => {
  if (Cookies.get("fanstarAdmin")) {
    req.headers["authorization"] = `Bearer ${Cookies.get("fanstarAdmin")}`;
  }
  return req;
});

export const login = (loginData) => API.post("/admin/public/login", loginData);

export const appVisits = () => API.get("/admin/private/gettotalappvisits");
export const totalSubscriptions = () =>
  API.get("/admin/private/gettotalsubscribers");

// Artists
export const getArtistList = (searchInput = "") =>
  API.post("/admin/private/getlistofartists", { field: searchInput });
export const createArtist = (formData) =>
  API.post("/admin/private/createartist", formData);
export const getAnArtist = (id) => API.get(`/admin/private/getanartist/${id}`);
export const getArtistsOfAnEmployee = (id) =>
  API.get(`/admin/private/getartistsofanemployee/${id}`);

export const totalAndPendingOrdersForArtist = (id) =>
  API.get(`/admin/private/getordersofartist/${id}`);

export const allPaymentForArtist = (id) =>
  API.get(`/admin/private/getpayments/${id}`);

export const blockAndUnBlockArtist = (id) =>
  API.put("/admin/private/blockunblockartist", { artistId: id });

export const deleteAnArtist = (id) =>
  API.delete(`/admin/private/deleteanartist/${id}`);

export const EditArtist = (id) =>
  API.get(`/admin/private/generatetokenofanartist/${id}`);

export const addArtistAccount = (id, formData) =>
  API.put(`api/admin/private/addartistaccount/${id}`, formData);

export const fetchWithdraws = (id) =>
  API.get(`/admin/private/getwithdrawals/${id}`);

export const payToArtist = (formData) =>
  API.put(`/admin/private/updateanartistbalance/`, formData);

// Employee
export const getEmployeeList = (searchInput = "") =>
  API.post("/admin/private/getlistofemployees", { field: searchInput });
export const getAnEmployee = (id) =>
  API.get(`/admin/private/getanemployee/${id}`);

export const addEmployeeAccount = (id, formData) =>
  API.put(`api/admin/private/addemployeeaccount/${id}`, formData);

export const createEmployee = (formData) =>
  API.post("/admin/private/createemployee", formData);

export const blockAndUnBlockEmployee = (id) =>
  API.put("/admin/private/blockunblockemployee", { employeeId: id });

export const deleteAnEmployee = (id) =>
  API.delete(`/admin/private/deleteanemployee/${id}`);

export const allPaymentForEmployee = (id) =>
  API.get(`/admin/private/getpaymentsofartistsofemployee/${id}`);

export const getUserList = () => API.get("/admin/private/getallusers");
export const getPaymentList = (searchInput) =>
  API.post("/admin/private/getallpayments", { field: searchInput });
export const blockUnblockUser = (id) =>
  API.put("/admin/private/blockunblockuser", {
    userId: id,
  });

//blogs
export const postBlog = (data) => API.post("/blogs", data);
export const getBlogs = () => API.get("/blogs");
export const deleteBlogs = (id) => API.delete(`/blogs/${id}`);
export const getBlogById = (id) => API.get(`/blogs/${id}`);
export const updateBlogs = (payload) =>
  API.put(`/blogs/${payload?._id}`, payload);

//university
export const getUniversity = () => API.get("/universities");
export const DeleteUniversity = (id) => API.delete(`/universities/${id}`);
export const getUniversityById = (id) => API.get(`/universities/${id}`);
export const updateUniversity = (payload) =>
  API.put(`/universities/${payload?._id}`, payload);
export const addUniversity = (data) => API.post("/universities", data);

//colleges
export const getColleges = () => API.get("/colleges");
export const DeleteCollege = (id) => API.delete(`/colleges/${id}`);
export const postColleges = (data) => API.post("/colleges", data);
export const getCollegeById = (id) => API.get(`/colleges/${id}`);
export const UpdateCollege = (payload) =>
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
export const getEnquiry = () => API.get("/contact");

//testimonial
export const PostTestimonial = (payload) => API.post(`/testimonials`, payload);
export const getTestimonial = () => API.get("/testimonials");
export const deleteTestimonial = (id) => API.delete(`/testimonials/${id}`);

// update reveiw
export const UpdateReview = (payload) =>
  API.post(`/admin/college/review/update/${payload?.courseid}`, payload);

//showcase data
export const PostShowCaseImage = (payload) => API.post(`/showcase`, payload);
export const getShowcaseImages = () => API.get(`/showcase`);
export const deleteShowcaseImages = (id) => API.delete(`/showcase/${id}`);

// table
export const PostDyanmicTable = (payload) =>
  API.post(`/admin/table/add`, payload);
export const getDyanmicTable = () => API.get(`/admin/table`);
export const deleteDyanmicTable = (payload) =>
  API.post(`/admin/table/delete`, payload);
export const getDyanmicTableById = (id) => API.get(`/admin/table/${id}`);
export const updateDyanmicTable = (payload) =>
  API.put(`/admin/table/${payload?.collegeId}/${payload?.tableId}`, payload);

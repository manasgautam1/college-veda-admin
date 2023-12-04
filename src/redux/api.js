import axios from 'axios';
import Cookies from 'js-cookie';

// for live server
// const API = axios.create({
//   baseURL: 'http://localhost:8080',
// });
const API = axios.create({
  baseURL: 'https://eduvisor-backend.onrender.com',
});
// http://localhost:8080
// https://eduvisor-backend.onrender.com
// https://fanstar-kylo.herokuapp.com/
// https://fanstar-backend-uiwtg.ondigitalocean.app/

API.interceptors.request.use((req) => {
  if (Cookies.get('fanstarAdmin')) {
    req.headers['authorization'] = `Bearer ${Cookies.get('fanstarAdmin')}`;
  }
  return req;
});

export const login = (loginData) =>
  API.post('/api/admin/public/login', loginData);

export const appVisits = () => API.get('/api/admin/private/gettotalappvisits');
export const totalSubscriptions = () =>
  API.get('/api/admin/private/gettotalsubscribers');

// Artists
export const getArtistList = (searchInput = '') =>
  API.post('/api/admin/private/getlistofartists', { field: searchInput });
export const createArtist = (formData) =>
  API.post('/api/admin/private/createartist', formData);
export const getAnArtist = (id) =>
  API.get(`/api/admin/private/getanartist/${id}`);
export const getArtistsOfAnEmployee = (id) =>
  API.get(`/api/admin/private/getartistsofanemployee/${id}`);

export const totalAndPendingOrdersForArtist = (id) =>
  API.get(`/api/admin/private/getordersofartist/${id}`);

export const allPaymentForArtist = (id) =>
  API.get(`/api/admin/private/getpayments/${id}`);

export const blockAndUnBlockArtist = (id) =>
  API.put('/api/admin/private/blockunblockartist', { artistId: id });

export const deleteAnArtist = (id) =>
  API.delete(`/api/admin/private/deleteanartist/${id}`);

export const EditArtist = (id) =>
  API.get(`/api/admin/private/generatetokenofanartist/${id}`);

export const addArtistAccount = (id, formData) =>
  API.put(`api/admin/private/addartistaccount/${id}`, formData);

export const fetchWithdraws = (id) =>
  API.get(`/api/admin/private/getwithdrawals/${id}`);

export const payToArtist = (formData) =>
  API.put(`/api/admin/private/updateanartistbalance/`, formData);

// Employee
export const getEmployeeList = (searchInput = '') =>
  API.post('/api/admin/private/getlistofemployees', { field: searchInput });
export const getAnEmployee = (id) =>
  API.get(`/api/admin/private/getanemployee/${id}`);

export const addEmployeeAccount = (id, formData) =>
  API.put(`api/admin/private/addemployeeaccount/${id}`, formData);

export const createEmployee = (formData) =>
  API.post('/api/admin/private/createemployee', formData);

export const blockAndUnBlockEmployee = (id) =>
  API.put('/api/admin/private/blockunblockemployee', { employeeId: id });

export const deleteAnEmployee = (id) =>
  API.delete(`/api/admin/private/deleteanemployee/${id}`);

export const allPaymentForEmployee = (id) =>
  API.get(`/api/admin/private/getpaymentsofartistsofemployee/${id}`);

export const getUserList = () => API.get('/api/admin/private/getallusers');
export const getPaymentList = (searchInput) =>
  API.post('/api/admin/private/getallpayments', { field: searchInput });
export const blockUnblockUser = (id) =>
  API.put('/api/admin/private/blockunblockuser', {
    userId: id,
  });


//blogs
export const postBlog = (data) => API.post('/admin/blogs/add', data);
export const getBlogs = () => API.get('/user/blogs');
export const deleteBlogs = (id) => API.delete(`/admin/blogs/${id}`);
export const getBlogById = (id) => API.get(`/user/blogs/${id}`);
export const updateBlogs = (payload) => API.put(`/admin/blogs/update/${payload?._id}`, payload);

//university
export const getUniversity = () => API.get('/admin/university');
export const DeleteUniversity = (id) => API.delete(`/admin/university/${id}`);
export const getUniversityById = (id) => API.get(`/admin/university/${id}`);
export const updateUniversity = (payload) => API.put(`/admin/university/${payload?._id}`, payload);

//colleges
export const getColleges = () => API.get('/admin/college');
export const DeleteCollege = (id) => API.delete(`/admin/college/${id}`);
export const postColleges = (data) => API.post('/admin/college/add', data);
export const getCollegeById = (id) => API.get(`/admin/college/${id}`);
export const UpdateCollege = (payload) => API.put(`/admin/college/${payload._id}`, payload);

//course 
export const getCourses = (id) => API.get(`/admin/college/course/${id}`);
export const addCourses = (payload) => API.post(`/admin/college/course/add`, payload);
export const deleteCourse = (payload) => API.post(`/admin/college/course/delete`, payload);

// users
export const getUsers = () => API.get('/users');
//enquiry
export const getEnquiry = () => API.get('/admin/enquiry');

//testimonial
export const PostTestimonial = (payload) => API.post(`/admin/testimonial/add`, payload);
export const getTestimonial = () => API.get('/admin/testimonial');
export const deleteTestimonial = (id) => API.delete(`/admin/testimonial/${id}`);

// update reveiw
export const UpdateReview = (payload) => API.post(`/admin/college/review/update/${payload?.courseid}`, payload);

//gallary data
export const PostGallaryImage = (payload) => API.post(`/admin/gallary/add`, payload);
export const getGallaryImages = () => API.get(`/admin/gallary`);
export const deleteGallaryImage = (id) => API.delete(`/admin/gallary/${id}`);

//showcase data
export const PostShowCaseImage = (payload) => API.post(`/admin/showcase/add`, payload);
export const getShowcaseImages = () => API.get(`/admin/showcase`);
export const deleteShowcaseImages = (id) => API.delete(`/admin/showcase/${id}`);

// table
export const PostDyanmicTable = (payload) => API.post(`/admin/table/add`, payload);
export const getDyanmicTable = () => API.get(`/admin/table`);
export const deleteDyanmicTable = (payload) => API.post(`/admin/table/delete`, payload);
export const getDyanmicTableById = (id) => API.get(`/admin/table/${id}`);
export const updateDyanmicTable = (payload) => API.put(`/admin/table/${payload?.collegeId}/${payload?.tableId}`, payload);

//subpage
export const PostSubpage = (payload) => API.post(`/admin/subpage/add`, payload);
export const getSubpages = () => API.get(`/admin/subpage`);
export const getSubpagesById = (id) => API.get(`/admin/subpage/${id}`);
export const deleteSubpages = (id) => API.delete(`/admin/subpage/${id}`);
export const updateSubpages = (payload) => API.put(`/admin/subpage/${payload._id}`, payload);

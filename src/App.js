import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import NavSidebar from "./components/NavSidebar";
import ArtistPage from "./components/Artists/ArtistPage";
import UserPage from "./components/Users/UserPage";
import AddArtistForm from "./components/Artists/AddArtistForm";
import BlogPage from "./components/Blogs/BlogPage";
import AddBlogForm from "./components/Blogs/AddBlogForm";
import PaymentPage from "./components/Payments/PaymentPage";
import ArtistDetails from "./components/Artists/ArtistDetails";
import EmployeeDetails from "./components/Blogs/EmployeeDetails";
import ArtistPayment from "./components/Artists/ArtistPayment";
import Addcoursepage from "./components/Artists/Addcoursepage";
import AddEmployeeAccount from "./components/Blogs/AddEmployeeAccount";
import ViewCoursePage from "./components/Artists/Courses/ViewCoursePage";
import Edituniversity from "./components/Artists/University/Edituniversity";
import Editcourse from "./components/Artists/Courses/Editcourse";
import EditBlog from "./components/Blogs/allblogs/EditBlog";
import ViewSingleUser from "./components/Users/ViewSingleUser";
import College from "./components/colleges/college";
import AddCollege from "./components/colleges/AddCollege";
import EnquiryPage from "./components/EnquiryForm/EnquiryPage";
import Course from "./components/colleges/course/Course";
import AddCourse from "./components/colleges/course/AddCourse";
import Testimonial from "./components/Testimonials/Testimonial";
import AddTestimonial from "./components/Testimonials/AddTestimonial";
import Review from "./components/colleges/Review/Review";
import Showcase from "./components/Showcase/Showcase";
import AddShowcase from "./components/Showcase/AddShowcase";
import DynamicTables from "./components/DynamicTables/DynamicTablex";
import AddDynamicTable from "./components/DynamicTables/AddDynamicTable";

export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <NavSidebar>
          <Route path="/home" exact component={DashboardPage} />

          {/* Universities */}

          <Route path="/universities" exact component={ArtistPage} />
          <Route path="/universities/add" exact component={AddArtistForm} />
          <Route
            path="/universities/edit/:id"
            exact
            component={AddArtistForm}
          />
          <Route
            path="/universities/addcourse/:id"
            exact
            component={Addcoursepage}
          />
          <Route
            path="/universities/viewcourse/:id"
            exact
            component={ViewCoursePage}
          />
          <Route
            path="/universities/editcourse/:id1/:id2"
            exact
            component={Editcourse}
          />

          <Route path="/artists/detail/:id" exact component={ArtistDetails} />
          <Route
            path="/artists/detail/:id/pay"
            exact
            component={ArtistPayment}
          />
          <Route path="/blogs" exact component={BlogPage} />
          <Route path="/blog/add" exact component={AddBlogForm} />
          <Route path="/blog/edit/:id" exact component={AddBlogForm} />
          <Route
            path="/employees/addaccount"
            exact
            component={AddEmployeeAccount}
          />
          <Route path="/colleges" exact component={College} />
          <Route path="/colleges/:id/course" exact component={Course} />
          <Route path="/colleges/:id/review" exact component={Review} />
          <Route path="/colleges/:id/course/add" exact component={AddCourse} />
          <Route path="/colleges/edit/:id" exact component={AddCollege} />
          <Route path="/colleges/add" exact component={AddCollege} />
          <Route
            path="/employees/detail/:id"
            exact
            component={EmployeeDetails}
          />
          <Route path="/users" exact component={UserPage} />
          <Route path="/enquiry" exact component={EnquiryPage} />
          <Route path="/users/:id" exact component={ViewSingleUser} />
          <Route path="/payments" exact component={PaymentPage} />
          <Route path="/testimonial" exact component={Testimonial} />
          <Route path="/testimonial/add" exact component={AddTestimonial} />

          <Route path="/home-showcase" exact component={Showcase} />
          <Route path="/home-showcase/add" exact component={AddShowcase} />
          <Route path="/colleges/:id/table" exact component={DynamicTables} />
          <Route
            path="/colleges/:id/table/add"
            exact
            component={AddDynamicTable}
          />
          <Route
            path="/colleges/:id/edit/:tableid"
            exact
            component={AddDynamicTable}
          />
        </NavSidebar>
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import moment from 'moment';
import { blockUnblockUser } from '../../redux/api';
import { Link } from 'react-router-dom';
import '../../styles/ArtistsTable.css';

const UsersTable = (props) => {
  const { Users } = props;
  console.log(Users)
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {Users?.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.phone ? user.phone : 'NA'}</td>
              <td>{user.email ? user.email : 'NA'}</td>
              {/* <td><Link style={{ backgroundColor: "#155b89", padding: "6px", color: "white", textDecoration: "none" }} to={`/users/${user._id}`}>View Details</Link></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

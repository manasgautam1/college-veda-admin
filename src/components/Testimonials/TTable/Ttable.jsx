import React from 'react';
import '../../../styles/ArtistsTable.css';
import OneTtable from './OneTtable';

const Ttable = (prop) => {

  return (
    <div className='table-wrapper' id='#scrollBar'>

      <table className='fl-table'>
        <thead>
          <tr>
            <th>S no.</th>
            <th>Title</th>
            <th>Position</th>
            <th>Photo</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            prop?.blogData?.map((blog, ind) => {
              return <OneTtable
                key={ind}
                index={ind}
                id={blog._id}
                body={blog.body}
                deleteBlog={prop.deleteBlog}
                author={blog.message}
                title={blog.name}
                position={blog.position}
                date={blog.createdAt}
                blogPic={blog.photo}
              />

            })
          }
        </tbody>
      </table>
    </div >
  );
};

export default Ttable;

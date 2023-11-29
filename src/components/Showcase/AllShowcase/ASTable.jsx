import React from 'react';
import '../../../styles/ArtistsTable.css';
import SingleAsRow from './SingleAsRow';

const ASTable = (prop) => {

  return (
    <div className='table-wrapper' id='#scrollBar'>

      <table className='fl-table'>
        <thead>
          <tr>
            <th>S no.</th>
            <th>Sequence</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            prop?.blogData?.map((blog, ind) => {
              return <SingleAsRow
                key={ind}
                index={ind}
                id={blog._id}
                deleteBlog={prop.deleteBlog}
                sequence={blog.sequence}
                image={blog.image}
              />

            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ASTable;

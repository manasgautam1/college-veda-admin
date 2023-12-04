import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment/moment';

function OneSttable(prop) {
  console.log(prop)
  return (
    <>
      <tr >
        <td>{prop?.index + 1}</td>
        <td>{prop?.title}</td>
        <td>{prop?.course}</td>
        <td className="text-right" >
          <div className="actions" style={{ display: "flex", justifyContent: "space-betweens" }}>
            <Link to={`/subpage/edit/${prop.id}`}> <button className='uni-edit-btn'><ModeEditIcon /> </button></Link>
            <Link onClick={() => prop?.deleteBlog(prop?.id)} to={'#'}  ><button className='uni-delete-btn'><DeleteIcon /> </button></Link>
          </div>
        </td>
      </tr>
    </>
  )
}

export default OneSttable
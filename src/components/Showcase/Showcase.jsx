import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingPage from '../utils/LoadingPage';
import addIcon from '../../images/addIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import axios from 'axios';
import '../../styles/EmployeePage.css';
import { deleteBlogs, deleteGallaryImage, deleteShowcaseImages, getBlogs, getGallaryImages, getShowcaseImages } from '../../redux/api';
import ASTable from './AllShowcase/ASTable';

const Showcase = () => {
  const history = useHistory();
  const [allblogData, setallblogData] = useState([])
  const [loading, setLoading] = useState(false);
  const [searchInput, setsearchInput] = useState('');
  const [filterData, setfilterData] = useState([])

  const fetchblogList = async () => {
    setLoading(true);
    try {
      const call1 = await getShowcaseImages();
      setallblogData(call1?.data?.data)
      // setallblogData(call1.data.allBlogs)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchblogList();
  }, []);

  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    if (searchInput !== '') {
      let filteredData = allblogData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
      })
      setfilterData(filteredData)
    } else {
      setfilterData(allblogData)
    }
  }

  const deleteBlog = async (id) => {
    try {
      const newarr = allblogData.filter(item => item._id !== id)
      setallblogData(newarr)
      await deleteShowcaseImages(id)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='employee-container'>
      {
        loading ? (<LoadingPage />) : (
          <>
            <div className='employee-firstSection'>
              <div className='employee-searchDiv'>
                <img src={searchIcon} alt='search' className='searchIcon' />
                <input
                  type='text'
                  placeholder='Enter a Name , Title and Author etc'
                  className='artist-searchInput'
                  id='searchInput'
                  value={searchInput}
                  onChange={(e) => searchItems(e.target.value)}
                />
              </div>
              <div className='employee-addEmployeeDiv'>
                <button
                  className='employee-addBtn'
                  onClick={() => history.push('/home-showcase/add')}
                >
                  <img src={addIcon} alt='add' className='employee-addIcon' />
                  <span>Add Showcase Image</span>
                </button>
              </div>
            </div>
            <div className='employee-tableSection'>
              {(searchInput.length > 1) ? (
                <ASTable
                  blogData={filterData}
                  deleteBlog={deleteBlog}
                />
              ) : (
                <ASTable
                  blogData={allblogData}
                  deleteBlog={deleteBlog}
                />
              )
              }
            </div>
          </>
        )
      }
    </div>
  );
};

export default Showcase;

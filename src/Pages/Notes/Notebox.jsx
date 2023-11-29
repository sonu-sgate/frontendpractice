import React, { useEffect, useState } from 'react';
import { Box, Input, Select, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useLocation, useSearchParams } from 'react-router-dom';
import Main from './Main';
import Pagination from './PaginationComponent';
import { useSelector } from 'react-redux';

const AnimatedBox = motion(Box);

const NoteBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
const [searchParams,setSearchparams]=useSearchParams()

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };
const handlesearchnotes=(e)=>{
    // console.log(searchTerm,sortOption)
}

const location=useLocation()
const notesdata=useSelector((state)=>state.getnotesreducer)
const logindata=useSelector((state)=>state.loginreducer)
const [page,setPage]=useState(searchParams.get("page")||1)
const {usertoken}=logindata
const {notes}=notesdata
// console.log(notes,"pagination")

useEffect(()=>{
let obj={}
searchTerm&&(obj.title=searchTerm)
sortOption&&(obj.sortby="created_at")&&(obj.order=sortOption)
page&&(obj.page=page)
setSearchparams(obj)


},[searchTerm,sortOption,page])
  return (
    <>
    <AnimatedBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg="white"
      mb={4}
    >
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        mb={2}
      />
      <Select
        placeholder="Sort By Date"
        value={sortOption}
        onChange={handleSort}
        mb={2}
      >
      
        <option value="asc"> Ascending Order</option>
        <option value="desc">Descending Order</option>
      </Select>
      <Button colorScheme="teal" onClick={handlesearchnotes}>Search</Button>
    </AnimatedBox>
    <Main/>

   
  
    </>
  );
};

export default NoteBox;

import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard';
import { Box, Center, Heading, Img } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import loadingimg from "./images/loading.gif"
import errorimg from "./images/error.gif"
import { getnotes } from '../../Redux/NotesSection/GetNotes/Action';
import NoteBox from './Notebox';
import Pagination from './PaginationComponent';
import { useSearchParams } from 'react-router-dom';
const NoteList = ({currentPage,handlepage, notes, onDelete, onEdit,totalpages }) => {
  // console.log(notes,"notelist")
  const [searchParams]=useSearchParams()

  const notesdata=useSelector((state)=>(state.getnotesreducer))
  const dispatch=useDispatch()
  const logindata=useSelector((state)=>state.loginreducer)
const {usertoken}=logindata
//   useEffect(()=>{
// dispatch(getnotes(usertoken))
//   },[])


  const {getisLoading,getisError}=notesdata
// console.log(getisLoading,"loading")
  if(getisLoading){
    return <Img src={loadingimg}/>
  }
  else if(getisError){
    return <Center><Heading>Something Going Wrong...please check</Heading></Center>
  }
  return (
   <>
   {/* <NoteBox/> */}

    
    <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(1,1fr)"]} gap="30px">
      {notes&&notes.length>=1&&notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
      {totalpages&&notes.length>0&&<Pagination handlepage={handlepage} currentPage={currentPage} totalPages={totalpages} />}
    </Box>  
    {notes.length<=1&&<Center ><Heading textAlign={"center"}>Oops..no data found!!</Heading></Center>}
     </>
  );
};

export default NoteList;

import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Button, Container, useToast } from '@chakra-ui/react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { useDispatch, useSelector } from 'react-redux';
import { createnotes, createnotesfailure, createnotessuccess } from '../../Redux/NotesSection/CreateNotes/Action';
import { login } from '../../Redux/Authentication/Login/Action';
import { getnotes, getnotesfailure, getnotessuccess } from '../../Redux/NotesSection/GetNotes/Action';
import { useLocation, useSearchParams } from 'react-router-dom';


  
  const initialdata={
    title:"",
    description:""
  }
const Main = () => {
  const [mynotes, setMyNotes] = useState([]);
  const [notedata,setNotedata]=useState(initialdata)
const [forany,setForany]=useState(false)
const [searchParams,setSearchparams]=useSearchParams()
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editedNote, setEditedNote] = useState(null);
// console.log(defaultnotes)
const handlechange=(e)=>{
    const {name,value}=e.target
    setNotedata((pre)=>({...pre,[name]:value}))
}
const dispatch=useDispatch()
const allnotes=useSelector((state)=>state.notes)
const createdata=useSelector((state)=>state.createnotesreducer)
const [currentPage,setCurrentPage]=useState(searchParams.get("page")||1)
const {createnotesisLoading,createnotesisError}=createdata
const logindata=useSelector((state)=>state.loginreducer)

const {usertoken}=logindata
// console.log(usertoken)
const toast=useToast()
const notesdata=useSelector((state)=>state.getnotesreducer)
const {getnotesisLoading,getnotesisError,notes,totalpages}=notesdata

console.log(notes,"mainpagenotes",totalpages)
console.log(notesdata,"mainpage")
const location=useLocation()
useEffect(()=>{

    const params={}
    searchParams.get("title")&&(params.title=searchParams.get("title"))
     searchParams.get("sortby")&&(params.sortby=searchParams.get("sortby"))
     searchParams.get("order")&&(params.order=searchParams.get('order'))
 searchParams.get("page")&&(params.page=searchParams.get("page"))
params.limit=10
       
   
    
    setSearchparams({...params,"page":currentPage})
    
    dispatch(getnotes(usertoken,params)).then((res)=>{
      // console.log(res,"mainres")
        dispatch(getnotessuccess(res.data))
        setMyNotes(res.data.msg)
        // setForany(!forany)
    }).catch((err)=>{
        dispatch(getnotesfailure())
    })


},[forany,location.search,currentPage])
const handleforany=()=>{
    setForany(!forany)
}


const handlepage=(value)=>{
setCurrentPage((pre)=>pre+value)

}
  const handleCreateNote = (e) => {
//    e.preventDefault()
   dispatch(createnotes(usertoken,notedata)).then((res)=>{
    dispatch(createnotessuccess())
    toast({title:"Success",postion:"top",description:res.data.msg,duration:2000})
    setForany(!forany)
   }).catch((err)=>{
    dispatch(createnotesfailure())
    toast({
        title:"error",
        "status":"error",
        "postion":"top",
        description:err.response.data.msg,
        duration:2000
    })
   })
  };

  const handleUpdateNote = (updatedNote) => {
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) => (note.id === updatedNote.id ? { ...note, ...updatedNote } : note))
    // );
    setEditedNote(null);
  };

  const handleDeleteNote = (noteId) => {
    // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const handleEditNote = (note) => {
    setEditedNote(note);
    setIsFormOpen(true);
  };

  return (
    <ChakraProvider>
      <Container maxW="container.lg" mt={8}>
       {createnotesisLoading?
       <Button colorScheme="teal" mb={4} >
      Loading...
     </Button>:
     <Button colorScheme="teal" mb={4} onClick={() => setIsFormOpen(true)}>
     Create Note
   </Button>} 
        <NoteList currentPage={currentPage} handlepage={handlepage} notes={mynotes} onDelete={handleDeleteNote} onEdit={handleEditNote} totalpages={totalpages} />
        <NoteForm
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setEditedNote(null);
          }}
          onCreate={handleCreateNote}
        //   forany={handleforany}
        handlechange={handlechange}
          onUpdate={handleUpdateNote}
          editedNote={editedNote}
        />
      </Container>
    </ChakraProvider>
  );
};

export default Main;

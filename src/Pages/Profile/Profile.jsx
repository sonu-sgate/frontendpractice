import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  Select,
  Stack,
  useToast,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getprofile, getprofilefailure, getprofilesuccess } from "../../Redux/GetProfile/Action";
import { createprofile, createprofilefailure, createprofilesuccess } from "../../Redux/Profile/Action";
import { editproffailure, editprofile, editprofsuccess } from "../../Redux/EditProfile/Action";
import DeleingPopup from "./DeleingPoppu";
import DeletingPopup from "./DeleingPoppu";
import { deleteprofile, deleteprofsuccess } from "../../Redux/DeleteProfile/Action";

const MotionBox = motion(Box);

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingpopup,setDeletingpopup]=useState(false)
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    dept_id: "",
    salary: 0,
    gender: "",
    department: "",
    userId:0
  });

  const toast = useToast();
const logindata=useSelector((state)=>state.loginreducer)
const {usertoken,username,useremail,dept_id}=logindata
  const handleEdit = () => {
    setIsEditing(true);
  };
const [any,setAny]=useState(false)
  const dispatch=useDispatch()
useEffect(()=>{

dispatch(getprofile(usertoken)).then((res)=>{
  dispatch(getprofilesuccess(res.data))
 
res.data.msg.length>=1?setProfileData((pre)=>({...pre,salary:res.data.msg[0].salary,userId:res.data.msg[0].user_id,name:username,
  email:useremail,dept_id:dept_id,userId:res.data.msg[0].userId})):setProfileData((pre)=>({
    ...pre,name:username,email:useremail,dept_id:dept_id
  }))
}).catch((err)=>{
  dispatch(getprofilefailure())
})
},[any])

const {name,email,department,gender,salary,userId}=profileData
const profiledata=useSelector((state)=>state.getprofilereducer)
  
const {data,getisLoading,getisError}=profiledata
// console.log(data,"profiledata")
// console.log(data.user_id,"check")
// useEffect(()=>{
//   {data&&({...profileData,userId:data[0].user_id,department:data[0].department,gender:data[0].gender,salary:data[0].salary})}
// },[any])

const handlechange=(e)=>{
  const {name,value}=e.target

}
// console.log(salary)
// **Editing profile if already present******************
  const handleSave = () => {

   
    const editingdata={name,email,gender,department,salary:+salary}
    // console.log(editingdata)
    dispatch(editprofile(usertoken,editingdata,data[0].id)).then((res)=>{
      dispatch(editprofsuccess())
      toast({
        description: "Profile updated successfully",
        status: "success",
        duration: 3000,
        position: "top",
      });
  setIsEditing(!isEditing)
    }).catch((err)=>{
      dispatch(editproffailure())
      toast({
        description:err.response.data.msg,
        status: "success",
        duration: 3000,
        position: "top",
      });
    })}
    

    // handling deleting here.............

  const handleDelete = () => {
    // You can add logic to delete the profile here
    // console.log(profileData)
    // console.log(data[0].id,"userId")
   dispatch( deleteprofile(usertoken,data[0].id)).then((res)=>{
      dispatch(deleteprofsuccess())
      toast({
        description: "Profile deleted successfully",
        status: "success",
        duration: 3000,
        position: "top",
      });
      setDeletingpopup(!deletingpopup)
      setProfileData((pre)=>({...pre,gender:"",salary:0,department:"",}))
      setAny(!any)
    }).catch((err)=>{
      toast({
        description: err.response.data.msg,
        status: "error",
        duration: 3000,
        position: "top",
      });
    })
    
   
  };

  // handling all kind of input values here
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
    
  };


  // Creating profile if not present
  const createdata=useSelector((state)=>state.createreducer)
  const {createisLoading,createisError}=createdata
  console.log(createisLoading,createisError,"createdata")
  const handleCreate=()=>{
   

const newdata={...profileData,salary:+profileData.salary}

dispatch(createprofile(usertoken,newdata)).then((res)=>{
    dispatch(createprofilesuccess())
    toast({
        description: "Profile Created successfully",
        status: "success",
        duration: 3000,
        position: "top",
      });
      setIsEditing(!isEditing);
      setAny(!any)
}).catch((err)=>{
    // console.log(err)
    toast({
        description:err.response.data.msg,
        status: "error",
        duration: 3000,
        position: "top",
      });
    dispatch(createprofilefailure())
})

  }


  // handling delete confirmation here..........
  const handledeletepop=()=>{
setDeletingpopup(!deletingpopup)

  }
  if(getisLoading){
    return (<Center><h1>Loading...</h1></Center>)
  }
  else if(getisError){
    return (<Center><h1>Something going wrong...</h1></Center>)
  }
console.log(data,"data")
  return (
    <>
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      boxShadow="lg"
      p={10}
      rounded="md"
      bg="white"
    >
      <Heading fontSize="xl" mb={4}>
        Profile
      </Heading>
      <Stack spacing={4} w={["80%","60%","40%","40%","40%"]} margin="auto">
        <Text>
          <strong>Name:</strong>{" "}
          {isEditing ? (
            <Input
            isRequired
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          ) : (
            profileData.name
          )}
        </Text>
        <Text>
          <strong>Email:</strong> {profileData.email}
          {profileData.department&&
       <Text>
   
         <strong>Department:</strong>{profileData.department}
    
       </Text>
       }
       {profileData.salary>0&&
       <Text>
   
         <strong>Salary:</strong>{profileData.salary}
    
       </Text>
       }
        {profileData.gender&&
       <Text>
   
         <strong>Gender:</strong>{profileData.gender}
    
       </Text>
       }
         
              {  profileData.userId&&
       <Text>
   
         <strong>UserId:</strong>{profileData.userId}
    
       </Text>
       
         }
          <strong>Department ID:</strong> {profileData.dept_id}
        </Text>
        {isEditing && (
          <>
            <Text>
              <strong>Salary:</strong>{" "}
              <Input
                name="salary"
                isRequired
                value={profileData.salary}
                onChange={handleInputChange}
                placeholder="Salary"
              />
            </Text>
            <Text>
              <strong>Gender:</strong>{" "}
              <Select
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
                placeholder="Select Gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </Text>
            <Text>
              <strong>Department:</strong>{" "}
              <Select
                name="department"
                isRequired
                value={profileData.department}
                onChange={handleInputChange}
                placeholder="Select Department"
              >
                <option value="Software Engineering">Software Engineering</option>
                <option value="Networking">Networking</option>
                <option value="Data Science">Data Science</option>
                {/* Add more departments as needed */}

              </Select>
            </Text>
          </>
        )}
        {isEditing ? (
          <Button isDisabled={name&&department&&gender&&salary?false:true} colorScheme="teal" onClick={data&&data.length==0?handleCreate:handleSave}>
           {data&&data.length==0?"Create":"Save"}
          </Button>
        ) : (
          <>
            <Button colorScheme="teal" onClick={handleEdit}>
             {data&&data.length==0?"Create":"Edit"}
            </Button>
            <Button colorScheme="red" onClick={handledeletepop} isDisabled={data.length>=1?false:true}>
              Delete Profile
            </Button>
          </>
        )}
      </Stack>
   
    </MotionBox>
    {deletingpopup&&<DeletingPopup handledeletepop={handledeletepop} handleDelete={handleDelete}/>}
    <Footer/>
    </>
  );
};

export default Profile;

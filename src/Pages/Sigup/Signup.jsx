import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
const initialdata={
    "name":"",
    "email":"",
    "password":"",
    'dept_id':"",
}
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, signupfailure, signupsuccess } from "../../Redux/Authentication/Signup/Action";

const MotionBox = motion(Box);

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [signupdata,setSignupdata]=useState(initialdata)

  const handlechange=(e)=>{
    const {name,value}=e.target

    setSignupdata((pre)=>({...pre,[name]:value}))
  }
  const toast=useToast()
  const dispatch=useDispatch()
  const statedata=useSelector((state)=>state.signupreducer)
  const {isLoading,isError}=statedata
  const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    // console.log(signupdata)
    dispatch(signup(signupdata)).then((res)=>{
        dispatch(signupsuccess())
        toast({description:"Account created successfully",status:"success",position:"top",duration:3000})
        navigate("/login")
    }).catch((err)=>{
        // console.log(err)
        dispatch(signupfailure())
        toast({description:err.response.data.msg,status:"error",position:"top",duration:3000})
    })
  }

  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MotionBox
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
        <form onSubmit={handlesubmit}>
      <Stack spacing={4} p={10} w={["80%","60%","40%","40%","40%"]} margin="auto">
        <Input name="name"  value={signupdata.name} onChange={handlechange}  placeholder="Name" isRequired />
        <Input  name="email"  value={signupdata.email} onChange={handlechange} placeholder="Email" isRequired />
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handlechange}
            value={signupdata.password}
            isRequired
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Input  name="dept_id"  value={signupdata.dept_id} onChange={handlechange} placeholder="Department ID" isRequired />
        <Button type="submit" colorScheme="teal">Sign Up</Button>
        <Link to="/login">
            <Button colorScheme="blue" variant="outline">
            LogIn
            </Button></Link>
      </Stack>
      </form>
    </MotionBox>
  );
};

export default SignupForm;
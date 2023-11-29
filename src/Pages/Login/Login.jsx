import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, loginfailure, loginsuccess } from "../../Redux/Authentication/Login/Action";

const MotionBox = motion(Box);

const initialdata = {
  email: "",
  password: "",
};

export default function Login() {
  const [logdata, setLogdata] = useState(initialdata);
  const [showPassword, setShowpassword] = useState(true);
  const toast = useToast();
  const logindata = useSelector((state) => state.loginreducer);
  const { isLoading, isError, username, useremail, dept_id } = logindata;
  console.log(isLoading);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowpassword(!showPassword);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLogdata((pre) => ({ ...pre, [name]: value }));
  };
  const location=useLocation()
const navigate=useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(login(logdata))
      .then((res) => {
        // console.log(res);
        dispatch(loginsuccess(res.data));
        toast({
          description:"Login Successfully",
          position: "top",
          status: "success",
          duration: 3000,
        });
navigate(location.state,{replace:true})
      }).catch((err) => {
        // console.log(err);
        dispatch(loginfailure());
        toast({
          description:err.response.data,
          position: "top",
          status: "error",
          duration: 3000,
        });
      });
  };

  return (
    <MotionBox
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Heading fontSize={"25px"} p={10}>
        LOGIN FROM HERE!!
      </Heading>
      <form onSubmit={handlesubmit}>
        <Stack spacing={4} width={["80%","60%","40%","40%","40%"]} margin="auto">
          <Input name="email" value={logdata.email} onChange={handlechange} placeholder="Email" isRequired />
          <InputGroup>
            <Input
              name={"password"}
              value={logdata.password}
              onChange={handlechange}
              isRequired
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        {isLoading?
         <Button  colorScheme="teal">
        Loading...
       </Button>:<Button type="submit" colorScheme="teal">
            Login
          </Button>}  
          <Link to="/signup">
            <Button colorScheme="blue" variant="outline">
              Signup
            </Button>
          </Link>
        </Stack>
      </form>
    </MotionBox>
  );
}

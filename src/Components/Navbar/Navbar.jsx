// src/components/Navbar.js

import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(max-width: 500px)");
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>

    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
    
    
      p={4}
      bg="teal.500"
      color="white"
    >
      <IconButton
        display={["block","none","none","none","none"]}
        onClick={isOpen ? onClose : onOpen}
        icon={<FiMenu />}
        size="md"
        colorScheme="teal"
        variant="ghost"
      />
      <MotionBox
        initial={{ opacity: 0, x: "-100%" }}
        animate={isDesktop ? (isOpen ? "closed" : "open") : "open"}
        variants={variants}
        display={{ base: "block", md: "flex" }}
        width={["full","auto","auto","auto","auto"]}
    height={isOpen?"10px":"auto"}
        alignItems="center"
        flexGrow={1}
      >
        <Stack
          direction={["column","row","row","row","row"]}
        //   spacing={{ base: 1, md: 2 }}
        >
          <Button width={{ base: "full", md: "auto" }} colorScheme="teal" variant="ghost">
           <Link to="/">Home</Link> 
          </Button>
          <Button width={{ base: "full", md: "auto" }} colorScheme="teal" variant="ghost">
          <Link to="/notes">Notes</Link> 
          </Button>
          <Button width={{ base: "full", md: "auto" }} colorScheme="teal" variant="ghost">
          <Link to="/about">ABOUT</Link> 
          </Button>
          <Button width={{ base: "full", md: "auto" }} colorScheme="teal" variant="ghost">
          <Link to="/data">UserData</Link> 
          </Button>
          <Button width={{ base: "full", md: "auto" }} colorScheme="teal" variant="ghost">
          <Link to="/profile">Profile</Link> 
          </Button>
          <Center> <Box>
        <Button display={["block","none","none",'none','none']} colorScheme="teal"> <Link to="/login">Sign IN</Link> </Button>
      </Box></Center>
        </Stack>
      </MotionBox>
      <Spacer />
     <Center> <Box>
        <Button display={["none","block","block",'block','block']} colorScheme="teal"> <Link to="/login">SIGN In</Link> </Button>
      </Box></Center>
    </Flex></>
  );
};

export default Navbar;

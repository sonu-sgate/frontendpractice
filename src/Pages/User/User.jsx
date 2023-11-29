import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getprofile, getprofilefailure, getprofilesuccess } from '../../Redux/GetProfile/Action';
import { Box, Button, Center, Heading, HStack, Spacer, Image,VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../../Components/Footer/Footer';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionCenter = motion(Center);
const MotionHeading = motion(Heading);

export default function User() {
  const dispatch = useDispatch();
  const profiledata = useSelector((state) => state.getprofilereducer);
  const { data } = profiledata;
  const logindata = useSelector((state) => state.loginreducer);

  const { usertoken } = logindata;

  useEffect(() => {
    dispatch(getprofile(usertoken))
      .then((res) => {
        console.log(res);
        dispatch(getprofilesuccess(res.data));
      })
      .catch(() => {
        dispatch(getprofilefailure());
      });
  }, []);

  console.log(data, "profiledata");

  return (
    <>
   <Center paddingBottom={10}> <MotionBox
    mt="100px"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      bg="white"
      width={data.length >= 1 ? 'full' : '300px'}
      height="full"
      mx="auto"
    >
      <HStack spacing={2} align="start" justify="space-between" width="full">
        <VStack spacing={4} align="start" justify="center" h="full" flex="1">
          {data.length >= 1 ? (
            <>
              <MotionHeading fontSize="lg" mb={4} color="teal.500">
                USER's Profile
              </MotionHeading>

              {Object.entries(data[0]).map(([key, value]) => (
                <MotionHeading key={key} fontSize="md" color="gray.600">
                  {key}: {value}
                </MotionHeading>
              ))}
            </>
          ) : usertoken ? (
            <>
            <Box>No Data To Show!!</Box>
            <MotionButton
              colorScheme="teal"
              mt={4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
               
              <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                Create Profile
              </Link>
            </MotionButton></>
          ) : (
            <MotionCenter initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Please Login first
            </MotionCenter>
          )}
        </VStack>

        {data.length >= 1 && (
          <HStack spacing={2}>
            <MotionButton
              colorScheme="green"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                Edit/Delete
              </Link>
            </MotionButton>
            {/* <MotionButton
              colorScheme="red"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Delete
            </MotionButton> */}
            
          </HStack>
          
        )}
        
      </HStack>

      {/* Profile Image */}
      {data.length >= 1 && (
        <Image
          src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
          alt="Profile Image"
          boxSize="100px" // Adjust the size as needed
          mt={4}
          mx="auto"
        />
      )}
    </MotionBox>
    </Center><Footer/></>
  );
}

import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedBox = motion(Box);
const AnimatedButton = motion(Button);

const DeletingPopup = ({ handledeletepop, handleDelete }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <AnimatedBox
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        position="absolute"
        top="20%"
        left="20%"
        right="20%"
        bg="teal.300"
        borderRadius="md"
        p={4}
        boxShadow="md"
      >
        <Box border="2px solid red" p={4}>
          <Center>
            <Box width="50%" margin="auto">
              <Heading
                fontSize="15px"
                textAlign="center"
           
                fontStyle="italic"
              >
                Are you sure? After confirmation, you will not be able to recover it.
              </Heading>
            </Box>
          </Center>
        </Box>
        <Box mt={4}>
          <AnimatedButton
            colorScheme="blue"
            onClick={handledeletepop}
            whileHover={{ scale: 1.05 }}
          >
            Cancel
          </AnimatedButton>
          <AnimatedButton
            ml={4}
            colorScheme="red"
            onClick={handleDelete}
            whileHover={{ scale: 1.05 }}
          >
            Confirm
          </AnimatedButton>
        </Box>
      </AnimatedBox>
    </>
  );
};

export default DeletingPopup;

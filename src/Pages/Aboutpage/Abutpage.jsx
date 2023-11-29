import React from 'react';
import { Box, Center, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionCenter = motion(Center);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const AboutPage = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      p={8}
    >
      <MotionCenter>
        <MotionHeading fontSize="3xl" mb={4} color="teal.500">
          Welcome to Our App
        </MotionHeading>
      </MotionCenter>

      <MotionText fontSize="lg" color="gray.600">
        We are dedicated to providing an exceptional user experience. Our mission is to make your journey with our
        application enjoyable and efficient.
      </MotionText>

      <MotionText fontSize="lg" color="gray.600" mt={4}>
        Whether you're registering for the first time, creating your profile, or managing your information, we are here
        to ensure a seamless experience for you.
      </MotionText>

      <MotionText fontSize="lg" color="gray.600" mt={4}>
        Feel free to explore the features, edit your profile details, and, if needed, delete your profile. Your
        satisfaction is our priority.
      </MotionText>

      <MotionButton colorScheme="teal" mt={8} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          Login
        </Link>
      </MotionButton>
    </MotionBox>
  );
};

export default AboutPage;

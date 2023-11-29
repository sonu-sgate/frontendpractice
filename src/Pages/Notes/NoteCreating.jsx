import React, { useState } from 'react';
import { Box, Button, Input, Textarea, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const NoteComponent = () => {
  const toast = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (title.trim() === '' || description.trim() === '') {
      toast({
        title: 'Error',
        description: 'Title and description cannot be empty!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
    // console.log(title,description)
      setTitle('');
      setDescription('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="white"
        maxWidth="400px"
        mx="auto"
        mt={4}
      >
        <Input
          placeholder="Title"
          mb={2}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Description"
          mb={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleAddNote}>
          Add Note
        </Button>
      </Box>
    </motion.div>
  );
};

export default NoteComponent;

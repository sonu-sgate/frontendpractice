import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text } from '@chakra-ui/react';

const NoteCard = ({ note, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    // Show a confirmation dialog (you can use a library like sweetalert2 or create your own)
    const isConfirmed = window.confirm('Are you sure you want to delete this note?');
    
    if (isConfirmed) {
      onDelete(note.id);
    }
  };

  const handleEdit = () => {
    onEdit(note);
    setIsModalOpen(true);
  };

  return (
    <Box p={4}  borderWidth="1px" borderRadius="md" boxShadow="md" bg="white" mb={4}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {note.title}
      </Text>
      <Text>{note.description.substring(0, 50)}...</Text>
      <Button colorScheme="teal" mt={2} onClick={() => setIsModalOpen(true)}>
        Show More
      </Button>
      <Button colorScheme="red" ml={2} mt={4} onClick={handleDelete}>
        Delete
      </Button>
      <Button colorScheme="blue" ml={2} mt={4} onClick={handleEdit}>
        Edit
      </Button>

      {/* Modal for showing more details */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{note.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{note.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NoteCard;

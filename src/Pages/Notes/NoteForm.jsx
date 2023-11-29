import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, Textarea } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const NoteForm = ({ isOpen, onClose, onCreate,handlechange, onUpdate, editedNote }) => {
  const [title, setTitle] = useState(editedNote ? editedNote.title : '');
  const [description, setDescription] = useState(editedNote ? editedNote.description : '');

  useEffect(() => {
    setTitle(editedNote ? editedNote.title : '');
    setDescription(editedNote ? editedNote.description : '');
  }, [editedNote]);

  const handleSubmit = () => {
    if (editedNote) {
      onUpdate({ ...editedNote, title, description });
    } else {
      onCreate();
    }
    onClose();
  };
  const createdata=useSelector((state)=>state.createnotesreducer)
  const {createnotesisLoading,createnotesisError}=createdata
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{editedNote ? 'Edit Note' : 'Create Note'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Title" name="title" mb={2}  onChange={handlechange} />
          <Textarea placeholder="Description" name="description" mb={4} onChange={handlechange}  />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            {editedNote ? 'Update' : 'Create'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NoteForm;

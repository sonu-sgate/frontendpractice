import React, { useEffect } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

const Pagination = ({handlepage, currentPage, totalPages, onPageChange }) => {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;
const [searchParams,setSearchparams]=useSearchParams()
  const dispatch=useDispatch()
  const notesdata=useSelector((state)=>state.getnotesreducer)
  const {notes,getisLoading,getisError}=notesdata

  const location=useLocation()



  return (
    <Flex justify="space-between" align="center" mt={8}>
      <Button
        onClick={() =>handlepage(-1)}
        isDisabled={isPrevDisabled}
        colorScheme="teal"
      >
        Previous
      </Button>

      <Box>
        <Text fontSize="md" fontWeight="bold" color="teal.500">
          Page {currentPage} of {totalPages}
        </Text>
      </Box>

      <Button
        onClick={() => handlepage( 1)}
        isDisabled={isNextDisabled}
        colorScheme="teal"
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;

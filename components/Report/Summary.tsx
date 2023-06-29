import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Summary = () => {
  return (
    <Box bg='#EAEBFF' padding='4' borderRadius={'4'}>
      <Text as='b' fontSize={'24'}>
        {'Summary: {DYNAMIC}'}
      </Text>
      <Text fontSize={'16'}>
        Panel of DYNAMIC(?) used to screen for <b>DYNAMIC</b>.
      </Text>
    </Box>
  );
};

export default Summary;

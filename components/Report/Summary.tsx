import { Box, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const Summary = () => {
  return (
    <Box bg='#EAEBFF' padding='4' borderRadius={'4'}>
      <Text as='b' fontSize={'24'}>
        {'Summary: {Lipid Panel}'}
      </Text>
      <Text fontSize={'16'}>
        Panel of blood tests used to screen for{' '}
        <Text as='b'>cardiovascular diseases</Text>.
      </Text>
    </Box>
  );
};

export default Summary;

import ReportHeader from '@/utils/types/ReportHeader';
import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Summary = () => {
  const [summary, setSummary] = useState<ReportHeader>();

  useEffect(() => {
    let currSummary;
    try {
      currSummary = JSON.parse(atob(localStorage.getItem('summary') || ""));
    } catch (error) {
      
    }
    if (!summary) {
      currSummary = {
        type: "Lipid Panel",
        description: "Panel of blood tests used to screen for cardiovascular diseases."
      }
    }

    setSummary(currSummary);
  }, []);

  return (
    <Box bg='#EAEBFF' padding='4' borderRadius={'4'}>
      <Text as='b' fontSize={'24'}>
        Summary: { summary?.type || ""}
      </Text>
      <Text fontSize={'16'}>
        { summary?.description || "" }
      </Text>
    </Box>
  );
};

export default Summary;

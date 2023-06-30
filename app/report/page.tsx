'use client';

import { Cards, Summary } from '@/components/Report';
import TopBar from '@/components/TopBar';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import type { Metadata } from 'next';

const navy = '#1E1E1E';

// export const metadata: Metadata = {
//   title: 'Report',
//   description: 'Your summarised health report',
//   openGraph: {
//     title: 'Upload health report',
//     description: 'Upload your health report for analysis',
//     url: 'https://mediclear.vercel.app',
//     siteName: 'MediClear',
//     images: [
//       {
//         url: 'https://mediclear.vercel.app',
//         width: 800,
//         height: 600
//       }
//     ],
//     locale: 'en-US',
//     type: 'website'
//   }
// };

const Report = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const storeResults = JSON.parse(localStorage.getItem('result') || '');

    if (Object.keys(storeResults).length === 0) {
      alert("No result data found from localStorage!")
      return;
    }

    setResults(storeResults);
  }, [])

  return (
    <Flex w='100%' flex={1} direction='column'>
      <TopBar />
      <VStack spacing='32px' padding='35px 50px' align='stretch'>
        <Text fontSize='56px' as='b' fontWeight='black' color={navy}>
          Simplified Health Report
        </Text>
        <Summary />
        <Cards />
      </VStack>
    </Flex>
  );
};

export default Report;

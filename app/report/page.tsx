'use client';

import { Cards, Summary } from '@/components/Report';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
// import type { Metadata } from 'next';
import Image from 'next/image';

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
  return (
    <Flex w='100%' flex={1} direction='column'>
      <VStack spacing='32px' padding='35px 50px' align='stretch'>
        <Text fontSize='56px' as='b' fontWeight='black' color={navy}>
          Simplified Health Report
        </Text>
        <Summary />
        <Cards />
      </VStack>
      <Box>
        <Image
          src='/HealthScreeningReport.png'
          alt='Actual Report'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Flex>
  );
};

export default Report;

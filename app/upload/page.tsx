'use client'

import React from 'react';

// import type { Metadata } from 'next';
import { Flex, Text, VStack } from '@chakra-ui/react';
import Upload from '@/components/Upload';

// export const metadata: Metadata = {
//   title: 'Upload',
//   description: 'Upload your health report for analysis',
//   openGraph: {
//   title: 'Upload health report',
//   description: 'Upload your health report for analysis',
//   url: 'https://mediclear.vercel.app',
//   siteName: 'MediClear',
//   images: [
//     {
//     url: 'https://mediclear.vercel.app',
//     width: 800,
//     height: 600,
//     },
//   ],
//   locale: 'en-US',
//   type: 'website',
//   },
// };

const Description = () => {
  return (
    <VStack spacing='8px'>
      <Text fontSize='42px' as='b' className="primary-dark">
        MediClear
      </Text>
      <VStack spacing='0px'>
        <Text fontSize='18px' className="primary-dark">
          Upload your health report or results and generate a simplified version with just a click.
        </Text>
      </VStack>
      <Text fontSize='18px' as='i' className="primary-dark">
        .PNG, .JPG and .PDF files only.
      </Text>
    </VStack>
  )
}

const UploadPage = () => {
  return (
    <Flex w='100%' h='80vh' flex={1} direction='column'>
      <VStack spacing='20px' paddingTop='35px'>
        <Description />
        <Upload />
      </VStack>
    </Flex>
  );
}

export default UploadPage;

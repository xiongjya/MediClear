'use client'

import React from 'react';

import type { Metadata } from 'next';
import { Flex, Text, VStack } from '@chakra-ui/react';
import TopBar from '../../components/TopBar';
import Upload from '../../components/Upload';

const navy = '#1E1E1E';


export const metadata: Metadata = {
  title: 'Upload',
  description: 'Upload your health report for analysis',
  openGraph: {
  title: 'Upload health report',
  description: 'Upload your health report for analysis',
  url: 'https://mediclear.vercel.app',
  siteName: 'MediClear',
  images: [
    {
    url: 'https://mediclear.vercel.app',
    width: 800,
    height: 600,
    },
  ],
  locale: 'en-US',
  type: 'website',
  },
};

const Description = () => {
  return (
    <VStack spacing='8px'>
      <Text fontSize='42px' as='b' color={navy}>
        MediClear
      </Text>
      <VStack spacing='0px'>
        <Text fontSize='18px' color={navy}>
          Upload your health report or results and generate a simplified version with just a click.
        </Text>
        <Text fontSize='18px' color={navy}>
          We use Artificial Intelligence (AI) to ...
        </Text>
      </VStack>
      <Text fontSize='18px' as='i' color={navy}>
        .PNG, .JPG and .PDF files only.
      </Text>
    </VStack>
  )
}

const UploadPage = () => {
  return (
    <Flex w='100%' h='100vh' flex={1} direction='column'>
      <TopBar />
      <VStack spacing='20px' paddingTop='35px'>
        <Description />
        <Upload />
      </VStack>
    </Flex>
  );
}

export default UploadPage;

import React from 'react';

import { Flex, Text, VStack } from '@chakra-ui/react';
import TopBar from '../../components/TopBar/TopBar';
import Upload from '../../components/Upload/Upload';

const navy = '#1E1E1E';

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

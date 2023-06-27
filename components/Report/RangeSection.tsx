import { Text, VStack } from '@chakra-ui/react';
import RangeBar from './RangeBar';

const RangeSection = () => {
  return (
    <VStack spacing={6}>
      <Text>
        Results for indicator (val unit1/unit2) is <Text as='b'>outcome</Text>
      </Text>
      <RangeBar />
    </VStack>
  );
};

export default RangeSection;

import { Text, VStack } from '@chakra-ui/react';
import RangeBar from './RangeBar';
import Results from '@/utils/types/Results';

interface RangeSectionProps {
  title: string;
  result: Results;
}

const RangeSection: React.FC<RangeSectionProps> = props => {
  const { value, category } = props.result;
  const title = props.title;

  return (
    <VStack spacing={6}>
      <Text>
        {`Results for ${title} (${value} DYNAMIC/DYNAMIC) is `}
        <Text as='b'>
          {category
            .split('_')
            .map(word => word.toLowerCase())
            .join(' ')}
        </Text>
      </Text>
      <RangeBar />
    </VStack>
  );
};

export default RangeSection;

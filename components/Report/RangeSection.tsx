import { Text, VStack } from '@chakra-ui/react';
import RangeBar from './RangeBar';

interface RangeSectionProps {
  title: string;
  result: string;
  value: number;
}

const RangeSection: React.FC<RangeSectionProps> = props => {
  const { title, result, value } = props;

  const unit = title.match(/ratio/i) ? '' : ' mmol/L';

  return (
    <VStack spacing={6}>
      <Text>
        {`Results for ${title} (${value.toFixed(1)}${unit}) is `}
        <Text as='b'>
          {result
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

import { Text, VStack } from '@chakra-ui/react';
import RangeBar from './RangeBar';
import ResultEnum from '@/utils/enums/ResultEnum';

interface RangeSectionProps {
  title: string;
  result: string;
  value: number;
  ranges: number[];
  rangesColour: ResultEnum[];
}

const RangeSection: React.FC<RangeSectionProps> = props => {
  const { title, result, value, ranges, rangesColour } = props;

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
      <RangeBar actual={value} ranges={ranges} rangesColour={rangesColour} />
    </VStack>
  );
};

export default RangeSection;

import ResultEnum from '@/utils/enums/ResultEnum';
import { Box, HStack, Text } from '@chakra-ui/react';
import { FaRegFaceFrown, FaRegFaceMeh, FaRegFaceSmile } from 'react-icons/fa6';

const inactive = {
  good: '#E4FCEE',
  moderate: '#FFDEC1',
  risk: '#FFE2E2'
};

const active = {
  good: '#12E171',
  moderate: '#FF8F2C',
  risk: '#FB4949'
};

const smileyColour = {
  good: '#00491F',
  moderate: '#C02E00',
  risk: '#5B0101'
};

interface RangeBarProps {
  actual: number;
  ranges: number[];
  rangesColour: ResultEnum[];
}

const RangeBar: React.FC<RangeBarProps> = props => {
  const { actual, ranges, rangesColour } = props;

  let firstBg = '';
  const isFirst = actual <= ranges[0];

  switch (rangesColour[0]) {
    case ResultEnum.LOW:
    case ResultEnum.HIGH:
    case ResultEnum.TOO_LOW:
      if (isFirst) {
        firstBg = active.risk;
      } else {
        firstBg = inactive.risk;
      }
      break;
    case ResultEnum.BORDERLINE_LOW:
    case ResultEnum.BORDERLINE_HIGH:
      if (isFirst) {
        firstBg = active.moderate;
      } else {
        firstBg = inactive.moderate;
      }
      break;
    default:
      if (isFirst) {
        firstBg = active.good;
      } else {
        firstBg = inactive.good;
      }
      break;
  }

  let secondBg = '';
  const isSecond = actual > ranges[0] && actual < ranges[1];

  switch (rangesColour[1]) {
    case ResultEnum.LOW:
    case ResultEnum.HIGH:
    case ResultEnum.TOO_LOW:
      if (isSecond) {
        secondBg = active.risk;
      } else {
        secondBg = inactive.risk;
      }
      break;
    case ResultEnum.BORDERLINE_LOW:
    case ResultEnum.BORDERLINE_HIGH:
      if (isSecond) {
        secondBg = active.moderate;
      } else {
        secondBg = inactive.moderate;
      }
      break;
    default:
      if (isSecond) {
        secondBg = active.good;
      } else {
        secondBg = inactive.good;
      }
      break;
  }

  let thirdBg = '';

  if (ranges.length > 2) {
    const isThird = actual > ranges[2];

    switch (rangesColour[2]) {
      case ResultEnum.LOW:
      case ResultEnum.HIGH:
      case ResultEnum.TOO_LOW:
        if (isThird) {
          thirdBg = active.risk;
        } else {
          thirdBg = inactive.risk;
        }
        break;
      case ResultEnum.BORDERLINE_LOW:
      case ResultEnum.BORDERLINE_HIGH:
        if (isThird) {
          thirdBg = active.moderate;
        } else {
          thirdBg = inactive.moderate;
        }
        break;
      default:
        if (isThird) {
          thirdBg = active.good;
        } else {
          thirdBg = inactive.good;
        }
        break;
    }
  }

  console.log(`>>> ${firstBg} ${secondBg} ${thirdBg}`);

  return (
    <HStack spacing={0} w={'90%'} h={'100%'}>
      <Box
        bg={firstBg}
        h={10}
        w={ranges.length > 1 ? 'calc(100% / 3)' : 'calc(100% / 2)'}
        borderTopLeftRadius={50}
        borderBottomLeftRadius={50}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {actual <= ranges[0] ? (
          <FaRegFaceSmile size={'48px'} color={smileyColour.good} />
        ) : null}
      </Box>

      <Box
        bg={secondBg}
        h={10}
        w={ranges.length > 1 ? 'calc(100% / 3)' : 'calc(100% / 2)'}
        borderTopRightRadius={ranges.length > 1 ? 0 : 50}
        borderBottomRightRadius={ranges.length > 1 ? 0 : 50}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text as='b'>{ranges[0].toFixed(1)}</Text>
        {actual > ranges[0] && actual < ranges[1] ? (
          <FaRegFaceMeh size={'48px'} color={smileyColour.moderate} />
        ) : null}
        {ranges.length > 1 && <Text as='b'>{ranges[1].toFixed(1)}</Text>}
      </Box>

      {ranges.length > 1 && (
        <Box
          bg={thirdBg}
          h={10}
          w={'calc(100% / 3)'}
          borderTopRightRadius={50}
          borderBottomRightRadius={50}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {actual >= ranges[2] ? (
            <FaRegFaceFrown size={'48px'} color={smileyColour.risk} />
          ) : null}
        </Box>
      )}
    </HStack>
  );
};

export default RangeBar;

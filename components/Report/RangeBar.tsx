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
  let { actual, ranges, rangesColour } = props;
  let face = <FaRegFaceSmile size={'48px'} color={smileyColour.good} />;
  let firstBg = '';
  const isFirst = actual <= ranges[0];

  switch (rangesColour[1]) {
    case ResultEnum.LOW:
    case ResultEnum.HIGH:
    case ResultEnum.TOO_LOW:
    case ResultEnum.TOO_HIGH:
      if (isFirst) {
        firstBg = active.risk;
        face = <FaRegFaceFrown size={'48px'} color={smileyColour.risk} />
      } else {
        firstBg = inactive.risk;
      }
      break;
    case ResultEnum.BORDERLINE_LOW:
    case ResultEnum.BORDERLINE_HIGH:
      if (isFirst) {
        firstBg = active.moderate;
        face = <FaRegFaceMeh size={'48px'} color={smileyColour.moderate} />
      } else {
        firstBg = inactive.moderate;
      }
      break;
    default:
      if (isFirst) {
        firstBg = active.good;
        face = <FaRegFaceSmile size={'48px'} color={smileyColour.good} />
      } else {
        firstBg = inactive.good;
      }
      break;
  }

  let secondBg = '';
  const isSecond = actual > ranges[0] && actual <= ranges[1];
  switch (rangesColour[2]) {
    case ResultEnum.LOW:
    case ResultEnum.HIGH:
    case ResultEnum.TOO_LOW:
    case ResultEnum.TOO_HIGH:
      if (isSecond) {
        face = <FaRegFaceFrown size={'48px'} color={smileyColour.risk} />
        secondBg = active.risk;
      } else {
        secondBg = inactive.risk;
      }
      break;
    case ResultEnum.BORDERLINE_LOW:
    case ResultEnum.BORDERLINE_HIGH:
      if (isSecond) {
        face = <FaRegFaceMeh size={'48px'} color={smileyColour.moderate} />
        secondBg = active.moderate;
      } else {
        secondBg = inactive.moderate;
      }
      break;
    default:
      if (isSecond) {
        face = <FaRegFaceSmile size={'48px'} color={smileyColour.good} />
        secondBg = active.good;
      } else {
        secondBg = inactive.good;
      }
      break;
  }

  let thirdBg = '';

  const isThird = ranges.length == 2 && actual > ranges[1];
  if (ranges.length == 2) {
    switch (rangesColour[3]) {
      case ResultEnum.LOW:
      case ResultEnum.HIGH:
      case ResultEnum.TOO_LOW:
      case ResultEnum.TOO_HIGH:
        if (isThird) {
          thirdBg = active.risk;
          face = <FaRegFaceFrown size={'48px'} color={smileyColour.risk} />
      } else {
          thirdBg = inactive.risk;
        }
        break;
      case ResultEnum.BORDERLINE_LOW:
      case ResultEnum.BORDERLINE_HIGH:
        if (isThird) {
        face = <FaRegFaceMeh size={'48px'} color={smileyColour.moderate} />
        thirdBg = active.moderate;
        } else {
          thirdBg = inactive.moderate;
        }
        break;
      default:
        if (isThird) {
        face = <FaRegFaceSmile size={'48px'} color={smileyColour.good} />
        thirdBg = active.good;
        } else {
          thirdBg = inactive.good;
        }
        break;
    }
  }

  return (
    <Box w="90%">
      <HStack spacing={0} w={'100%'} h={'100%'}>
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
          {isFirst && face}
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
          {isSecond && face}

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
            {isThird && face}
          </Box>
        )}
      </HStack>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Box>
          <Text as='b'>{ranges[0].toFixed(1)}</Text>
        </Box>
        { ranges.length > 1 && (
          <Box>       
            <Text as='b'>{ranges[1].toFixed(1)}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RangeBar;

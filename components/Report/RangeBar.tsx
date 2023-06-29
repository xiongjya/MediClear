import { Box, HStack } from '@chakra-ui/react';
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

const RangeBar = () => {
  return (
    <HStack spacing={0} w={'90%'} h={'100%'}>
      <Box
        bg={inactive.good}
        h={10}
        w={'calc(100% / 3)'}
        borderTopLeftRadius={50}
        borderBottomLeftRadius={50}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <FaRegFaceSmile size={'48px'} color={smileyColour.good} />
      </Box>
      <Box
        bg={inactive.moderate}
        h={10}
        w={'calc(100% / 3)'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <FaRegFaceMeh size={'48px'} color={smileyColour.moderate} />
      </Box>
      <Box
        bg={inactive.risk}
        h={10}
        w={'calc(100% / 3)'}
        borderTopRightRadius={50}
        borderBottomRightRadius={50}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <FaRegFaceFrown size={'48px'} color={smileyColour.risk} />
      </Box>
    </HStack>
  );
};

export default RangeBar;

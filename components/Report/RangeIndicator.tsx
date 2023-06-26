import { Text, VStack } from '@chakra-ui/react';
import { AiOutlineSmile } from 'react-icons/ai';
import { FaRegFaceMeh } from 'react-icons/fa6';
import { PiSmileySad } from 'react-icons/pi';

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

const smiley = {
  good: <AiOutlineSmile></AiOutlineSmile>,
  moderate: <FaRegFaceMeh></FaRegFaceMeh>,
  risk: <PiSmileySad></PiSmileySad>
};

const smileyColour = {
  good: '#00491F',
  moderate: '#C02E00',
  risk: '#5B0101'
};

const RangeIndicator = () => {
  return (
    <VStack>
      <Text>
        Results for indicator (val unit1/unit2) is <Text as='b'>outcome</Text>.
      </Text>
    </VStack>
  );
};

export default RangeIndicator;

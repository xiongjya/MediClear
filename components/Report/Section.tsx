import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  StackDivider,
  VStack
} from '@chakra-ui/react';
import { Fragment } from 'react';
import RangeIndicator from './RangeIndicator';

const header = {
  good: '#E4FCEE',
  moderate: '#FFDEC1',
  risk: '#FFE2E2'
};

const Section = () => {
  return (
    <Fragment>
      <Accordion allowToggle boxShadow={'xl'} borderRadius={'4'}>
        <AccordionItem>
          <h1>
            <AccordionButton
              bg={header.moderate}
              w='100%'
              _hover={{ backgroundColor: '#FFCDA2' }}
            >
              <Box
                textAlign='center'
                fontWeight='extrabold'
                w='100%'
                fontSize='24px'
              >
                Total Cholesterol
              </Box>
              <AccordionIcon left={0} />
            </AccordionButton>
          </h1>
          <AccordionPanel pt={4} pb={4}>
            <HStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
            >
              <Box w='100%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Box>
              <Box w='100%' justifyContent={'center'} alignItems={'center'}>
                <RangeIndicator />
              </Box>
              <Box w='100%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Box>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle boxShadow={'xl'} borderRadius={'4'}>
        <AccordionItem>
          <h1>
            <AccordionButton
              bg={header.good}
              w='100%'
              _hover={{ backgroundColor: '#B6F7D1' }}
            >
              <Box
                textAlign='center'
                fontWeight='extrabold'
                w='100%'
                fontSize='24px'
              >
                Triglycerides
              </Box>
              <AccordionIcon left={0} />
            </AccordionButton>
          </h1>
          <AccordionPanel pt={4} pb={4}>
            <HStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
            >
              <Box w='100%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Box>
              <Box w='100%' justifyContent={'center'} alignItems={'center'}>
                <RangeIndicator />
              </Box>
              <Box w='100%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Box>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion allowToggle boxShadow={'xl'} borderRadius={'4'}>
        <AccordionItem>
          <h1>
            <AccordionButton
              bg={header.risk}
              w='100%'
              _hover={{ backgroundColor: '#FFCECE' }}
            >
              <Box
                textAlign='center'
                fontWeight='extrabold'
                w='100%'
                fontSize='24px'
              >
                HDL Cholesterol
              </Box>
              <AccordionIcon left={0} />
            </AccordionButton>
          </h1>
          <AccordionPanel pt={4} pb={4}>
            <HStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
            >
              <Box w='100%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Box>
              <Box w='100%' justifyContent={'center'} alignItems={'center'}>
                <RangeIndicator />
              </Box>
              <Box w='100%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Box>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};

export default Section;

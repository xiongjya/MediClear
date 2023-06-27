import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  StackDivider
} from '@chakra-ui/react';
import React, { Fragment } from 'react';
import RangeSection from './RangeSection';
import dummy from '@/utils/constants/dummy';
import ResultInfo from '@/utils/types/ResultInfo';

const header = {
  good: '#E4FCEE',
  moderate: '#FFDEC1',
  risk: '#FFE2E2'
};

interface CardProps {
  data: ResultInfo;
}

const Card: React.FC<CardProps> = props => {
  const { title, resultTab, tipsTab, result } = props.data;

  return (
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
              {title}
            </Box>
            <AccordionIcon left={0} />
          </AccordionButton>
        </h1>
        <AccordionPanel pt={4} pb={4}>
          <HStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            <Box w='100%'>{resultTab}</Box>
            <Box w='100%' justifyContent={'center'} alignItems={'center'}>
              <RangeSection title={title} result={result} />
            </Box>
            <Box w='100%' whiteSpace={'pre-line'}>
              {tipsTab}
            </Box>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const Cards = () => {
  return (
    <Fragment>
      {dummy.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </Fragment>
  );
};

export default Cards;

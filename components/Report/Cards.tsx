import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react';
import RangeSection from './RangeSection';
import ResultEnum from '@/utils/enums/ResultEnum';

const header = {
  good: '#E4FCEE',
  moderate: '#FFDEC1',
  risk: '#FFE2E2'
};

const hover = {
  good: '#b3f7cf',
  moderate: '#FFCDA2',
  risk: '#ffc4c4'
};

interface CardProps {
  data: any;
}

const Card: React.FC<CardProps> = props => {
  const { title, result, ranges, resultTab, tipsTab } = props.data;

  let tips = tipsTab.tips.map((tip: string) => '- ' + tip).join('\n');
  let headerColour = '';
  let hoverColour = '';

  switch (result.result) {
    case ResultEnum.LOW:
    case ResultEnum.HIGH:
    case ResultEnum.TOO_LOW:
      headerColour = header.risk;
      hoverColour = hover.risk;
      break;
    case ResultEnum.BORDERLINE_LOW:
    case ResultEnum.BORDERLINE_HIGH:
      headerColour = header.moderate;
      hoverColour = hover.moderate;
      break;
    default:
      headerColour = header.good;
      hoverColour = hover.good;
      break;
  }

  return (
    <Accordion allowToggle boxShadow={'xl'} borderRadius={'4'}>
      <AccordionItem>
        <AccordionButton
          bg={headerColour}
          w='100%'
          _hover={{ backgroundColor: hoverColour }}
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
        <AccordionPanel pt={4} pb={4}>
          <HStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            <Box w='100%'>{resultTab.description}</Box>
            <Box w='100%' justifyContent={'center'} alignItems={'center'}>
              <RangeSection
                title={result.category}
                result={result.result}
                value={result.value}
              />
            </Box>
            <VStack
              spacing={4}
              w='100%'
              whiteSpace={'pre-line'}
              align={'stretch'}
            >
              <Text>{tipsTab.top}</Text>
              <Text>{tips}</Text>
              <Text>{tipsTab.bottom}</Text>
            </VStack>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const Cards = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storeResults = JSON.parse(localStorage.getItem('result') || '');

    if (Object.keys(storeResults).length === 0) {
      alert('No result data found from localStorage!');
      return;
    }

    setResults(storeResults);
  }, []);

  return (
    <Fragment>
      {results.map((data: any, index: number) => (
        <Card key={index} data={data} />
      ))}
    </Fragment>
  );
};

export default Cards;

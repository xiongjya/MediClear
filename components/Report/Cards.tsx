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
                ranges={ranges.ranges}
                rangesColour={ranges.resultRange}
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
    let storeResults  = [];
    try {
      storeResults = JSON.parse(atob(localStorage.getItem('result') || ""));
    } catch (error) {
      
    }
    if (Object.keys(storeResults).length === 0) {
      alert('No result data found from localStorage! Displaying sample data...');
      const sampleData = `W3sidGl0bGUiOiJUb3RhbCBDaG9sZXN0ZXJvbCIsInJlc3VsdCI6eyJjYXRlZ29yeSI6IlRvdGFsIENob2xlc3Rlcm9sIiwicmVzdWx0IjoiQk9SREVSTElORV9ISUdIIiwidmFsdWUiOjUuN30sInJhbmdlcyI6eyJjYXRlZ29yeSI6IlRvdGFsIENob2xlc3Rlcm9sIiwicmFuZ2VzIjpbNS4yLDYuMV0sInJlc3VsdFJhbmdlIjp7IjEiOiJOT1JNQUwiLCIyIjoiQk9SREVSTElORV9ISUdIIiwiMyI6IkhJR0gifX0sInJlc3VsdFRhYiI6eyJjYXRlZ29yeSI6IlRvdGFsIENob2xlc3Rlcm9sIiwiZGVzY3JpcHRpb24iOiJUb3RhbCBhbW91bnQgb2YgY2hvbGVzdGVyb2wgaW4geW91ciBibG9vZCBpbmNsdWRlcyB0aGUgZ29vZCAoSERMIGNob2xlc3Rlcm9sKSBhbmQgYmFkIChMREwgY2hvbGVzdGVyb2wpLiBcbiBLZWVwaW5nIHRoZSB0b3RhbCBjaG9sZXN0ZXJvbCB3aXRoaW4gYSBoZWFsdGh5IHJhbmdlIGlzIGltcG9ydGFudC4gSWYgaXQgaXMgdG9vIGhpZ2gsIGl0IGNvdWxkIG1lYW4gdG9vIG11Y2ggYmFkIGNob2xlc3Rlcm9sLiBJZiBpdCBpcyB0b28gbG93LCBpdCBjb3VsZCBtZWFuIHRvbyBsaXR0bGUgZ29vZCBjaG9sZXN0ZXJvbC4ifSwidGlwc1RhYiI6eyJyZXN1bHQiOiJCT1JERVJMSU5FX0hJR0giLCJ0aXBzIjpbIkNvbnN1bWUgbW9yZSBoaWdoLWZpYnJlIGZvb2RzIChlZy4gZnJ1aXRzLCB2ZWdldGFibGVzIGFuZCB3aG9sZWdyYWlucyBldGMuKSIsIkxpbWl0IGZvb2QgaGlnaCBpbiBjaG9sZXN0ZXJvbCAoYW5pbWFsIHByb2R1Y3RzIGxpa2Ugb3JnYW4gbWVhdCwgZWdnIHlvbGssIHByYXducykiXSwidG9wIjoiIiwiYm90dG9tIjoiRm9yIG1vcmUgbGlmZXN0eWxlIHRpcHMsIHZpc2l0IGhlYWx0aGh1Yi5jb20uIERvICBhbHNvIGNvbnN1bHQgYSBkb2N0b3IgaWYgbmVjZXNzYXJ5IGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIG1hbmFnaW5nIHlvdXIgY29uZGl0aW9uLiJ9fSx7InRpdGxlIjoiVHJpZ2x5Y2VyaWRlcyIsInJlc3VsdCI6eyJjYXRlZ29yeSI6IlRyaWdseWNlcmlkZXMiLCJyZXN1bHQiOiJOT1JNQUwiLCJ2YWx1ZSI6MX0sInJhbmdlcyI6eyJjYXRlZ29yeSI6IlRyaWdseWNlcmlkZXMiLCJyYW5nZXMiOlsyLjIsNC41XSwicmVzdWx0UmFuZ2UiOnsiMSI6Ik5PUk1BTCIsIjIiOiJCT1JERVJMSU5FX0hJR0giLCIzIjoiSElHSCJ9fSwicmVzdWx0VGFiIjp7ImNhdGVnb3J5IjoiVHJpZ2x5Y2VyaWRlcyIsImRlc2NyaXB0aW9uIjoiVHJpZ2x5Y2VyaWRlcyBhcmUgYSB0eXBlIG9mIGZhdCBpbiBvdXIgYmxvb2QsIHRoZXkgc2VydmUgYXMgYSBzb3VyY2Ugb2YgZW5lcmd5LiBcbiBIYXZpbmcgc29tZSB0cmlnbHljZXJpZGVzIGlzIG5lY2Vzc2FyeSBmb3IgYm9keSB0byBmdW5jdGlvbi4gQnV0IHRvbyBtdWNoIG9mIGl0IGluY3JlYXNlcyB0aGUgcmlzayBvZiBoZWFydCBkaXNlYXNlcyBhbmQgb3RoZXIgaGVhbHRoIHByb2JsZW1zLiJ9LCJ0aXBzVGFiIjp7InJlc3VsdCI6Ik5PUk1BTCIsInRpcHMiOlsiTWFpbnRhaW5pbmcgYSBoZWFsdGh5IGRpZXQgbG93IGluIHNhdHVyYXRlZCBmYXRzIGFuZCB0cmFucyBmYXQiLCJMZWFkaW5nIGFuIGFjdGl2ZSBsaWZlc3R5bGUiXSwidG9wIjoiR3JlYXQgam9iLCB5b3VyIHRyaWdseWNlcmlkZXMgbGV2ZWxzIGFyZSBoZWFsdGh5LCBrZWVwIGl0IHVwISBEbyBjb250aW51ZToiLCJib3R0b20iOiIifX0seyJ0aXRsZSI6IkhETCBDaG9sZXN0ZXJvbCIsInJlc3VsdCI6eyJjYXRlZ29yeSI6IkhETCBDaG9sZXN0ZXJvbCAiLCJyZXN1bHQiOiJOT1JNQUwiLCJ2YWx1ZSI6MS40fSwicmFuZ2VzIjp7ImNhdGVnb3J5IjoiSERMIENob2xlc3Rlcm9sICIsInJhbmdlcyI6WzEsMS42XSwicmVzdWx0UmFuZ2UiOnsiMSI6IkxPVyIsIjIiOiJOT1JNQUwiLCIzIjoiSElHSCJ9fSwicmVzdWx0VGFiIjp7ImNhdGVnb3J5IjoiSERMIENob2xlc3Rlcm9sICIsImRlc2NyaXB0aW9uIjoiSERMIChoaWdoLWRlbnNpdHkgbGlwb3Byb3RlaW4pIGNob2xlc3Rlcm9sIGlzIHRoZSBnb29kIGNob2xlc3Rlcm9sLiBcbiBHZW5lcmFsbHkgZ29vZCB0byBoYXZlIGhpZ2hlciBsZXZlbHMgb2YgSERMIGNob2xlc3Rlcm9sIGluIHlvdXIgYm9keSBhcyAgaXQgaGVscHMgcmVtb3ZlIGV4Y2VzcyBjaG9sZXN0ZXJvbCBmcm9tIHlvdXIgYmxvb2QgdmVzc2VscyBhbmQgcHJvdGVjdHMgeW91ciBoZWFydCwgbG93ZXJpbmcgdGhlIHJpc2sgb2YgaGVhcnQgZGlzZWFzZS4gIn0sInRpcHNUYWIiOnsicmVzdWx0IjoiTk9STUFMIiwidGlwcyI6WyJNYWludGFpbmluZyBhIGhlYWx0aHkgZGlldCB0aGF0IGlzIGxvdyBpbiBzYXR1cmF0ZWQgZmF0cyBhbmQgdHJhbnMgZmF0IGFuZCBoaWdoIGluIG1vbm9zYXR1cmF0ZWQgZmF0cyIsIkxlYWRpbmcgYW4gYWN0aXZlIGxpZmVzdHlsZSJdLCJ0b3AiOiJHcmVhdCBqb2IsIHlvdXIgdHJpZ2x5Y2VyaWRlcyBsZXZlbHMgYXJlIGhlYWx0aHksIGtlZXAgaXQgdXAhIERvIGNvbnRpbnVlOiIsImJvdHRvbSI6IiJ9fSx7InRpdGxlIjoiTERMIENob2xlc3Rlcm9sIiwicmVzdWx0Ijp7ImNhdGVnb3J5IjoiTERMIENob2xlc3Rlcm9sIiwicmVzdWx0IjoiQk9SREVSTElORV9ISUdIIiwidmFsdWUiOjMuOH0sInJhbmdlcyI6eyJjYXRlZ29yeSI6IkxETCBDaG9sZXN0ZXJvbCIsInJhbmdlcyI6WzMuMyw0LjFdLCJyZXN1bHRSYW5nZSI6eyIxIjoiTk9STUFMIiwiMiI6IkJPUkRFUkxJTkVfSElHSCIsIjMiOiJISUdIIn19LCJyZXN1bHRUYWIiOnsiY2F0ZWdvcnkiOiJMREwgQ2hvbGVzdGVyb2wiLCJkZXNjcmlwdGlvbiI6IkxETCAobG93LWRlbnNpdHkgbGlwb3Byb3RlaW4pIGNob2xlc3Rlcm9sIGlzIHRoZSBiYWQgY2hvbGVzdGVyb2wuIFxuIEdlbmVyYWxseSBiYWQgdG8gaGF2ZSBoaWdoIGxldmVscyBvZiBMREwgY2hvbGVzdGVyb2wgIGluIHlvdXIgYm9keSBhcyBleGNlc3MgTERMIGNob2xlc3Rlcm9sIGNhbiBidWlsZCB1cCBpbiB5b3VyIGJsb29kIHZlc3NlbHMsIG5hcnJvd2luZyBpdCBhbmQgbWFraW5nIGl0IGhhcmQgZm9yIGJsb29kIHRvIGZsb3cuICwgdGhlcmVmb3JlIGluY3JlYXNpbmcgdGhlIHJpc2sgb2YgaGVhcnQgYW5kIGNhcmRpb3Zhc2N1bGFyIGRpc2Vhc2VzLiAifSwidGlwc1RhYiI6eyJyZXN1bHQiOiJCT1JERVJMSU5FX0hJR0giLCJ0aXBzIjpbIkxpbWl0IGZvb2RzIGhpZ2ggaW4gdW5oZWFsdGh5IGZhdHMgKGVnLiBmYXR0eSBtZWF0cywgZnJpZWQgZm9vZHMsIGFuZCBwcm9jZXNzZWQgc25hY2tzKSIsIkNvbnN1bWUgbW9yZSBmb29kcyBoaWdoIGluIGhlYWx0aHkgZmF0cyAoZWcuIEF2b2NhZG9zLCBudXRzLCBzZWVkcywgb2xpdmUgb2lsLCB0dW5lLCBzYXJkaW5lcykiLCIxNTAgbWludXRlcyBvZiBleGVyY2lzZSBwZXIgd2VlayAoZWcuIGJyaXNrIHdhbGtpbmcsIGN5Y2xpbmcsIGRhbmNpbmcgZXRjLikiXSwidG9wIjoiIiwiYm90dG9tIjoiRm9yIG1vcmUgbGlmZXN0eWxlIHRpcHMsIHZpc2l0IGhlYWx0aGh1Yi5jb20uIERvICBhbHNvIGNvbnN1bHQgYSBkb2N0b3IgaWYgbmVjZXNzYXJ5IGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIG1hbmFnaW5nIHlvdXIgY29uZGl0aW9uLiJ9fSx7InRpdGxlIjoiQ0hPTDpIREwgUmF0aW8iLCJyZXN1bHQiOnsiY2F0ZWdvcnkiOiJDSE9MOkhETCBSYXRpbyIsInJlc3VsdCI6Ik5PUk1BTCIsInZhbHVlIjo0LjF9LCJyYW5nZXMiOnsiY2F0ZWdvcnkiOiJDSE9MOkhETCBSYXRpbyIsInJhbmdlcyI6WzQuNV0sInJlc3VsdFJhbmdlIjp7IjEiOiJOT1JNQUwiLCIyIjoiSElHSCJ9fSwicmVzdWx0VGFiIjp7ImNhdGVnb3J5IjoiQ0hPTDpIREwgUmF0aW8iLCJkZXNjcmlwdGlvbiI6IkNIT0w6SERMIGlzIHRoZSByYXRpbyBiZXR3ZWVuIHRvdGFsIGNob2xlc3Rlcm9sIChDSE9MKSBhbmQgaGlnaC1kZW5zaXR5IGxpcG9wcm90ZWluIChIREwpIGNob2xlc3Rlcm9sIGxldmVscyBpbiB0aGUgYmxvb2QuIFxuIEEgaGlnaGVyIHJhdGlvIHN1Z2dlc3RzIHRoYXQgdGhlcmUgaXMgYSBoaWdoZXIgcHJvcG9ydGlvbiBvZiAnYmFkJyBjaG9sZXN0ZXJvbCBpbiByZWxhdGlvbiB0byB0aGUgJ2dvb2QnIGNob2xlc3Rlcm9sLCB3aGljaCBjYW4gaW5kaWNhdGUgYW4gaW5jcmVhc2VkIHJpc2sgb2YgaGVhcnQgZGlzZWFzZSBhbmQgb3RoZXIgY2FyZGlvdmFzY3VsYXIgcHJvYmxlbXMifSwidGlwc1RhYiI6eyJyZXN1bHQiOiJOT1JNQUwiLCJ0aXBzIjpbIk1haW50YWluaW5nIGEgaGVhbHRoeSBkaWV0IHRoYXQgaXMgbG93IGluIHNhdHVyYXRlZCBmYXRzIGFuZCB0cmFucyBmYXQgYW5kIGhpZ2ggaW4gbW9ub3NhdHVyYXRlZCBmYXRzIiwiTGVhZGluZyBhbiBhY3RpdmUgbGlmZXN0eWxlIl0sInRvcCI6IkdyZWF0IGpvYiwgeW91ciB0cmlnbHljZXJpZGVzIGxldmVscyBhcmUgaGVhbHRoeSwga2VlcCBpdCB1cCEgRG8gY29udGludWU6IiwiYm90dG9tIjoiIn19XQ==`
      storeResults = JSON.parse(atob(sampleData))
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
}

export default Cards;

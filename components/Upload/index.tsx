'use client'

import { useState } from 'react';
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack
} from '@chakra-ui/react';
import { FileUploader } from "react-drag-drop-files";
import { AiFillDelete } from 'react-icons/ai';
import { BsFileEarmarkImage, BsFileEarmarkPdf } from 'react-icons/bs';
import { LuUploadCloud } from 'react-icons/lu';

import extractTextFromPDF from '@/utils/ExtractTextFromPdf';
import parsePdfText from '@/utils/ParsePdfText';
import ResultInfo from '@/utils/types/ResultInfo';
import TestReportDescription from '@/data/TestReportDescription';
import { useRouter } from 'next/navigation';
import ReportHeader from '@/utils/types/ReportHeader';

const black = '#000000';
const navy = '#1E1E1E'; 

const handleFileChange = async (file: any, router: any) => {
  const fileReader = new FileReader();

  fileReader.onload = async () => {
    if (fileReader.result == null || typeof fileReader.result == "string") {
      return;
    }
    const typedArray = new Uint8Array(fileReader.result);
    const text: String[] = await extractTextFromPDF(typedArray);
    const result: ResultInfo[] = parsePdfText(text);
    localStorage.setItem("result", btoa(JSON.stringify(result)) )
    const header: string = text[2].toString();
    const reportHeader: ReportHeader = {  
      type: text[2],
      description: TestReportDescription[header]
    }
    localStorage.setItem("summary", btoa(JSON.stringify(reportHeader)))

    router.push("/report");
  };

  fileReader.readAsArrayBuffer(file);
};

const UploadDescription = () => {
  return (
    <VStack spacing='5px' w='800px' borderStyle='dashed' borderColor={navy} borderRadius='20px' borderWidth='4px' className="primary-bg" padding='30px'>
      <LuUploadCloud style={styles.upload} />
      <VStack spacing='0px'>
        <Text fontSize='18px' as='b' color={black}>Drag and drop files here</Text>
        <Text fontSize='18px' as='i' color={black}>or</Text>  
      </VStack>
      <Button variant='outline' colorScheme='purple'>Browse files</Button>
    </VStack>
  );
}

const Upload = () => {
  const fileTypes = ["PNG", "JPG", "PDF"];
  const [upload, setUpload] = useState<any>();
  const router = useRouter();

  const FileUploadState = ( props: any ) => {
    const file_type = props.name.split(".").pop()
  
    return (
      <Flex w='800px' h='60px' borderRadius='20px' className="primary-bg" padding='15px'>
        <HStack marginLeft='5px' spacing='15px'>
          {file_type === "pdf"
            ? <BsFileEarmarkPdf style={styles.file} />
            : <BsFileEarmarkImage style={styles.file} /> }
          <Text w='660px' fontSize='18px' noOfLines={1} textAlign={'left'} color={black}>{props.name}</Text>
          <IconButton 
            aria-label='Delete upload'
            icon={<AiFillDelete style={styles.bin} />} 
            onClick={() => {console.log(upload); setUpload(null)}}
            background='none'
          />
        </HStack>
      </Flex>
    );
  }

  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <VStack>
        <FileUploader
          name="health-reports"
          types={fileTypes}
          handleChange={setUpload}
          maxSize={10}
          hoverTitle={' '}
          dropMessageStyle={{}}
        >
          <UploadDescription />
        </FileUploader>
        {upload && <FileUploadState name={upload.name}/>}
        {upload && 
          <Button style={styles.generate} disabled={upload == null} onClick={() => handleFileChange(upload, router)}>
            Generate Simplified Report
          </Button>}
      </VStack>
    </Flex>
  )
}

const styles = {
  upload: {
    color: '#282C34',
    height: '50px',
    width: '50px'
  },
  file: {
    color: '#282C34',
    height: '30px',
    width: '30px'
  },
  generate: {
    marginTop: '80px',
    padding: '15px',
    background: '#050A8B',
    color: 'white',
    fontSize: '15px'
  },
  bin: {
    color: '#282C34',
    height: '20px',
    width: '20px'
  }
}

export default Upload

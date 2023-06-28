'use client'

import { Flex, Button, Box, Text, Container } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Jumbotron = () => {
  const router = useRouter()

  return (
    <Box alignItems='center' display='flex' justifyContent='center' w='100%' flex="1" className="p-16 landing-container">
      <Box flex="1">
        <Text fontSize='5xl' as='b' className="primary">MediClear</Text>
        <br />
        <Text fontSize='4xl' as='b' className="primary-dark">Understand your health reports and medical tests with a simple click</Text>
        <br />
        <Button colorScheme='facebook' className='primary' size='lg' onClick={() => router.push('/upload') }>
          Try It Out
        </Button>
      </Box>
      <Box flex="1">
        <Image src="/landing-1.svg" width="500" height="300" alt="landing page 1" />
      </Box>
    </Box>
  )
}

const EnhancedEfficiency = () => {
  return (
    <Box alignItems='center' display='flex' justifyContent='center' w='100%' flex="1" className="p-6 primary-bg landing-container">
      <Box flex="1">
        <Image src="/landing-2.svg" width="500" height="300" alt="landing page 1" />
      </Box>
      <Box flex="1" style={{ textAlign: "end" }}>
        <Text fontSize='2xl' as='b'>Enhanced Efficiency</Text>
        <br />
        <Text fontSize='4xl' as='b' className="primary">Get a clearer understanding of your health before the doctor’s review</Text>
        <br />
        <Text fontSize="xl">Prepare questions to ask your doctor with this understanding</Text>
        <br />
        <Link href={'/upload'} className='primary'>Try it out &gt;</Link>
      </Box>
    </Box>
  )
}

const RecallResults = () => {
  const router = useRouter()

  return (
    <Box alignItems='center' display='flex' justifyContent='center' w='100%' flex="1" className="p-16 landing-container">
      <Box flex="1">
        <Text fontSize='2xl' as='b'>Recall Results</Text>
        <br />
        <Text fontSize='4xl' as='b' className="primary">Review your simplified health reports after seeing the doctor</Text>
        <br />
        <Text fontSize="xl">Build upon what you learnt from the doctor’s consultation with our simplified health reports</Text>
        <br />
        <Link href={'/upload'} className='primary'>Try it out &gt;</Link>
      </Box>
      <Box flex="1">
        <Image src="/landing-3.svg" width="500" height="300" alt="landing page 1" />
      </Box>
    </Box>
  )
}

const LandingPage = () => {
  return (
    <Flex w='100%' flex={1} direction='column'>
      <Jumbotron />
      <EnhancedEfficiency />
      <RecallResults />
    </Flex>
  )
}

export default LandingPage;
'use client'

import { Flex, Button, Box } from '@chakra-ui/react'
import TopBar from '@/components/TopBar'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Jumbotron = () => {
  const router = useRouter()

  return (
    <Box alignItems='center' display='flex' justifyContent='center' w='100%' flex="1">
      <Button colorScheme='blue' size='lg' onClick={() => router.push('/upload') }>
        Try It Out
      </Button>
    </Box>
  )
}

const Description = () => {
  return (
    <Box alignItems='center' display='flex' justifyContent='center' w='100%' flex="1" className='primary-bg p-16'>
      <Box flex="1" className="p-6">
        <Box w={"60%"}>
          <h3 className="text-2xl font-bold mb-6">Simplified Solutions</h3>
          <h1 className="text-4xl font-bold mb-6 primary">Understand your health reports and medical tests with a simple click</h1>
          <p className="text-lg mb-6">
            Upload your health reports and test results as images or files and let us do the rest for you. 
          </p>
          <Link href={'/upload'} className='primary'>Try it out &gt;</Link>
        </Box>
      </Box>
      <Box flex="1" className="p-6">
        <img src="" alt="Your Image" className="w-full mx-auto" />
      </Box>
    </Box>

  )
}

const LandingPage = () => {
  return (
    <Flex w='100%' h='100vh' flex={1} direction='column'>
      <TopBar />
      <Jumbotron />
      <Description />
    </Flex>
  )
}

export default LandingPage;
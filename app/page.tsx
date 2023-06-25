'use client'

import { Flex, Button } from '@chakra-ui/react'
import TopBar from '@/components/TopBar'
import { useRouter } from 'next/navigation'

const Jumbotron = () => {
  const router = useRouter()

  return (
    <Flex direction='column' align='center' justify='center' h='100%' w='100%'>
      <Button colorScheme='blue' size='lg' onClick={() => router.push('/upload') }>
        Try It Out
      </Button>
    </Flex>
  )
}

const Description = () => {
  return (
    <section className="p-16 primary-bg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-left p-6">
          <h3 className="text-2xl font-bold mb-6">Simplified Solutions</h3>
          <h1 className="text-4xl font-bold mb-6 primary">Understand your health reports and medical tests with a simple click</h1>
          <p className="text-lg mb-6">
            Upload your health reports and test results as images or files and let us do the rest for you. 
          </p>
      </div>
      <div className="md:w-1/2 p-6">
          <img src="" alt="Your Image" className="w-full mx-auto" />
      </div>
    </div>
  </section>
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
import { Box, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const TopBar = () => {
  const router = useRouter();

  return (
    <Box className="primary-bg" w='100%' h='80px' alignItems='center' display='flex'>
      <HStack spacing='15px' paddingLeft='45px' onClick={() => router.push('/') } className='cursor-pointer'>
        <Box>
          <Image height='60' width="43" src="/logo.svg" alt="Logo of MediClear" priority />
        </Box>
        <Box>
          <Text fontSize='30px' as='b' color='#282C34'>
            MediClear
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default TopBar;

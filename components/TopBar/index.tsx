import { Box, HStack, Text } from '@chakra-ui/react'
import { RiMentalHealthFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

const TopBar = () => {
  const router = useRouter();

  return (
    <Box bg='#D9D9D9' w='100%' h='80px' alignItems='center' display='flex'>
      <HStack spacing='15px' paddingLeft='45px' onClick={() => router.push('/') } className='cursor-pointer'>
        <Box>
          <RiMentalHealthFill style={styles.icon}/>
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

const styles = {
  icon: {
    color: '#282C34',
    height: '45px',
    width: '45px'
  }
}

export default TopBar;

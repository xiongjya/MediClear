'use client'

import './globals.css'
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { Inter } from 'next/font/google'
import TopBar from '@/components/TopBar'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'MediClear',
//   description: 'Empowering individuals to better understand their health reports',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const size = useWindowSize();
  if (size && size.width < 900) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ChakraProvider>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            className="primary-bg"
          >
            <Box textAlign="center">
              <Text fontSize="3xl">Mobile site is not available. Please try again on a device with a larger screen.</Text>
            </Box>
          </Box>
          </ChakraProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <TopBar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

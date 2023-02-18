import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { GlobalLoadingProvider, GlobalLoadingModule } from '@/modules/globalLoading';
import customTheme from '../theme';
import Fonts from '../Fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <GlobalLoadingProvider>
        <Component {...pageProps} />
      </GlobalLoadingProvider>
      <GlobalLoadingModule />
    </ChakraProvider>
  )
}

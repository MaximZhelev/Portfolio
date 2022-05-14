import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../components/ui/theme';
import AppLayout from '../components/layout/appLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}
export default MyApp;

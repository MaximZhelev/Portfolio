import { Button, Flex, Box } from '@chakra-ui/react';
import Header from '../components/layout/header';

import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import PageLayout from '../components/layout/pageLayout';
import Link from 'next/link';

const Contact = () => {
  return (
    <PageLayout title="Contact">
      <Flex justifyContent={'center'}>
        <Header mt={0} mb={1} fontSize={32}>
          Get In Touch
        </Header>
      </Flex>
      <Flex>
        <Box m={3} fontWeight={300}>
          Feel free to contact me if you have any questions or if you are looking forward to
          collaborate.
        </Box>
      </Flex>
      <Flex direction={'column'} justifyContent={'left'}>
        <Box as="h2" fontWeight="400" textAlign="center" m={1} mt={3}>
          Email: maxim.zhelev1@gmail.com
        </Box>
        <Box as="h2" fontWeight="400" textAlign="center" m={1}>
          Phone: +359 899 978 886
        </Box>
      </Flex>
      <Flex justifyContent={'center'} m={1}>
        <Link href={'mailto:maxim.zhelev1@gmail.com'} passHref>
          <Button colorScheme="blue" m={1} leftIcon={<AiOutlineMail />}>
            Email
          </Button>
        </Link>
        <Link href={'tel:+359899978886'} passHref>
          <Button colorScheme="blue" m={1} leftIcon={<FiPhoneCall />}>
            Call
          </Button>
        </Link>
      </Flex>
    </PageLayout>
  );
};

export default Contact;

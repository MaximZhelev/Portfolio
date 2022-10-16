import { Fragment } from 'react';
import axios from 'axios';
import {
  Button,
  Flex,
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
  FormErrorMessage
} from '@chakra-ui/react';

import Header from '../components/layout/header';
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import PageLayout from '../components/layout/pageLayout';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string(),
  message: yup.string().required()
});

type FormInputs = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  });

  const toast = useToast();

  const handleClick = async (values) => {
    const data = {
      text: `Name: ${values.name} \nEmail: ${values.email} \nSubject: ${values.subject} \nMessage: ${values.message}`
    };

    const res = await axios.post(process.env.WEBHOOK_URL, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post['Content-Type'];
          return data;
        }
      ]
    });

    if (res.status === 200) {
      toast({
        title: 'Success',
        description: 'Message sent successfully!',
        status: 'success',
        duration: 9000,
        position: 'top-right',
        isClosable: true
      });
    } else {
      toast({
        title: 'Error',
        description: 'There was error when sending the message, please try again!',
        status: 'error',
        duration: 9000,
        position: 'top-right',
        isClosable: true
      });
    }
  };

  const contactOptions = [
    {
      label: 'Phone',
      value: '+359 899 978 886',
      icon: BsPhone
    },
    {
      label: 'Email',
      value: 'maxim.zhelev1@gmail.com',
      icon: HiOutlineMail
    },
    {
      label: 'Location',
      value: 'Varna, Bulgaria',
      icon: GoLocation
    }
  ];

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
      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
        <Stack spacing={8}>
          <Stack
            spacing={{ base: 5, md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            pr={5}
            pl={5}
          >
            {contactOptions.map((option, index) => (
              <Fragment key={index}>
                <Stack spacing={3} direction="column" justify="center" alignItems="center" px={3}>
                  <Icon as={option.icon} w={10} h={10} color="blue.400" />
                  <Text fontSize="lg" fontWeight="semibold">
                    {option.label}
                  </Text>
                  <Text fontSize="md" textAlign="center">
                    {option.value}
                  </Text>
                </Stack>
                {contactOptions.length - 1 !== index && (
                  <Flex d={{ base: 'none', md: 'flex' }}>
                    <Divider orientation="vertical" />
                  </Flex>
                )}
              </Fragment>
            ))}
          </Stack>
          <VStack
            as="form"
            spacing={8}
            w="100%"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                <FormControl id="name" isInvalid={!!errors?.name}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Your name"
                    rounded="md"
                    {...register('name', {
                      required: true
                    })}
                  />
                  {!!errors?.name && <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>}
                </FormControl>
                <FormControl id="email" isInvalid={!!errors?.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Your email"
                    rounded="md"
                    {...register('email', {
                      required: true
                    })}
                  />
                  {!!errors?.email && <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>}
                </FormControl>
              </Stack>
              <FormControl id="subject" isInvalid={!!errors?.subject}>
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  placeholder="Message subject"
                  rounded="md"
                  {...register('subject', {
                    required: false
                  })}
                />
                {!!errors?.subject && (
                  <FormErrorMessage>{errors?.subject?.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl id="message" isInvalid={!!errors?.message}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Enter your message"
                  rounded="md"
                  {...register('message', {
                    required: true
                  })}
                  h={150}
                />
                {!!errors?.message && (
                  <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
                )}
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button
                bg="blue.300"
                color="white"
                _hover={{
                  bg: 'blue.500'
                }}
                rounded="md"
                w={{ base: '100%', md: 'max-content' }}
                onClick={handleSubmit(handleClick)}
                disabled={!!errors.name || !!errors.email || !!errors.message}
              >
                Send Message
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default Contact;

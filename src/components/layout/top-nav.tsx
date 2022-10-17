import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ui/ColorModeSwitcher';
import NextLink from 'next/link';

const webLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Contact', path: '/contact' }
];

const mobileLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Contact', path: '/contact' }
];

const NavLink = (props) => {
  const link = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <NextLink href={props.path} passHref>
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: link.bg
        }}
        _activeLink={{
          color: link.color
        }}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        px={4}
        boxShadow={'lg'}
        position="fixed"
        width="100%"
        zIndex="55"
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={['90%', '85%', '80%']}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NextLink href={'/'} passHref>
                <Avatar
                  as={Link}
                  size={'sm'}
                  // src={UserIcon}
                  src={'/me_vector.png'}
                  background={'none'}
                />
              </NextLink>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {webLinks.map((link, index) => (
                <NavLink key={index} name={link.name} path={link.path} onClose={onClose} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              as={Link}
              href={'https://github.com/MaximZhelev'}
              size={'md'}
              icon={<FaGithub />}
              aria-label={'Github account'}
              bg={useColorModeValue('white', 'gray.700')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900')
              }}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            w={['100%', '100%', '80%']}
            maxW={800}
            display={['inherit', 'inherit', 'none']}
          >
            <Stack as={'nav'} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

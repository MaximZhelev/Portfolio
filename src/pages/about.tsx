import { Flex, Box, Text, Button, Img } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '../components/ui/motion';
import Header from '../components/layout/header';
import { IoDocumentOutline } from 'react-icons/io5';
import PageLayout from '../components/layout/pageLayout';

const ANIMATION_DURATION = 0.5;

const About = () => {
  return (
    <PageLayout title="About">
      <Flex direction="column" align="column">
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          {/* <Avatar
                              size={"2xl"}
                              src={"/code.gif"}
                              border={"0.1px solid black"}
                          /> */}
          <Img
            borderRadius="3rem"
            border={'0.1px solid black'}
            boxSize="sm"
            width={450}
            src="/code.gif"
            alt="GIF"
          />
        </MotionBox>
        <MotionFlex
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header>About</Header>
          <Box as="span" textAlign="left">
            <Text>
              Hello! My name is Maxim, I am Frontend developer with 3+ years of professional experience working in small and large teams to develop interactive, user-friendly, and feature-rich web applications. A self-motivated and lifelong learner familiar with modern web development and web3 technologies (blockchain, crypto, DeFi).
            </Text>

            <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
              <a href={'./resume.pdf'} target="_blank" rel="noreferrer">
                <Button colorScheme="blue" leftIcon={<IoDocumentOutline />}>
                  Resume
                </Button>
              </a>
            </Box>
          </Box>
        </MotionFlex>
      </Flex>
    </PageLayout>
  );
};

export default About;

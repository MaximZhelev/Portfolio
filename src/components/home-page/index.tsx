import { useEffect, useState } from 'react';
import { Flex, Avatar, Box } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '../ui/motion';
import Header from '../layout/header';
import Typed from 'react-typed';
import Projects from './projects';
import { ProjectProps } from 'interfaces/interface';

const ANIMATION_DURATION = 0.5;
const BLUE = '#0175f3';
const emojis = ['👋', '👍', '🖐'];

const Home = ({ projects }: ProjectProps) => {
  const [showEmogi, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0);
    }, 500);
    return () => clearInterval(interval);
  }, [emojiCounter]);

  return (
    <Flex direction="column" align="column">
      <Flex direction={['column', 'column', 'row']}>
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
          <Avatar
            size={'2x1'}
            //showBorder={true}
            src={'/me_vector.png'}
            background={'none'}
            //border={'0.1px solid black'}
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
          <Box position="relative">
            <Box position="absolute" width="full" fontSize="2xl" textAlign="center">
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={showEmogi && emojiCounter === index ? 'show' : 'hide'}
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0]
                      }
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                );
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={BLUE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1);
                  setShowEmoji(true);
                }}
              >
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
              Maxim
            </Box>{' '}
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            <Box as="span" whiteSpace="nowrap">
              I&apos;m a{' '}
              <Typed
                strings={['Frontend', 'Blockchain', 'Mobile']}
                typeSpeed={60}
                backSpeed={60}
                loop={true}
              ></Typed>{' '}
              developer
            </Box>{' '}
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;

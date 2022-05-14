import * as React from 'react';
import { VStack, Text, useColorModeValue, HStack } from '@chakra-ui/react';
import Header from '../components/layout/header';
import LiveData from '../components/projects/live-data';
import { repositories } from '../data/repositories';
import PageLayout from '../components/layout/pageLayout';

const TURQUOISE = '#06b6d4';

const RepositoriesList = ({ repositories }) => {
  return (
    <PageLayout title="Projects" keywords="A list of projects">
      <VStack align="start" spacing={3}>
        <HStack justifyContent={'space-between'} width={'100%'}>
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
            Projects
          </Header>
        </HStack>
        <Text color={useColorModeValue('gray.500', 'gray.200')} textAlign="left">
          This page lists some of the repositories I have published or contributed to.
        </Text>
      </VStack>
      <LiveData repositories={repositories} />
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
      repositories
    }
  };
}

export default RepositoriesList;

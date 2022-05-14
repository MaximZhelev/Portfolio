import * as React from 'react';
import StackGrid from 'react-stack-grid';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { PageSlideFade } from '../ui/page-transitions';
import RepositoryCard from './live-data-card';

const LiveData = ({ repositories }) => {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
  const [isLargerThan982] = useMediaQuery('(min-width: 982px)');

  let columnWidth = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {
      // columnWidth = '100%';
    }
  }

  return (
    <PageSlideFade>
      <Box mt={4}>
        <StackGrid columnWidth={!isLargerThan982 && !isLargerThan720 ? '100%' : columnWidth}>
          {repositories.map((repo, index) => (
            <RepositoryCard
              key={index}
              title={repo.title}
              description={repo.description}
              blurHash={repo.blurHash}
              technologies={repo.technologies}
              url={repo.url}
              live={repo.live}
              stars={repo.stars}
              fork={repo.fork}
            />
          ))}
        </StackGrid>
      </Box>
    </PageSlideFade>
  );
};

export default LiveData;

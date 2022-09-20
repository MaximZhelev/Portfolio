import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { PageSlideFade } from '../ui/page-transitions';
import RepositoryCard from './live-data-card';

const LiveData = ({ repositories }) => {
  return (
    <PageSlideFade>
      <Box mt={4}>
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
      </Box>
    </PageSlideFade>
  );
};

export default LiveData;

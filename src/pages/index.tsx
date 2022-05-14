import { ProjectProps } from 'interfaces/interface';
import Home from '../components/home-page';
import PageLayout from '../components/layout/pageLayout';
import { projectsList } from '../data/projects-list';

const Index = ({ projects }: ProjectProps) => {
  return (
    <PageLayout title="Maxim Zhelev">
      <Home projects={projects} />
    </PageLayout>
  );
};

export function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    }
  };
}

export default Index;

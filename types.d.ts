type Project = {
  id: number;
  title: string;
  logo: string;
  link: string;
  desc: string;
  blurHash: string;
  technologies: string[];
  tech: string[];
};

type Article = {
  title: string;
  desc: string;
  link: string;
  views: string;
  external: boolean;
  isNew: boolean;
  readTime: string;
  published: string;
  tags: string[];
  github_url: string;
};

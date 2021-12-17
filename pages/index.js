import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
const Home = () => (
  <div className="home">
    <h1>メインページ。HOME的な感じ</h1>

    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
      })}
    </div>
    <div className="card-about">
      <a className="card-small" href="/about">
        <h3>About</h3>
      </a>
    </div>
  </div>
);

export default Home;
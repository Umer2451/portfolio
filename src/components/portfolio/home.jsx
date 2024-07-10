import Header from './header';
import Footer from './footer';
import Skills from './skills'
import skillsData from '../../data/skillsdata';
import projectData from '../../data/projectsdata';
import Projects from './projects';
function Home() {
  return (
    <div >
      <div>
      <Header />
      </div>
      <div>
      {skillsData.map((data) => (
          <Skills  key={data.id} image = {data.image} title = {data.title}></Skills>
        ))}
      </div>
      <div>
      <div style = {{display: "flex"}}><h1>Projects</h1></div>
      {projectData.map((data) => (
          <Projects  key={data.id} image = {data.image} title = {data.title} function = {data.p}></Projects>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

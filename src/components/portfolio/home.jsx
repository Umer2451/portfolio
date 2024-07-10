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
      <div style = {{display: "flex", width: "100%", justifyContent: "center", borderBottom: "10px solid #FDC435", fontFamily: "Nunito"}}><h1> My Projects</h1></div>
      {projectData.map((data) => (
          <Projects  key={data.id} image = {data.image} title = {data.title} function = {data.p}></Projects>
        ))}
      </div>
      <div style = {{display: "flex", maxWidth: "100%", justifyContent: "center", borderBottom: "10px solid #FDC435", fontFamily: "Nunito"}}><h1> My Skills</h1></div>
      <div>
      {skillsData.map((data) => (
          <Skills  key={data.id} image = {data.image} title = {data.title}></Skills>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

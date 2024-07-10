import Header from './components/header';
import Footer from './components/footer';
import Skills from './components/skills'
import ImageGallery from './components/imagegallery';
import skillsData from './data/skillsdata';
function App() {
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
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "../portfolio/styles/projects.css";
import { useNavigate } from "react-router-dom";
function Projects(props){
    const navigate = useNavigate();
    return(<div onClick = {()=> navigate(props.function)}className="main-div-projects">
    <img className="image-class-projects" src={props.image} alt="project_images"></img><p>{props.title}</p>
  </div>);
}
export default Projects;
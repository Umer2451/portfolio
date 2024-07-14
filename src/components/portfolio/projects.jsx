import "../portfolio/styles/projects.css";
import { useNavigate } from "react-router-dom";

function Projects(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.function === "https://Umer2451.github.io/finance-app/") {
      window.open(props.function, "_blank", "noopener noreferrer");
    } else {
      navigate(props.function);
    }
  };

  return (
    <div className="main-div-projects" onClick={handleClick}>
      <img className="image-class-projects" src={props.image} alt="project_images" />
      <p>{props.title}</p>
    </div>
  );
}

export default Projects;

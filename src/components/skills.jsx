import "../styles/skills.css";
function Skills(props){
    return(<div className="main-div">
    <img className="image-class" src={props.image} alt="skill_image"></img><p>{props.title}</p>
  </div>);
}
export default Skills;
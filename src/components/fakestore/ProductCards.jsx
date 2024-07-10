import "../fakestore/fakestorestyles/productcard.module.css"
function ProductCards(props) {
  return <div className="main-div">
    <img className="image-class" src={props.image} alt="product_image"></img><p>{props.title}</p>
  </div>;
}
export default ProductCards;

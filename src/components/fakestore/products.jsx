import { NavBar } from "./fakestore";
import ProductCards from "./ProductCards";
import data from "../../data/products";
import FooterStore from "./footerstore";
function ProductFakeStore() {
  debugger;
  const fetchData = data;
  return (
    <div>
    <div>
      <NavBar></NavBar>
    </div>
        {fetchData.map((products) => (
          <ProductCards  key={products.id} image = {products.image} title = {products.title}></ProductCards>
        ))}
        <div>
          <FooterStore></FooterStore>
        </div>
    </div>
  );
}
export default ProductFakeStore;

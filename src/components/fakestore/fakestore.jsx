import styles from "../fakestore/fakestorestyles/fakestoreheader.module.css";
import { useState,  useEffect } from "react";
import Slider from "./slider";
import FooterStore from "./footerstore";
import Card from "./cards";
function NavBar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('inputValue'));
    if (items) {
     setItems(items);
    }
  }, []);
  
console.log(items);
  return (
<div className={styles.mainDiv}>
    <h1>Fake Store</h1>
    <div className={styles.coollist}>
        <ul>
        <li><a href="/fakestore">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/aboutus">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </div>
</div>

  );
}
function CountDown() {
    let countDownDate = new Date("Aug 09, 2024 16:37:52").getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    const [secondsa, secondsUpdated] = useState(seconds);
    const [daysa, daysUpdated] = useState(days);
    const [hoursa, hoursUpdated] = useState(seconds);
    const [minutesa, minutesUpdated] = useState(seconds);
    useEffect(() => {
      setTimeout(() => {
        secondsUpdated((secondsa) => seconds);
        daysUpdated((daysa) => days);
        hoursUpdated((hoursa) => hours);
        minutesUpdated((minutesa) => minutes);
      }, 1000);
    }, [days, hours, minutes, seconds]);
    return(<div className={styles.countdowntimer}> {daysa} : {hoursa} : {minutesa} : {secondsa} </div>)
}
function FakeStore() {
  return (
    <div>
      <NavBar />
      <div className={styles.countdowndiv}><p> Flash-Sale Count Down:</p> <CountDown></CountDown></div>
      <div><Slider /></div>
      <div><Card /></div>
      <div><FooterStore /></div>
    </div>
  );
}
export default FakeStore;
export {NavBar}
import "./App.css";
import Header from "./Layout/Header/header";
import Sidebar from "./Layout/Sidebar/sidebar";
import Content from "./Layout/Content/content";
import Footer from "./Layout/Footer/footer";



function App() {


const product=[
 {
  name:"iphone",
  price:"Rs 40,000"
 },
 {
  name:"Poco",
  price:"Rs 18,000"
 },
 {
  name:"Samsung",
  price:"Rs 25,000"
 },
 {
  name:"Realme",
  price:"Rs 22,000"
 },
 {
  name:"Redmi",
  price:"Rs 17,000"
 },
 {
  name:"Oppo",
  price:"Rs 20,000"
 },
 {
  name:"Vivo",
  price:"Rs 15,000"
 },
 {
  name:"Infinix",
  price:"Rs 23,000"
 }

]



  return (
  
  <div className="App">
  <header className="header"><Header/></header>
  <div className="SidebarContent">
    <aside className="sidebar"><Sidebar/></aside>
    <main className="content"><Content Products={product}/></main>
  </div>
  <footer className="footer"><Footer/></footer>
</div>
  );
}

export default App;

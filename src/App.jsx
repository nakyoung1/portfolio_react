import Weather from "./component/Weather/Weather";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import "./App.css";

export default function App() {
     return (
          <div>
               {/* <Weather /> */}
               <Header />

               <div id="main-container">
                    <div className=".introduce_box ">
                         <About />
                    </div>
               </div>
          </div>
     );
}

import { useState, useEffect } from "react";
import "./App.css";

// import './styles.css'
import Scene from './Scene'



import image1 from './imagen1.jpeg'
import image2 from './imagen2.jpeg'


function App() {
  let scene
  useEffect(() => {
      scene = new Scene()
    setTimeout(() => {
      scene.onMouseMove()
    }, 400);
  }, [])
  const [name, setName] = useState("");
  return (
    <>
      <div className="app">
        
        <section  className="container">
          <article className="tile">
            <figure className="tile__figure">
              <img src={image1} data-hover={image2} className="tile__image" alt="My image" width="400" height="300" />
            </figure>
          </article>
        </section>

          <canvas id="stage"></canvas>
      
      </div>
      </>
  );
}

export default App;

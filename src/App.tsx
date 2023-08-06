
import './App.css';

function App() {

  return (
    <>
    
  <header id="header">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqvprPWkD0AFap-C4otTt98AQSyRqS7mDNA&usqp=CAU" alt="apple logo" id="header-img"/><h1>AirPods</h1>
    <nav id="nav-bar">
      <ul>
        <li><a className="nav-link" href="#features">Features</a></li>
        <li><a className="nav-link" href="#video">Comparison</a></li>
        <li><a className="nav-link" href="#pricing">Order Now</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <body>
    <h2 id="features">Introducing the Airpods 2, Airpods 3, and Airpod Pro</h2>
    <form id="form" action="https://www.freecodecamp.com/email-submit">
      <input id="email" name="email" type="email" placeholder="Enter email here"/>
    <input id="submit" type="submit" value="Get Started" />
    </form>
    <div>
    <ul>
      <p className="heading"> Airpods 2</p>
      <li className="description">"With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods 2 deliver an incredible wireless headphone experience."</li>
      <p className="heading"> Airpods 3</p>
      <li className="description">"Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or theater."</li>
      <p className="heading"> Airpods Pros</p>
      <li className="description">"AirPods Pro take the listening experience to a new level of individuality. Personalized Spatial Audio with dynamic head tracking works with all your devices to immerse you deeper in all-around-you sound."</li>
    </ul>
    </div>
       <h2> Learn More </h2>
      <iframe id="video" width="420" height="315"
src="https://www.youtube.com/embed/TBTgQbjRsqg">
</iframe>
<section id="pricing">
    <div className="outer">
      <div className="inner">
          <p className="purchase">Airpods 2</p>
      </div>
      <p>Airpod (2nd genration)</p>
      <p>Starting at $129</p>
      <button type="button">Select</button>
    </div>
    <div className="outer">
      <div className="inner">
          <p className="purchase">Airpods 3</p>
      </div>
      <p>Airpod (3rd genration)</p>
      <p>Starting at $149</p>
      <button type="button">Select</button>
    </div>
     <div className="outer">
      <div className="inner">
          <p className="purchase">Airpod Pros</p>
      </div>
      <p>Airpod Pros</p>
      <p>Starting at $249</p>
      <button type="button">Select</button>
    </div>   
    </section> 
      <footer><p>
        **This is just a fake products page. All information is from the Apple Website.
      </p></footer>   
    </body>
  </main>
    </>
  );
}

export default App;


import React from 'react';
import "tachyons"

function App() {
  return (
    <div className="bg-black vh-100 white pa3"> 
    <span className="f1 ">Welcome</span>
    <div className="f2 mv2">This app has been preloaded with <a className="link hover-dark-red  i " href="https://tachyons.io/" target="_blank">Tachyons</a></div>
    <a className="link hover-dark-red  f2" href="https://augustuskirby.com/" target="_blank">home</a>
    </div>
  );
}

export default App;

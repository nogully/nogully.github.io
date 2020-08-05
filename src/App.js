import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="cover-photo">
          <div id="name-card">
            <h1>Nora Gully</h1>
            <h5>SOFTWARE DEVELOPER</h5>
          </div>
        </section>
        <section id="description">
          <h5>ABOUT ME</h5>
          <div id="desc-wrapper">
            <p className="description">I help content become more meaningful with code.</p>
            <p className="description">I'm a fullstack engineer with a background in  <a className="inline-link" href="http://www.imdb.com/name/nm3316150/">
              journalism and documentary filmmaking</a>. I enjoy making compelling user experiences, learning new technologies, and playing with large data sets.
            </p>
            <p className="description">I live in Boulder and I'm outdoors a lot. Please get in touch if you'd like to discuss working together!</p>
          </div>
        </section>
        <div id="paragraph-rule">
        </div>
        <section id="social-div">
          <a className="social" href="https://drive.google.com/open?id=1iww4C1nmtzj0rVCuFr_suSWeOyiSrazp">Resume</a>
          <a className="social" href="https://github.com/nogully">GitHub <i class="fab fa-github"></i></a>
          <a className="social" href="https://www.linkedin.com/in/nora-gully/">LinkedIn</a>
          <a className="social" href="https://twitter.com/noragully">Twitter <i class="fab fa-twitter"></i></a>
        </section>
      </div>
    );
  }
}

export default App;

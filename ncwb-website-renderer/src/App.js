import { useEffect, useState } from 'react';
import './App.css';
import { getWebsite } from './App.Service';
import { Renderer } from './Renderer';

function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');

  useEffect(() => {
    getWebsite()
    .then(data => {
      return data.json();
    })
    .then(website => {
      console.log("fetched website data", website);
      setHtml(website.html);
      setCss(website.css);
    });
  }, []);

  return (
    <div className="App">
      <Renderer 
        html={html}
        css={css}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Prism from 'prismjs';
import screenshotHtml from './vs-code-screenshot-html.png';
import screenshotCss from './vs-code-screenshot-css.png';
import screenshotJs from './vs-code-screenshot-js.png';
/* eslint import/no-webpack-loader-syntax: off */
import vsCodeDarkTheme from '!!file-loader!./prism-vsc-dark-plus.css';
import vsCodeDarkThemeFixed from '!!file-loader!./prism-vsc-dark-plus-fixed.css';
import jsCode from '!!raw-loader!./code.js';
import cssCode from '!!raw-loader!./code.css';
import htmlCode from '!!raw-loader!./code.html';

require('prismjs/components/prism-css-extras');
require('prismjs/components/prism-js-extras');
require('prismjs/components/prism-js-templates');
require('prismjs/components/prism-regex');
require('prismjs/components/prism-jsx');

function App() {
  const [fixedCss, setFixedCss] = useState(false);
  const highlightedJs = Prism.highlight(jsCode, Prism.languages.jsx, 'jsx');

  const highlightedCss = Prism.highlight(cssCode, Prism.languages.css, 'css');

  const highlightedHtml = Prism.highlight(
    htmlCode,
    Prism.languages.html,
    'html',
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ paddingTop: 40, width: '49%' }}>
        <div
          style={{
            marginTop: -50,
            width: '100%',
            padding: 10,
            position: 'fixed',
            background: 'white',
          }}
        >
          <select
            onChange={(event) => {
              setFixedCss(!fixedCss);
            }}
          >
            <option value="prism-vsc-dark-plus">prism-vsc-dark-plus.css</option>
            <option value="prism-vsc-dark-plus-fixed">
              prism-vsc-dark-plus-fixed.css
            </option>
          </select>
          <link
            rel="stylesheet"
            href={fixedCss ? vsCodeDarkThemeFixed : vsCodeDarkTheme}
          />
        </div>
        <pre
          className="language-jsx"
          dangerouslySetInnerHTML={{
            __html: highlightedJs,
          }}
        />
        <br />
        <br />
        <br />
        <pre
          className="language-css"
          dangerouslySetInnerHTML={{
            __html: highlightedCss,
          }}
        />
        <br />
        <br />
        <br />
        <pre
          className="language-html"
          dangerouslySetInnerHTML={{
            __html: highlightedHtml,
          }}
        />
      </div>
      <div style={{ paddingTop: 40, width: '49%' }}>
        <div
          style={{
            marginTop: -50,
            width: '100%',
            padding: 10,
            position: 'fixed',
            background: 'white',
          }}
        >
          VS Code Real Highlighting
        </div>
        <img
          src={screenshotJs}
          style={{ marginTop: 20, display: 'block', height: 1010 }}
          alt=""
        />
        <img
          src={screenshotCss}
          style={{ marginTop: 62, display: 'block', height: 296 }}
          alt=""
        />
        <img
          src={screenshotHtml}
          style={{ marginTop: 65, display: 'block', height: 392 }}
          alt=""
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

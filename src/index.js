import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Prism from 'prismjs';
import screenshotHtml from './vs-code-screenshot-html.png';
import screenshotCss from './vs-code-screenshot-css.png';
import screenshotJs from './vs-code-screenshot-js.png';
/* eslint import/no-webpack-loader-syntax: off */
import vsCodeDarkTheme from '!!file-loader!./prism-vsc-dark-plus.css';
import vsCodeDarkThemeFixed from '!!file-loader!./prism-vsc-dark-plus-fixed.css';

require('prismjs/components/prism-css-extras');
require('prismjs/components/prism-js-extras');
require('prismjs/components/prism-js-templates');
require('prismjs/components/prism-jsx');

function App() {
  const [fixedCss, setFixedCss] = useState(false);
  const htmlCode = Prism.highlight(
    `<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <title>Title</title>
  <style>body {width: 500px;}</style>
</head>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  &amp; &#x2665;
  <![CDATA[
    CDATA is <not> magical.
  ]]>

  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`,
    Prism.languages.html,
    'html',
  );
  const cssCode = Prism.highlight(
    `@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`,
    Prism.languages.css,
    'css',
  );

  const code = Prism.highlight(
    `import React, { useEffect } from 'react';
function a(asdf) {
  let b = 1;
  console.log(a + b);
  console.log(asdf);
}
a();

const classes = [];
const checkCondition = () => {};

function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\/highlight\\b/) !== -1)
      return process(block, true, 0x0f) + \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined) console.log('undefined');
  }

  return (
    <div className="page-title">
      <Label />
      <web-component>{block}</web-component>
    </div>
  );
}

class Expire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: props.children };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        component: null,
      });
    }, this.props.time || this.props.seconds * 1000);
  }
  render() {
    return this.state.component;
  }
}

export { Expire, $initHighlight };

function Label() {
  useEffect();
}`,
    Prism.languages.jsx,
    'jsx',
  );
  // Prism.highlightAll();

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
            __html: code,
          }}
        />
        <br />
        <br />
        <br />
        <pre
          className="language-css"
          dangerouslySetInnerHTML={{
            __html: cssCode,
          }}
        />
        <br />
        <br />
        <br />
        <pre
          className="language-html"
          dangerouslySetInnerHTML={{
            __html: htmlCode,
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
          style={{ display: 'block', height: 1010 }}
          alt=""
        />
        <img
          src={screenshotCss}
          style={{ marginTop: 62, display: 'block', height: 296 }}
          alt=""
        />
        <img
          src={screenshotHtml}
          style={{ marginTop: 110, display: 'block', height: 392 }}
          alt=""
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

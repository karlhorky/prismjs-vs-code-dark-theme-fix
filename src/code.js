import React, { useEffect } from 'react';
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
    if (cls.search(/\bno\/highlight\b/) !== -1)
      return process(block, true, 0x0f) + ` class="${cls}"`;
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
}

import * as React from 'react';
import { render } from 'react-dom';

import Demo from './components';
import './style.scss';

const App = () => {
  return (
    <div>
      {/* zxcz */}
      <Demo />
      {/* <Demo.Tree /> */}
    </div>
  );
};

render(<App />, document.getElementById('root'));

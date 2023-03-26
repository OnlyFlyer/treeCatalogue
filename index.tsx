import * as React from 'react';
import { Space } from 'antd';
import { render } from 'react-dom';

import Catalogue from './catalogue';
import './style.scss';

const App = () => {
  return (
    <div>
      <Catalogue.Tree />
      <Space />
      <Catalogue.TreeSelect />
    </div>
  );
};

render(<App />, document.getElementById('root'));

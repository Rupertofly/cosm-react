import {
  select,
  range,
  interpolateCubehelixDefault,
} from 'd3';
import { render } from 'react-dom';
import { createElement } from 'react';
import App from './app';

render(createElement(App), document.querySelector('#app'));

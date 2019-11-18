import { observer } from 'mobx-react';
import * as React from 'react';

@observer
export class App extends React.Component {
  render() {
    return (
      <svg viewBox='-1 -1 2 2' width='100' height='100'>
        <rect x='0' y='0' width='2' height='0.5'></rect>
      </svg>
    );
  }
}
export default App;

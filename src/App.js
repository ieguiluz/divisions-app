import React from 'react';
import { Button, Pagination } from 'antd';
import './App.less';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <Pagination defaultCurrent={1} total={50} />
  </div>
);

export default App;
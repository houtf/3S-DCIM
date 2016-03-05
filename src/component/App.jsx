import React from 'react';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';

const App = React.createClass({
  render() {
    return (
    	<div>
      		<DatePicker />
      		<Button type="primary">主按钮</Button>
      		<Radio>Radio</Radio>
      </div>
    );
  },
});

export default App;

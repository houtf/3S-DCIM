import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';
import { Table, Menu, Icon, Row, Col, Form, Select, Input, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const Option = Select.Option;

var solumn2 = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',  
},{
  title: '区域名称',
  dataIndex: 'name',
  key: 'name',  
}
,{
  title: '所属机房',
  dataIndex: 'room',
  key: 'room',  
},{
  title: '操作',
  key: 'operation',
  render(text, record) {
    return (
      <span>
        <a href="#">操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
        </a>
      </span>
    );
  }  
}];
var data = [{
  key: '1',
  name: '胡彦斌222',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

/*右侧数据表格组件*/
const Content2 = React.createClass({
  loadList: function(){
    var data = [
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100081, "name": "A\u4e92\u8054\u7f51\u8bbe\u5907\u533a"}, 
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100087, "name": "A\u7f51\u7edc\u5b58\u50a8\u533a"}, 
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100095, "name": "B\u6258\u7ba1\u8bbe\u5907\u533a"}, {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100108, "name": "C\u8bbe\u5907\u533a"}, 
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100121, "name": "D\u8bbe\u5907\u533a"}, 
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100134, "name": "E\u8bbe\u5907\u533a"}, 
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100147, "name": "F\u6c47\u805a\u533a"}, 
      {"level": 0, "room": "\u4fe1\u606f\u673a\u623f", "id": 100160, "name": "G\u7f51\u7edc\u6838\u5fc3\u533a"}];
    this.setState({data: data});
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadList();
    //setInterval(this.loadList, this.props.pollInterval);
  },
  render() {
    return (
      <div>
        <Row>
          <Col span="12">
            <Form inline onSubmit={this.handleSubmit}>
              <FormItem >
                <Select style={{ width: 120 }} placeholder="字段类型" >
                  <Option value="啊啊啊">Jack</Option>
                  <Option value="l呀呀呀">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="yiminghe">yiminghe</Option>
                </Select>
              </FormItem>
              <FormItem >
                <Input placeholder="字段名称" />
              </FormItem>
              <FormItem >
                <Button type="primary" shape="circle">
                  <Icon type="search" />
                </Button>
              </FormItem>
            </Form>
          </Col>
          <Col span="12" style={{textAlign: 'right'}}>
            <Form inline onSubmit={this.handleSubmit}>
              <FormItem >
                <Button type="primary">
                  <Icon type="plus" />
                </Button>
              </FormItem>  
              <FormItem >
                <Button type="primary">
                  <Icon type="reload" />
                </Button>
              </FormItem>  
            </Form>
          </Col>
        </Row>
        <Table columns={solumn2} dataSource={data} />
      </div>
    );
  }
});

export default Content2;
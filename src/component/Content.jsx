import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Menu, Icon, Row, Col, Form, Select, Input, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const Option = Select.Option;

/*左侧导航菜单组件*/
const Aside = React.createClass({
  getInitialState() {
    return {
      current: '1',
      theme: 'dark'
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        theme={this.state.theme}
        style={{ width: '100%' }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="inbox" /><span>资产管理</span></span>}>
          <SubMenu title="机房列表">
            <SubMenu title="信息机房">
              <Menu.Item key="1">选项1</Menu.Item>
              <Menu.Item key="2">选项2</Menu.Item>
            </SubMenu>
            <SubMenu title="调度机房">
              <Menu.Item key="3">选项3</Menu.Item>
              <Menu.Item key="4">选项4</Menu.Item>
            </SubMenu>
            <SubMenu title="通信机房">
              <Menu.Item key="5">选项3</Menu.Item>
              <Menu.Item key="6">选项4</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu title="未上架设备列表">
            <Menu.Item key="7">选项3</Menu.Item>
            <Menu.Item key="8">选项4</Menu.Item>
          </SubMenu>
          <SubMenu title="待确认设备列表">
            <Menu.Item key="9">选项3</Menu.Item>
            <Menu.Item key="10">选项4</Menu.Item>
          </SubMenu>
          <Menu.Item key="38">区域列表</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="line-chart" /><span>布线管理</span></span>}>
          <Menu.Item key="13">选项5</Menu.Item>
          <Menu.Item key="14">选项6</Menu.Item>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="15">选项7</Menu.Item>
            <Menu.Item key="16">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
          <Menu.Item key="10">选项10</Menu.Item>
          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="file" /><span>PPT</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
          <Menu.Item key="10">选项10</Menu.Item>
          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
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
  name: '胡彦斌',
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
const DataTable = React.createClass({
  loadList: function(){
    var data = [{
      key: '1',
      name: '胡彦斌2',
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
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
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
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
});

const Content = React.createClass({
  render() {
    return (
      <Row style={{height:'100%'}}>
        <Col span="4" style={{height:'100%'}}><Aside /></Col>
        <Col span="20" style={{padding: '20px 20px 0',backgroundColor: '#fff',height:'100%'}}><DataTable /></Col>
      </Row>
    );
  }
});


export default Content;
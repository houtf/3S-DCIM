import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';
import { Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

/*左侧导航菜单组件*/
const Sidebar = React.createClass({
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
              <Menu.Item key="1"><Link to="/page1/tab1">选项1</Link></Menu.Item>
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
          <Menu.Item key="25"><Link to="/to_be_seen">待确认设备列表</Link></Menu.Item>
          <Menu.Item key="38"><Link to="/zone_list">区域列表</Link></Menu.Item>
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

export default Sidebar;
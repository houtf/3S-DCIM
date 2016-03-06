import React from 'react';
import { Menu, Dropdown, Icon, Modal, Button } from 'antd';

const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: '您是否确认要退出系统',
    content: '',
    onOk() {
      console.log('确定');
    },
    onCancel() {}
  });
}

/*头部组件*/
const Header = React.createClass({
	handleClick(e) {
	    console.log('click ', e);
	    if( e.key === '1' ){
	    	showConfirm();
	    }
	    
	},
  	render() {
  		const menu = (
		  <Menu onClick={this.handleClick}>
		    <Menu.Item key="0">
		      <a><Icon type="edit" /> 修改密码 </a>
		    </Menu.Item>
		    <Menu.Item key="1">
		      <a><Icon type="logout" /> 退出系统 </a>
		    </Menu.Item>
		  </Menu>
		);
	    return (
	    	<div>
	    		<p>3S <span className="l-name">DCIM</span> 数据中心基础设备可视化管理平台</p>
	    		<Dropdown overlay={menu} trigger={['click']}>
				    <a className="ant-dropdown-link" href="#">
				      <Icon type="user" /> houtianfu <Icon type="down" />
				    </a>
				</Dropdown>
	      	</div>
	    );
  	},
});

export default Header;

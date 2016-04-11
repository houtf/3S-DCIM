import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import iScroll from 'iscroll/build/iscroll-zoom';
import {Popover, Button, Icon, QueueAnim, Spin, Badge} from 'antd';
import ReactIScroll from 'react-iscroll';
import store from '../common/store';
import $ from 'jquery';
import '../common/mock';

let legendColors = ["#6495ED","#A52A2A","#000000","#00008B"];
class BG extends Component {
  render(){
    const style = {
      background: `url(${this.props.url})`,
      backgroundSize: "contain",
      position: "absolute",
      left: 0,
      top: 0,
      width : this.props.width,
      height : this.props.height,
      zIndex: -1
    };
    return <div style={style}></div>
  }
}


class Block extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      badgeShow : false
    };
    this.handleDbClick = this.handleDbClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  }

  handleDbClick() {
    this.setState({ visible: false });
    $.ajax({
      url : `${baseUrl}/api/serial2id/?serial=${this.props.equipments.eqName}`,
      dataType : "json"
    }).done((data) => {
      const url = `${baseUrl}/cabinet/draganddrop/?cabinet_id=${data.id}`;
      store.showIframe(url, 1400, 700, data.id);
    });
  }

  handleVisibleChange(visible) {
    this.setState({ visible : visible });
  }

  handleClick(checkedValues) {
    this.setState({ badgeShow : !this.state.badgeShow });
  }
  render() {
    const content = (<div>
      <p>机柜编号</p>
      <p>品牌</p>
      <p>承载设备数量</p>
      <p>已用空间大小</p>
      <p>承重大小</p>
      <p>用电信息</p>
    </div>);
    let renderColor = "#EEEEEE";
    const eq = this.props.equipments;
    const eqd = eq.eqDetail;
    switch(eqd.type){
      case  0 : renderColor = legendColors[0];break;
      case  1 : renderColor = legendColors[1];break;
      case  2 : renderColor = legendColors[2];break;
      case  3 : renderColor = legendColors[3];break;
      default : renderColor = "#EEEEEE";break;
    }
    const style = {
      width:          eqd.width,
      height:         eqd.height,
      top:            eqd.top,
      left:           eqd.left,
      backgroundColor:renderColor,
      position:       "absolute",
      zIndex:         1,
      fontSize:       "6px",
      cursor:         "pointer",
      borderLeftWidth:"2px",
      borderLeftStyle:"solid",
      borderLeftColor:"#bcbcbc"
    }
    return (<div>
      <Popover visible={this.state.visible} overlay={content} placement="top"
          title={eq.eqName} trigger="hover" onVisibleChange={this.handleVisibleChange}>
        <div style={style} onDoubleClick={this.handleDbClick} onClick={this.handleClick}>
          <Badge dot={this.state.badgeShow} />
          <div style={{color:"#FFF",fontSize:"12px"}}>{eq.eqName}</div>
        </div>
      </Popover>
    </div>);
  }
}

class Legend extends Component{

  render(){
    const legendNodes = legendColors.map((color,idx)=>{
      return(
        <div key={idx} style={{display:"inline-block",padding:"0 20px"}}>
          <span style={{display:"inline-block",width:"20px",height:"20px",margin:"15px 5px 0 0",backgroundColor:color}}></span>
          <span style={{color:"#FFF",fontSize:"18px",position:"relative",top:"-3px"}}>{store.getTxtByNum(idx)}</span>
        </div>
      )
    });
    return(
      <div style={{position:"fixed",left:"100px",bottom:"50px",height:"50px",backgroundColor:"rgba(0,0,0,.4)"}}>{legendNodes}</div>
    )
  }
}

class BlockList extends Component {

  render() {
    const arr = [];
    for(const item in this.props.equipments){
      arr.push({
        eqName : item,
        eqDetail : store.renderByPixel(this.props.equipments[item])
      });
    }
    const blockNdoe = arr.map((result,idx)=>{
      return <Block key={idx} equipments={result}  idx={idx} />
    });

    let converObj = {};
    for(let i in this.props.rooms){
      if(i == store.getQuery("room_serial")){
        converObj = store.converRoom(this.props.rooms[i]);
      }
    }
    const converStyle = {
      zIndex :          -1,
      top :             converObj.top,
      left :            converObj.left,
      width :           converObj.width,
      height :          converObj.height,
      position :        "absolute",
      backgroundColor : "rgba(0,0,0,.5)"
    };
    return (<div>
      <QueueAnim interval={500} type={['left']} ease={['easeOutQuart', 'easeInOutQuart']} >
      <div key="10">{blockNdoe}</div>
      <div key="11" style={converStyle}></div>
      </QueueAnim>
    </div>);
  }
}
const Demo = React.createClass({
  getDefaultProps(){
    return{
      options: {
        scrollX: true,
        scrollY: true,
        freeScroll: true,
        click: false,
        zoom: true,
        mouseWheel: true,
        zoomMin:0.4,
        zoomMax:2,
        wheelAction: 'zoom'
      }
    }
  },
  getInitialState(){
    return {
      loading : true,
      legends : [],
      bgUrl : "",
      bgWidth : "",
      bgHeight : "",
      rooms : {},
      equipments : {}
    }
  },
  loadMsgFromServer(){
    $.ajax({
      url : "http://demo.3ddcim.com/",
      dataType : "json",
      async : false
    }).done((jsonData)=>{
      console.log(jsonData)
      const D = jsonData[0];
      this.setState({
        rooms : D.rooms,
        bgUrl : D.image,
        bgWidth : D.width,
        bgHeight : D.height,
        equipments : D.cabinets
      })
    }).fail((err)=>{

    });
  },
  componentDidMount(){
    this.loadMsgFromServer();
    this.refs.iscroll.withIScroll(true,(iscroll)=>{
      iscroll.zoom(0.75,0,0,500);
    })
    setTimeout(() =>{
      this.setState({ loading : false })
    },500)
  },
  onRefresh() {
    window.scrollTo(0,0);
  },
  render(){
    return (<div>
      <Spin size="large" spining={this.state.loading} />
      <ReactIScroll iScroll={iScroll} options={this.props.options} ref="iscroll" onRefresh={this.onRefresh}>
        <div style={{width:this.state.bgWidth,height:this.state.bgHeight,textAlign:'center'}}>
          <QueueAnim delay={500} interval={500} type={['scale']} ease={['easeOutQuart', 'easeInOutQuart']}>
            <BG key="0" width={this.state.bgWidth} height={this.state.bgHeight} url={this.state.bgUrl}/>
            <BlockList key="1" equipments={this.state.equipments} rooms={this.state.rooms} />
            <Legend key="3"/>
          </QueueAnim>
        </div>

      </ReactIScroll>
      
    </div>);
  }
});

export default Demo;

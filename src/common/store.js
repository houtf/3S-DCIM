import $ from "jquery";

const K = 'REACT-DEMO-V1';

function parseStr( str, substr, delim ){
    var start = str.indexOf( substr + '=' );
    if( start === -1 ) return '';
    var end = str.indexOf( delim, start );
    if( end === -1 ){
        end = str.length;
    }
    var value = str.substring( start + substr.length + 1, end ),
        //去除SQL注入和XXS攻击
        reg = /select |update |delete |truncate |join |union |exec |insert |drop |count |script|>|</i; 
    return decodeURIComponent( reg.test( value ) ? '' : value );
}

export default {
	fetch () {
        return JSON.parse(localStorage.getItem(K));
    },
    save (store) {
        localStorage.setItem(K, JSON.stringify(store));
    },
	getTxtByNum (num){
		switch (num) {
			case 0 : return "机柜";break;
			case 1 : return "空调";break;
			case 2 : return "UPS";break;
			case 3 : return "配电柜";break;
			default : return "机柜";break; 
		}
	},
	getQuery (key) {
		return parseStr( window.location.search, key, '&');
	},
	converRoom (arr) {
		return {
			top : arr[0][1],
			left : arr[0][0],
			width : arr[1][0] - arr[0][0],
			height : arr[2][1] - arr[0][1]
		}
	},
    renderByPixel (arr) {
    	return {
    		type : arr[0],
    		width : Math.abs(arr[5] - arr[3]),
    		height : Math.abs(arr[4] - arr[2]),
    		top : arr[4],
    		left : arr[3]
    	}
    },
    showIframe (url,w,h,id) {
	    //添加iframe
	    var if_w = w; 
	    var if_h = h; 
	    //allowTransparency='true' 设置背景透明

	    $("<iframe width='" + if_w + "' height='" + if_h + "' id='YuFrame"+id+"' name='YuFrame"+id+"' style='position:absolute;z-index:4;'  frameborder='no' marginheight='0' marginwidth='0' allowTransparency='true'></iframe>").prependTo('body');    
		
	    var st=document.documentElement.scrollTop|| document.body.scrollTop;//滚动条距顶部的距离
	    var sl=document.documentElement.scrollLeft|| document.body.scrollLeft;//滚动条距左边的距离
	    var ch=document.documentElement.clientHeight;//屏幕的高度
	    var cw=document.documentElement.clientWidth;//屏幕的宽度
	    var objH=$("#YuFrame"+id).height();//浮动对象的高度
	    var objW=$("#YuFrame"+id).width();//浮动对象的宽度
	    var objT=Number(st)+(Number(ch)-Number(objH))/2;
	    var objL=Number(sl)+(Number(cw)-Number(objW))/2;
	    $("#YuFrame"+id).css('left',objL);
	    $("#YuFrame"+id).css('top',objT);
	 
	    $("#YuFrame"+id).attr("src", url)
	 
	    //添加背景遮罩
	    $("<div id='YuFrame1Bg' style='background-color: Gray;display:block;z-index:3;position:fixed;left:0px;top:0px;right:0;bottom:0;opacity: 0.4; '/>").prependTo('body'); 
	    var bgWidth = Math.max($("body").width(),cw);
	    var bgHeight = Math.max($("body").height(),ch);
	    $("#YuFrame1Bg").css({width:bgWidth,height:bgHeight});
	 
	    //点击背景遮罩移除iframe和背景
	    $("#YuFrame1Bg").click(function() {
	        $("#YuFrame1Bg").remove();
	        $("#YuFrame"+id).remove();
	    });
	}
};
(this.webpackJsonpISOBlueApp=this.webpackJsonpISOBlueApp||[]).push([[0],{172:function(e,t){},331:function(e,t,n){e.exports=n(608)},374:function(e,t){},414:function(e,t){},416:function(e,t){},421:function(e,t){},423:function(e,t){},452:function(e,t){},453:function(e,t){},535:function(e,t){},608:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"initialize",(function(){return Qn})),n.d(r,"connect",(function(){return Rn})),n.d(r,"handleNewDevice",(function(){return Xn})),n.d(r,"handleDeviceLocationUpdate",(function(){return Zn})),n.d(r,"handleDayUpdate",(function(){return $n})),n.d(r,"toggleDrawer",(function(){return Yn})),n.d(r,"selectDevice",(function(){return er})),n.d(r,"unselectDevice",(function(){return tr})),n.d(r,"selectDay",(function(){return nr})),n.d(r,"selectHour",(function(){return rr})),n.d(r,"toggleDeviceSync",(function(){return cr}));var c=n(0),a=n.n(c),o=n(19),i=n.n(o),u=n(51),s=n(3),l=n(52),b=n(34),f=n(67),v=n(68),O=n(71),j=n(2),d=n(9),p=n(653),m=n(655),h=n(641),y=n(645),g=n(145),_=n(320),k=n.n(_);function E(){var e=Object(s.a)(["connection.connection_id"]);return E=function(){return e},e}function D(){var e=Object(s.a)(["toggleDrawer"]);return D=function(){return e},e}var w=function(e){function t(){return Object(l.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement(h.a,null,a.a.createElement(y.a,{color:"inherit","aria-label":"Open Drawer",onClick:function(){return e.props.toggleDrawer()}},a.a.createElement(k.a,{className:t.icon})),a.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.flex},"ISOBlueApp [2.0.1]"),a.a.createElement("div",{className:t.connectopmStatusIndicator},a.a.createElement(g.a,{variant:"h6",color:"inherit"},this.props.connection_id?"Connected":"Not Connected")))}}]),t}(a.a.Component),x=Object(u.connect)({toggleDrawer:Object(j.sequences)(D()),connection_id:Object(j.state)(E())},Object(d.a)((function(e){return{flex:{flex:1},connectopmStatusIndicator:{marginLeft:"auto"}}}))(w)),C=n(654),S=n(647),I=n(646),N=n(648),q=n(612),G=n(649),U=n(650),z=n(656),B=n(651),A=n(652),P=n(659),T=n(321),M=n.n(T);function H(){var e=Object(s.a)(["oada"]);return H=function(){return e},e}function L(){var e=Object(s.a)(["connection"]);return L=function(){return e},e}function J(){var e=Object(s.a)(["toggleDeviceSync"]);return J=function(){return e},e}function W(){var e=Object(s.a)(["unselectDevice"]);return W=function(){return e},e}function V(){var e=Object(s.a)(["selectDay"]);return V=function(){return e},e}function F(){var e=Object(s.a)(["selectHour"]);return F=function(){return e},e}function K(){var e=Object(s.a)(["selectDevice"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["selectedDevice"]);return Q=function(){return e},e}function R(){var e=Object(s.a)(["devices"]);return R=function(){return e},e}function X(){var e=Object(s.a)(["toggleDrawer"]);return X=function(){return e},e}function Z(){var e=Object(s.a)(["components.drawer"]);return Z=function(){return e},e}var $=function(e){function t(){return Object(l.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=a.a.createElement("div",null),r=this.props.selectedDevice;if(r.device&&r.day&&r.hour){var c=Object.keys(this.props.oada[this.props.connection.connection_id].bookmarks.isoblue["device-index"][r.device].location["day-index"]||{}),o=Object.keys(this.props.oada[this.props.connection.connection_id].bookmarks.isoblue["device-index"][r.device].location["day-index"][r.day]["hour-index"]||{}),i=a.a.createElement(C.a,{value:r.day,renderValue:function(e){return"".concat(e)},onChange:function(t){return e.props.selectDay({day:t.target.value})}},c.map((function(e){return a.a.createElement(S.a,{key:e,value:e},e)})),";"),u=(new Date).getTimezoneOffset(),s=function(e){var t=e.split(":"),n=(t[1]?60*parseInt(t[0])+parseInt(t[1]):60*parseInt(e))-u,r="";n<0?(n+=1440,r=" (-1 day)"):n>1440&&(n-=1440,r=" (+1 day)");var c=n%60;return Math.floor(n/60).toString().padStart(2,"0")+":"+c.toString().padStart(2,"0")+r},l=a.a.createElement(C.a,{value:r.hour,renderValue:function(e){return"".concat(s(e))},onChange:function(t){return e.props.selectHour({hour:t.target.value})}},o.map((function(e){return a.a.createElement(S.a,{key:e,value:e},s(e))})));n=a.a.createElement(I.a,null,a.a.createElement(N.a,null),a.a.createElement(q.a,null,a.a.createElement(G.a,{align:"center",primary:"Device: ".concat(r.device)})),a.a.createElement(q.a,null,a.a.createElement(G.a,{align:"center"},i)),a.a.createElement(q.a,null,a.a.createElement(G.a,{align:"center"},l)),a.a.createElement(q.a,null,a.a.createElement(G.a,{align:"center"},a.a.createElement(U.a,{variant:"contained",onClick:function(){return e.props.unselectDevice({})}},"Unselect Device"))))}return a.a.createElement(z.a,{open:this.props.drawer,onClose:function(){return e.props.toggleDrawer()},classes:{paper:t.drawerPaper}},a.a.createElement("div",{className:t.toolbar}),a.a.createElement(I.a,null,a.a.createElement(q.a,null,a.a.createElement(G.a,{align:"center",primary:"Available Devices"})),a.a.createElement(I.a,{className:t.list,component:"nav"},Object.keys(this.props.devices||{}).map((function(t){return a.a.createElement(q.a,{button:!0,key:"-".concat(t),onClick:function(){return e.props.selectDevice({device:t})}},a.a.createElement(B.a,null,a.a.createElement(M.a,null)),a.a.createElement(G.a,{primary:t}),a.a.createElement(A.a,null,a.a.createElement(P.a,{edge:"end",onChange:function(){return e.props.toggleDeviceSync({device:t})},checked:e.props.devices[t].sync,inputProps:{"aria-labelledby":"switch-list-label-wifi"}})))}))),n))}}]),t}(a.a.Component),Y=Object(u.connect)({drawer:Object(j.state)(Z()),toggleDrawer:Object(j.sequences)(X()),devices:Object(j.state)(R()),selectedDevice:Object(j.state)(Q()),selectDevice:Object(j.sequences)(K()),selectHour:Object(j.sequences)(F()),selectDay:Object(j.sequences)(V()),unselectDevice:Object(j.sequences)(W()),toggleDeviceSync:Object(j.sequences)(J()),connection:Object(j.state)(L()),oada:Object(j.state)(H())},Object(d.a)((function(e){return{drawerPaper:{position:"relative",width:240,backgroundColor:"#eeeeee"},toolbar:e.mixins.toolbar}}),{withTheme:!0})($)),ee=n(30),te=n.n(ee),ne=(n(345),n(657)),re=n(660),ce=n(658),ae=n(661),oe=n(322),ie=n.n(oe),ue=n(323),se=n.n(ue);function le(){var e=Object(s.a)(["selectDevice"]);return le=function(){return e},e}function be(){var e=Object(s.a)(["selectedDevice"]);return be=function(){return e},e}function fe(){var e=Object(s.a)(["oada"]);return fe=function(){return e},e}function ve(){var e=Object(s.a)(["connection"]);return ve=function(){return e},e}function Oe(){var e=Object(s.a)(["devices"]);return Oe=function(){return e},e}function je(){var e=Object(s.a)(["mapCenter"]);return je=function(){return e},e}var de=te.a.icon({iconUrl:ie.a,shadowUrl:se.a});te.a.Marker.prototype.options.icon=de;var pe=function(e){function t(){return Object(l.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=[];Object.keys(this.props.devices||{}).forEach((function(t){e.props.devices[t].sync&&e.props.devices[t].location.lat&&e.props.devices[t].location.lng&&n.push(a.a.createElement(ne.a,{ref:function(t){e.device=t},key:t,center:[e.props.devices[t].location.lat,e.props.devices[t].location.lng],color:"#ffffff",fillColor:"#008000",fillOpacity:1,radius:12,zIndexOffset:1,onClick:function(n){return e.props.selectDevice({device:t})}},a.a.createElement(re.a,{direction:"top",offset:[0,-10],permanent:!0},a.a.createElement("b",null,t))))}));var r=this.props.selectedDevice,c=[];if(r.device&&r.day&&r.hour)try{var o=this.props.oada[this.props.connection.connection_id].bookmarks.isoblue["device-index"][r.device].location["day-index"][r.day]["hour-index"][r.hour].data||{};Object.keys(o).forEach((function(e){isNaN(o[e].location.lat)||isNaN(o[e].location.lng)||c.push(a.a.createElement(ne.a,{key:e,center:[o[e].location.lat,o[e].location.lng],radius:1,color:"#ffffff"}))}))}catch(i){console.log("failed to get location points.")}return a.a.createElement("div",{className:t.map},a.a.createElement(ce.a,{center:[this.props.mapCenter.lat,this.props.mapCenter.lng],zoom:15,maxZoom:18,preferCanvas:!0,style:{height:"100%",width:"100%",position:"relative"}},a.a.createElement(ae.a,{attribution:"Tiles \xa9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}),a.a.createElement("div",null,c),n))}}]),t}(a.a.Component),me=Object(u.connect)({mapCenter:Object(j.state)(je()),devices:Object(j.state)(Oe()),connection:Object(j.state)(ve()),oada:Object(j.state)(fe()),selectedDevice:Object(j.state)(be()),selectDevice:Object(j.sequences)(le())},Object(d.a)((function(e){return{map:{position:"relative",display:"flex",width:"100%",height:"calc(100% - 56px)"}}}),{withTheme:!0})(pe));function he(){var e=Object(s.a)(["modalOverlay"]);return he=function(){return e},e}var ye=function(e){function t(){return Object(l.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement("div",{className:e.root},a.a.createElement(p.a,{position:"absolute",className:e.appBar},a.a.createElement(x,null)),a.a.createElement(Y,null),a.a.createElement("main",{className:e.content},a.a.createElement("div",{className:e.toolbar}),a.a.createElement(me,null)),a.a.createElement(m.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.props.modalOverlay},a.a.createElement("div",null)))}}]),t}(a.a.Component),ge=Object(u.connect)({modalOverlay:Object(j.state)(he())},Object(d.a)((function(e){return{root:{flexGrow:1,height:"100vh",zIndex:1,overflow:"hidden",position:"relative",display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},content:{flexGrow:1},toolbar:e.mixins.toolbar}}),{withTheme:!0})(ye)),_e=n(10),ke=n(141),Ee=n.n(ke),De=n(32),we=n.n(De),xe={bookmarks:{_type:"application/vnd.oada.bookmarks.1+json",_rev:0,isoblue:{_type:"application/vnd.oada.isoblue.1+json",_rev:0,"device-index":{"*":{_type:"application/vnd.oada.isoblue.device.1+json",_rev:0,"*":{_type:"application/vnd.oada.isoblue.dataset.1+json",_rev:0,"day-index":{"*":{_type:"application/vnd.oada.isoblue.day.1+json",_rev:0,"hour-index":{"*":{_type:"application/vnd.oada.isoblue.hour.1+json"}}}}}}}}}},Ce={bookmarks:{_type:"applications/vnd.oada.bookmarks.1+json",_rev:0,isoblue:{_type:"applications/vnd.oada.isoblue.1+json",_rev:0,"device-index":{"*":{_type:"applications/vnd.oada.isoblue.device.1+json",_rev:0,"*":{_type:"application/vnd.oada.isoblue.dataset.1+json",_rev:0,"day-index":{"*":{_type:"applications/vnd.oada.isoblue.day.1+json",_rev:0}}}}}}}},Se={bookmarks:{_type:"applications/vnd.oada.bookmarks.1+json",_rev:0,isoblue:{_type:"applications/vnd.oada.isoblue.1+json",_rev:0,"device-index":{"*":{_type:"applications/vnd.oada.isoblue.device.1+json",_rev:0,"*":{_type:"application/vnd.oada.isoblue.dataset.1+json",_rev:0}}}}}},Ie={bookmarks:{_type:"applications/vnd.oada.bookmarks.1+json",_rev:0,isoblue:{_type:"applications/vnd.oada.isoblue.1+json",_rev:0,"device-index":{}}}};function Ne(){var e=Object(s.a)(["devices"]);return Ne=function(){return e},e}function qe(){var e=Object(s.a)(["oada.",".bookmarks.isoblue.device-index"]);return qe=function(){return e},e}function Ge(){var e=Object(s.a)(["connection.connection_id"]);return Ge=function(){return e},e}function Ue(){var e=Object(s.a)(["oada.",".bookmarks.isoblue.device-index.",".location.day-index.",".hour-index.",".data"]);return Ue=function(){return e},e}function ze(){var e=Object(s.a)(["hour"]);return ze=function(){return e},e}function Be(){var e=Object(s.a)(["day"]);return Be=function(){return e},e}function Ae(){var e=Object(s.a)(["connection.connection_id"]);return Ae=function(){return e},e}function Pe(){var e=Object(s.a)(["device"]);return Pe=function(){return e},e}function Te(){var e=Object(s.a)(["oada.",".bookmarks.isoblue.device-index.",".location.day-index.",".hour-index"]);return Te=function(){return e},e}function Me(){var e=Object(s.a)(["day"]);return Me=function(){return e},e}function He(){var e=Object(s.a)(["connection.connection_id"]);return He=function(){return e},e}function Le(){var e=Object(s.a)(["device"]);return Le=function(){return e},e}function Je(){var e=Object(s.a)(["oada.",".bookmarks.isoblue.device-index.",".location.day-index"]);return Je=function(){return e},e}function We(){var e=Object(s.a)(["connection.connection_id"]);return We=function(){return e},e}function Ve(){var e=Object(s.a)(["device"]);return Ve=function(){return e},e}function Fe(){var e=Object(s.a)(["hour"]);return Fe=function(){return e},e}function Ke(){var e=Object(s.a)(["day"]);return Ke=function(){return e},e}function Qe(){var e=Object(s.a)(["device"]);return Qe=function(){return e},e}function Re(){var e=Object(s.a)(["day"]);return Re=function(){return e},e}function Xe(){var e=Object(s.a)(["device"]);return Xe=function(){return e},e}function Ze(){var e=Object(s.a)(["device"]);return Ze=function(){return e},e}var $e=function(e){var t=(0,e.get)(Object(j.props)(Ze()));return{requests:[{path:"/bookmarks/isoblue/device-index/".concat(t,"/location"),tree:Se,watch:{signals:["handleDayUpdate"],payload:{device:t}}}]}},Ye=function(e){var t=e.get,n=t(Object(j.props)(Xe())),r=t(Object(j.props)(Re()));return{requests:[{path:"/bookmarks/isoblue/device-index/".concat(n,"/location/day-index/").concat(r),tree:Ce}]}},et=function(e){var t=e.get,n=t(Object(j.props)(Qe())),r=t(Object(j.props)(Ke())),c=t(Object(j.props)(Fe()));return{requests:[{path:"/bookmarks/isoblue/device-index/".concat(n,"/location/day-index/").concat(r,"/hour-index/").concat(c),tree:xe,watch:{signals:["handleDeviceLocationUpdate"],payload:{device:n}}}]}},tt=function(e){var t=e.get,n=t(Object(j.props)(Ve())),r=t(Object(j.state)(We()));if(!n||!r)throw new Error("Missing parameters");var c=t(Object(j.state)(Je(),r,n)),a=Object.keys(c);return 0===a.length?{}:{day:we.a.maxBy(a,(function(e){return new Date(e)}))}},nt=function(e){var t=e.get,n=t(Object(j.props)(Le())),r=t(Object(j.state)(He())),c=t(Object(j.props)(Me()));if(!n||!r||!c)throw new Error("Missing parameters");var a=t(Object(j.state)(Te(),r,n,c));return 0===Object.keys(a).length?{}:{hour:we.a.maxBy(Object.keys(a||{}),(function(e){return e.toString()}))}},rt=function(e){var t=e.get,n=t(Object(j.props)(Pe())),r=t(Object(j.state)(Ae())),c=t(Object(j.props)(Be())),a=t(Object(j.props)(ze()));if(!n||!r||!c||!a)throw new Error("Missing parameters");var o=t(Object(j.state)(Ue(),r,n,c,a));return{latest_data_point:Object.values(o||{}).reduce((function(e,t){return t.time.value?e.time.value>t.time.value?e:{time:t.time.value,lat:t.location.lat,lng:t.location.lng}:e}),{time:0,lat:0,lng:0})}},ct=function(e){var t=e.get,n=t(Object(j.state)(Ge())),r=t(Object(j.state)(qe(),n))||{};if(!n)throw new Error("Missing parameters");var c=t(Object(j.state)(Ne()));for(var a in r)a in c||(c[a]={sync:!1,watchPath:null,location:{lat:null,lng:null}});return{devices:c}};function at(){var e=Object(s.a)(["modalOverlay"]);return at=function(){return e},e}function ot(){var e=Object(s.a)(["device"]);return ot=function(){return e},e}function it(){var e=Object(s.a)(["devices.",".sync"]);return it=function(){return e},e}function ut(){var e=Object(s.a)(["latest_data_point.lng"]);return ut=function(){return e},e}function st(){var e=Object(s.a)(["mapCenter.lng"]);return st=function(){return e},e}function lt(){var e=Object(s.a)(["latest_data_point.lat"]);return lt=function(){return e},e}function bt(){var e=Object(s.a)(["mapCenter.lat"]);return bt=function(){return e},e}function ft(){var e=Object(s.a)(["latest_data_point.lat"]);return ft=function(){return e},e}function vt(){var e=Object(s.a)(["device"]);return vt=function(){return e},e}function Ot(){var e=Object(s.a)(["devices.",".location.lat"]);return Ot=function(){return e},e}function jt(){var e=Object(s.a)(["latest_data_point.lng"]);return jt=function(){return e},e}function dt(){var e=Object(s.a)(["device"]);return dt=function(){return e},e}function pt(){var e=Object(s.a)(["devices.",".location.lng"]);return pt=function(){return e},e}function mt(){var e=Object(s.a)(["connection.connection_id"]);return mt=function(){return e},e}function ht(){var e=Object(s.a)(["connection_id"]);return ht=function(){return e},e}function yt(){var e=Object(s.a)(["device"]);return yt=function(){return e},e}function gt(){var e=Object(s.a)(["devices.",".sync"]);return gt=function(){return e},e}function _t(){var e=Object(s.a)(["device"]);return _t=function(){return e},e}function kt(){var e=Object(s.a)(["devices.",".sync"]);return kt=function(){return e},e}function Et(){var e=Object(s.a)(["modalOverlay"]);return Et=function(){return e},e}function Dt(){var e=Object(s.a)(["modalOverlay"]);return Dt=function(){return e},e}function wt(){var e=Object(s.a)(["latest_data_point.lng"]);return wt=function(){return e},e}function xt(){var e=Object(s.a)(["mapCenter.lng"]);return xt=function(){return e},e}function Ct(){var e=Object(s.a)(["latest_data_point.lat"]);return Ct=function(){return e},e}function St(){var e=Object(s.a)(["mapCenter.lat"]);return St=function(){return e},e}function It(){var e=Object(s.a)(["hour"]);return It=function(){return e},e}function Nt(){var e=Object(s.a)(["selectedDevice.hour"]);return Nt=function(){return e},e}function qt(){var e=Object(s.a)(["selectedDevice.day"]);return qt=function(){return e},e}function Gt(){var e=Object(s.a)(["day"]);return Gt=function(){return e},e}function Ut(){var e=Object(s.a)(["selectedDevice.device"]);return Ut=function(){return e},e}function zt(){var e=Object(s.a)(["device"]);return zt=function(){return e},e}function Bt(){var e=Object(s.a)(["connection.connection_id"]);return Bt=function(){return e},e}function At(){var e=Object(s.a)(["connection_id"]);return At=function(){return e},e}function Pt(){var e=Object(s.a)(["modalOverlay"]);return Pt=function(){return e},e}function Tt(){var e=Object(s.a)(["modalOverlay"]);return Tt=function(){return e},e}function Mt(){var e=Object(s.a)(["latest_data_point.lng"]);return Mt=function(){return e},e}function Ht(){var e=Object(s.a)(["mapCenter.lng"]);return Ht=function(){return e},e}function Lt(){var e=Object(s.a)(["latest_data_point.lat"]);return Lt=function(){return e},e}function Jt(){var e=Object(s.a)(["mapCenter.lat"]);return Jt=function(){return e},e}function Wt(){var e=Object(s.a)(["day"]);return Wt=function(){return e},e}function Vt(){var e=Object(s.a)(["selectedDevice.day"]);return Vt=function(){return e},e}function Ft(){var e=Object(s.a)(["selectedDevice.device"]);return Ft=function(){return e},e}function Kt(){var e=Object(s.a)(["device"]);return Kt=function(){return e},e}function Qt(){var e=Object(s.a)(["connection.connection_id"]);return Qt=function(){return e},e}function Rt(){var e=Object(s.a)(["connection_id"]);return Rt=function(){return e},e}function Xt(){var e=Object(s.a)(["modalOverlay"]);return Xt=function(){return e},e}function Zt(){var e=Object(s.a)(["selectedDevice.hour"]);return Zt=function(){return e},e}function $t(){var e=Object(s.a)(["selectedDevice.day"]);return $t=function(){return e},e}function Yt(){var e=Object(s.a)(["selectedDevice.device"]);return Yt=function(){return e},e}function en(){var e=Object(s.a)(["modalOverlay"]);return en=function(){return e},e}function tn(){var e=Object(s.a)(["hour"]);return tn=function(){return e},e}function nn(){var e=Object(s.a)(["selectedDevice.hour"]);return nn=function(){return e},e}function rn(){var e=Object(s.a)(["day"]);return rn=function(){return e},e}function cn(){var e=Object(s.a)(["selectedDevice.day"]);return cn=function(){return e},e}function an(){var e=Object(s.a)(["device"]);return an=function(){return e},e}function on(){var e=Object(s.a)(["selectedDevice.device"]);return on=function(){return e},e}function un(){var e=Object(s.a)(["latest_data_point.lng"]);return un=function(){return e},e}function sn(){var e=Object(s.a)(["mapCenter.lng"]);return sn=function(){return e},e}function ln(){var e=Object(s.a)(["latest_data_point.lat"]);return ln=function(){return e},e}function bn(){var e=Object(s.a)(["mapCenter.lat"]);return bn=function(){return e},e}function fn(){var e=Object(s.a)(["device"]);return fn=function(){return e},e}function vn(){var e=Object(s.a)(["devices.",".sync"]);return vn=function(){return e},e}function On(){var e=Object(s.a)(["latest_data_point.lat"]);return On=function(){return e},e}function jn(){var e=Object(s.a)(["device"]);return jn=function(){return e},e}function dn(){var e=Object(s.a)(["devices.",".location.lat"]);return dn=function(){return e},e}function pn(){var e=Object(s.a)(["latest_data_point.lng"]);return pn=function(){return e},e}function mn(){var e=Object(s.a)(["device"]);return mn=function(){return e},e}function hn(){var e=Object(s.a)(["devices.",".location.lng"]);return hn=function(){return e},e}function yn(){var e=Object(s.a)(["device"]);return yn=function(){return e},e}function gn(){var e=Object(s.a)(["devices.",".sync"]);return gn=function(){return e},e}function _n(){var e=Object(s.a)(["connection.connection_id"]);return _n=function(){return e},e}function kn(){var e=Object(s.a)(["connection_id"]);return kn=function(){return e},e}function En(){var e=Object(s.a)(["modalOverlay"]);return En=function(){return e},e}function Dn(){var e=Object(s.a)(["components.drawer"]);return Dn=function(){return e},e}function wn(){var e=Object(s.a)(["latest_data_point.lat"]);return wn=function(){return e},e}function xn(){var e=Object(s.a)(["device"]);return xn=function(){return e},e}function Cn(){var e=Object(s.a)(["devices.",".location.lat"]);return Cn=function(){return e},e}function Sn(){var e=Object(s.a)(["latest_data_point.lng"]);return Sn=function(){return e},e}function In(){var e=Object(s.a)(["device"]);return In=function(){return e},e}function Nn(){var e=Object(s.a)(["devices.",".location.lng"]);return Nn=function(){return e},e}function qn(){var e=Object(s.a)(["connection.connection_id"]);return qn=function(){return e},e}function Gn(){var e=Object(s.a)(["connection_id"]);return Gn=function(){return e},e}function Un(){var e=Object(s.a)(["latest_data_point.lat"]);return Un=function(){return e},e}function zn(){var e=Object(s.a)(["device"]);return zn=function(){return e},e}function Bn(){var e=Object(s.a)(["devices.",".location.lat"]);return Bn=function(){return e},e}function An(){var e=Object(s.a)(["latest_data_point.lng"]);return An=function(){return e},e}function Pn(){var e=Object(s.a)(["device"]);return Pn=function(){return e},e}function Tn(){var e=Object(s.a)(["devices.",".location.lng"]);return Tn=function(){return e},e}function Mn(){var e=Object(s.a)(["devices"]);return Mn=function(){return e},e}function Hn(){var e=Object(s.a)(["devices"]);return Hn=function(){return e},e}function Ln(){var e=Object(s.a)(["modalOverlay"]);return Ln=function(){return e},e}function Jn(){var e=Object(s.a)(["devices"]);return Jn=function(){return e},e}function Wn(){var e=Object(s.a)(["devices"]);return Wn=function(){return e},e}function Vn(){var e=Object(s.a)(["connection_id"]);return Vn=function(){return e},e}function Fn(){var e=Object(s.a)(["connection.connection_id"]);return Fn=function(){return e},e}var Kn=Ee.a.sequences,Qn=function(){},Rn=[function(){return{domain:"https://oats2.ecn.purdue.edu",token:"pIhEHwLtQiyuEpT1xKLtPzTasTJl58kGFNqBGlpd",cache:!1}},Kn.connect,Object(_e.set)(Object(j.state)(Fn()),Object(j.props)(Vn())),function(e){e.get;return{requests:[{path:"/bookmarks/isoblue",tree:Ie,watch:{signals:["handleNewDevice"]}}]}},Kn.get,ct,Object(_e.set)(Object(j.state)(Wn()),Object(j.props)(Jn())),Object(_e.set)(Object(j.state)(Ln()),!1)],Xn=[ct,Object(_e.set)(Object(j.state)(Hn()),Object(j.props)(Mn()))],Zn=[tt,nt,rt,Object(_e.set)(Object(j.state)(Tn(),Object(j.props)(Pn())),Object(j.props)(An())),Object(_e.set)(Object(j.state)(Bn(),Object(j.props)(zn())),Object(j.props)(Un()))],$n=[Object(_e.set)(Object(j.props)(Gn()),Object(j.state)(qn())),tt,Ye,Kn.get,nt,et,Kn.get,rt,Object(_e.set)(Object(j.state)(Nn(),Object(j.props)(In())),Object(j.props)(Sn())),Object(_e.set)(Object(j.state)(Cn(),Object(j.props)(xn())),Object(j.props)(wn()))],Yn=Object(_e.toggle)(Object(j.state)(Dn())),er=[Object(_e.set)(Object(j.state)(En()),!0),Object(_e.set)(Object(j.props)(kn()),Object(j.state)(_n())),Object(_e.when)(Object(j.state)(gn(),Object(j.props)(yn()))),{true:[tt,nt,rt],false:[$e,Kn.get,tt,Ye,Kn.get,nt,et,Kn.get,rt]},Object(_e.set)(Object(j.state)(hn(),Object(j.props)(mn())),Object(j.props)(pn())),Object(_e.set)(Object(j.state)(dn(),Object(j.props)(jn())),Object(j.props)(On())),Object(_e.set)(Object(j.state)(vn(),Object(j.props)(fn())),!0),Object(_e.set)(Object(j.state)(bn()),Object(j.props)(ln())),Object(_e.set)(Object(j.state)(sn()),Object(j.props)(un())),Object(_e.set)(Object(j.state)(on()),Object(j.props)(an())),Object(_e.set)(Object(j.state)(cn()),Object(j.props)(rn())),Object(_e.set)(Object(j.state)(nn()),Object(j.props)(tn())),Object(_e.set)(Object(j.state)(en()),!1)],tr=[Object(_e.set)(Object(j.state)(Yt()),null),Object(_e.set)(Object(j.state)($t()),null),Object(_e.set)(Object(j.state)(Zt()),null)],nr=[Object(_e.set)(Object(j.state)(Xt()),!0),Object(_e.set)(Object(j.props)(Rt()),Object(j.state)(Qt())),Object(_e.set)(Object(j.props)(Kt()),Object(j.state)(Ft())),Object(_e.set)(Object(j.state)(Vt()),Object(j.props)(Wt())),Ye,Kn.get,nt,et,Kn.get,rt,Object(_e.set)(Object(j.state)(Jt()),Object(j.props)(Lt())),Object(_e.set)(Object(j.state)(Ht()),Object(j.props)(Mt())),Object(_e.set)(Object(j.state)(Tt()),!1)],rr=[Object(_e.set)(Object(j.state)(Pt()),!0),Object(_e.set)(Object(j.props)(At()),Object(j.state)(Bt())),Object(_e.set)(Object(j.props)(zt()),Object(j.state)(Ut())),Object(_e.set)(Object(j.props)(Gt()),Object(j.state)(qt())),Object(_e.set)(Object(j.state)(Nt()),Object(j.props)(It())),et,Kn.get,rt,Object(_e.set)(Object(j.state)(St()),Object(j.props)(Ct())),Object(_e.set)(Object(j.state)(xt()),Object(j.props)(wt())),Object(_e.set)(Object(j.state)(Dt()),!1)],cr=[Object(_e.set)(Object(j.state)(Et()),!0),Object(_e.when)(Object(j.state)(kt(),Object(j.props)(_t()))),{true:[Object(_e.set)(Object(j.state)(gt(),Object(j.props)(yt())),!1)],false:[Object(_e.set)(Object(j.props)(ht()),Object(j.state)(mt())),$e,Kn.get,tt,Ye,Kn.get,nt,et,Kn.get,rt,Object(_e.set)(Object(j.state)(pt(),Object(j.props)(dt())),Object(j.props)(jt())),Object(_e.set)(Object(j.state)(Ot(),Object(j.props)(vt())),Object(j.props)(ft())),Object(_e.set)(Object(j.state)(bt()),Object(j.props)(lt())),Object(_e.set)(Object(j.state)(st()),Object(j.props)(ut())),Object(_e.set)(Object(j.state)(it(),Object(j.props)(ot())),!0)]},Object(_e.set)(Object(j.state)(at()),!1)],ar={mapCenter:{lat:40.428641,lng:-86.913783},connection:{},devices:{},components:{drawer:!1},selectedDevice:{device:null,day:null,hour:null},modalOverlay:!0},or=(n(610),Object(j.default)((function(e){var t=e.app;return t.on("initialized",(function(){t.getSequence("connect")()})),{modules:{oada:Ee.a},state:ar,sequences:r}}),{devtools:null}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(u.Container,{app:or},a.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[331,1,2]]]);
//# sourceMappingURL=main.dcbd5cbe.chunk.js.map
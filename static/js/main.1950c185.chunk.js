(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1008:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"toggleDrawerOpen",function(){return Xt});var r={};n.r(r),n.d(r,"storeUserLocation",function(){return Pt}),n.d(r,"centerOnUser",function(){return Ht}),n.d(r,"centerOnUnit",function(){return At});var c={};n.r(c),n.d(c,"updateSnapshot",function(){return Kt}),n.d(c,"createSnapshots",function(){return $t});var i={};n.r(i),n.d(i,"handleDeviceUpdate",function(){return dn}),n.d(i,"init",function(){return pn}),n.d(i,"getHour",function(){return bn});var o={};n.r(o),n.d(o,"setDate",function(){return Sn}),n.d(o,"setHour",function(){return Mn}),n.d(o,"setMeasurement",function(){return Nn}),n.d(o,"selectUnit",function(){return Cn}),n.d(o,"unselectUnit",function(){return Dn}),n.d(o,"toggleMode",function(){return Ln});var s={};n.r(s),n.d(s,"init",function(){return Zn});var u=n(1),l=n.n(u),d=n(53),p=n(37),b=n(5),f=n(41),m=n(42),h=n(44),O=n(43),j=n(45),v=n(33),g=n(4),y=n(449),E=n.n(y),k=n(251),x=n(252),w=n.n(x),U=n(248),I=n.n(U),S=n(428),M=n.n(S),N=n(427),C=n.n(N),D=n(429),L=n.n(D);function R(){var e=Object(b.a)(["session.toggleDrawerOpen"]);return R=function(){return e},e}function W(){var e=Object(b.a)(["map.centerOnUser"]);return W=function(){return e},e}function G(){var e=Object(b.a)(["map.userLocationAvailable"]);return G=function(){return e},e}var _=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props.classes;return e=this.props.userLocationAvailable?l.a.createElement(w.a,{onClick:function(){return t.props.centerOnUser({})}},l.a.createElement(C.a,{className:n.icon})):null,l.a.createElement(M.a,null,l.a.createElement(w.a,{color:"inherit","aria-label":"Open Drawer",onClick:this.props.toggleDrawerOpen},l.a.createElement(L.a,{className:n.icon})),l.a.createElement(I.a,{variant:"title",color:"inherit",className:n.flex},"ISOBlueApp [1.0.0]"),e)}}]),t}(l.a.Component),X=Object(v.connect)({userLocationAvailable:Object(g.state)(G()),centerOnUser:Object(g.signal)(W()),toggleDrawerOpen:Object(g.signal)(R())},Object(p.withStyles)(function(e){var t;return{flex:{flex:1},icon:(t={color:"#FFFFFF"},Object(k.a)(t,e.breakpoints.up("xs"),{width:5*e.spacing.unit,height:5*e.spacing.unit,marginRight:e.spacing.unit}),Object(k.a)(t,e.breakpoints.down("xs"),{width:4*e.spacing.unit,height:4*e.spacing.unit,marginRight:e.spacing.unit}),t)}})(_)),J=n(1013),T=n(1017),V=n(1019),Z=(n(547),n(22)),F=n.n(Z),Y=n(178),P=n.n(Y),H=n(1011);function A(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return A=function(){return e},e}function z(){var e=Object(b.a)(["diagnostics.hour"]);return z=function(){return e},e}function B(){var e=Object(b.a)(["diagnostics.date"]);return B=function(){return e},e}function q(){var e=Object(b.a)(["oada"]);return q=function(){return e},e}function Q(){var e=Object(b.a)(["data.ready"]);return Q=function(){return e},e}function K(){var e=Object(b.a)(["data.connection_id"]);return K=function(){return e},e}var $=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.connection_id;if(!this.props.ready)return null;var t=[],n=this.props.oada[e].bookmarks.isoblue["device-index"]||{};if(this.props.selectedUnit&&this.props.date&&this.props.hour){if(!n.hasOwnProperty(this.props.selectedUnit))return null;if(!n[this.props.selectedUnit].hasOwnProperty("day-index"))return null;if(!n[this.props.selectedUnit]["day-index"].hasOwnProperty(this.props.date))return null;if(!n[this.props.selectedUnit]["day-index"][this.props.date].hasOwnProperty("hour-index"))return null;if(!n[this.props.selectedUnit]["day-index"][this.props.date]["hour-index"].hasOwnProperty(this.props.hour))return null;if(!n[this.props.selectedUnit]["day-index"][this.props.date]["hour-index"][this.props.hour].hasOwnProperty("gps"))return null;var a=n[this.props.selectedUnit]["day-index"][this.props.date]["hour-index"][this.props.hour].gps,r=[];F.a.forEach(a,function(e){e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&e.lat&&e.lng&&r.push([e.lat,e.lng])}),t.push(r)}else F.a.forEach(n,function(e,n){if(e.hasOwnProperty("day-index")){var a=Object.keys(e["day-index"]);if(0!=a.length){var r=F.a.maxBy(a,function(e){return new Date(e)});if(e["day-index"][r].hasOwnProperty("hour-index")){var c=Object.keys(e["day-index"][r]["hour-index"]),i=F.a.max(c),o=F.a.max(F.a.remove(c,function(e){return e!==i})),s=Math.round((new Date).getTime()/1e3),u=[];if(e["day-index"][r]["hour-index"][i].hasOwnProperty("gps")){var l=e["day-index"][r]["hour-index"][i].gps;Object.keys(l||{}).forEach(function(e){s-e<=900&&l[e].hasOwnProperty("lat")&&l[e].hasOwnProperty("lng")&&l[e].lat&&l[e].lng&&u.push([l[e].lat,l[e].lng])})}if(void 0!=o&&e["day-index"][r]["hour-index"][o].hasOwnProperty("gps")){var d=e["day-index"][r]["hour-index"][o].gps;Object.keys(d||{}).forEach(function(e){s-e<=900&&d[e].hasOwnProperty("lat")&&d[e].hasOwnProperty("lng")&&d[e].lat&&d[e].lng&&u.push([d[e].lat,d[e].lng])})}t.push(u)}}}});return l.a.createElement("div",null,t.map(function(e){return l.a.createElement(H.a,{key:P.a.v4(),positions:e,color:"#ffffff"})}))}}]),t}(l.a.Component),ee=Object(v.connect)({connection_id:Object(g.state)(K()),ready:Object(g.state)(Q()),oada:Object(g.state)(q()),date:Object(g.state)(B()),hour:Object(g.state)(z()),selectedUnit:Object(g.state)(A())},Object(p.withStyles)(function(e){return{}},{withTheme:!0})($)),te=n(1012),ne=n(1018);function ae(){var e=Object(b.a)(["diagnostics.selectUnit"]);return ae=function(){return e},e}function re(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return re=function(){return e},e}function ce(){var e=Object(b.a)(["diagnostics.hour"]);return ce=function(){return e},e}function ie(){var e=Object(b.a)(["diagnostics.date"]);return ie=function(){return e},e}function oe(){var e=Object(b.a)(["snapshots"]);return oe=function(){return e},e}var se=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=[];return F.a.forEach(Object.keys(this.props.snapshots)||{},function(n){var a=e.props.snapshots[n].location;a&&a.lat&&a.lng&&t.push(l.a.createElement(te.a,{ref:function(t){e.unit=t},key:n,center:[e.props.snapshots[n].location.lat,e.props.snapshots[n].location.lng],color:"#ffffff",fillColor:function(){switch(e.props.snapshots[n].health){case"Healthy":return"#008000";case"Sick":return"#ffbf00";case"Down":default:return"#707070"}}(),fillOpacity:1,radius:12,zIndexOffset:1,onClick:function(t){return e.props.selectUnit({unit:n})}},l.a.createElement(ne.a,{direction:"top",offset:[0,-10]},l.a.createElement("b",null,"Unit: ",n),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("b",null,e.props.snapshots[n].health)))))}),l.a.createElement("div",null,t)}}]),t}(l.a.Component),ue=Object(v.connect)({snapshots:Object(g.state)(oe()),date:Object(g.state)(ie()),hour:Object(g.state)(ce()),selectedUnit:Object(g.state)(re()),selectUnit:Object(g.signal)(ae())},Object(p.withStyles)(function(e){return{}},{withTheme:!0})(se));function le(){var e=Object(b.a)(["diagnostics.selectUnit"]);return le=function(){return e},e}function de(){var e=Object(b.a)(["map.storeUserLocation"]);return de=function(){return e},e}function pe(){var e=Object(b.a)(["map.userLocationAvailable"]);return pe=function(){return e},e}function be(){var e=Object(b.a)(["map.userLocation"]);return be=function(){return e},e}function fe(){var e=Object(b.a)(["map.targetCenter"]);return fe=function(){return e},e}var me=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.refs.map.leafletElement.locate()}},{key:"render",value:function(){var e=this,t=this.props.classes,n=[];return this.props.userLocationAvailable&&n.push(l.a.createElement(J.a,{key:"user",position:[this.props.userLocation.lat,this.props.userLocation.lng]},"zIndexOffset=",1)),l.a.createElement("div",{className:t.map},l.a.createElement(T.a,{dragging:!0,center:[this.props.targetCenter.lat,this.props.targetCenter.lng],ref:"map",zoom:18,onlocationfound:function(t){return e.props.storeUserLocation({lat:t.latlng.lat,lng:t.latlng.lng})}},l.a.createElement(V.a,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}),l.a.createElement(ue,null),l.a.createElement(ee,null),n))}}]),t}(l.a.Component),he=Object(v.connect)({targetCenter:Object(g.state)(fe()),userLocation:Object(g.state)(be()),userLocationAvailable:Object(g.state)(pe()),storeUserLocation:Object(g.signal)(de()),selectUnit:Object(g.signal)(le())},Object(p.withStyles)(function(e){return{map:{position:"relative",display:"flex",width:"100%",height:"calc(100% - 56px)"}}},{withTheme:!0})(me)),Oe=n(1016),je=n(452),ve=n(1014),ge=n(442),ye=n(443),Ee=n(192),ke=n(1015);function xe(){var e=Object(b.a)(["data"]);return xe=function(){return e},e}function we(){var e=Object(b.a)(["oada"]);return we=function(){return e},e}function Ue(){var e=Object(b.a)(["diagnostics.measurement"]);return Ue=function(){return e},e}function Ie(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return Ie=function(){return e},e}function Se(){var e=Object(b.a)(["diagnostics.hour"]);return Se=function(){return e},e}function Me(){var e=Object(b.a)(["diagnostics.date"]);return Me=function(){return e},e}function Ne(){var e=Object(b.a)(["data.connection_id"]);return Ne=function(){return e},e}var Ce=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;if(!(this.props.selectedUnit&&this.props.date&&this.props.hour))return null;e=this.props.oada[this.props.connection_id].bookmarks.isoblue["device-index"][this.props.selectedUnit]["day-index"][this.props.date]["hour-index"][this.props.hour];var t,n=[];return"Latency"===this.props.measurement&&e?(F.a.forEach(Object.values(e.heartbeats||{}),function(e){e.latency=e.recTime-e.genTime,e.time=new Date(1e3*e.genTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),n.push(e)}),t=l.a.createElement(Oe.a,{data:n,margin:{top:20,right:30,left:0,bottom:80}},l.a.createElement(je.a,{type:"step",isAnimationActive:!1,dataKey:"latency",stroke:"#8884d8"}),l.a.createElement(ve.a,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(ge.a,{dataKey:"time",label:{value:"Time",position:"insideBottom",dy:20}}),l.a.createElement(ye.a,{dataKey:"latency",label:{value:"Latency (sec)",position:"insideLeft",angle:-90}}),l.a.createElement(Ee.a,null))):"Wifi RSSI"===this.props.measurement&&e?(F.a.forEach(Object.values(e.heartbeats||{}),function(e){F.a.forEach(e.interfaces,function(t){"wifi"===t.type&&(t.time=new Date(1e3*e.genTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),n.push(t))})}),t=l.a.createElement(Oe.a,{data:n,margin:{top:20,right:30,left:0,bottom:80}},l.a.createElement(je.a,{type:"step",isAnimationActive:!1,dataKey:"rssi",stroke:"#8884d8"}),l.a.createElement(ve.a,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(ge.a,{dataKey:"time"}),l.a.createElement(ye.a,{dataKey:"rssi",label:{value:"WiFi RSSI (dB)",position:"insideLeft",angle:-90}}),l.a.createElement(Ee.a,null))):"Cellular RSSI"===this.props.measurement&&e?(F.a.forEach(Object.values(e.heartbeats||{}),function(e){F.a.forEach(e.interfaces,function(t){"cellular"===t.type&&(t.time=new Date(1e3*e.genTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}),n.push(t))})}),t=l.a.createElement(Oe.a,{data:n,margin:{top:20,right:30,left:0,bottom:80}},l.a.createElement(je.a,{type:"step",isAnimationActive:!1,dataKey:"rssi",stroke:"#8884d8"}),l.a.createElement(ve.a,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(ge.a,{dataKey:"time"}),l.a.createElement(ye.a,{dataKey:"rssi",label:{value:"Cellular RSSI (dB)",position:"insideLeft",angle:-90}}),l.a.createElement(Ee.a,null))):t=l.a.createElement(Oe.a,{margin:{top:20,right:30,left:0,bottom:80}}),l.a.createElement(ke.a,{width:"100%",height:"100%"},t)}}]),t}(l.a.Component),De=Object(v.connect)({connection_id:Object(g.state)(Ne()),date:Object(g.state)(Me()),hour:Object(g.state)(Se()),selectedUnit:Object(g.state)(Ie()),measurement:Object(g.state)(Ue()),oada:Object(g.state)(we()),data:Object(g.state)(xe())},Object(p.withStyles)(function(e){return{}},{withTheme:!0})(Ce));function Le(){var e=Object(b.a)(["diagnostics.mode"]);return Le=function(){return e},e}var Re=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"map"===this.props.mode?l.a.createElement(he,null):l.a.createElement(De,null)}}]),t}(l.a.Component),We=Object(v.connect)({mode:Object(g.state)(Le())},Re),Ge=n(448),_e=n.n(Ge),Xe=n(126),Je=n.n(Xe),Te=n(104),Ve=n.n(Te),Ze=n(52),Fe=n.n(Ze),Ye=n(445),Pe=n.n(Ye),He=n(49),Ae=n.n(He),ze=n(446),Be=n.n(ze),qe=n(447),Qe=n.n(qe),Ke=n(256),$e=n.n(Ke);function et(){var e=Object(b.a)(["diagnostics.selectUnit"]);return et=function(){return e},e}function tt(){var e=Object(b.a)(["health"]);return tt=function(){return e},e}var nt=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props.classes;return e=Object.keys(this.props.health).length>0?l.a.createElement(Ve.a,{className:n.list,component:"nav"},Object.keys(this.props.health).map(function(e){return l.a.createElement(Fe.a,{button:!0,key:"-".concat(e),onClick:function(){return t.props.selectUnit({unit:e})}},l.a.createElement(Ae.a,{primary:e}),l.a.createElement(Pe.a,null,function(){switch(t.props.health[e]){case"Healthy":return l.a.createElement(Be.a,{className:n.healthy});case"Sick":return l.a.createElement(Qe.a,{className:n.sick});case"Down":default:return l.a.createElement($e.a,null)}}()))})):l.a.createElement(Ve.a,{className:n.list,component:"nav"}),l.a.createElement(Ve.a,null,l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:"My ISOBlues:"})),e,l.a.createElement(Je.a,null))}}]),t}(l.a.Component),at=Object(v.connect)({health:Object(g.state)(tt()),selectUnit:Object(g.signal)(et())},Object(p.withStyles)(function(e){return{list:{width:"90%",backgroundColor:e.palette.background.paper,overflow:"auto",height:300,margin:1.5*e.spacing.unit},textField:{margin:1.5*e.spacing.unit},healthy:{color:"#008000"},sick:{color:"#ffbf00"},down:{color:"#ff0000"}}})(nt)),rt=n(257),ct=n.n(rt),it=n(189),ot=n.n(it),st=n(190),ut=n.n(st);function lt(){var e=Object(b.a)(["diagnostics.toggleMode"]);return lt=function(){return e},e}function dt(){var e=Object(b.a)(["diagnostics.setMeasurement"]);return dt=function(){return e},e}function pt(){var e=Object(b.a)(["diagnostics.setHour"]);return pt=function(){return e},e}function bt(){var e=Object(b.a)(["diagnostics.setDate"]);return bt=function(){return e},e}function ft(){var e=Object(b.a)(["diagnostics.unselectUnit"]);return ft=function(){return e},e}function mt(){var e=Object(b.a)(["diagnostics.selectUnit"]);return mt=function(){return e},e}function ht(){var e=Object(b.a)(["data.connection_id"]);return ht=function(){return e},e}function Ot(){var e=Object(b.a)(["oada"]);return Ot=function(){return e},e}function jt(){var e=Object(b.a)(["diagnostics.mode"]);return jt=function(){return e},e}function vt(){var e=Object(b.a)(["data"]);return vt=function(){return e},e}function gt(){var e=Object(b.a)(["snapshots"]);return gt=function(){return e},e}function yt(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return yt=function(){return e},e}function Et(){var e=Object(b.a)(["diagnostics.measurement"]);return Et=function(){return e},e}function kt(){var e=Object(b.a)(["diagnostics.hour"]);return kt=function(){return e},e}function xt(){var e=Object(b.a)(["diagnostics.date"]);return xt=function(){return e},e}var wt=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this,n=l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center"},l.a.createElement(ct.a,{onClick:function(){return t.props.toggleMode({})},variant:"contained"},"map"===this.props.mode?"Show Statistics":"Show Map")));e="map"===this.props.mode?["GPS"]:["Latency","Wifi RSSI","Cellular RSSI"];var a=l.a.createElement(ot.a,{value:this.props.measurement,renderValue:function(e){return"".concat(e)},onChange:function(e){return t.props.setMeasurement({measurement:e.target.value})}},e.map(function(e){return l.a.createElement(ut.a,{key:e,value:e},e)})),r=l.a.createElement(ot.a,{value:this.props.date,renderValue:function(e){return"".concat(e)},onChange:function(e){return t.props.setDate({date:e.target.value})}},Object.keys(this.props.oada[this.props.connection_id].bookmarks.isoblue["device-index"][this.props.selectedUnit]["day-index"]).map(function(e){return l.a.createElement(ut.a,{key:e,value:e},e)}),";"),c=l.a.createElement(ot.a,{value:this.props.hour,renderValue:function(e){return"".concat(e)},onChange:function(e){return t.props.setHour({hour:e.target.value})}},Object.keys(this.props.oada[this.props.connection_id].bookmarks.isoblue["device-index"][this.props.selectedUnit]["day-index"][this.props.date]["hour-index"]).map(function(e){return l.a.createElement(ut.a,{key:e,value:e},e)}),";");return l.a.createElement(Ve.a,null,l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:"Selected Unit:"})),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:this.props.selectedUnit})),l.a.createElement(Je.a,null),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:"ISOBlue Status:"})),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:"Health:"}),l.a.createElement(Ae.a,{align:"center",primary:this.props.snapshots[this.props.selectedUnit].health})),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:"Last Report:"}),l.a.createElement(Ae.a,{align:"center",primary:"NA"===this.props.snapshots[this.props.selectedUnit].lastReport?"NA":this.props.snapshots[this.props.selectedUnit].lastReport+" min"})),l.a.createElement(Je.a,null),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center",primary:"Available Data:"})),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center"},a)),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center"},r)),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center"},c)),n,l.a.createElement(Je.a,null),l.a.createElement(Fe.a,null,l.a.createElement(Ae.a,{align:"center"},l.a.createElement(ct.a,{variant:"contained",onClick:function(){return t.props.unselectUnit({})}},"Back to Main"))))}}]),t}(l.a.Component),Ut=Object(v.connect)({date:Object(g.state)(xt()),hour:Object(g.state)(kt()),measurement:Object(g.state)(Et()),selectedUnit:Object(g.state)(yt()),snapshots:Object(g.state)(gt()),data:Object(g.state)(vt()),mode:Object(g.state)(jt()),oada:Object(g.state)(Ot()),connection_id:Object(g.state)(ht()),selectUnit:Object(g.signal)(mt()),unselectUnit:Object(g.signal)(ft()),setDate:Object(g.signal)(bt()),setHour:Object(g.signal)(pt()),setMeasurement:Object(g.signal)(dt()),toggleMode:Object(g.signal)(lt())},Object(p.withStyles)(function(e){return{}})(wt));function It(){var e=Object(b.a)(["session.toggleDrawerOpen"]);return It=function(){return e},e}function St(){var e=Object(b.a)(["session.drawerOpen"]);return St=function(){return e},e}function Mt(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return Mt=function(){return e},e}var Nt=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.classes;return e=this.props.selectedUnit?l.a.createElement(Ut,null):l.a.createElement(at,null),l.a.createElement(_e.a,{open:this.props.drawerOpen,onClose:this.props.toggleDrawerOpen,classes:{paper:t.drawerPaper}},l.a.createElement("div",{className:t.toolbar}),e)}}]),t}(l.a.Component),Ct=Object(v.connect)({selectedUnit:Object(g.state)(Mt()),drawerOpen:Object(g.state)(St()),toggleDrawerOpen:Object(g.signal)(It())},Object(p.withStyles)(function(e){return{drawerPaper:{position:"relative",width:240,backgroundColor:"#eeeeee"},toolbar:e.mixins.toolbar}})(Nt));function Dt(){var e=Object(b.a)(["init"]);return Dt=function(){return e},e}var Lt=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.init({})}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",{className:e.root},l.a.createElement(E.a,{position:"absolute",className:e.appBar},l.a.createElement(X,null)),l.a.createElement(Ct,null),l.a.createElement("main",{className:e.content},l.a.createElement("div",{className:e.toolbar}),l.a.createElement(We,null)))}}]),t}(l.a.Component),Rt=Object(v.connect)({init:Object(g.signal)(Dt())},Object(p.withStyles)(function(e){return{root:{flexGrow:1,height:"100vh",zIndex:1,overflow:"hidden",position:"relative",display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},content:{flexGrow:1},toolbar:e.mixins.toolbar}},{withTheme:!0})(Lt)),Wt=n(16),Gt=n(24);function _t(){var e=Object(b.a)(["session.drawerOpen"]);return _t=function(){return e},e}var Xt=Object(Wt.sequence)("toggleDrawerOpen",[Object(Gt.toggle)(Object(g.state)(_t()))]),Jt=Object(Wt.Module)({state:{drawerOpen:!0},signals:a});function Tt(){var e=Object(b.a)(["map.targetCenter"]);return Tt=function(){return e},e}function Vt(){var e=Object(b.a)(["map.userLocation"]);return Vt=function(){return e},e}function Zt(){var e=Object(b.a)(["map.targetCenter"]);return Zt=function(){return e},e}function Ft(){var e=Object(b.a)(["map.targetCenter"]);return Ft=function(){return e},e}function Yt(){var e=Object(b.a)(["map.userLocationAvailable"]);return Yt=function(){return e},e}var Pt=Object(Wt.sequence)("storeUserLocation",[function(e){var t=e.state,n=e.props;return t.set("map.userLocation",{lat:n.lat,lng:n.lng})},Object(Gt.set)(Object(g.state)(Yt()),!0)]),Ht=Object(Wt.sequence)("centerOnUser",[Object(Gt.set)(Object(g.state)(Ft()),{lat:40.428641,lng:-86.913783}),Object(Gt.debounce)(1),{continue:[Object(Gt.set)(Object(g.state)(Zt()),Object(g.state)(Vt()))],discard:[]}]),At=Object(Wt.sequence)("centerOnUnit",[Object(Gt.set)(Object(g.state)(Tt()),{lat:40.428641,lng:-86.913783}),Object(Gt.debounce)(1),{continue:[function(e){var t=e.state,n=(e.props,t.get("data.connection_id")),a=t.get("diagnostics.selectedUnit"),r=t.get("diagnostics.date"),c=t.get("diagnostics.hour");if(a&&r&&c){var i=t.get("oada.".concat(n,".bookmarks.isoblue.device-index.").concat(a,".day-index.").concat(r,".hour-index.").concat(c,".gps"))||{},o=F.a.max(Object.keys(i));if(o){var s=i[o];s.lat&&s.lng&&t.set("map.targetCenter",s)}}}],discard:[]}]),zt=(n(113),n(105)),Bt=n.n(zt);function qt(){var e=Object(b.a)(["units"]);return qt=function(){return e},e}function Qt(){var e=Object(b.a)(["snapshots"]);return Qt=function(){return e},e}var Kt=Object(Wt.sequence)("updateSnapshot",[]),$t=Object(Wt.sequence)("createSnapshots",[function(e){var t=e.state,n=e.props;return{units:F.a.reduce(Object.keys(t.get("oada.".concat(n.connection_id,".bookmarks.isoblue.device-index"))),function(e,a,r){var c=t.get("oada.".concat(n.connection_id,".bookmarks.isoblue.device-index.").concat(a,".day-index")),i=Object.keys(c||{}).sort(function(e,t){return new Date(t)-new Date(e)})[0],o=F.a.max(Object.keys(c[i]["hour-index"]||{})),s=F.a.max(Object.keys(c[i]["hour-index"][o].gps||{})),u=F.a.max(Object.keys(c[i]["hour-index"][o].heartbeats||{}));console.log("unit "+a+" lastDate "+i+"lastTime "+o+" lasthb "+u+" lastgps "+s);var l=s?c[i]["hour-index"][o].gps[s]:null,d=u?c[i]["hour-index"][o].heartbeats[u]:null;if(l&&d){var p=Math.round((Math.round((new Date).getTime()/1e3)-F.a.max([u,s]))/60),b=d.recTime-d.genTime,f=null;f=p<2?b<20?"Healthy":"Sick":p<10?"Sick":"Down";e[a]={health:f,connection:null,location:l,lastReport:p,lastHeartbeatTime:u},t.set("health.".concat(a),f)}else e[a]={health:"Down",connection:"NA",location:null,lastReport:"NA",lastHeartbeatTime:u},t.set("health.".concat(a),"Down");return e},{})}},Object(Gt.set)(Object(g.state)(Qt()),Object(g.props)(qt()))]);function en(){var e=Object(b.a)(["data.ready"]);return en=function(){return e},e}function tn(){var e=Object(b.a)(["connection_id"]);return tn=function(){return e},e}function nn(){var e=Object(b.a)(["data.connection_id"]);return nn=function(){return e},e}function an(){var e=Object(b.a)(["health"]);return an=function(){return e},e}function rn(){var e=Object(b.a)(["data.ready"]);return rn=function(){return e},e}function cn(){var e=Object(b.a)(["data.ready"]);return cn=function(){return e},e}function on(){var e=Object(b.a)(["data.ready"]);return on=function(){return e},e}var sn={bookmarks:{_type:"applications/vnd.oada.bookmarks.1+json",_rev:"0-0",isoblue:{_type:"applications/vnd.oada.isoblue.1+json",_rev:"0-0","device-index":{"*":{_type:"applications/vnd.oada.isoblue.device.1+json",_rev:"0-0","day-index":{"*":{_type:"applications/vnd.oada.isoblue.day.1+json",_rev:"0-0","hour-index":{"*":{_type:"applications/vnd.oada.isoblue.hour.1+json"}}}}}}}}},un={bookmarks:{_type:"applications/vnd.oada.bookmarks.1+json",_rev:"0-0",isoblue:{_type:"applications/vnd.oada.isoblue.1+json",_rev:"0-0","device-index":{"*":{_type:"applications/vnd.oada.isoblue.device.1+json",_rev:"0-0","day-index":{"*":{_type:"applications/vnd.oada.isoblue.day.1+json",_rev:"0-0"}}}}}}};function ln(e){var t=e.state,n=e.props,a=Object.keys(t.get("oada.".concat(n.connection_id,".bookmarks.isoblue.device-index"))||{}),r=[];return a.forEach(function(e){var a=t.get("oada.".concat(n.connection_id,".bookmarks.isoblue.device-index.").concat(e,".day-index"))||{},c=Object.keys(a);if(0!=c.length){var i=F.a.maxBy(c,function(e){return new Date(e)}),o=F.a.max(Object.keys(a[i]["hour-index"]||{}));r.push({path:"/bookmarks/isoblue/device-index/".concat(e,"/day-index/").concat(i,"/hour-index/").concat(o),watch:{signals:["snapshots.createSnapshots"]},tree:sn})}}),{requests:r}}var dn=Object(Wt.sequence)("data.handleDeviceUpdate",[Object(Gt.set)(Object(g.state)(on()),!1),ln,Bt.a.get,Object(Gt.set)(Object(g.state)(cn()),!0)]),pn=Object(Wt.sequence)("data.init",[Object(Gt.set)(Object(g.state)(rn()),!1),Object(Gt.set)(Object(g.state)(an()),{}),Bt.a.connect,Object(Gt.set)(Object(g.state)(nn()),Object(g.props)(tn())),function(e){e.state,e.props;return{requests:[{path:"/bookmarks/isoblue",tree:un,watch:{signals:["data.handleDeviceUpdate"]}}]}},Bt.a.get,ln,Bt.a.get,Object(Gt.set)(Object(g.state)(en()),!0)]),bn=Object(Wt.sequence)("data.getHour",[function(e){var t=e.state;e.props;return{requests:[{connection_id:t.get("data.connection_id"),path:"/bookmarks/isoblue/device-index/".concat(t.get("diagnostics.selectedUnit"),"/day-index/").concat(t.get("diagnostics.date"),"/hour-index/").concat(t.get("diagnostics.hour")),tree:sn}]}},Bt.a.get]);function fn(){var e=Object(b.a)(["diagnostics.measurement"]);return fn=function(){return e},e}function mn(){var e=Object(b.a)(["diagnostics.mode"]);return mn=function(){return e},e}function hn(){var e=Object(b.a)(["diagnostics.measurement"]);return hn=function(){return e},e}function On(){var e=Object(b.a)(["diagnostics.mode"]);return On=function(){return e},e}function jn(){var e=Object(b.a)(["diagnostics.mode"]);return jn=function(){return e},e}function vn(){var e=Object(b.a)(["diagnostics.hour"]);return vn=function(){return e},e}function gn(){var e=Object(b.a)(["diagnostics.date"]);return gn=function(){return e},e}function yn(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return yn=function(){return e},e}function En(){var e=Object(b.a)(["unit"]);return En=function(){return e},e}function kn(){var e=Object(b.a)(["diagnostics.selectedUnit"]);return kn=function(){return e},e}function xn(){var e=Object(b.a)(["hour"]);return xn=function(){return e},e}function wn(){var e=Object(b.a)(["diagnostics.hour"]);return wn=function(){return e},e}function Un(){var e=Object(b.a)(["date"]);return Un=function(){return e},e}function In(){var e=Object(b.a)(["diagnostics.date"]);return In=function(){return e},e}var Sn=Object(Wt.sequence)("setDate",[Object(Gt.set)(Object(g.state)(In()),Object(g.props)(Un())),function(e){var t=e.state;e.props;return t.set("diagnostics.hour",F.a.max(Object.keys(t.get("oada.".concat(t.get("data.connection_id"),".bookmarks.isoblue.device-index.").concat(t.get("diagnostics.selectedUnit"),".day-index.").concat(t.get("diagnostics.date"),".hour-index")))))},bn,At]),Mn=Object(Wt.sequence)("setHour",[Object(Gt.set)(Object(g.state)(wn()),Object(g.props)(xn())),bn,At]),Nn=Object(Wt.sequence)("setMeasurement",[function(e){var t=e.state,n=e.props;return t.set("diagnostics.measurement",n.measurement)}]),Cn=Object(Wt.sequence)("selectUnit",[function(e){var t=e.state;e.props;return{connection_id:t.get("data.connection_id")}},Object(Gt.set)(Object(g.state)(kn()),Object(g.props)(En())),function(e){var t=e.state,n=e.props,a=Object.keys(t.get("oada.".concat(n.connection_id,".bookmarks.isoblue.device-index.").concat(n.unit,".day-index"))).sort(function(e,t){return new Date(t)-new Date(e)})[0],r=F.a.max(Object.keys(t.get("oada.".concat(n.connection_id,".bookmarks.isoblue.device-index.").concat(n.unit,".day-index.").concat(a,".hour-index"))));t.set("diagnostics.date",a),t.set("diagnostics.hour",r)},At]),Dn=Object(Wt.sequence)("unselectUnit",[Object(Gt.set)(Object(g.state)(yn()),null),Object(Gt.set)(Object(g.state)(gn()),null),Object(Gt.set)(Object(g.state)(vn()),null)]),Ln=Object(Wt.sequence)("toggleMode",[Object(Gt.when)(Object(g.state)(jn()),function(e){return"map"===e}),{true:[Object(Gt.set)(Object(g.state)(On()),"graph"),Object(Gt.set)(Object(g.state)(hn()),"Latency")],false:[Object(Gt.set)(Object(g.state)(mn()),"map"),Object(Gt.set)(Object(g.state)(fn()),"GPS")]}]),Rn=Object(Wt.Module)({state:{hour:null,measurement:"GPS",selectedUnit:null,date:null,mode:"map"},signals:o}),Wn=Object(Wt.Module)({state:{targetCenter:{lat:40.428641,lng:-86.913783},userLocation:{lat:40.428641,lng:-86.913783},userLocationAvailable:!1},signals:r}),Gn=Object(Wt.Module)({signals:i}),_n=Object(Wt.Module)({state:{},signals:c}),Xn=n(450),Jn=n.n(Xn),Tn=n(250),Vn=n.n(Tn),Zn=Object(Wt.sequence)("init",[function(){return{domain:"https://128.46.71.115",options:{redirect:"https://openatk.com/ISOBlueApp/oauth2/redirect.html",metadata:"eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vb3BlbmF0ay5jb20vSVNPQmx1ZUFwcC9vYXV0aDIvcmVkaXJlY3QuaHRtbCIsImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9vYXV0aDIvcmVkaXJlY3QuaHRtbCJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImF1dGhvcml6YXRpb25fY29kZSJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImNvZGUiLCJpZF90b2tlbiIsImlkX3Rva2VuIHRva2VuIiwiY29kZSBpZF90b2tlbiIsImNvZGUgdG9rZW4iLCJjb2RlIGlkX3Rva2VuIHRva2VuIl0sImNsaWVudF9uYW1lIjoiSVNPQmx1ZSBIZWFsdGggTW9uaXRvciIsImNsaWVudF91cmkiOiJodHRwOi8vb2FkYS5vcGVuYXRrLmNvbS9JU09CbHVlQXBwIiwiY29udGFjdHMiOlsiU2FtIE5vZWwgPHNhbm9lbEBwdXJkdWUuZWR1PiJdLCJqd2tzIjp7ImtleXMiOlt7Imt0eSI6IlJTQSIsIm4iOiJ6YXVaRkJ1TWRsdjFrWWp6VWI0cS1fM200c21GeG5mdzRTWW9hSHE3Y2k4U2N0WTN4ajdyZEFIeWtRcG5RVnJqNktPOG1hSHYtMEJ2VzVNaGNnaXZrdVlzLXpIRXZmWUJlVkJuY3ZIZ09rSlBiYzkxQ3dfaXdPWTdFSFdCOGhNN1ZpTFFWY19EdjBoOG5KeWJCdmhMMDRDSFF0N0NwTXRWWUc2Zm9KWGMzZHE1MmpOUWJCSElaNW03VnoxS3R5em9MY3A4TzJtaGFMcDQ1VXIzQ18xZUd0djhuNU56OWJXX0JoNVhGWWJEeHY3Qm5oWk5JdzFHQ2JqakF3bXRibm5MN0dnZjRDeTYwd1JIbVI0dm9lMjFPSWpvQVNxMmpaMDN4MTJtWHM3SFBJM1lCNHkyOXd2Wk13MmdMek9kVG9ycnFPLXRsbW4xYm9Qa1dLSkpTWG9BdnciLCJlIjoiQVFBQiJ9XX0sInNvZnR3YXJlX2lkIjoiNzY1ZjFlZjctMzExNy00NjhhLTgwYjMtMDExYzQ1MjhkMGExIiwicmVnaXN0cmF0aW9uX3Byb3ZpZGVyIjoiaHR0cHM6Ly9pZGVudGl0eS5vYWRhLWRldi5jb20iLCJpYXQiOjE1NDcxNDYxOTF9.seH7eMsR1218IgEEbiq3T5ASGQAr7vqvy54_Yu8-6TIoAoVfslG-dSYWE2dXZ_P65kElqCKZLizVxyR1732vcFnOdzp6jE_pgpLg-eWZfVnIvNQdGK8Dh-5t1gVbPs1ME-j_GMCb2Un-mpDS8LAw4Nig_r-monjKyKbcPBN6gc4",scope:"oada.isoblue:all"}}},pn,$t]),Fn=Object(Wt.Module)({modules:{session:Jt,oada:Jn.a,diagnostics:Rn,map:Wn,data:Gn,snapshots:_n},signals:s,providers:{oada:Vn.a}}),Yn=(n(1009),Object(Wt.Controller)(Fn,{devtools:null})),Pn=Object(p.createMuiTheme)({pallete:{primary:{light:"#718792",main:"#455a64",dark:"#1c313a",contrastText:"#ffffff"},secondary:{light:"#896a60",main:"#5b3f36",dark:"#301810",contrastText:"#ffffff"}}});Object(d.render)(l.a.createElement(v.Container,{controller:Yn},l.a.createElement(p.MuiThemeProvider,{theme:Pn},l.a.createElement(Rt,null))),document.getElementById("root"))},453:function(e,t,n){e.exports=n(1008)},547:function(e,t,n){},873:function(e,t){},875:function(e,t){},880:function(e,t){},882:function(e,t){},913:function(e,t){},915:function(e,t){},916:function(e,t){},922:function(e,t){},925:function(e,t){},945:function(e,t){},948:function(e,t){},964:function(e,t){},967:function(e,t){}},[[453,1,2]]]);
//# sourceMappingURL=main.1950c185.chunk.js.map
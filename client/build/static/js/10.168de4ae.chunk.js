(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{139:function(e,t,n){"use strict";var a=n(127),o=n.n(a);t.a={getFromGeo:function(e){return o.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc"))},signUp:function(e){return console.log("sending request!"),o.a.post("/api/signup",e)},getCompetitors:function(){return console.log("requesting users!"),o.a.get("/api/user_data")},getMatches:function(e,t){return console.log("getting matches!"),o.a.get("/api/users/".concat(e,"/").concat(t))}}},1630:function(e,t,n){"use strict";n.r(t);var a=n(20),o=n(21),i=n(23),l=n(22),r=n(24),c=n(25),s=n(0),u=n.n(s),g=n(26),d=n(452),m=n(933);var p=Object(m.withStyles)({card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}})(function(e){return u.a.createElement("div",null)}),h=n(139),f=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).createInfoWindow=e.createInfoWindow.bind(Object(c.a)(Object(c.a)(e))),e.handleChange=e.handleChange.bind(Object(c.a)(Object(c.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(c.a)(Object(c.a)(e))),e.state={value:"",lat:"",lng:""},e}return Object(r.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({value:e.target.value}),h.a.getFromGeo(this.state.value).then(function(e){t.setState({lat:e.data.results[0].geometry.location.lat,lng:e.data.results[0].geometry.location.lng})}).catch(function(e){return e})}},{key:"createInfoWindow",value:function(e,t,n,a){var o=new window.google.maps.InfoWindow({content:'<div id="infoWindow" />',position:{lat:e.latLng.lat(),lng:e.latLng.lng()}});o.addListener("domready",function(e){for(var t,i,l=0;l<n.length;l++)a.position.lat()===n[l].geometry.location.lat()&&(t=n[l].name,i=n[l].formatted_address);Object(g.render)(u.a.createElement(p,null),document.getElementById("infoWindow")),o.setContent(t+"</br>"+i)}),o.open(t)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("label",null,"Enter a zipcode to find gyms near you!",u.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),u.a.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit})),this.state.lat&&this.state.lng&&u.a.createElement("div",null,u.a.createElement(d.a,{id:"myMap",options:{center:{lat:this.state.lat,lng:this.state.lng},zoom:11},onMapLoad:function(t){var n=new window.google.maps.places.PlacesService(t),a={query:"jiu jitsu gym",location:{lat:e.state.lat,lng:e.state.lng},radius:"10000"},o=e;n.textSearch(a,function(e,n){if(n===window.google.maps.places.PlacesServiceStatus.OK)for(var a=function(){l=e[i].geometry.location.lat(),r=e[i].geometry.location.lng(),c={url:"/kimono.png",scaledSize:new window.google.maps.Size(40,43),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(0,32)};var n=new window.google.maps.Marker({position:{lat:l,lng:r},map:t,icon:c});n.addListener("click",function(a){o.createInfoWindow(a,t,e,n)})},i=0;i<e.length;i++){var l,r,c;a()}})}})))}}]),t}(s.Component);t.default=f}}]);
//# sourceMappingURL=10.168de4ae.chunk.js.map
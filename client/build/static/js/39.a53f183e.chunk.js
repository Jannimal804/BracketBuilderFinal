(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1617:function(t,e,n){"use strict";n.r(e);var a=n(20),o=n(21),l=n(23),r=n(22),c=n(24),i=n(0),s=n.n(i),p=n(93),m=(n(100),n(101),n(102)),u=n(97),b=n(94),d=n(95),h=function(t){function e(){var t,n;Object(a.a)(this,e);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(c)))).state={tooltipOpen:!1},n.toggle=function(){n.setState({tooltipOpen:!n.state.tooltipOpen})},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("span",null,s.a.createElement(p.e,{className:"mr-1",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),s.a.createElement(p.ob,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},"Tooltip Content!"))}}]),e}(s.a.Component),E=function(t){function e(){var t,n;Object(a.a)(this,e);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(c)))).state={tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,this.state.tooltips.map(function(t,e){return s.a.createElement(h,{key:e,item:t,id:e})}))}}]),e}(s.a.Component);var f=function(){return s.a.createElement("div",null,s.a.createElement("p",null,"Somewhere in here is a"," ",s.a.createElement("span",{style:{textDecoration:"underline",color:"blue"},href:"#",id:"UncontrolledTooltipExample"},"tooltip"),"."),s.a.createElement(p.sb,{placement:"right",target:"UncontrolledTooltipExample"},"Hello world!"))},v=function(t){function e(){return Object(a.a)(this,e),Object(l.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(b.a,null,"Tooltips"),s.a.createElement(d.a,null,"Tooltip React Component."),s.a.createElement(p.kb,null,s.a.createElement(p.A,{sm:"12"},s.a.createElement(p.i,null,s.a.createElement(p.j,null,s.a.createElement(p.u,null,"Tooltips"),s.a.createElement(u.a,{TabContent1:s.a.createElement(E,null),TabContent2:s.a.createElement(m.PrismCode,{component:"pre",className:"language-javascript"},'import React from "react";\nimport { Button, Tooltip } from "reactstrap";\n\nclass TooltipItem extends React.Component {\n   state = {\n      tooltipOpen: false\n   };\n\n   toggle = () => {\n      this.setState({\n         tooltipOpen: !this.state.tooltipOpen\n      });\n   };\n\n   render() {\n      return (\n         <span>\n            <Button\n               className="mr-1"\n               color="secondary"\n               id={"Tooltip-" + this.props.id}\n            >\n               {this.props.item.text}\n            </Button>\n            <Tooltip\n               placement={this.props.item.placement}\n               isOpen={this.state.tooltipOpen}\n               target={"Tooltip-" + this.props.id}\n               toggle={this.toggle}\n            >\n               Tooltip Content!\n            </Tooltip>\n         </span>\n      );\n   }\n}\n\nclass TooltipExampleMulti extends React.Component {\n   state = {\n      tooltips: [\n         {\n            placement: "top",\n            text: "Top"\n         },\n         {\n            placement: "bottom",\n            text: "Bottom"\n         },\n         {\n            placement: "left",\n            text: "Left"\n         },\n         {\n            placement: "right",\n            text: "Right"\n         }\n      ]\n   };\n\n   render() {\n      return (\n         <div>\n            {this.state.tooltips.map((tooltip, i) => {\n               return <TooltipItem key={i} item={tooltip} id={i} />;\n            })}\n         </div>\n      );\n   }\n}\n\nexport default TooltipExampleMulti;')}))))),s.a.createElement(p.kb,null,s.a.createElement(p.A,{sm:"12"},s.a.createElement(p.i,null,s.a.createElement(p.j,null,s.a.createElement(p.u,null,"Alerts"),s.a.createElement(u.a,{TabContent1:s.a.createElement(f,null),TabContent2:s.a.createElement(m.PrismCode,{component:"pre",className:"language-javascript"},'import React from "react";\nimport { UncontrolledTooltip } from "reactstrap";\n\nfunction TooltipUncontrolled() {\n   return (\n      <div>\n         <p>\n            Somewhere in here is a{" "}\n            <span\n               style={{ textDecoration: "underline", color: "blue" }}\n               href="#"\n               id="UncontrolledTooltipExample"\n            >\n               tooltip\n            </span>\n            .\n         </p>\n         <UncontrolledTooltip\n            placement="right"\n            target="UncontrolledTooltipExample"\n         >\n            Hello world!\n         </UncontrolledTooltip>\n      </div>\n   );\n}\n\nexport default TooltipUncontrolled;')}))))))}}]),e}(s.a.Component);e.default=v},94:function(t,e,n){"use strict";var a=n(0),o=n.n(a);e.a=function(t){var e=t.className;return o.a.createElement("div",{className:"content-header".concat(void 0===e?"":" ".concat(e))},t.children)}},95:function(t,e,n){"use strict";var a=n(0),o=n.n(a);e.a=function(t){var e=t.className;return o.a.createElement("div",{className:"content-sub-header".concat(void 0===e?"":" ".concat(e))},t.children)}},97:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var a=n(20),o=n(21),l=n(23),r=n(22),c=n(24),i=n(25),s=n(0),p=n.n(s),m=n(96),u=n(93),b=n(13),d=n.n(b),h=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(l.a)(this,Object(r.a)(e).call(this,t))).toggle=n.toggle.bind(Object(i.a)(Object(i.a)(n))),n.state={activeTab:"1"},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"toggle",value:function(t){this.state.activeTab!==t&&this.setState({activeTab:t})}},{key:"render",value:function(){var t=this;return p.a.createElement("div",{className:"nav-tabs-vc"},p.a.createElement(u.Z,{tabs:!0},p.a.createElement(u.ab,null,p.a.createElement(u.bb,{className:d()({active:"1"===this.state.activeTab}),onClick:function(){t.toggle("1")}},p.a.createElement(m.Eye,{size:18}))),p.a.createElement(u.ab,null,p.a.createElement(u.bb,{className:d()({active:"2"===this.state.activeTab}),onClick:function(){t.toggle("2")}},p.a.createElement(m.Code,{size:18})))),p.a.createElement(u.lb,{activeTab:this.state.activeTab,className:"px-0"},p.a.createElement(u.mb,{tabId:"1"},p.a.createElement(u.kb,null,p.a.createElement(u.A,{sm:"12"},this.props.TabContent1))),p.a.createElement(u.mb,{tabId:"2"},p.a.createElement(u.kb,null,p.a.createElement(u.A,{sm:"12"},this.props.TabContent2)))))}}]),e}(p.a.Component)}}]);
//# sourceMappingURL=39.a53f183e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1611:function(e,n,t){"use strict";t.r(n);var a,l=t(20),r=t(21),o=t(23),c=t(22),i=t(24),s=t(0),p=t.n(s),m=t(93),u=(t(100),t(101),t(102)),d=(t(413),t(97)),f=t(94),b=t(95),h=t(301),E=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={files:[]},t.onDrop=function(e){t.setState({files:e})},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{className:"dropzone mb-2"},p.a.createElement(h.a,{onDrop:this.onDrop.bind(this)},p.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))),p.a.createElement("aside",null,p.a.createElement("h4",null,"Dropped files"),p.a.createElement("ul",null,this.state.files.map(function(e){return p.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")}))))}}]),n}(s.Component),v=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={files:[],accepted:[],rejected:[]},t.onDrop=function(e){t.setState({files:e})},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement("div",{className:"dropzone mb-2"},p.a.createElement(h.a,{accept:"image/jpeg, image/png",onDrop:function(n,t){e.setState({accepted:n,rejected:t})}},p.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."),p.a.createElement("p",null,"Only *.jpeg and *.png images will be accepted"))),p.a.createElement("aside",null,p.a.createElement("h4",null,"Accepted files"),p.a.createElement("ul",null,this.state.accepted.map(function(e){return p.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")})),p.a.createElement("h4",null,"Rejected files"),p.a.createElement("ul",null,this.state.rejected.map(function(e){return p.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")}))))}}]),n}(s.Component),g=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={files:[],accepted:[],rejected:[]},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement("div",{className:"dropzone"},p.a.createElement(h.a,{ref:function(e){a=e},onDrop:function(e,n){alert(e)}},p.a.createElement("p",null,"Drop files here.")),p.a.createElement("button",{type:"button",className:"mt-2 btn btn-primary",onClick:function(){a.open()}},"Open File Dialog"))}}]),n}(s.Component),y=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).state={files:[],disabled:!0},t.onDrop=function(e){t.setState({files:e})},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement("aside",null,p.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.setState({disabled:!e.state.disabled})}},"Toggle disabled")),p.a.createElement("div",{className:"dropzone my-2"},p.a.createElement(h.a,{onDrop:this.onDrop.bind(this),disabled:this.state.disabled},p.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))),p.a.createElement("aside",null,p.a.createElement("h4",null,"Dropped files"),p.a.createElement("ul",null,this.state.files.map(function(e){return p.a.createElement("li",null,e.name," - ",e.size," bytes")}))))}}]),n}(s.Component),D=function(e){function n(){return Object(l.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement(s.Fragment,null,p.a.createElement(f.a,null,"Dropzone"),p.a.createElement(b.a,null,p.a.createElement("p",null,"Simple HTML5 drag-drop zone with React.js."),p.a.createElement("a",{href:"https://github.com/react-dropzone/react-dropzone",target:"_blank",rel:"noopener noreferrer"},p.a.createElement("img",{src:"https://img.shields.io/github/stars/react-dropzone/react-dropzone.svg?style=social",alt:"Stars"}),p.a.createElement("img",{src:"https://img.shields.io/npm/dm/react-dropzone.svg",alt:"Downloads"}))),p.a.createElement(m.kb,null,p.a.createElement(m.A,{sm:"12"},p.a.createElement(m.i,null,p.a.createElement(m.j,null,p.a.createElement(m.u,null,"Basic Dropzone"),p.a.createElement("p",null,"Dropzone with default properties and displays list of the dropped files."),p.a.createElement(d.a,{TabContent1:p.a.createElement(E,null),TabContent2:p.a.createElement(u.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nclass BasicDropzone extends Component {\n   state = {\n      files: []\n   };\n\n   onDrop = files => {\n      this.setState({\n         files\n      });\n   };\n\n   render() {\n      return (\n         <div>\n            <div className="dropzone">\n               <Dropzone onDrop={this.onDrop.bind(this)}>\n                  <p>\n                     Try dropping some files here, or click to select files to\n                     upload.\n                  </p>\n               </Dropzone>\n            </div>\n            <aside>\n               <h2>Dropped files</h2>\n               <ul>\n                  {this.state.files.map(f => (\n                     <li key={f.name}>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n            </aside>\n         </div>\n      );\n   }\n}\nexport default BasicDropzone;\n')}))))),p.a.createElement(m.kb,null,p.a.createElement(m.A,{sm:"12"},p.a.createElement(m.i,null,p.a.createElement(m.j,null,p.a.createElement(m.u,null,"Specific file types"),p.a.createElement("p",null,"By providing accept prop you can make Dropzone to accept specific file types and reject the others. The value must be a comma-separated list of unique content type specifiers."),p.a.createElement(d.a,{TabContent1:p.a.createElement(v,null),TabContent2:p.a.createElement(u.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nclass FileTypeDropzone extends Component {\n   state = {\n      files: [],\n      accepted: [],\n      rejected: [],\n   };\n\n   onDrop = files => {\n      this.setState({\n         files\n      });\n   };\n\n   render() {\n      return (\n         <div>\n            <div className="dropzone">\n               <Dropzone\n                  accept="image/jpeg, image/png"\n                  onDrop={(accepted, rejected) => {\n                     this.setState({ accepted, rejected });\n                  }}\n               >\n                  <p>\n                     Try dropping some files here, or click to select files to\n                     upload.\n                  </p>\n                  <p>Only *.jpeg and *.png images will be accepted</p>\n               </Dropzone>\n            </div>\n            <aside>\n               <h2>Accepted files</h2>\n               <ul>\n                  {this.state.accepted.map(f => (\n                     <li key={f.name}>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n               <h2>Rejected files</h2>\n               <ul>\n                  {this.state.rejected.map(f => (\n                     <li key={f.name}>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n            </aside>\n         </div>\n      );\n   }\n}\nexport default FileTypeDropzone;\n')}))))),p.a.createElement(m.kb,null,p.a.createElement(m.A,{sm:"12"},p.a.createElement(m.i,null,p.a.createElement(m.j,null,p.a.createElement(m.u,null,"Opening File Dialog Programmatically"),p.a.createElement("p",null,"You can programmatically invoke default OS file prompt. In order to do that you'll have to set the ref on your Dropzone instance and call the instance open method."),p.a.createElement(d.a,{TabContent1:p.a.createElement(g,null),TabContent2:p.a.createElement(u.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nlet dropzoneRef;\n\nclass ProgramaticDialogDropzone extends Component {\n   state = {\n      files: [],\n      accepted: [],\n      rejected: [],\n   };\n\n   render() {\n      return (\n         <div>\n            <Dropzone\n               ref={node => {\n                  dropzoneRef = node;\n               }}\n               onDrop={(accepted, rejected) => {\n                  alert(accepted);\n               }}\n            >\n               <p>Drop files here.</p>\n            </Dropzone>\n            <button\n               type="button"\n               onClick={() => {\n                  dropzoneRef.open();\n               }}\n            >\n               Open File Dialog\n            </button>\n         </div>\n      );\n   }\n}\nexport default ProgramaticDialogDropzone;\n')}))))),p.a.createElement(m.kb,null,p.a.createElement(m.A,{sm:"12"},p.a.createElement(m.i,null,p.a.createElement(m.j,null,p.a.createElement(m.u,null,"Dropzone with disabled property"),p.a.createElement("p",null,"You can programmatically invoke default OS file prompt. In order to do that you'll have to set the ref on your Dropzone instance and call the instance open method."),p.a.createElement(d.a,{TabContent1:p.a.createElement(y,null),TabContent2:p.a.createElement(u.PrismCode,{component:"pre",className:"language-javascript"},'import React, { Component } from "react";\nimport Dropzone from "react-dropzone";\n\nclass DisabledDropzone extends Component {\n   state = {\n      files: [],\n      disabled: true\n   };\n\n   onDrop = files => {\n      this.setState({\n         files\n      });\n   };\n\n   render() {\n      return (\n         <div>\n            <aside>\n               <button\n                  type="button"\n                  onClick={() =>\n                     this.setState({\n                        disabled: !this.state.disabled\n                     })\n                  }\n               >\n                  Toggle disabled\n               </button>\n            </aside>\n            <div className="dropzone">\n               <Dropzone\n                  onDrop={this.onDrop.bind(this)}\n                  disabled={this.state.disabled}\n               >\n                  <p>\n                     Try dropping some files here, or click to select files to\n                     upload.\n                  </p>\n               </Dropzone>\n            </div>\n            <aside>\n               <h2>Dropped files</h2>\n               <ul>\n                  {this.state.files.map(f => (\n                     <li>\n                        {f.name} - {f.size} bytes\n                     </li>\n                  ))}\n               </ul>\n            </aside>\n         </div>\n      );\n   }\n}\nexport default DisabledDropzone;\n')}))))))}}]),n}(s.Component);n.default=D},413:function(e,n,t){},94:function(e,n,t){"use strict";var a=t(0),l=t.n(a);n.a=function(e){var n=e.className;return l.a.createElement("div",{className:"content-header".concat(void 0===n?"":" ".concat(n))},e.children)}},95:function(e,n,t){"use strict";var a=t(0),l=t.n(a);n.a=function(e){var n=e.className;return l.a.createElement("div",{className:"content-sub-header".concat(void 0===n?"":" ".concat(n))},e.children)}},97:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var a=t(20),l=t(21),r=t(23),o=t(22),c=t(24),i=t(25),s=t(0),p=t.n(s),m=t(96),u=t(93),d=t(13),f=t.n(d),b=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).toggle=t.toggle.bind(Object(i.a)(Object(i.a)(t))),t.state={activeTab:"1"},t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"nav-tabs-vc"},p.a.createElement(u.Z,{tabs:!0},p.a.createElement(u.ab,null,p.a.createElement(u.bb,{className:f()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},p.a.createElement(m.Eye,{size:18}))),p.a.createElement(u.ab,null,p.a.createElement(u.bb,{className:f()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},p.a.createElement(m.Code,{size:18})))),p.a.createElement(u.lb,{activeTab:this.state.activeTab,className:"px-0"},p.a.createElement(u.mb,{tabId:"1"},p.a.createElement(u.kb,null,p.a.createElement(u.A,{sm:"12"},this.props.TabContent1))),p.a.createElement(u.mb,{tabId:"2"},p.a.createElement(u.kb,null,p.a.createElement(u.A,{sm:"12"},this.props.TabContent2)))))}}]),n}(p.a.Component)}}]);
//# sourceMappingURL=43.1344a702.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1602:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(21),r=a(23),l=a(22),o=a(24),s=a(0),m=a.n(s),i=a(93),u=a(25),d=a(15),E=a(28),p=function(e){var t=e.active,a=e.children,n=e.onClick;return m.a.createElement("li",{className:"list-group-item list-group-item-action "+(t?"active":"")+" no-border-top-radius no-border-bottom-radius no-border px-2 py-1",onClick:n},a)},f=Object(d.connect)(function(e,t){return{active:t.filter===e.contactApp.contactsVisibilityFilter}},function(e,t){return{onClick:function(){return e(Object(E.g)(t.filter))}}})(p),N=Object(d.connect)(function(e){return{id:e.contactApp.contacts.length}})(function(e){var t,a,n,c,r,l,o,s,u=e.id,d=e.dispatch;return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.H,{onSubmit:function(e){e.preventDefault(),t.value.trim()&&r.value.trim()&&l.value.trim()&&(d(Object(E.a)(u,t.value,a.value,c.value,n.value,l.value,r.value,o.value,s.value)),t.value="",a.value="",c.value="",n.value="",l.value="",r.value="",o.value="",s.value="")}},m.a.createElement(i.W,null,m.a.createElement(i.kb,null,m.a.createElement(i.A,{md:6},m.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/"+u+".jpg",className:"rounded-circle",alt:u})),m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"firstName"},"First Name"),m.a.createElement("input",{className:"form-control",type:"text",name:"firstname",id:"firstName",ref:function(e){return t=e},required:!0})),m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"lastName"},"Last Name"),m.a.createElement("input",{className:"form-control",type:"text",name:"lastname",id:"lastName",ref:function(e){return a=e}})))),m.a.createElement(i.kb,null,m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"department"},"Department"),m.a.createElement("input",{className:"form-control",type:"text",name:"department",id:"department",ref:function(e){return n=e}}))),m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"company"},"Company"),m.a.createElement("input",{className:"form-control",type:"text",name:"company",id:"company",ref:function(e){return c=e}})))),m.a.createElement(i.kb,null,m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"phone"},"Phone"),m.a.createElement("input",{className:"form-control",type:"phone",name:"phone",id:"phone",ref:function(e){return r=e},required:!0}))),m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"email"},"Email"),m.a.createElement("input",{className:"form-control",type:"email",name:"email",id:"email",ref:function(e){return l=e},required:!0})))),m.a.createElement(i.kb,null,m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"address"},"Address"),m.a.createElement("input",{className:"form-control",type:"text",name:"address",id:"address",ref:function(e){return o=e}}))),m.a.createElement(i.A,{md:6},m.a.createElement(i.I,null,m.a.createElement(i.P,{for:"notes"},"Notes"),m.a.createElement("input",{className:"form-control",type:"textarea",name:"notes",id:"notes",ref:function(e){return s=e}}))))),m.a.createElement(i.X,null,m.a.createElement(i.e,{color:"primary",type:"submit"},"Add Contact"))))}),g=a(114),C=a.n(g),b=a(96),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return m.a.createElement("div",{className:"contact-app-sidebar float-left d-none d-xl-block"},m.a.createElement(C.a,null,m.a.createElement("div",{className:"contact-app-sidebar-content"},m.a.createElement("div",{className:"contact-app-menu"},m.a.createElement("div",{className:"form-group form-group-compose text-center"},m.a.createElement("button",{type:"button",className:"btn btn-raised btn-danger btn-block my-2 shadow-z-2",onClick:this.toggle},m.a.createElement(b.UserPlus,{size:18,className:"mr-1"})," New Contact")),m.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Filters"),m.a.createElement("ul",{className:"list-group list-group-messages"},m.a.createElement(f,{filter:E.c.SHOW_ALL},m.a.createElement(b.Users,{size:18,className:"mr-1"})," All Contacts"),m.a.createElement(f,{filter:E.c.FREQUENT_CONTACT},m.a.createElement(b.RefreshCw,{size:18,className:"mr-1"})," Frequent"),m.a.createElement(f,{filter:E.c.STARRED_CONTACT},m.a.createElement(b.Star,{size:18,className:"mr-1"})," Starred contacts")),m.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Department"),m.a.createElement("ul",{className:"list-group list-group-messages"},m.a.createElement(f,{filter:E.c.ENGINEERING_DEPARTMENT_CONTACT,departmentValue:"Engineering"},m.a.createElement(b.Circle,{size:18,className:"mr-1 danger"}),"Engineering"),m.a.createElement(f,{filter:E.c.SALES_DEPARTMENT_CONTACT,departmentValue:"Sales"},m.a.createElement(b.Circle,{size:18,className:"mr-1 warning"}),"Sales"),m.a.createElement(f,{filter:E.c.SUPPORT_DEPARTMENT_CONTACT,departmentValue:"Support"},m.a.createElement(b.Circle,{size:18,className:"mr-1 success"}),"Support")))),m.a.createElement(i.V,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,size:"md"},m.a.createElement(i.Y,{toggle:this.toggle},"Add Contact"),m.a.createElement(N,null))))}}]),t}(m.a.Component),v=function(e){var t=e.value,a=e.onChange;return m.a.createElement("input",{type:"text",className:"form-control round",placeholder:"Search contacts",onChange:function(e){return a(e.target.value)},defaultValue:t})},y=Object(d.connect)(function(e){return{value:e.contactApp.contactsSearch}},function(e){return{onChange:function(t){return e(Object(E.d)(t))}}})(v),L=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"contact-search-box w-100 bg-white pt-4 px-2 pb-2"},m.a.createElement("div",{className:"media"},m.a.createElement("span",{className:"contact-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none"}),m.a.createElement("div",{className:"media-body"},m.a.createElement(y,null))))}}]),t}(m.a.Component),x=a(1),A=a.n(x),O=function(e){var t=e.onContactClick,a=e.onStarredClick,n=e.onDeleteClick,c=e.id,r=e.firstname,l=e.lastname,o=e.image,s=e.department,u=e.starred,d=e.active;return m.a.createElement("li",{className:"list-group-item list-group-item-action no-border "+(d===c?"bg-grey bg-lighten-4":"")},m.a.createElement(i.kb,null,m.a.createElement(i.A,{xs:3,onClick:t},m.a.createElement("img",{src:o,className:"rounded-circle width-50",alt:o})),m.a.createElement(i.A,{xs:7,onClick:t},m.a.createElement("p",{className:"mb-0 text-truncate"},r," ",l),m.a.createElement("p",{className:"mb-0 text-muted font-small-3"},s)),m.a.createElement(i.A,{xs:2},m.a.createElement(b.Trash,{size:18,onClick:n,className:"float-right mt-1 mb-2 width-25 d-block",style:{color:"#FF586B"}}),m.a.createElement(b.Star,{size:18,onClick:a,className:"float-right width-25 d-block",style:{color:u?"#FFC107":"#495057"}}))))},w=function(e){var t=e.active,a=e.contacts,n=e.toggleStarredContact,c=e.deleteContact,r=e.contactDetails;return m.a.createElement("div",{className:"contact-app-list"},m.a.createElement(C.a,null,m.a.createElement("div",{id:"users-list"},m.a.createElement("ul",{className:"list-group"},a.map(function(e){return m.a.createElement(O,Object.assign({key:e.id,active:t},e,{onStarredClick:function(){return n(e.id)},onDeleteClick:function(){return c(e.id)},onContactClick:function(){return r(e.id)}}))})))))};w.prototype={contacts:A.a.arrayOf(A.a.shape({id:A.a.number.isRequired,firstname:A.a.string.isRequired,lastname:A.a.string,image:A.a.string,department:A.a.string,company:A.a.string,phone:A.a.number.isRequired,email:A.a.string.isRequired,address:A.a.string,notes:A.a.string,frequentlycontacted:A.a.bool.isRequired,starred:A.a.bool.isRequired,deleted:A.a.bool.isRequired}).isRequired).isRequired,toggleStarredContact:A.a.func.isRequired,deleteContact:A.a.func.isRequired,contactDetails:A.a.func.isRequired};var T=w,k=function(e,t,a){switch(t){case E.c.SHOW_ALL:return e.filter(function(e){return!e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});case E.c.FREQUENT_CONTACT:return e.filter(function(e){return e.frequentlycontacted&&!e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});case E.c.STARRED_CONTACT:return e.filter(function(e){return e.starred&&!e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});case E.c.ENGINEERING_DEPARTMENT_CONTACT:return e.filter(function(e){return"Engineering"===e.department&&!e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});case E.c.SUPPORT_DEPARTMENT_CONTACT:return e.filter(function(e){return"Support"===e.department&&!e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});case E.c.SALES_DEPARTMENT_CONTACT:return e.filter(function(e){return"Sales"===e.department&&!e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});case E.c.DELETED_CONTACT:return e.filter(function(e){return e.deleted&&e.firstname.toLocaleLowerCase().concat(" ").concat(e.lastname.toLocaleLowerCase()).includes(a.toLocaleLowerCase())});default:throw new Error("Unknown filter: "+t)}},R=Object(d.connect)(function(e,t){return{contacts:k(e.contactApp.contacts,e.contactApp.contactsVisibilityFilter,e.contactApp.contactsSearch),active:e.contactApp.contactsDetails}},function(e,t){return{toggleStarredContact:function(t){return e(Object(E.h)(t))},deleteContact:function(t){return e(Object(E.e)(t))},contactDetails:function(t){return e(Object(E.b)(t))}}})(T),j=function(e){var t=e.selectedContacts,a=e.onEditClick,n=e.editContactFlag,c=e.onChange;return m.a.createElement(s.Fragment,null,t?m.a.createElement("div",{className:"contact-app-content-detail"},m.a.createElement(i.kb,null,m.a.createElement(i.A,{className:"text-right"},m.a.createElement(i.e,{className:"btn-outline-success mr-1 mt-1",size:"sm",onClick:a},n?m.a.createElement(b.Check,{size:16}):m.a.createElement(b.Edit2,{size:16})))),m.a.createElement(C.a,null,m.a.createElement(i.U,null,m.a.createElement(i.U,{left:!0,href:"#"},m.a.createElement(i.U,{object:!0,src:t.image,alt:"Generic placeholder image",className:"img-fluid rounded-circle"})),m.a.createElement(i.U,{body:!0},m.a.createElement(i.U,{heading:!0},t.firstname," ",t.lastname),t.department)),m.a.createElement(i.nb,{responsive:!0,borderless:!0,size:"sm",className:"mt-4"},m.a.createElement("tbody",null,m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"First Name"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"firstName",id:"firstName",defaultValue:t.firstname,onChange:function(e){return c(t.id,"firstname",e.target.value)}}):": "+t.firstname)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Last Name"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"lastName",id:"lastName",defaultValue:t.lastname,onChange:function(e){return c(t.id,"lastname",e.target.value)}}):": "+t.lastname)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Company"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"company",id:"company",defaultValue:t.company,onChange:function(e){return c(t.id,"company",e.target.value)}}):": "+t.company)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Department:"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"department",id:"department",defaultValue:t.department,onChange:function(e){return c(t.id,"department",e.target.value)}}):": "+t.department)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Email"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"email",id:"email",defaultValue:t.email,onChange:function(e){return c(t.id,"email",e.target.value)}}):": "+t.email)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Phone"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"phone",id:"phone",defaultValue:t.phone,onChange:function(e){return c(t.id,"phone",e.target.value)}}):": "+t.phone)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Address"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"address",id:"address",defaultValue:t.address,onChange:function(e){return c(t.id,"address",e.target.value)}}):": "+t.address)),m.a.createElement("tr",{className:"d-flex"},m.a.createElement("td",{className:"col-3 text-bold-400"},"Note"),m.a.createElement("td",{className:"col-9"},n?m.a.createElement(i.K,{type:"text",name:"notes",id:"notes",defaultValue:t.notes,onChange:function(e){return c(t.id,"notes",e.target.value)}}):": "+t.notes)))))):m.a.createElement("div",{className:"row h-100"},m.a.createElement("div",{className:"col-sm-12 my-auto"},m.a.createElement("div",{className:"text-center"},m.a.createElement(b.MessageSquare,{size:84,color:"#ccc",className:"pb-3"}),m.a.createElement("h4",null,"Please select a contact to show details.")))))};j.prototype={selectedContacts:A.a.arrayOf(A.a.shape({id:A.a.number.isRequired,firstname:A.a.string.isRequired,lastname:A.a.string,image:A.a.string,department:A.a.string,company:A.a.string,phone:A.a.number.isRequired,email:A.a.string.isRequired,address:A.a.string,notes:A.a.string,frequentlycontacted:A.a.bool.isRequired,starred:A.a.bool.isRequired,deleted:A.a.bool.isRequired}).isRequired).isRequired};var S=j,q=Object(d.connect)(function(e,t){return{selectedContacts:e.contactApp.contacts[e.contactApp.contactsDetails],editContactFlag:e.contactApp.editContact}},function(e){return{onEditClick:function(){return e(Object(E.f)())},onChange:function(t,a,n){return e(Object(E.i)(t,a,n))}}})(S),P=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement("div",{className:"contact-application"},m.a.createElement("div",{className:"content-overlay"}),m.a.createElement(h,null),m.a.createElement(i.kb,{className:"contact-app-content"},m.a.createElement("div",{className:"contact-app-content-area w-100"},m.a.createElement("div",{className:"contact-app-list-mails p-0"},m.a.createElement(L,null),m.a.createElement(R,null)),m.a.createElement("div",{className:"contact-app-mail-content d-none d-md-block"},m.a.createElement(q,null))))))}}]),t}(s.Component);t.default=P}}]);
//# sourceMappingURL=16.f0312177.chunk.js.map
(this["webpackJsonpeunomia-frontend"]=this["webpackJsonpeunomia-frontend"]||[]).push([[0],{546:function(e,t,n){},548:function(e,t,n){},549:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){},552:function(e,t,n){},555:function(e,t,n){},556:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(1),i=n.n(a),o=n(40),r=n.n(o),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,559)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))},l=n(77),d=n(24),j=n(86),h=n(174),b=Object(h.b)({name:"settings",initialState:{show:!1},reducers:{close:function(e){e.show=!1},toggle:function(e){e.show=!0}}}),u=b.actions,p=u.close,x=u.toggle,O=function(e){return e.settings.show},m=b.reducer,v=Object(h.a)({reducer:{settings:m}}),g=n(155),f=n(156),k=n(61),y=n(177),C=n(172),S=n(288),w=n(21),I=n(308),B=n(111),E=n.n(B),A=(n(546),function(e){var t=e.onSelect,n=e.activeKey,a=e.appearance,i=Object(j.b)();return Object(c.jsxs)(S.a,{appearance:a,style:{boxShadow:"0px 3px 5px 0px rgba(15,19,26,0.5)",backgroundColor:"#0F131A"},children:[Object(c.jsx)(S.a.Header,{style:{padding:"4px 20px",margin:0,display:"inline-block"},className:"navbar-brand logo",children:Object(c.jsxs)(l.b,{to:"/eunomia-frontend/home",children:[Object(c.jsx)("img",{alt:"logo",src:"".concat("/eunomia-frontend","/logo.svg"),width:"50",height:"50",className:"d-inline-block align-top"})," "]})}),Object(c.jsxs)(S.a.Body,{children:[Object(c.jsxs)(E.a,{appearance:"subtle",onSelect:t,activeKey:n,children:[Object(c.jsx)(E.a.Item,{componentClass:l.b,to:"/eunomia-frontend/home",eventKey:"1",icon:Object(c.jsx)(w.a,{icon:"home"}),children:"Home"}),Object(c.jsx)(E.a.Item,{componentClass:l.b,to:"/eunomia-frontend/private-tasks",eventKey:"2",icon:Object(c.jsx)(w.a,{icon:"list"}),children:"Private Tasks"}),Object(c.jsx)(E.a.Item,{componentClass:l.b,to:"/eunomia-frontend/group-tasks",eventKey:"3",icon:Object(c.jsx)(w.a,{icon:"list"}),children:"Group Tasks"}),Object(c.jsx)(E.a.Item,{componentClass:l.b,to:"/eunomia-frontend/group-leaderboard",eventKey:"4",icon:Object(c.jsx)(w.a,{icon:"star"}),children:"Group Leaderboard"})]}),Object(c.jsx)(I.a,{pullRight:!0,onSelect:function(){return i(x())},children:Object(c.jsx)(I.a.Item,{icon:Object(c.jsx)(w.a,{icon:"cog"})})})]})]})}),K=function(e){Object(y.a)(n,e);var t=Object(C.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).handleSelect=e.handleSelect.bind(Object(k.a)(e)),e.state={activeKey:"1"},e}return Object(f.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.activeKey;return Object(c.jsx)("div",{className:"nav-wrapper av-background",children:Object(c.jsx)(A,{appearance:"subtle",activeKey:e,onSelect:this.handleSelect})})}}]),n}(a.Component),F=n(311),N=n(32);n(548);function T(){var e=Object(j.b)(),t=Object(j.c)(O);return Object(c.jsx)("div",{children:Object(c.jsxs)(F.a,{show:t,onHide:function(){return e(p())},placement:"left",size:"xs",children:[Object(c.jsx)(F.a.Header,{children:Object(c.jsx)(F.a.Title,{children:"Settings"})}),Object(c.jsx)(F.a.Body,{}),Object(c.jsx)(F.a.Footer,{children:Object(c.jsx)(N.a,{onClick:function(){return e(p())},appearance:"subtle",style:{margin:"15px 0px"},children:"Done"})})]})})}var D=n.p+"static/media/logo.3b2b429f.svg";n(549);function R(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(T,{}),Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:D,className:"App-logo",alt:"logo"}),"Eunomia WG-Tracker"]})]})}var H=n(181),U=n(225),W=n(307),L=n(292),G=n(68),P=n(309),Y=n(310),z=n(154),J=(n(550),{border:"2px solid #3C3F43",padding:10}),q={border:"2px solid #3C3F43",margin:"5px 0"},M={backgroundColor:"#34C3FF",height:5,margin:"5px 0",position:"default"},Q={backgroundColor:"#292D33",height:5,margin:"5px 0"},V={display:"flex",justifyContent:"center",alignItems:"center",height:"60px"},X={flexDirection:"column",alignItems:"flex-start",overflow:"hidden"},Z={fontSize:"0.666em",color:"#97969B",fontWeight:"lighter",paddingBottom:5},$={paddingTop:5},_={paddingBottom:5,whiteSpace:"nowrap",fontWeight:500,color:"white"},ee={paddingBottom:5,whiteSpace:"nowrap",fontWeight:500,textDecoration:"line-through",color:"#292D33"},te={marginBottom:10},ne=function(e){Object(y.a)(n,e);var t=Object(C.a)(n);function n(e){var c,a=e.showUser;return Object(g.a)(this,n),(c=t.call(this)).showUser=a,c.handleSortEnd=c.handleSortEnd.bind(Object(k.a)(c)),c.handleRemoveClick=c.handleRemoveClick.bind(Object(k.a)(c)),c.handleEditClick=c.handleEditClick.bind(Object(k.a)(c)),c.handleAddClick=c.handleAddClick.bind(Object(k.a)(c)),c.state={data:[{title:"Hong Kong independent travel",icon:"image",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!1},{title:"Celebration of the Mid-Autumn festival",icon:"image",creator:"Daibiao",date:"2017.10.13 14:50",checked:!1},{title:"Live to play basketball",icon:"film",creator:"Bidetoo",date:"2017.10.13 14:50",checked:!1},{title:"2018 the legislature meeting broadcast live",icon:"film",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!1}]},c}return Object(f.a)(n,[{key:"handleSortEnd",value:function(e){var t=e.oldIndex,n=e.newIndex;this.setState((function(e){var c=e.data,a=Object(U.a)(c);return t===n?a[t].checked=!a[t].checked:a.splice(n,0,a.splice(t,1)[0]),{data:a}}))}},{key:"handleRemoveClick",value:function(e){var t=e.nativeEvent.target.parentNode.attributes.index.value;this.setState((function(e){var n=e.data;return n.splice(t,1),{data:n}}))}},{key:"handleEditClick",value:function(e){console.log(e)}},{key:"handleAddClick",value:function(){var e=document.getElementById("input").value;if(e){var t={title:e,icon:"image",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!1};this.setState((function(e){var n=e.data,c=Object(U.a)(n);return c.push(t),{data:c}})),document.getElementById("input").value=""}}},{key:"render",value:function(){var e=this,t=this.state.data;return Object(c.jsxs)(W.a,{hover:!0,bordered:!0,sortable:!0,onSort:this.handleSortEnd,style:J,children:[Object(c.jsx)("div",{children:Object(c.jsxs)(L.a,{style:te,children:[Object(c.jsx)(G.a,{id:"input",placeholder:"Add Task"}),Object(c.jsx)(L.a.Button,{onClick:this.handleAddClick,appearance:"link",color:"green",children:Object(c.jsx)(w.a,{icon:"plus-square"})})]})}),t.map((function(t,n){return Object(c.jsxs)(W.a.Item,{index:n,style:q,children:[Object(c.jsx)("div",{style:t.checked?Q:M}),Object(c.jsxs)(P.a,{children:[Object(c.jsxs)(P.a.Item,{colspan:20,style:Object(H.a)(Object(H.a)({},V),X),children:[Object(c.jsx)("div",{style:t.checked?ee:_,children:t.title}),Object(c.jsxs)("div",{style:Z,children:[Object(c.jsxs)("div",{children:[e.showUser?Object(c.jsx)(w.a,{icon:"user-circle-o",style:{paddingRight:5}}):null,e.showUser?" ".concat(t.creator):null]}),Object(c.jsx)("div",{style:$,children:t.date})]})]}),Object(c.jsx)(P.a.Item,{colspan:4,style:Object(H.a)({},V),children:Object(c.jsxs)(Y.a,{children:[Object(c.jsx)(z.a,{index:n,onClick:e.handleEditClick,appearance:"link",icon:Object(c.jsx)(w.a,{icon:"edit"})}),Object(c.jsx)(z.a,{index:n,onClick:e.handleRemoveClick,appearance:"link",color:"red",icon:Object(c.jsx)(w.a,{icon:"close"})})]})})]})]},t.title)}))]})}}]),n}(i.a.Component),ce=(n(551),{margin:"3em auto",maxWidth:"75%"});function ae(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(T,{}),Object(c.jsx)("div",{style:ce,children:Object(c.jsx)(ne,{showUser:!0})})]})}n(552);var ie=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(j.a,{store:v,children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(K,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/eunomia-frontend/private-tasks",children:Object(c.jsx)(ae,{})}),Object(c.jsx)(d.a,{path:"/",children:Object(c.jsx)(R,{})})]})]})})})};n(553),n(554),n(555);r.a.render(Object(c.jsx)(ie,{}),document.getElementById("root")),s()}},[[556,1,2]]]);
//# sourceMappingURL=main.26c1bb1c.chunk.js.map
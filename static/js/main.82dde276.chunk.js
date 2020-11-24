(this["webpackJsonpeunomia-frontend"]=this["webpackJsonpeunomia-frontend"]||[]).push([[0],{580:function(e,t,n){},582:function(e,t,n){},583:function(e,t,n){},584:function(e,t,n){},585:function(e,t,n){},595:function(e,t,n){},596:function(e,t,n){},597:function(e,t,n){},598:function(e,t,n){},599:function(e,t,n){},600:function(e,t,n){},603:function(e,t,n){},604:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(1),r=n.n(i),c=n(50),o=n.n(c),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,615)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},l=n(72),d=n(28),u=n(101),h=n(192),j=Object(h.b)({name:"settings",initialState:{show:!1},reducers:{close:function(e){e.show=!1},toggle:function(e){e.show=!0}}}),b=j.actions,p=b.close,m=b.toggle,f=function(e){return e.settings.show},x=j.reducer,O=Object(h.a)({reducer:{settings:x}}),g=n(39),v=n(40),y=n(30),k=n(42),C=n(41),S=n(311),w=n(24),E=n(334),F=n(242),B=n.n(F),P=(n(580),function(e){var t=e.onSelect,n=e.activeKey,i=e.appearance,r=e.navItems,c=Object(u.b)();return Object(a.jsxs)(S.a,{appearance:i,style:{boxShadow:"0px 3px 5px 0px rgba(15,19,26,0.5)",backgroundColor:"#0F131A"},children:[Object(a.jsx)(S.a.Header,{style:{padding:"4px 20px",margin:0,display:"inline-block"},className:"navbar-brand logo",children:Object(a.jsxs)(l.b,{to:"/eunomia-frontend/",children:[Object(a.jsx)("img",{alt:"logo",src:"".concat("/eunomia-frontend","/logo.svg"),width:"50",height:"50",className:"d-inline-block align-top"})," "]})}),Object(a.jsxs)(S.a.Body,{children:[Object(a.jsx)(B.a,{appearance:"subtle",onSelect:t,activeKey:n,children:r.map((function(e){return Object(a.jsx)(B.a.Item,{componentClass:l.b,to:e.to,eventKey:e.key,icon:Object(a.jsx)(w.a,{icon:e.icon}),children:e.name},e.key)}))}),Object(a.jsx)(E.a,{pullRight:!0,onSelect:function(){return c(m())},children:Object(a.jsx)(E.a.Item,{icon:Object(a.jsx)(w.a,{icon:"cog"})})})]})]})}),T=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this)).handleSelect=a.handleSelect.bind(Object(y.a)(a)),a.state={activeKey:"1",navItems:e.navItems},a}return Object(v.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state,t=e.activeKey,n=e.navItems;return Object(a.jsx)("div",{className:"nav-wrapper av-background",children:Object(a.jsx)(P,{navItems:n,appearance:"subtle",activeKey:t,onSelect:this.handleSelect})})}}]),n}(i.Component),I=n(340),A=n(37);n(582);function D(){var e=Object(u.b)(),t=Object(u.c)(f);return Object(a.jsx)("div",{children:Object(a.jsxs)(I.a,{show:t,onHide:function(){return e(p())},placement:"left",size:"xs",children:[Object(a.jsx)(I.a.Header,{children:Object(a.jsx)(I.a.Title,{children:"Settings"})}),Object(a.jsx)(I.a.Body,{}),Object(a.jsx)(I.a.Footer,{children:Object(a.jsx)(A.a,{onClick:function(){return e(p())},appearance:"subtle",style:{margin:"15px 0px"},children:"Done"})})]})})}var R=n.p+"static/media/logo.3b2b429f.svg";n(583);function q(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,{}),Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:R,className:"App-logo",alt:"logo"}),"Eunomia WG-Tracker"]})]})}var V=n(49),N=n(195),L=(n(584),n(344)),W=n(313),K=n(342),H=n(343),U=n(341),z=n(337),M=n(171),Y=L.a.Types.StringType,G=L.a.Model({name:Y().isRequired("This field is required."),email:Y().isRequired("This field is required.").isEmail("Please enter a valid email address."),password:Y().isRequired("This field is required."),verifyPassword:Y().isRequired("This field is required.").addRule((function(e,t){return e===t.password}),"The two passwords do not match")}),J=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.label,i=e.accepter,r=Object(N.a)(e,["name","label","accepter"]);return Object(a.jsxs)(W.a,{children:[Object(a.jsxs)(K.a,{style:{textAlign:"left",padding:0,color:"#97969B"},children:[n," "]}),Object(a.jsx)(H.a,Object(V.a)({name:t,accepter:i},r))]})}}]),n}(r.a.PureComponent),Q=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={formValue:{name:"",email:"",password:"",verifyPassword:""},formError:{}},a.handleSubmit=a.handleSubmit.bind(Object(y.a)(a)),a}return Object(v.a)(n,[{key:"handleSubmit",value:function(){var e=this.state.formValue;this.form.check()?console.log(e,"Form Value"):console.error("Form Error")}},{key:"render",value:function(){var e=this,t=this.state.formValue;return Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{layout:"horizontal",style:Object(V.a)(Object(V.a)({},{margin:"50px auto",padding:"15px",border:"2px solid #292D33",borderRadius:"15px",boxShadow:"0px 0px 22px 1px rgba(15,19,26,0.75)"}),{},{maxWidth:345}),ref:function(t){return e.form=t},onChange:function(t){e.setState({formValue:t})},onCheck:function(t){e.setState({formError:t})},formValue:t,model:G,children:[Object(a.jsx)("h4",{children:" Sign Up for Eunomia "}),Object(a.jsx)("hr",{}),Object(a.jsx)(J,{name:"name",label:"Full Name",autoComplete:"off"}),Object(a.jsx)(J,{name:"email",label:"Email Address"}),Object(a.jsx)(J,{name:"password",label:"Password",type:"password"}),Object(a.jsx)(J,{name:"verifyPassword",label:"Verify Password",type:"password"}),Object(a.jsxs)("p",{style:{color:"#97969B",paddingBottom:20},children:["With Sign Up you accept the",Object(a.jsx)("a",{href:"#",children:" Terms of Use"})," ","and",Object(a.jsx)("a",{href:"#",children:" Privacy Policy"}),"."]}),Object(a.jsx)(z.a,{style:{alignContent:"left"},children:Object(a.jsx)(M.a,{block:!0,appearance:"ghost",onClick:this.handleSubmit,icon:Object(a.jsx)(w.a,{className:"fill-color",icon:"user-plus",size:"lg"}),children:"Join Now"})}),Object(a.jsxs)("p",{style:{color:"#97969B",paddingTop:20},children:["Already have an account?"," ",Object(a.jsx)(l.b,{to:"/eunomia-frontend/login",style:{color:"white",textDecoration:"underline"},children:"Login here"}),"."]})]})})}}]),n}(r.a.Component),X=(n(585),L.a.Types.StringType),Z=L.a.Model({email:X().isRequired("This field is required.").isEmail("Please enter a valid email address."),password:X().isRequired("This field is required.")}),$=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.label,i=e.accepter,r=Object(N.a)(e,["name","label","accepter"]);return Object(a.jsxs)(W.a,{children:[Object(a.jsxs)(K.a,{style:{textAlign:"left",padding:0,color:"#97969B"},children:[n," "]}),Object(a.jsx)(H.a,Object(V.a)({name:t,accepter:i},r))]})}}]),n}(r.a.PureComponent),_=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={formValue:{email:"",password:""},formError:{}},a.handleSubmit=a.handleSubmit.bind(Object(y.a)(a)),a}return Object(v.a)(n,[{key:"handleSubmit",value:function(){var e=this.state.formValue;this.form.check()?console.log(e,"Form Value"):console.error("Form Error")}},{key:"render",value:function(){var e=this,t=this.state.formValue;return Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{layout:"horizontal",style:Object(V.a)(Object(V.a)({},{margin:"50px auto",padding:"15px",border:"2px solid #292D33",borderRadius:"15px",boxShadow:"0px 0px 22px 1px rgba(15,19,26,0.75)"}),{},{maxWidth:345}),ref:function(t){return e.form=t},onChange:function(t){e.setState({formValue:t})},onCheck:function(t){e.setState({formError:t})},formValue:t,model:Z,children:[Object(a.jsx)("h4",{children:" Login for Eunomia "}),Object(a.jsx)("hr",{}),Object(a.jsx)($,{name:"email",label:"Email Address"}),Object(a.jsx)($,{name:"password",label:"Password",type:"password"}),Object(a.jsx)(z.a,{style:{alignContent:"left"},children:Object(a.jsx)(A.a,{block:!0,appearance:"ghost",onClick:this.handleSubmit,children:"Login"})}),Object(a.jsxs)("p",{style:{color:"#97969B",paddingTop:20},children:["Not registered on Eunomia?"," ",Object(a.jsx)(l.b,{to:"/eunomia-frontend/register",style:{color:"white",textDecoration:"underline"},children:"Register here"}),"."]})]})})}}]),n}(r.a.Component),ee=n(144),te=n(339),ne=n(335),ae=n(333),ie=n(336),re=n(317),ce=n(82),oe=n(338),se=n(367),le=n.n(se),de=n(372),ue={padding:5,margin:20,maxWidth:400,width:400},he={borderLeft:"1px solid #292D33",borderRight:"1px solid #292D33",margin:"5px 0"},je={backgroundColor:"#34C3FF",height:5,margin:"5px 0",position:"default"},be={backgroundColor:"#292D33",height:5,margin:"5px 0"},pe={display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"60px"},me={flexDirection:"column",alignItems:"flex-start",overflow:"hidden"},fe={fontSize:"0.666em",color:"#97969B",fontWeight:"lighter",paddingBottom:5},xe={paddingTop:5},Oe={paddingBottom:5,whiteSpace:"nowrap",fontWeight:500,color:"white"},ge={paddingBottom:5,whiteSpace:"nowrap",fontWeight:500,textDecoration:"line-through",color:"#292D33"},ve={marginBottom:10},ye=(n(595),ne.a.Line);function ke(e,t,n){te.a[t]({title:n,placement:e})}var Ce=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(e){var a,i=e.showUser,r=e.showDate,c=e.id,o=e.data;return Object(g.a)(this,n),(a=t.call(this)).handleSortEnd=a.handleSortEnd.bind(Object(y.a)(a)),a.handleRemoveClick=a.handleRemoveClick.bind(Object(y.a)(a)),a.handleEdit=a.handleEdit.bind(Object(y.a)(a)),a.handleAddClick=a.handleAddClick.bind(Object(y.a)(a)),a.decline=a.decline.bind(Object(y.a)(a)),a.increase=a.increase.bind(Object(y.a)(a)),a.handleChangeComplete=a.handleChangeComplete.bind(Object(y.a)(a)),a.state={status:null,percent:0,color:"#3385ff",tagColor:"#34C3FF",data:o},a.showUser=i,a.showDate=r,a.id=c,a.percentStep=10,a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.updatePercent()}},{key:"handleSortEnd",value:function(e){var t=e.oldIndex,n=e.newIndex,a=this.state.data,i=Object(ee.a)(a);t===n?i[t].checked?(i[t].checked=!1,this.decline()):(i[t].checked=!0,this.increase()):i.splice(n,0,i.splice(t,1)[0]),this.setState((function(){return{data:i}}))}},{key:"handleRemoveClick",value:function(e){var t=this,n=e.nativeEvent.target.parentNode.attributes.index.value;this.setState((function(e){var t=e.data;return t.splice(n,1),{data:t}}),(function(){return t.updatePercent()})),ke("topEnd","success","Successfully deleted task"),this.updatePercent()}},{key:"handleAddClick",value:function(){var e=this,t=document.getElementById(this.id).value;if(t){var n={title:t,icon:"image",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!1,tagColor:this.state.tagColor};this.setState((function(e){var t=e.data,a=Object(ee.a)(t);return a.push(n),{data:a}}),(function(){return e.updatePercent()})),document.getElementById(this.id).value="",ke("topEnd","success","Successfully added task")}}},{key:"handleEdit",value:function(e){var t=e.currentTarget.attributes.index.value,n=e.target.value;this.state.data[t].title=n}},{key:"handleChangeComplete",value:function(e){this.setState({tagColor:e.hex})}},{key:"updatePercent",value:function(){var e=this.state.data;if(e.length){this.percentStep=100/e.length;var t=0;e.forEach((function(e){e.checked&&(t+=1)})),this.changePercent(t*this.percentStep)}else this.changePercent(100)}},{key:"changePercent",value:function(e,t){t=t||function(){};var n=e<0?0:e>100?100:e;this.setState({percent:n,status:100===n?"success":null,color:100===n?"#52c41a":"#3385ff"},t())}},{key:"decline",value:function(){this.changePercent(this.state.percent-this.percentStep)}},{key:"increase",value:function(){this.changePercent(this.state.percent+this.percentStep)}},{key:"render",value:function(){var e=this,t=this.state,n=t.percent,i=t.color,r=t.status,c=t.data;return Object(a.jsxs)(ae.a,{hover:!0,bordered:!0,sortable:!0,onSort:this.handleSortEnd,style:ue,children:[Object(a.jsxs)(ie.a,{children:[Object(a.jsx)(ie.a.Item,{colspan:16,children:Object(a.jsx)(ye,{percent:Math.round(n),strokeColor:i,status:r})}),Object(a.jsx)(ie.a.Item,{colspan:8,style:{padding:"10px 0"},children:Object(a.jsx)(de.a,{circleSize:14,circleSpacing:7,colors:["#B80000","#DB3E00","#FF9800","#008B02","#34C3FF","#673AB7"],onChangeComplete:this.handleChangeComplete})})]}),Object(a.jsx)("div",{children:Object(a.jsxs)(re.a,{style:ve,children:[Object(a.jsx)(ce.a,{id:this.id,placeholder:"Add Task",autoComplete:"off"}),Object(a.jsx)(re.a.Button,{onClick:this.handleAddClick,appearance:"link",color:"green",children:Object(a.jsx)(w.a,{icon:"plus-square"})})]})}),c.map((function(t,n){return Object(a.jsxs)(ae.a.Item,{index:n,style:he,children:[Object(a.jsx)("div",{style:t.checked?be:Object(V.a)(Object(V.a)({},je),{},{backgroundColor:c[n].tagColor})}),Object(a.jsxs)(ie.a,{children:[Object(a.jsxs)(ie.a.Item,{colspan:21,style:Object(V.a)(Object(V.a)({},pe),me),children:[Object(a.jsx)(le.a,{spellCheck:"false",style:t.checked?ge:Oe,innerRef:e.contentEditable,html:t.title,index:n,disabled:!1,onChange:e.handleEdit}),Object(a.jsxs)("div",{style:fe,children:[Object(a.jsxs)("div",{children:[e.showUser?Object(a.jsx)(w.a,{icon:"user-o",style:{paddingRight:5}}):null,e.showUser?" ".concat(t.creator):null]}),e.showDate?Object(a.jsx)("div",{style:xe,children:t.date}):null]})]}),Object(a.jsx)(ie.a.Item,{colspan:3,style:Object(V.a)({},pe),children:Object(a.jsx)(oe.a,{children:Object(a.jsx)(M.a,{index:n,onClick:e.handleRemoveClick,appearance:"link",color:"red",icon:Object(a.jsx)(w.a,{icon:"close"})})})})]})]},t.title)}))]})}}]),n}(r.a.Component),Se=(n(596),{margin:"3em 3em",maxWidth:"75%",display:"flex",justifyContent:"left"}),we=[{title:"Hong Kong independent travel",icon:"image",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!0,tagColor:"#34C3FF"},{title:"Celebration of the Mid-Autumn festival",icon:"image",creator:"Daibiao",date:"2017.10.13 14:50",checked:!1,tagColor:"#FF9800"},{title:"Live to play basketball",icon:"film",creator:"Bidetoo",date:"2017.10.13 14:50",checked:!1,tagColor:"#34C3FF"},{title:"2018 the legislature meeting broadcast live",icon:"film",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!1,tagColor:"#673AB7"}];r.a.Component,n(597);var Ee={margin:"3em auto",maxWidth:"75%",display:"flex",justifyContent:"center"},Fe=[{title:"Hong Kong independent travel",icon:"image",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!0,tagColor:"#34C3FF"},{title:"Celebration of the Mid-Autumn festival",icon:"image",creator:"Daibiao",date:"2017.10.13 14:50",checked:!1,tagColor:"#FF9800"},{title:"Live to play basketball",icon:"film",creator:"Bidetoo",date:"2017.10.13 14:50",checked:!1,tagColor:"#34C3FF"},{title:"2018 the legislature meeting broadcast live",icon:"film",creator:"Yvnonne",date:"2017.10.13 14:50",checked:!1,tagColor:"#673AB7"}],Be=(r.a.Component,n(332)),Pe=(n(598),Be.a.Column),Te=Be.a.HeaderCell,Ie=Be.a.Cell;r.a.Component,n(599);n(600);var Ae=[{to:"/eunomia-frontend/",key:"1",icon:"home",name:"Home"},{to:"/eunomia-frontend/private-tasks",key:"2",icon:"list",name:"Private Tasks"},{to:"/eunomia-frontend/group-tasks",key:"3",icon:"list",name:"Group Tasks"},{to:"/eunomia-frontend/group-leaderboard",key:"4",icon:"star",name:"Group Leaderboard"}];var De=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u.a,{store:O,children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/eunomia-frontend/private-tasks",render:function(){return Object(a.jsx)(d.a,{to:"/eunomia-frontend/login"})}}),Object(a.jsx)(d.b,{path:"/eunomia-frontend/group-tasks",render:function(){return Object(a.jsx)(d.a,{to:"/eunomia-frontend/login"})}}),Object(a.jsx)(d.b,{path:"/eunomia-frontend/group-leaderboard",render:function(){return Object(a.jsx)(d.a,{to:"/eunomia-frontend/login"})}}),Object(a.jsx)(d.b,{path:"/eunomia-frontend/register",render:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(Q,{})})}}),Object(a.jsx)(d.b,{path:"/eunomia-frontend/login",render:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(_,{})})}}),Object(a.jsx)(d.b,{path:"/eunomia-frontend/",render:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(T,{navItems:Ae}),Object(a.jsx)(q,{})]})}})]})})})})};n(601),n(602),n(603);o.a.render(Object(a.jsx)(De,{}),document.getElementById("root")),s()}},[[604,1,2]]]);
//# sourceMappingURL=main.82dde276.chunk.js.map
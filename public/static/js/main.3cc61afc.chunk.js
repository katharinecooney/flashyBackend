(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(66)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=a(70),s=a(2),i=a(3),u=a(5),p=a(4),m=a(6),d=a(72),h=a(71),g=a(16),f=a(69),b=a(13),E=a.n(b),v=new(function(){function e(){Object(s.a)(this,e),this.auth=E.a.create({baseURL:"https://flashyapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.firstName,r=e.lastName,o=e.email;return console.log(e),this.auth.post("/auth/signup",{username:t,password:a,firstName:n,lastName:r,email:o}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),j=r.a.createContext(),O=j.Consumer,k=j.Provider,N=function(e){return function(t){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(O,null,function(a){return r.a.createElement(e,Object.assign({login:a.login,signup:a.signup,user:a.user,logout:a.logout,isLoggedin:a.isLoggedin},t.props))})}}]),a}(n.Component)},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.password,r=e.firstName,o=e.lastName,c=e.email;v.signup({username:t,password:n,firstName:r,lastName:o,email:c}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;a.setState({message:t.statusMessage})})},a.login=function(e){var t=e.username,n=e.password;v.login({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(){})},a.logout=function(){v.logout().then(function(){a.setState({isLoggedin:!1,user:null})}).catch(function(){})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(k,{value:{isLoggedin:a,user:n,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(n.Component);var y=N(function(e){var t=e.component,a=e.isLoggedin,n=Object(g.a)(e,["component","isLoggedin"]);return r.a.createElement(h.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/login"})}}))});var S=N(function(e){var t=e.component,a=e.isLoggedin,n=Object(g.a)(e,["component","isLoggedin"]);return r.a.createElement(h.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(f.a,{to:"/profile/me"}):r.a.createElement(t,e)}}))}),x=a(68),w=(a(53),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement("div",{className:"homepage-content"},r.a.createElement("h1",null,"Flashy"),r.a.createElement("p",null,"Who says studying can't be social? Login or signup to start collaborating with classmates!"),r.a.createElement("div",{className:"homepage-button-container"},r.a.createElement(x.a,{className:"homepage-button",to:"/login"},r.a.createElement("button",null,"LOGIN")),r.a.createElement(x.a,{className:"homepage-button",to:"/signup"},r.a.createElement("button",null,"SIGNUP")))))}}]),t}(n.Component)),T=a(10),F=(a(54),N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",firstName:"",lastName:"",email:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,o=t.firstName,c=t.lastName,l=t.email;console.log("state",a.state),a.props.signup({username:n,password:r,firstName:o,lastName:c,email:l})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.firstName,o=e.lastName,c=e.email;return r.a.createElement("div",{className:"signup-page"},r.a.createElement("div",{className:"signup-content"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",name:"firstName",value:n,onChange:this.handleChange}),r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",name:"lastName",value:o,onChange:this.handleChange}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:c,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Signup")),r.a.createElement("p",null,"Already have account?",r.a.createElement(x.a,{to:"/login"}," Login"))))}}]),t}(n.Component))),D=(a(55),N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Login")))}}]),t}(n.Component)));var L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"ERROR | PAGE NOT FOUND"))},G=(a(56),a(57),N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.logout;return r.a.createElement("div",{className:"navbar"},r.a.createElement(x.a,{to:"/profile/me"},r.a.createElement("img",{src:"/images/user.png",alt:"profile-logo"})),r.a.createElement(x.a,{to:"/profile/me/decks"},r.a.createElement("img",{src:"/images/note.png",alt:"notes-logo"})),r.a.createElement(x.a,{to:"/profile/me/groups"},r.a.createElement("img",{src:"/images/team.png",alt:"groups-logo"})),r.a.createElement("img",{onClick:e,src:"/images/logout.png",alt:"logout-logo"}))}}]),t}(n.Component))),_=N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-banner"},r.a.createElement("h1",null,"Welcome, ",this.props.user.username)),r.a.createElement("div",{className:"profile-button-container"},r.a.createElement(x.a,{to:"/profile/me/decks"},r.a.createElement("button",{className:"profile-button"},"View Saved Flashcards")),r.a.createElement(x.a,{to:"/profile/me/groups"},r.a.createElement("button",{className:"profile-button"},"View Saved Groups"))),r.a.createElement(G,null))}}]),t}(n.Component)),A=new(function(){function e(){Object(s.a)(this,e),this.profile=E.a.create({baseURL:"https://flashyapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"listGroups",value:function(){return this.profile.get("/profile/groups").then(function(e){return e.data})}},{key:"listDecks",value:function(){return this.profile.get("/profile/decks").then(function(e){return e.data.groups})}},{key:"edit",value:function(e){var t=e.password,a=e.firstName,n=e.lastName,r=e.email;return this.profile.put("/profile/update",{firstName:a,lastName:n,email:r,password:t}).then(function(e){return e.data})}},{key:"showSingleDeck",value:function(e){return this.profile.get("/profile/".concat(e)).then(function(e){return e.data})}},{key:"deleteCard",value:function(e,t){return this.profile.delete("/profile/".concat(e,"/").concat(t,"/delete")).then(function(e){return e.data})}}]),e}()),I=(a(58),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={groups:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("MOUNTED"),A.listGroups().then(function(t){e.setState({groups:t.groups,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.groups;return console.log("the groups are",a),r.a.createElement("div",{className:"profile-groups-page"},r.a.createElement("div",{className:"profile-groups-banner"},r.a.createElement("h1",null,"View Your Groups")),r.a.createElement("div",{className:"profile-groups-container"},t?r.a.createElement("p",null,"Loading..."):a.map(function(e){var t=e.group;return r.a.createElement("div",{className:"profile-group",key:t._id},r.a.createElement("div",null,r.a.createElement(x.a,{to:"/group/"+t._id},r.a.createElement("p",null,t.school),r.a.createElement("p",null,t.subject))))}),r.a.createElement("div",{className:"profile-groups-button-container"},r.a.createElement(x.a,{to:"/group/add-group"},"Create Group"),r.a.createElement(x.a,{to:"/group/join-group"},"Join Group"))),r.a.createElement(G,null))}}]),t}(n.Component)),R=(a(59),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={groups:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];A.listDecks().then(function(a){a.forEach(function(e){t.push(e)}),console.log(t),e.setState({groups:t})})}},{key:"render",value:function(){var e=this.state.groups;return console.log(this.state),r.a.createElement("div",{className:"profile-decks"},r.a.createElement("div",{className:"profile-decks-banner"},r.a.createElement("h1",null,"View Your Decks")),r.a.createElement("div",{className:"decks-container"},e.map(function(e){var t=e.group;return r.a.createElement("div",{className:"single-deck"},r.a.createElement("div",{className:"deck-content"},r.a.createElement(x.a,{key:t._id,to:{pathname:"/profile/me/decks/"+t._id,state:{groups:e}}},"".concat(t.subject," Notes"))))})),r.a.createElement(G,null))}}]),t}(n.Component)),M=(a(60),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFlip=function(){a.setState({isFlipped:!a.state.isFlipped},console.log("handle flip",a.state))},a.handleDelete=function(){a.setState({isDeleted:!0});var e=a.props.props.match.params.id,t=a.props.card._id;A.deleteCard(e,t).then(function(){a.props.getNewDeck(e)})},a.state={isFlipped:!1,isDeleted:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isDeleted:!0},console.log("profileCard location",this.props.props.match.params.id))}},{key:"render",value:function(){var e=this,t=this.props.card;return r.a.createElement("div",null,r.a.createElement("div",{className:"single-flashcard-container",key:t._id},r.a.createElement("div",{className:this.state.isFlipped?"card-flip-motion single-flashcard":"single-flashcard"},r.a.createElement("div",{className:"single-flashcard-front"},r.a.createElement("h3",null,"QUESTION"),r.a.createElement("p",null,t.frontText),r.a.createElement("div",{className:"card-button-container"},r.a.createElement("button",{onClick:function(a){e.handleDelete(a,t._id)}},"DELETE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP"))),r.a.createElement("div",{className:"single-flashcard-back"},r.a.createElement("h3",null,"ANSWER"),r.a.createElement("p",null,t.backText),r.a.createElement("div",{className:"card-button-container"},r.a.createElement("button",{onClick:function(a){e.handleDelete(a,t._id)}},"DELETE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP"))))))}}]),t}(n.Component)),P=N(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFlip=function(){a.setState({isFlipped:!a.state.isFlipped},console.log("handle flip",a.state))},a.getNewDeck=function(e){v.me().then(function(t){console.log(t),t.groups.forEach(function(t){e===t.group._id&&(a.props.location.state.groups=t,a.setState({groups:t,loading:!1}))})})},a.state={cardContent:"",groups:null,loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.groups;v.me().then(function(a){console.log(a),a.groups.forEach(function(a){t.group._id===a.group._id&&(e.props.location.state.groups=a,e.setState({groups:a,loading:!1}))})})}},{key:"render",value:function(){var e=this;if(console.log(this.state),this.state.loading)return null;var t=this.state.groups.userDeck,a=this.state.groups.group.subject;return r.a.createElement("div",{className:"single-deck-page"},r.a.createElement("div",{className:"single-deck-banner"},r.a.createElement("h1",null,"View Your Notes for ",a)),r.a.createElement("div",{className:this.state.isFlipped?"single-container card-flip-motion":"single-container"},t.map(function(t){return r.a.createElement(M,{props:e.props,getNewDeck:e.getNewDeck,card:t})})),r.a.createElement(G,null))}}]),t}(n.Component)),U=(a(61),new(function(){function e(){Object(s.a)(this,e),this.group=E.a.create({baseURL:"https://flashyapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"joinGroup",value:function(e){return this.group.post("/group/join",e).then(function(e){return e.data})}},{key:"createGroup",value:function(e){var t=e.school,a=e.subject,n=e.passcode;return this.group.post("/group/create",{school:t,subject:a,passcode:n}).then(function(e){return e.data})}},{key:"createCard",value:function(e,t){var a=e.frontText,n=e.backText;return this.group.post("/group/".concat(t,"/card/create"),{frontText:a,backText:n}).then(function(e){return e.data})}},{key:"saveCard",value:function(e,t){return this.group.put("/group/".concat(e,"/card/").concat(t,"/save")).then(function(e){return e.data}).catch(function(e){return console.log(e)})}},{key:"updateCard",value:function(e,t,a){var n=a.frontText,r=a.backText;return this.group.put("/group/".concat(e,"/card/").concat(t,"/update"),{frontText:n,backText:r}).then(function(e){return e.data})}},{key:"viewGroup",value:function(e){return this.group.get("/group/".concat(e)).then(function(e){return e.data})}}]),e}())),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.props.match.params.id;U.createCard(a.state,t).then(function(e){console.log(e),a.setState({frontText:"",backText:""},a.props.history.push("/group/"+t))})},a.state={frontText:"",backText:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-card-page"},r.a.createElement("div",{className:"create-card-banner"},r.a.createElement("h1",null,"Create Card")),r.a.createElement("div",{className:"create-card-container"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"frontText"},"Enter Your Question"),r.a.createElement("textarea",{onChange:this.handleChange,name:"frontText",id:"frontText"}),r.a.createElement("label",{htmlFor:"backText"},"Enter Your Answer"),r.a.createElement("textarea",{onChange:this.handleChange,name:"backText",id:"backText"}),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component),Y=(a(62),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={school:"",subject:"",infoMessage:"",idMessage:"",hasCreatedGroup:!1},a.handleSubmit=function(e){e.preventDefault(),U.createGroup(a.state).then(function(e){console.log(e),a.setState({school:"",subject:"",infoMessage:"A study group for ".concat(e.subject," has been created!"),idMessage:"The passcode is ".concat(e._id,"."),hasCreatedGroup:!0},a.props.history.push({pathname:"/group/add-group-success",state:{nameOfClass:e.subject,passcode:e._id}}))})},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"create-group-page"},r.a.createElement("div",{className:"create-group-banner"},r.a.createElement("h1",null,"Create Group")),r.a.createElement("div",{className:"create-group-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"school"},"School"),r.a.createElement("input",{name:"school",type:"text",value:this.state.school,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:"subject"},"Subject"),r.a.createElement("input",{name:"subject",type:"text",value:this.state.subject,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("span",null,this.state.infoMessage),r.a.createElement("span",null,this.state.idMessage),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component)),J=(a(63),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-group-success-page"},r.a.createElement("div",{className:"create-group-success-banner"},r.a.createElement("h1",null,"A study group for ",this.props.location.state.nameOfClass," has been created! ")),r.a.createElement("div",{className:"create-group-success-container"},r.a.createElement("div",{className:"create-group-success-content"},r.a.createElement("h3",null,"The passcode is ",this.props.location.state.passcode),r.a.createElement(x.a,{to:"/group/join-group"},r.a.createElement("button",null,"Join the Group!")))))}}]),t}(n.Component)),Q=(a(64),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),U.joinGroup(a.state).then(function(e){console.log(e);var t=a.state.passcode;a.props.history.push("/group/"+t)})},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r),function(){console.log(a.state)})},a.state={passcode:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"join-group-page"},r.a.createElement("div",{className:"join-group-banner"},r.a.createElement("h1",null,"Join a Group!")),r.a.createElement("div",{className:"join-group-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"passcode"},"Enter the passcode"),r.a.createElement("input",{style:this.styles,type:"text",name:"passcode",value:this.state.passcode,onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component)),W=(a(65),N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isFlipped:!1,isCardSaved:!1},a.handleFlip=function(){a.setState({isFlipped:!a.state.isFlipped},console.log("handle flip",a.state))},a.handleSave=function(e,t){var n=a.props.props.match.params.id;U.saveCard(n,t).then(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("PROPS",this.props)}},{key:"render",value:function(){var e=this,t=this.props.card;return r.a.createElement("div",{className:"group-flashcard-container",key:t._id},r.a.createElement("div",{className:this.state.isFlipped?"card-flip-motion group-flashcard":"group-flashcard"},r.a.createElement("div",{className:"group-flashcard-front"},r.a.createElement("h3",null,"QUESTION"),r.a.createElement("p",null,t.frontText),r.a.createElement("div",{className:"card-button-container"},r.a.createElement("button",{onClick:function(a){e.handleSave(a,t._id)}},"SAVE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP"),r.a.createElement(x.a,{to:{pathname:"/group/".concat(this.props.props.match.params.id,"/card/").concat(this.props.card._id,"/update"),state:{card:t}}},r.a.createElement("button",null,"Edit")))),r.a.createElement("div",{className:"group-flashcard-back"},r.a.createElement("h3",null,"ANSWER"),r.a.createElement("p",null,t.backText),r.a.createElement("div",{className:"card-button-container"},r.a.createElement("button",{onClick:function(a){e.handleSave(a,t._id)}},"SAVE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP"),r.a.createElement(x.a,{to:{pathname:"/group/".concat(this.props.props.match.params.id,"/card/").concat(this.props.card._id,"/update"),state:{card:t}}},r.a.createElement("button",null,"Edit"))))))}}]),t}(n.Component))),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSave=function(e,t){var n=a.props.match.params.id;U.saveCard(n,t)},a.handlePassCodeReveal=function(){a.setState({isCodeRevealed:!a.state.isCodeRevealed})},a.state={groupId:"",school:"",subject:"",flashcards:[],isFlipped:!1,isCodeRevealed:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("component did mount",this.state),U.viewGroup(this.props.match.params.id).then(function(t){return e.setState({school:t.school,subject:t.subject,flashcards:t.groupDeck,groupId:t._id})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.school,n=t.subject,o=t.flashcards,c=t.groupId,l=o.length?o.map(function(t){return r.a.createElement(W,{props:e.props,card:t,key:t._id})}):r.a.createElement("div",null,"No flashcards saved");return r.a.createElement("div",{className:"single-group-page"},r.a.createElement("div",{className:"single-group-banner"},r.a.createElement("h1",null,a),r.a.createElement("h3",null,n),r.a.createElement("div",{className:"group-banner-button-container"},r.a.createElement(x.a,{to:{pathname:"/group/"+c+"/new-card"}},r.a.createElement("p",null,"Add New Card")),this.state.isCodeRevealed?r.a.createElement("p",{className:"passcode",onClick:this.handlePassCodeReveal},c):r.a.createElement("p",{onClick:this.handlePassCodeReveal},"Get Group Code"))),r.a.createElement("div",{className:this.state.isFlipped?"group-container card-flip-motion":"group-container"},r.a.createElement("div",null,l)),r.a.createElement(G,null))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(T.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.props.match.params.cardId,n=a.props.match.params.groupId;console.log("cardId ",t,"groupId",n,"card content",a.state),U.updateCard(n,t,a.state).then(function(e){console.log(e),a.setState({frontText:"",backText:""},a.props.history.push("/group/"+n))})},a.state={frontText:a.props.location.state.card.frontText,backText:a.props.location.state.card.backText},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.frontText,a=e.backText;return r.a.createElement("div",{className:"create-card-page"},r.a.createElement("div",{className:"create-card-banner"},r.a.createElement("h1",null,"Update Card")),r.a.createElement("div",{className:"create-card-container"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"frontText"},"Enter Your Question"),r.a.createElement("textarea",{value:t,onChange:this.handleChange,name:"frontText",id:"frontText"}),r.a.createElement("label",{htmlFor:"backText"},"Enter Your Answer"),r.a.createElement("textarea",{value:a,onChange:this.handleChange,name:"backText",id:"backText"}),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(d.a,null,r.a.createElement(S,{exact:!0,path:"/",component:w}),r.a.createElement(S,{exact:!0,path:"/signup",component:F}),r.a.createElement(S,{exact:!0,path:"/login",component:D}),r.a.createElement(y,{exact:!0,path:"/profile/me",component:_}),r.a.createElement(y,{exact:!0,path:"/profile/me/groups",component:I}),r.a.createElement(y,{exact:!0,path:"/profile/me/decks",component:R}),r.a.createElement(y,{exact:!0,path:"/profile/me/decks/:id",component:P}),r.a.createElement(y,{exact:!0,path:"/group/add-group",component:Y}),r.a.createElement(y,{exact:!0,path:"/group/add-group-success",component:J}),r.a.createElement(y,{exact:!0,path:"/group/join-group",component:Q}),r.a.createElement(y,{exact:!0,path:"/group/:id",component:B}),r.a.createElement(y,{exact:!0,path:"/group/:id/new-card",component:V}),r.a.createElement(y,{exact:!0,path:"/group/:groupId/card/:cardId/update",component:q}),r.a.createElement(h.a,{path:"/**",component:L})))}}]),t}(n.Component);c.a.render(r.a.createElement(l.a,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3cc61afc.chunk.js.map
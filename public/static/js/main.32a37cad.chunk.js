(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(66)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=a(70),s=a(2),i=a(3),u=a(5),p=a(4),m=a(6),h=a(72),d=a(71),g=a(16),f=a(69),b=a(13),E=a.n(b),v=new(function(){function e(){Object(s.a)(this,e),this.auth=E.a.create({baseURL:"https://flashyapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.firstName,r=e.lastName,o=e.email;return console.log(e),this.auth.post("/auth/signup",{username:t,password:a,firstName:n,lastName:r,email:o}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),j=r.a.createContext(),O=j.Consumer,y=j.Provider,k=function(e){return function(t){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(O,null,function(a){return r.a.createElement(e,Object.assign({login:a.login,signup:a.signup,user:a.user,logout:a.logout,isLoggedin:a.isLoggedin},t.props))})}}]),a}(n.Component)},N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.password,r=e.firstName,o=e.lastName,c=e.email;v.signup({username:t,password:n,firstName:r,lastName:o,email:c}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;a.setState({message:t.statusMessage})})},a.login=function(e){var t=e.username,n=e.password;v.login({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(){})},a.logout=function(){v.logout().then(function(){a.setState({isLoggedin:!1,user:null})}).catch(function(){})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(y,{value:{isLoggedin:a,user:n,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(n.Component);var C=k(function(e){var t=e.component,a=e.isLoggedin,n=Object(g.a)(e,["component","isLoggedin"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(f.a,{to:"/login"})}}))});var S=k(function(e){var t=e.component,a=e.isLoggedin,n=Object(g.a)(e,["component","isLoggedin"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(f.a,{to:"/profile/me"}):r.a.createElement(t,e)}}))}),w=a(68),x=(a(53),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement("div",{className:"homepage-content"},r.a.createElement("h1",null,"Flashy"),r.a.createElement("p",null,"Who says studying can't be social? Login or signup to start collaborating with classmates!"),r.a.createElement("div",{className:"homepage-button-container"},r.a.createElement(w.a,{className:"homepage-button",to:"/login"},r.a.createElement("button",null,"LOGIN")),r.a.createElement(w.a,{className:"homepage-button",to:"/signup"},r.a.createElement("button",null,"SIGNUP")))))}}]),t}(n.Component)),F=a(11),L=(a(54),k(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",firstName:"",lastName:"",email:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,o=t.firstName,c=t.lastName,l=t.email;console.log("state",a.state),a.props.signup({username:n,password:r,firstName:o,lastName:c,email:l})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.firstName,o=e.lastName,c=e.email;return r.a.createElement("div",{className:"signup-page"},r.a.createElement("div",{className:"signup-content"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",name:"firstName",value:n,onChange:this.handleChange}),r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",name:"lastName",value:o,onChange:this.handleChange}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:c,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Signup")),r.a.createElement("p",null,"Already have account?",r.a.createElement(w.a,{to:"/login"}," Login"))))}}]),t}(n.Component))),D=(a(55),k(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Login")))}}]),t}(n.Component)));var T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"ERROR | PAGE NOT FOUND"))},G=(a(56),a(57),k(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.logout;return r.a.createElement("div",{className:"navbar"},r.a.createElement(w.a,{to:"/profile/me"},r.a.createElement("img",{src:"/images/user.png",alt:"profile-logo"})),r.a.createElement(w.a,{to:"/profile/me/decks"},r.a.createElement("img",{src:"/images/note.png",alt:"notes-logo"})),r.a.createElement(w.a,{to:"/profile/me/groups"},r.a.createElement("img",{src:"/images/team.png",alt:"groups-logo"})),r.a.createElement("img",{onClick:e,src:"/images/logout.png",alt:"logout-logo"}))}}]),t}(n.Component))),A=k(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-banner"},r.a.createElement("h1",null,"Welcome, ",this.props.user.username)),r.a.createElement("div",{className:"profile-button-container"},r.a.createElement(w.a,{to:"/profile/me/decks"},r.a.createElement("button",{className:"profile-button"},"YOUR DECKS")),r.a.createElement(w.a,{to:"/profile/me/groups"},r.a.createElement("button",{className:"profile-button"},"YOUR GROUPS"))),r.a.createElement(G,null))}}]),t}(n.Component)),M=new(function(){function e(){Object(s.a)(this,e),this.profile=E.a.create({baseURL:"https://flashyapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"listGroups",value:function(){return this.profile.get("/profile/groups").then(function(e){return e.data})}},{key:"listDecks",value:function(){return this.profile.get("/profile/decks").then(function(e){return e.data.groups})}},{key:"edit",value:function(e){var t=e.password,a=e.firstName,n=e.lastName,r=e.email;return this.profile.put("/profile/update",{firstName:a,lastName:n,email:r,password:t}).then(function(e){return e.data})}},{key:"showSingleDeck",value:function(e){return this.profile.get("/profile/".concat(e)).then(function(e){return e.data})}},{key:"deleteCard",value:function(e,t){return this.profile.delete("/profile/".concat(e,"/").concat(t,"/delete")).then(function(e){return e.data})}}]),e}()),_=(a(58),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={groups:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.listGroups().then(function(t){e.setState({groups:t.groups,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.groups;return console.log("the groups are",a),r.a.createElement("div",{className:"profile-groups-page"},r.a.createElement("div",{className:"profile-groups-banner"},r.a.createElement("h1",null,"View Your Groups")),r.a.createElement("div",{className:"profile-groups-container"},t?r.a.createElement("p",null,"Loading..."):a.map(function(e){var t=e.group;return r.a.createElement("div",{className:"profile-group"},r.a.createElement("div",{key:t._id},r.a.createElement(w.a,{to:"/group/"+t._id},r.a.createElement("p",null,t.school),r.a.createElement("p",null,t.subject))))})),r.a.createElement("div",{className:"profile-groups-button-container"},r.a.createElement(w.a,{to:"/group/add-group"},"Create Group"),r.a.createElement(w.a,{to:"/group/join-group"},"Join Group")),r.a.createElement(G,null))}}]),t}(n.Component)),I=(a(59),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={groups:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];M.listDecks().then(function(a){a.forEach(function(e){t.push(e)}),console.log(t),e.setState({groups:t})})}},{key:"render",value:function(){var e=this.state.groups;return r.a.createElement("div",{className:"profile-decks"},r.a.createElement("div",{className:"profile-decks-banner"},r.a.createElement("h1",null,"View Your Decks")),r.a.createElement("div",{className:"decks-container"},e.map(function(e){var t=e.group;return r.a.createElement("div",{className:"single-deck"},r.a.createElement("div",{className:"deck-content"},r.a.createElement(w.a,{key:t._id,to:{pathname:"/profile/me/decks/"+t._id,state:{groups:e}}},"".concat(t.subject," Notes"))))})),r.a.createElement(G,null))}}]),t}(n.Component)),R=(a(60),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFlip=function(){a.setState({isFlipped:!a.state.isFlipped},console.log("handle flip",a.state))},a.handleDelete=function(){a.setState({isDeleted:!0});var e=a.props.props.match.params.id,t=a.props.card._id;M.deleteCard(e,t).then(function(){console.log("DELETED THE CARD")})},a.state={isFlipped:!1,isDeleted:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isDeleted:!0},console.log("profileCard location",this.props.props.match.params.id))}},{key:"render",value:function(){var e=this,t=this.props.card;return r.a.createElement("div",null,r.a.createElement("div",{className:"single-flashcard-container",key:t._id},r.a.createElement("div",{className:this.state.isFlipped?"card-flip-motion single-flashcard":"single-flashcard"},r.a.createElement("div",{className:"single-flashcard-front"},r.a.createElement("h3",null,"QUESTION"),r.a.createElement("p",null,t.frontText),r.a.createElement("button",{onClick:function(a){e.handleDelete(a,t._id)}},"DELETE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP")),r.a.createElement("div",{className:"single-flashcard-back"},r.a.createElement("h3",null,"ANSWER"),r.a.createElement("p",null,t.backText),r.a.createElement("button",{onClick:function(a){e.handleDelete(a,t._id)}},"DELETE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP")))))}}]),t}(n.Component)),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFlip=function(){a.setState({isFlipped:!a.state.isFlipped},console.log("handle flip",a.state))},a.state={cardContent:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.location.state)}},{key:"render",value:function(){var e=this,t=this.props.location.state.groups.userDeck,a=this.props.location.state.groups.group.subject;return r.a.createElement("div",{className:"single-deck-page"},r.a.createElement("div",{className:"single-deck-banner"},r.a.createElement("h1",null,"View Your Notes for ",a)),r.a.createElement("div",{className:this.state.isFlipped?"single-container card-flip-motion":"single-container"},t.map(function(t){return r.a.createElement(R,{props:e.props,card:t})})),r.a.createElement(G,null))}}]),t}(n.Component),P=(a(61),new(function(){function e(){Object(s.a)(this,e),this.group=E.a.create({baseURL:"https://flashyapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"joinGroup",value:function(e){return this.group.post("/group/join",e).then(function(e){return e.data})}},{key:"createGroup",value:function(e){var t=e.school,a=e.subject,n=e.passcode;return this.group.post("/group/create",{school:t,subject:a,passcode:n}).then(function(e){return e.data})}},{key:"createCard",value:function(e,t){var a=e.frontText,n=e.backText;return this.group.post("/group/".concat(t,"/card/create"),{frontText:a,backText:n}).then(function(e){return e.data})}},{key:"saveCard",value:function(e,t){return this.group.put("/group/".concat(e,"/card/").concat(t,"/save")).then(function(e){return e.data})}},{key:"viewGroup",value:function(e){return this.group.get("/group/".concat(e)).then(function(e){return e.data})}}]),e}())),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.props.match.params.id;P.createCard(a.state,t).then(function(e){console.log(e),a.setState({frontText:"",backText:""},a.props.history.push("/group/"+t))})},a.state={frontText:"",backText:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-card-page"},r.a.createElement("div",{className:"create-card-banner"},r.a.createElement("h1",null,"Create Card")),r.a.createElement("div",{className:"create-card-container"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"frontText"},"Enter Your Question"),r.a.createElement("textarea",{onChange:this.handleChange,name:"frontText",id:"frontText"}),r.a.createElement("label",{htmlFor:"backText"},"Enter Your Answer"),r.a.createElement("textarea",{onChange:this.handleChange,name:"backText",id:"backText"}),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component),J=(a(62),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={school:"",subject:"",infoMessage:"",idMessage:"",hasCreatedGroup:!1},a.handleSubmit=function(e){e.preventDefault(),P.createGroup(a.state).then(function(e){console.log(e),a.setState({school:"",subject:"",infoMessage:"A study group for ".concat(e.subject," has been created!"),idMessage:"The passcode is ".concat(e._id,"."),hasCreatedGroup:!0},a.props.history.push({pathname:"/group/add-group-success",state:{nameOfClass:e.subject,passcode:e._id}}))})},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"create-group-page"},r.a.createElement("div",{className:"create-group-banner"},r.a.createElement("h1",null,"Create Group")),r.a.createElement("div",{className:"create-group-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"school"},"School"),r.a.createElement("input",{name:"school",type:"text",value:this.state.school,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:"subject"},"Subject"),r.a.createElement("input",{name:"subject",type:"text",value:this.state.subject,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("span",null,this.state.infoMessage),r.a.createElement("span",null,this.state.idMessage),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component)),V=(a(63),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-group-success-page"},r.a.createElement("div",{className:"create-group-success-banner"},r.a.createElement("h1",null,"A study group for ",this.props.location.state.nameOfClass," has been created! ")),r.a.createElement("div",{className:"create-group-success-container"},r.a.createElement("div",{className:"create-group-success-content"},r.a.createElement("h3",null,"The passcode is ",this.props.location.state.passcode),r.a.createElement(w.a,{to:"/group/join-group"},r.a.createElement("button",null,"Join the Group!")))))}}]),t}(n.Component)),W=(a(64),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),P.joinGroup(a.state).then(function(e){console.log(e);var t=a.state.passcode;a.props.history.push("/group/"+t)})},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r),function(){console.log(a.state)})},a.state={passcode:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"join-group-page"},r.a.createElement("div",{className:"join-group-banner"},r.a.createElement("h1",null,"Join a Group!")),r.a.createElement("div",{className:"join-group-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"passcode"},"Enter the passcode"),r.a.createElement("input",{style:this.styles,type:"text",name:"passcode",value:this.state.passcode,onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))),r.a.createElement(G,null))}}]),t}(n.Component)),Q=(a(65),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isFlipped:!1},a.handleFlip=function(){a.setState({isFlipped:!a.state.isFlipped},console.log("handle flip",a.state))},a.handleSave=function(e,t){var n=a.props.props.match.params.id;P.saveCard(n,t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.props.match.params.id)}},{key:"render",value:function(){var e=this,t=this.props.card;return r.a.createElement("div",{className:"group-flashcard-container",key:t._id},r.a.createElement("div",{className:this.state.isFlipped?"card-flip-motion group-flashcard":"group-flashcard"},r.a.createElement("div",{className:"group-flashcard-front"},r.a.createElement("h3",null,"QUESTION"),r.a.createElement("p",null,t.frontText),r.a.createElement("button",{onClick:function(a){e.handleSave(a,t._id)}},"SAVE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP")),r.a.createElement("div",{className:"group-flashcard-back"},r.a.createElement("h3",null,"ANSWER"),r.a.createElement("p",null,t.backText),r.a.createElement("button",{onClick:function(a){e.handleSave(a,t._id)}},"SAVE"),r.a.createElement("button",{onClick:this.handleFlip},"FLIP"))))}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSave=function(e,t){var n=a.props.match.params.id;P.saveCard(n,t)},a.state={groupId:"",school:"",subject:"",flashcards:[],isFlipped:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("component did mount",this.state),P.viewGroup(this.props.match.params.id).then(function(t){return e.setState({school:t.school,subject:t.subject,flashcards:t.groupDeck,groupId:t._id})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.school,n=t.subject,o=t.flashcards,c=t.groupId,l=o.length?o.map(function(t){return r.a.createElement(Q,{props:e.props,card:t})}):r.a.createElement("div",null,"No flashcards saved");return r.a.createElement("div",{className:"single-group-page"},r.a.createElement("div",{className:"single-group-banner"},r.a.createElement("h1",null,a),r.a.createElement("h3",null,n),r.a.createElement(w.a,{to:{pathname:"/group/"+c+"/new-card"}},r.a.createElement("p",null,"Add New Card"))),r.a.createElement("div",{className:this.state.isFlipped?"group-container card-flip-motion":"group-container"},r.a.createElement("div",null,l)),r.a.createElement(G,null))}}]),t}(n.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(h.a,null,r.a.createElement(S,{exact:!0,path:"/",component:x}),r.a.createElement(S,{exact:!0,path:"/signup",component:L}),r.a.createElement(S,{exact:!0,path:"/login",component:D}),r.a.createElement(C,{exact:!0,path:"/profile/me",component:A}),r.a.createElement(C,{exact:!0,path:"/profile/me/groups",component:_}),r.a.createElement(C,{exact:!0,path:"/profile/me/decks",component:I}),r.a.createElement(C,{exact:!0,path:"/profile/me/decks/:id",component:U}),r.a.createElement(C,{exact:!0,path:"/group/add-group",component:J}),r.a.createElement(C,{exact:!0,path:"/group/add-group-success",component:V}),r.a.createElement(C,{exact:!0,path:"/group/join-group",component:W}),r.a.createElement(C,{exact:!0,path:"/group/:id",component:B}),r.a.createElement(C,{exact:!0,path:"/group/:id/new-card",component:Y}),r.a.createElement(d.a,{path:"/**",component:T})))}}]),t}(n.Component);c.a.render(r.a.createElement(l.a,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.32a37cad.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),c=(a(48),a(15)),l=a(17),i=a(9),u=a(10),m=a(12),d=a(11),p=a(13),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"i-Movies"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Movies")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/create",className:"nav-link"},"Create Movies Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),t}(n.Component),h=a(5),f=a.n(h),E=function(e){return r.a.createElement("div",{class:"maincard"},r.a.createElement("div",{class:"user"},r.a.createElement("span",null,e.exercise.username," "),r.a.createElement("p",null,e.exercise.date.substring(0,10))),r.a.createElement("div",null,r.a.createElement("div",{style:{fontWeight:"bold"}},"movie: ",e.exercise.movie),"desc: ",e.exercise.description," | ",e.exercise.duration," mins",r.a.createElement("div",null," ",r.a.createElement(c.b,{to:{pathname:"/edit/".concat(e.exercise._id),back_url:"".concat(e.backend_url)}},"edit "),"| ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)}},"delete"))))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={exercises:[]},a.deleteExercise=function(e){f.a.delete(a.props.backend_url+"/exercises/"+e).then(function(e){console.log(e.data)}),a.setState({exercises:a.state.exercises.filter(function(t){return t._id!==e})})},a.exerciseList=function(){return a.state.exercises.map(function(e){return r.a.createElement(E,{backend_url:a.props.backend_url,exercise:e,deleteExercise:a.deleteExercise,key:e._id})})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.backend_url),f.a.get(this.props.backend_url+"/exercises").then(function(t){e.setState({exercises:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"My favourite Movies"),r.a.createElement("div",{className:"cards"},this.exerciseList()))}}]),t}(n.Component),g=a(22),C=(a(37),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",movie:"",description:"",duration:0,date:new Date,users:[]},a.onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangeMovie=function(e){a.setState({movie:e.target.value})},a.onChangeDescription=function(e){a.setState({description:e.target.value})},a.onChangeDuration=function(e){a.setState({duration:e.target.value})},a.onChangeDate=function(e){a.setState({date:e})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,movie:a.state.movie,description:a.state.description,duration:a.state.duration,date:a.state.date};console.log(t),f.a.post(a.props.location.back_url+"/exercises/update/"+a.props.match.params.id,t).then(function(e){console.log(e.data),window.location="/"})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get(this.props.location.back_url+"/exercises/"+this.props.match.params.id).then(function(t){e.setState({username:t.data.username,movie:t.data.movie,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})}).catch(function(e){console.log(e)}),f.a.get(this.props.location.back_url+"/users/").then(function(t){t.data.length>0&&e.setState({users:t.data.map(function(e){return e.username})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Movies Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Movie: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.movie,onChange:this.onChangeMovie})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",{className:"form-control"},r.a.createElement(g.a,{className:" myCustomDate",selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component)),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",movie:"",description:"",duration:0,date:new Date,users:[]},a.onChangeUsername=function(e){a.setState({username:e.target.value})},a.onChangeMovie=function(e){a.setState({movie:e.target.value})},a.onChangeDescription=function(e){a.setState({description:e.target.value})},a.onChangeDuration=function(e){a.setState({duration:e.target.value})},a.onChangeDate=function(e){a.setState({date:e})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,movie:a.state.movie,description:a.state.description,duration:a.state.duration,date:a.state.date};console.log(t),f.a.post(a.props.backend_url+"/exercises/add",t).then(function(e){console.log(e.data),window.location="/"})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get(this.props.backend_url+"/users").then(function(t){t.data.length>0&&e.setState({users:t.data.map(function(e){return e.username}),username:t.data[0].username})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Movies Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Movie Name:"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.movie,onChange:this.onChangeMovie})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",{className:"form-control"},r.a.createElement(g.a,{className:" myCustomDate",selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Movies Log",className:"btn btn-primary"}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:""},a.onChangeUsername=function(e){a.setState({username:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username};console.log(t),f.a.post(a.props.backend_url+"/users/add",t).then(function(e){return console.log(e.data)}),a.setState({username:""})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),t}(n.Component);a(75);var k=function(){var e="https://react-movie-db-123.herokuapp.com";return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/edit/:id",component:C}),r.a.createElement(l.a,{path:"/create",component:function(){return r.a.createElement(N,{backend_url:e})}}),r.a.createElement(l.a,{path:"/user",component:function(){return r.a.createElement(y,{backend_url:e})}}),r.a.createElement(l.a,{path:"/"},r.a.createElement(b,{backend_url:e}))))))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.58ff4a99.chunk.js.map
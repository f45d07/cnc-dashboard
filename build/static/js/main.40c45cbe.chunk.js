(this["webpackJsonpcnc-dashboard"]=this["webpackJsonpcnc-dashboard"]||[]).push([[0],{48:function(e,t,n){e.exports=n(67)},53:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},65:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),A=n(27),c=n.n(A),l=(n(53),n(54),n(13)),i=n(14),o=n(17),s=n(15),u=n(18),m=n(26),d=n(11),g=n(40),h=n(20),E=(n(55),{ru:{short_lang:"\u0420\u0443\u0441",lang:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",documents_dashboard_title:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0443",documents_cnc_title:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043d\u0430 \u0427\u041f\u0423",machine:"\u0421\u0442\u0430\u043d\u043e\u043a",home_page:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",docs_page:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",not_found:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!\u0430\u0434\u0438\u043d\u0430\u0434\u0438\u043d\u0430\u0434\u0438\u043d",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",load_error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438!",waiting_data:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",connected:"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e",last_update:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435",copyright:"\u0427\u0442\u043e-\u0442\u043e \u0432 \u043a\u043e\u043d\u0446\u0435",Milling:"\u0424\u0440\u0435\u0437\u0435\u0440\u043d\u044b\u0439 \u0441\u0442\u0430\u043d\u043e\u043a",Lathe:"\u0422\u043e\u043a\u0430\u0440\u043d\u044b\u0439 \u0441\u0442\u0430\u043d\u043e\u043a"},en:{short_lang:"Eng",lang:"English",documents_dashboard_title:"Documentation for dashboard",documents_cnc_title:"CNC documentation",machine:"Machine",home_page:"Home",docs_page:"Documentation",not_found:"Page ERROR!!111",Loading:"Loading",load_error:"Loading error!",waiting_data:"Waiting for data",connected:"Connected",last_update:"Last update",copyright:"Something in the end",Milling:"Milling machine",Lathe:"Lathe  machine"}});function p(e,t,n){var a=t;return void 0===a&&(a="ru"),void 0!==e[a][n]?e[a][n]:n}var f=["Without_type","Milling","Lathe"];var v={default:"default.json",get_all_machines:"machines.json",get_machine:"machine.json"};var _=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={isLoding:!0,machines:null,current_lang:n.props.current_lang,current_error:null},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this;return this.state.isLoding?(fetch((e="get_all_machines",void 0!==v[e]?v[e]:v.default)).then((function(e){return e.json()})).then((function(e){t.setState({machines:e.machines}),t.setState({isLoding:!1})})).catch((function(e){t.setState({current_error:e}),console.error(e)})),r.a.createElement("div",{className:"center-of-page"},r.a.createElement("div",null,r.a.createElement("p",null,p(E,this.state.current_lang,"loading")," ...")))):r.a.createElement("div",{className:"container"},r.a.createElement(g.a,null,this.state.machines.map((function(e){return r.a.createElement(h.a,{key:e.id,className:"MachineCard"},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,r.a.createElement("a",{href:"/machine/"+e.id},e.name)),r.a.createElement("div",{className:"MachineImg"},r.a.createElement(h.a.Img,{variant:"bottom",src:e.image,onError:function(e){e.target.src="data:image/gif;base64,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"}})),r.a.createElement(h.a.Text,null,r.a.createElement("div",{className:"MachineType"},r.a.createElement("b",null,p(E,t.state.current_lang,(n=e.type,void 0!==f[n]?f[n]:"Unknow_type")))),void 0!==e.options&&r.a.createElement("div",{className:"parameters"},e.options.map((function(e){return r.a.createElement("div",{key:Object.keys(e)[0],className:"parameter"},Object.keys(e)[0],": ",e[Object.keys(e)[0]])}))))),r.a.createElement(h.a.Footer,null,r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},r.a.createElement("span",{className:"glyphicon glyphicon-map-marker","aria-hidden":"true"})," ",e.place)),r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},p(E,t.state.current_lang,"last_update")," ",new Date(1e3*e.last_seen).toLocaleDateString("ru-RU")))));var n}))))}}]),t}(a.Component),C=n(37),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={current_lang:n.props.current_lang,client_id:n.props.client_id,isLoading:!0,isError:!1,machine_id:null,machine:null,reconnect_timer:null},n.socket=null,n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"socketConnection",value:function(e){e.socket=new WebSocket("ws://"+document.domain+":9001/?machine_id="+e.state.machine_id+"&client_id="+e.state.client_id),e.socket.onerror=function(t){e.setState({isError:!0}),e.socket=null,null==e.state.reconnect_timer&&e.setState({reconnect_timer:setInterval(e.socketConnection,1e3,e)})},e.socket.onopen=function(){e.setState({isError:!1}),e.setState({isLoading:!1}),clearInterval(e.state.reconnect_timer),e.setState({reconnect_timer:null});var t=JSON.stringify({action:"start",language:e.state.current_lang});1===e.socket.readyState&&e.socket.send(t)},e.socket.onclose=function(){e.setState({isError:!0}),e.setState({isLoading:!0}),e.setState({isError:!0}),e.socket=null,null==e.state.reconnect_timer&&e.setState({reconnect_timer:setInterval(e.socketConnection,1e3,e)})},e.socket.onmessage=function(t){var n=JSON.parse(t.data);e.setState({machine:n.machine})}}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.match.params.MachineId;this.setState({machine_id:t},(function(){return e.socketConnection(e)}))}},{key:"render",value:function(){var e=r.a.createElement("h2",null,p(E,this.state.current_lang,"machine")," ",this.state.machine_id);return this.state.isLoading?r.a.createElement("div",{className:"container"},e,r.a.createElement("div",null,p(E,this.state.current_lang,"loading")," ..."),r.a.createElement("div",null,1==this.state.isError&&r.a.createElement(C.a,{variant:"danger"},p(E,this.state.current_lang,"load_error")))):null!==this.state.machine?r.a.createElement("div",{className:"container"},e,r.a.createElement("p",null,p(E,this.state.current_lang,"connected")),r.a.createElement("ul",null,r.a.createElement("li",null,this.state.machine.one),r.a.createElement("li",null,this.state.machine.two),r.a.createElement("li",null,this.state.machine.three))):r.a.createElement("div",{className:"container"},e,r.a.createElement("p",null,p(E,this.state.current_lang,"waiting_data")),r.a.createElement("div",null,1==this.state.isError&&r.a.createElement(C.a,{variant:"danger"},p(E,this.state.current_lang,"load_error"))))}}]),t}(a.Component);var O=function(e){return r.a.createElement("div",{class:"center-of-page"},r.a.createElement("div",null,E[e.current_lang].not_found))},y=n(73),k=n(72),M=n(70),N=n(71),b=(n(58),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={current_lang:e.current_lang},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"setLang",value:function(e,t){return this.setState({current_lang:e}),this.props.UpdateCurrentLang(e),localStorage.current_lang=e,!1}},{key:"LangsList",value:function(e,t){var n="";return e.map((function(e){var a=this,A=null;e.url==t&&(A="current-language"),n+=r.a.createElement("span",{key:e.url},r.a.createElement("a",{className:A,href:"#",onClick:function(t){return a.setLang(e.url,t)}},e.short_lang),"\xa0\xa0")})),n}},{key:"render",value:function(){var e=this,t=[{url:"en",short_lang:"Eng",lang:"English"},{url:"ru",short_lang:"\u0420\u0443\u0441",lang:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}];return r.a.createElement(y.a,{bg:"light",variant:"light",expand:"sm"},r.a.createElement(y.a.Toggle,null),r.a.createElement(y.a.Collapse,{className:"mr-auto"},r.a.createElement(k.a.Link,{href:"/"},p(E,this.state.current_lang,"home_page")),r.a.createElement(M.a,null,r.a.createElement(N.a,{variant:"primary",size:"sm",href:"/docs"},p(E,this.state.current_lang,"docs_page")))),r.a.createElement(y.a.Collapse,{className:"justify-content-end"},r.a.createElement("div",{className:"lang-select"},t.map((function(t){return r.a.createElement("span",{key:t.url},r.a.createElement("a",{className:t.url==e.state.current_lang&&"current-language",href:"#",onClick:function(n){return e.setLang(t.url,n)}},t.short_lang),"\xa0\xa0")})))))}}]),t}(a.Component));var G=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-muted"},"2020 (c) ",E[e.current_lang].copyright))},j=(n(61),{main:[{id:1,names:{en:"Tutorial 1",ru:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f 1"},version:"1.0"},{id:2,names:{en:"Tutorial 1",ru:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f 1"},version:"2.0"},{id:3,names:{en:"Tutorial 2",ru:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f 2"},version:"1.0"},{id:4,names:{en:"Tutorial 3",ru:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f 3"},version:"1.0"}],for_machines:[{id:5,names:{en:"CNC 1",ru:"\u0427\u041f\u0423 1"},version:"1.0"},{id:6,names:{en:"CNC 2",ru:"\u0427\u041f\u0423 2"},version:"1.0"}]});function D(e,t){var n=Array();return j[t].forEach((function(t){n.push({id:t.id,name:t.names[e],version:t.version})})),n}var S=function(e){return r.a.createElement("div",{className:"container docs"},r.a.createElement("h1",null,p(E,e.current_lang,"documents_dashboard_title")),D(e.current_lang,"main").map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,e.id," "),r.a.createElement("span",null,r.a.createElement("a",{href:"/doc/"+e.id},e.name," ")),r.a.createElement("span",null,r.a.createElement("i",null,"v. ",e.version))))})),r.a.createElement("h1",null,p(E,e.current_lang,"documents_cnc_title")),D(e.current_lang,"for_machines").map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,e.id," "),r.a.createElement("span",null,r.a.createElement("a",{href:"/doc/"+e.id},e.name," ")),r.a.createElement("span",null,r.a.createElement("i",null,"v. ",e.version))))})))};var I=function(){var e=Object(d.f)().DocId;return r.a.createElement("div",null,"Doc ",e)},L=(n(65),n(66),function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).UpdateCurrentLang=function(e){n.setState({current_lang:e})};var a="ru";return void 0!==localStorage.current_lang&&(a=localStorage.current_lang),n.state={current_lang:a,client_id:Math.round(1e9*Math.random())},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"main"},r.a.createElement("header",{id:"header"},r.a.createElement(b,{current_lang:this.state.current_lang,UpdateCurrentLang:this.UpdateCurrentLang})),r.a.createElement("div",{id:"root"},r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/machine/:MachineId",component:function(t){return r.a.createElement(w,{match:t,client_id:e.state.client_id,current_lang:e.state.current_lang})}}),r.a.createElement(d.a,{path:"/docs",component:function(){return r.a.createElement(S,{current_lang:e.state.current_lang})}}),r.a.createElement(d.a,{path:"/doc/:DocId",component:function(){return r.a.createElement(I,{current_lang:e.state.current_lang})}}),r.a.createElement(d.a,{exact:!0,path:"/",component:function(){return r.a.createElement(_,{current_lang:e.state.current_lang})}}),r.a.createElement(d.a,{path:"*",component:function(){return r.a.createElement(O,{current_lang:e.state.current_lang})}}))))),r.a.createElement("div",{id:"footer",className:"footer"},r.a.createElement(G,{current_lang:this.state.current_lang})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("CNC-App")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.40c45cbe.chunk.js.map
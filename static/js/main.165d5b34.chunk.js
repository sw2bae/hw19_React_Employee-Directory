(this.webpackJsonphw19=this.webpackJsonphw19||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),l=a.n(c),o=a(4),u=a(2),m=a(6);var s=function(){return n.a.createElement("nav",{className:"container text-center mt-5 mb-5"},n.a.createElement("h1",null,"Employee Directory"),n.a.createElement("p",null,"Click on carrots to filter by heading or Use the search box to narrow you result."))};var i=function(e){return n.a.createElement("div",{className:"form-group container col-4 mb-5"},n.a.createElement("input",{onChange:e.handleSearch,name:"term",type:"text",className:"form-control",placeholder:"Search"}))},d=Object(r.createContext)();function p(e){var t=e.children,a=e.value;return n.a.createElement(d.Provider,{value:a},t)}var h=function(e){var t=e.sortByChar,a=e.sortByNum,c=Object(r.useContext)(d),l=c.charmode,o=c.nummode;return n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Image"),n.a.createElement("th",{scope:"col"},"Name",n.a.createElement("button",{type:"button",mode:l,onClick:t},l)),n.a.createElement("th",{scope:"col"},"Phone"),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},"DOB",n.a.createElement("button",{type:"button",mode:o,onClick:a},o))))},b=Object(r.createContext)();function E(e){var t=e.children,a=e.value;return n.a.createElement(b.Provider,{value:a},t)}var v=function(){var e=Object(r.useContext)(b);return console.log(e),n.a.createElement("tbody",null,e.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,n.a.createElement("img",{src:e.image,alt:e.uuid})),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.phone),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.DOB))})))};var f=function(e){var t=e.sortByChar,a=e.sortByNum;return n.a.createElement("table",{className:"table table-striped container"},n.a.createElement(h,{sortByChar:t,sortByNum:a}),n.a.createElement(v,null))},O=a(17),j=a.n(O),g=function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")};a(40);var y=function(){var e=Object(r.useState)([{}]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)([{}]),d=Object(m.a)(l,2),h=d[0],b=d[1],v=Object(r.useState)({charmode:"\u2b07",nummode:"\u2b07"}),O=Object(m.a)(v,2),j=O[0],y=O[1];return Object(r.useEffect)((function(){g().then((function(e){for(var t=[],a=0;a<e.data.results.length;a++){var r={uuid:e.data.results[a].login.uuid,image:e.data.results[a].picture.thumbnail,name:e.data.results[a].name.first+" "+e.data.results[a].name.last,phone:e.data.results[a].phone,email:e.data.results[a].email,DOB:e.data.results[a].dob.date.substring(0,10)};t.push(r)}c(t),b(t)}))}),[]),n.a.createElement(E,{value:h},n.a.createElement(s,null),n.a.createElement(i,{handleSearch:function(e){var t=e.target.value,r=a.filter((function(e){return new RegExp(t,"i").test(e.name)}));b(r)}}),n.a.createElement(p,{value:j},n.a.createElement(f,{sortByChar:function(e){if("\u2b07"===j.charmode){y(Object(u.a)(Object(u.a)({},j),{},{charmode:"\u2b06"}));var t=Object(o.a)(h).sort((function(e,t){var a=e.name.replace(/ /gi,"").toUpperCase(),r=t.name.replace(/ /gi,"").toUpperCase();return a<r?-1:a>r?1:0}));b(t)}else{y(Object(u.a)(Object(u.a)({},j),{},{charmode:"\u2b07"}));var a=Object(o.a)(h).sort((function(e,t){var a=e.name.replace(/ /gi,"").toUpperCase(),r=t.name.replace(/ /gi,"").toUpperCase();return a>r?-1:a<r?1:0}));b(a)}},sortByNum:function(e){if("\u2b07"===j.nummode){y(Object(u.a)(Object(u.a)({},j),{},{nummode:"\u2b06"}));var t=Object(o.a)(h).sort((function(e,t){var a=e.DOB.replace("-",""),r=t.DOB.replace("-","");return a<r?-1:a>r?1:0}));b(t)}else{y(Object(u.a)(Object(u.a)({},j),{},{nummode:"\u2b07"}));var a=Object(o.a)(h).sort((function(e,t){var a=e.DOB.replace("-",""),r=t.DOB.replace("-","");return a>r?-1:a<r?1:0}));b(a)}}})))};a(41);l.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.165d5b34.chunk.js.map
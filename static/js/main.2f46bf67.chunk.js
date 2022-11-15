(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(8),r=(c(31),c(32),c(3)),s=(c(33),c(0)),j=c(2),i=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},b=c(12),l=c.n(b),o=function(e){var t=e.to,c=e.tab;return Object(j.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:c})},d=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(o,{to:"/",tab:"Home"}),Object(j.jsx)(o,{to:"/people",tab:"People"})]})})})},h=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},u=c(4),x=c(6),O=c(5),p=function(e){return new Promise((function(t){setTimeout(t,e)}))},m=function(){var e=Object(x.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(1500);case 2:return e.prev=2,e.next=5,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 5:t=e.sent,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),new Error("Can't get people from server");case 11:return e.abrupt("return",t.json());case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),f=(c(35),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),v=function(e){var t=e.person,c=t.slug,n=t.sex,r=t.name;return Object(j.jsx)(a.b,{to:"/people/".concat(c),className:l()({"has-text-danger":"f"===n}),children:r})},g=function(e){var t=e.people,c=Object(r.o)().personSlug,n=function(e){var c=t.find((function(t){return t.name===e}));return c?Object(j.jsx)(v,{person:c}):e||"-"};return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.sex,a=e.born,r=e.died,s=e.motherName,i=e.fatherName,b=e.slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":b===c}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(v,{person:e})}),Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:n(s)}),Object(j.jsx)("td",{children:n(i)})]})}))})]})},N=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(O.a)(a,2),i=r[0],b=r[1],l=Object(s.useState)(!0),o=Object(O.a)(l,2),d=o[0],h=o[1],p=function(){var e=Object(x.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:t=e.sent,n(t),b(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b("Something went wrong");case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){p()}),[]),i?Object(j.jsx)("h1",{"data-cy":"peopleLoadingError",className:"title has-text-danger",children:i}):Object(j.jsxs)("div",{className:"box table-container",children:[d&&Object(j.jsx)(f,{}),!d&&Object(j.jsx)(j.Fragment,{children:0!==c.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)(g,{people:c})]}):Object(j.jsx)("h1",{"data-cy":"noPeopleMessage",className:"title has-text-danger",children:i})})]})},w=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)(r.d,{children:[Object(j.jsxs)(r.b,{path:"/people",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(N,{})}),Object(j.jsx)(r.b,{path:":personSlug",element:Object(j.jsx)(N,{})})]}),Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(r.b,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(h,{})})]})})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(w,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.2f46bf67.chunk.js.map
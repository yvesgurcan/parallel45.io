(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("f3/d"),a("91GP"),a("dRSK"),a("pIFo");var l=a("q1tI"),n=a.n(l),r=a("vOnD"),i=a("Wbzz"),o=a("9eSz"),c=a.n(o),s=a("Bl7J"),u=a("WyQb"),m=function(e,t){return e||t[1].toUpperCase()+t.replace(/-/g," ").replace(/\//g,"").substring(1,t.length-1)};t.default=function(e){var t=e.data,a=e.pageContext,l=e.location,r=t.markdownRemark,o=r.fields,p=r.frontmatter,g=r.excerpt,f=r.html,E=o.slug,h=p.title,b=p.date,w=p.image,y=m(h,E),v=t.site.siteMetadata.author,I=a.previous,k=a.next,S=t.allFile.nodes,x=w&&S.find((function(e){return e.childImageSharp.fluid.originalName===w}));return console.log(x),n.a.createElement(s.a,{location:Object.assign({},l,{parent:"/blog"}),title:y,description:g},n.a.createElement("article",null,n.a.createElement("header",null,x&&n.a.createElement(d,null,n.a.createElement(u.a,{href:x.childImageSharp.original.src},n.a.createElement(c.a,{fluid:x.childImageSharp.fluid,alt:y,title:y}))),n.a.createElement("p",null,b&&n.a.createElement("span",null,b,"."),n.a.createElement("span",null," ","Written by"," ",n.a.createElement(u.a,{href:v.twitter},v.name),"."))),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:f}})),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,I&&n.a.createElement(i.Link,{to:"/blog"+I.fields.slug,rel:"prev"},"←"," ",m(I.frontmatter.title,I.fields.slug))),n.a.createElement("li",null,k&&n.a.createElement(i.Link,{to:"/blog"+k.fields.slug,rel:"next"},m(k.frontmatter.title,k.fields.slug)," ","→")))))};var d=r.a.div.withConfig({displayName:"blog-post__PostImage",componentId:"ikobq9-0"})(["padding-bottom:1rem;"]),p="1697160351"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-32006983968725d5d7af.js.map
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8505:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#281818","images":{"fallback":{"src":"/static/de343e29a397887e80326c3d6d8a677c/d24ee/profile-pic.jpg","srcSet":"/static/de343e29a397887e80326c3d6d8a677c/d24ee/profile-pic.jpg 50w,\\n/static/de343e29a397887e80326c3d6d8a677c/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/de343e29a397887e80326c3d6d8a677c/d4bf4/profile-pic.avif 50w,\\n/static/de343e29a397887e80326c3d6d8a677c/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/de343e29a397887e80326c3d6d8a677c/3faea/profile-pic.webp 50w,\\n/static/de343e29a397887e80326c3d6d8a677c/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),i=a(5444),r=a(2407);t.Z=function(){var e,t,n=(0,i.useStaticQuery)("230163734"),c=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8505)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Được viết bởi  ",l.createElement("a",{href:null==s?void 0:s.github},l.createElement("strong",null,c.name)),(null==c?void 0:c.summary)||null))}},7356:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var l=a(7294),i=a(5444),r=a(9535),n=a(7198),c=a(3751),s=function(e){var t=e.tags.map((function(e){return e.replace(" ","-")}));return l.createElement("div",{className:"tag__container"},t.map((function(e){return l.createElement("a",{className:"tag-item",href:"/tags/"+e},e)})))},o=function(e){var t,a=e.data,o=e.location,d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?l.createElement(n.Z,{location:o,title:d},l.createElement(c.Z,{title:"All posts"}),l.createElement(r.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(n.Z,{location:o,title:d},l.createElement(c.Z,{title:"All posts"}),l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug,a=e.frontmatter.tags;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),l.createElement(s,{tags:a})))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b0d45da665923bd2cca0.js.map
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8505:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#281818","images":{"fallback":{"src":"/blog/static/de343e29a397887e80326c3d6d8a677c/d24ee/profile-pic.jpg","srcSet":"/blog/static/de343e29a397887e80326c3d6d8a677c/d24ee/profile-pic.jpg 50w,\\n/blog/static/de343e29a397887e80326c3d6d8a677c/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/de343e29a397887e80326c3d6d8a677c/d4bf4/profile-pic.avif 50w,\\n/blog/static/de343e29a397887e80326c3d6d8a677c/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blog/static/de343e29a397887e80326c3d6d8a677c/3faea/profile-pic.webp 50w,\\n/blog/static/de343e29a397887e80326c3d6d8a677c/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),r=l(2407);t.Z=function(){var e,t,c=(0,i.useStaticQuery)("230163734"),n=null===(e=c.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=c.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(8505)}),(null==n?void 0:n.name)&&a.createElement("p",null,"Được viết bởi  ",a.createElement("a",{href:null==o?void 0:o.github},a.createElement("strong",null,n.name))," ",(null==n?void 0:n.summary)||null))}},7704:function(e,t,l){"use strict";l.r(t);var a=l(7294),i=l(5444),r=l(9535),c=l(7198),n=l(3751);t.default=function(e){var t,l=e.data,o=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=l.allMarkdownRemark.nodes;return 0===d.length?a.createElement(c.Z,{location:o,title:s},a.createElement(n.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(c.Z,{location:o,title:s},a.createElement(n.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3d84fd0b47a82a0d0365.js.map
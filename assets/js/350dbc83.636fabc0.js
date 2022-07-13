"use strict";(self.webpackChunkcourseware=self.webpackChunkcourseware||[]).push([[8369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"docs/Front-end-development/FE0009",id:"docs/Front-end-development/FE0009",title:"FE0009",description:"Welcome to the lesson on Front-end web development. This would be a self-paced class that focuses on Creating Hyperlinks. Please make sure that you are completing the entire lesson.",source:"@site/Semester-1/docs/Front-end-development/FE0009.mdx",sourceDirName:"docs/Front-end-development",slug:"/docs/Front-end-development/FE0009",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0009",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styling Lists",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0008"},next:{title:"Document and website structure",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0010"}},s={},p=[{value:"Hyperlinks",id:"hyperlinks",level:2},{value:"What are Hyperlinks?",id:"what-are-hyperlinks",level:3},{value:"Hyperlinks Syntax",id:"hyperlinks-syntax",level:3},{value:"Instructions for the exercise",id:"instructions-for-the-exercise",level:2},{value:"Useful resources for you",id:"useful-resources-for-you",level:2}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the lesson on Front-end web development. This would be a ",(0,r.kt)("strong",{parentName:"p"},"self-paced class")," that focuses on ",(0,r.kt)("em",{parentName:"p"},"Creating Hyperlinks"),". Please make sure that you are completing the entire lesson."),(0,r.kt)("h2",{id:"hyperlinks"},"Hyperlinks"),(0,r.kt)("h3",{id:"what-are-hyperlinks"},"What are Hyperlinks?"),(0,r.kt)("p",null,"MDN describes \u201cHyperlinks are one of the most exciting innovations the Web has to offer. They've been a feature of the Web since the beginning, and are what makes the Web a web. Hyperlinks allow us to link documents to other documents or resources, link to specific parts of documents, or make apps available at a web address. Almost any web content can be converted to a link so that when clicked or otherwise activated the web browser goes to another web address (URL).\u201d"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pQN-pnXPaVg&t=3556s"},"Click here")," to watch a video on hyperlinks (watch from 00:59:16 to 01:07:33)                        (8 minutes)"),(0,r.kt)("p",null,"[Content: Definition of the hyperlink and a few examples to create hyperlink]"),(0,r.kt)("p",null,"A hyperlink need not be a text, it can also be images or any other HTML element."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link"},"Click here")," to learn & practice \u201cturn an image into a link\u201d."),(0,r.kt)("p",null,"Now, Since you now know what a hyperlink does let's move forward and learn how to create one."),(0,r.kt)("h3",{id:"hyperlinks-syntax"},"Hyperlinks Syntax"),(0,r.kt)("p",null,"HTML links are defined within ","<","a> tag. It follows the syntax :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="URL"> link text </a>\n')),(0,r.kt)("p",null,"The href attribute inside the anchor tag indicates the link destination. Additional attributes like the title can also be put inside the anchor tag. In the below example clicking the link will redirect us to google and when we hover over the link the title will appear as the tooltip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="https://www.google.co.in/" title="I am Google">Google</a>\n')),(0,r.kt)("p",null,"By default any hyperlink will appear as the following in any browser:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unvisited: Underlined and blue"),(0,r.kt)("li",{parentName:"ul"},"Visited: Underline and purple"),(0,r.kt)("li",{parentName:"ul"},"Active: Underline and red")),(0,r.kt)("p",null,"Note: You can always change the properties and style of the hyperlinks using CSS."),(0,r.kt)("p",null,"Hyperlinks also have a target attribute. By default when you click on any hyperlink it will open in the same browser window. With the target attribute, you can change this and make the hyperlink redirect us to a new window or tab. It can have the following values : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"_self: Opens the link in the same window/tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"_blank: Opens the link in a new window/tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"_parent: Opens the document in the parent frame")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"_top: Opens the document in the full window body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```\n")),(0,r.kt)("a",{href:"https://www.google.co.in/",title:"I am Google",target:"_blank"},"Google"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n\n\nGreat!!\n\nYou now know how to create a hyperlink, but which path should you provide in the href attribute. Let\u2019s dive deeper to understand URLs and paths to use hyperlinks in the best way.\n\n\n### Brief on URLs and Path: \n\nTo fully understand hyperlinks you need to understand file paths and URLs.\n\nMDN tells you that URL( Uniform Resource Locator ) is a string of text that uses the path to find the file\'s location.\n\n\n\n* Same directory: If you want to include the file from the same directory as your working directory, you can specify the file name.\n* Moving down into subdirectories: If you want to include the file from the subdirectories you need to go into it using the forward-slash( / ) command.\n* Moving up the parent directory: If you want to include files from the parent directory you can move up using two dots( .. )\n\n[Click here](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements) to learn & practice \u201clink to external pages with anchor elements\u201d (2 minutes)\n\n[Click here](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements) to learn & practice \u201clink to internal sections of a page with anchor elements\u201d (2 minutes)\n\n\n### Hyperlinks Best Practices\n\nAccording to MDN, there are few things which you need to keep in mind while creating a hyperlink.\n\n\n\n* _Wording used should be clear_: It is very easy to attach a link but the link should be readable. The user should be able to know where the link is redirecting just by looking at the text of the link.\n\n    ```\n    <a href="https://www.facebook.com/ ">Facebook</a>\n    ```\n\n\n* _If you are linking to non-HTML resources then leave clear signposts_: If you are linking any document which will be downloaded or streamed you should add a signpost so that the user would be able to know that.\n* _When you are linking to a download use the download attribute._\n\nSo far you have learned many things about HTML links but do you know that you can also send emails via Hyperlinks. Let us now look into how we could do that.\n\n    \n\n\n### E-mail using Hyperlinks: \n\nWhile a link or button can be used to redirect us to a new page or resource, we can also use it to send an email message. This can be done using &lt;a> element and a mailto property.\n\n\n')),(0,r.kt)("a",{href:"mailto: nowhere@xyz.org"}," Send mail to Nowhere"),"```",(0,r.kt)("p",null,"In addition to the email address you can provide other information like subject,cc and bcc. Here is an example : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="mailto : nowhere@pqr.org?cc=xyz@gmail.com&bcc=abc@gmail.com&subject=The%20subject%20of%20the%20mail&body=The%20body%20of%20the%20mail"> Send mail with subject, cc, bcc, body</a>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-an-anchor-element-within-a-paragraph"},"Click here")," to learn & practise \u201cnest an anchor element within a paragraph\u201d (2 minutes)"),(0,r.kt)("h2",{id:"instructions-for-the-exercise"},"Instructions for the exercise"),(0,r.kt)("p",null,"And voila, that\u2019s the end of all the concepts in this lesson. Now, time for exercise!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Required links")),(0,r.kt)("p",null,"Boilerplate link: ",(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/web-platform-eamxjn?file=index.html"},"Exercise Boilerplate link")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setting up a coding environment for the exercise")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Open the boilerplate link and download the boilerplate code to your computer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: "),"Open the folder, which has the boilerplate code, using VS code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to work with exercise")),(0,r.kt)("p",null,"Every exercise will have an n-number of iterations. You are expected to complete the iterations in increasing order."),(0,r.kt)("p",null,"For example, you will have to complete the first iteration before starting the second iteration, and so on."),(0,r.kt)("p",null,"You can find the instructions for completing the iterations here below as well as in the boilerplate file in which you will be working as comments."),(0,r.kt)("h2",{id:"useful-resources-for-you"},"Useful resources for you"),(0,r.kt)("p",null,"Now that you\u2019re done with this lesson, here are some useful post-class reading links for you."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/html-links/"},"https://www.geeksforgeeks.org/html-links/")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/html/html_links.asp"},"https://www.w3schools.com/html/html_links.asp")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"},"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks")))}h.isMDXComponent=!0}}]);
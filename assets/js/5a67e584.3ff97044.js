"use strict";(self.webpackChunkcourseware=self.webpackChunkcourseware||[]).push([[5196],{775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(7462),s=(n(7294),n(3905)),o=n(9304);const l={},i=void 0,r={unversionedId:"docs/Front-end-development/FE0006",id:"docs/Front-end-development/FE0006",title:"FE0006",description:"Welcome to the lesson on Front-end web development. This would be a self-paced class that focuses on one of the fundamental topics in Structuring of CSS..",source:"@site/Semester-1/docs/Front-end-development/FE0006.mdx",sourceDirName:"docs/Front-end-development",slug:"/docs/Front-end-development/FE0006",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0006",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FE0005",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0005"},next:{title:"FE0007",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0007"}},p={},c=[{value:"What are your learning goals in this lesson?",id:"what-are-your-learning-goals-in-this-lesson",level:2},{value:"Applying CSS to HTML",id:"applying-css-to-html",level:2},{value:"Basic Components of CSS",id:"basic-components-of-css",level:2},{value:"Selectors",id:"selectors",level:3},{value:"Properties and values",id:"properties-and-values",level:3},{value:"@rules",id:"rules",level:3},{value:"Shorthands",id:"shorthands",level:3},{value:"Comments",id:"comments",level:3},{value:"White space",id:"white-space",level:3},{value:"Road map for better learning",id:"road-map-for-better-learning",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Welcome to the lesson on Front-end web development. This would be a ",(0,s.kt)("strong",{parentName:"p"},"self-paced class")," that focuses on one of the fundamental topics in Structuring of CSS.. "),(0,s.kt)("p",null,"Please make sure that you are completing the entire lesson."),(0,s.kt)("h1",{id:"how-css-is-structured"},"How CSS is structured?"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://lenadesign.org/wp-content/uploads/2019/12/untitled7-1.gif?w=580",alt:null})),(0,s.kt)("p",null,"GIF link: ",(0,s.kt)("a",{parentName:"p",href:"https://lenadesign.org/wp-content/uploads/2019/12/untitled7-1.gif?w=580"},"https://lenadesign.org/wp-content/uploads/2019/12/untitled7-1.gif?w=580")),(0,s.kt)("h2",{id:"what-are-your-learning-goals-in-this-lesson"},"What are your learning goals in this lesson?"),(0,s.kt)("p",null,"Goal 1: To learn how we can apply CSS to HTML"),(0,s.kt)("p",null,"Goal 2: Basic components of CSS"),(0,s.kt)("h2",{id:"applying-css-to-html"},"Applying CSS to HTML"),(0,s.kt)("p",null,"First, let's examine three methods of applying CSS to a document: with an external stylesheet, with an internal stylesheet, and with inline styles."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"External stylesheet :")),(0,s.kt)("p",null,"An external stylesheet contains CSS in a separate file with a .css extension. This is the",(0,s.kt)("strong",{parentName:"p"}," most common and useful method of bringing CSS")," to a document. You can link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Internal stylesheet : ")),(0,s.kt)("p",null,"An internal stylesheet resides within an HTML document. To create an internal stylesheet, you place CSS inside a ","<","style> element contained inside the HTML ","<","head>."),(0,s.kt)("p",null,"In some circumstances, internal stylesheets can be useful. For example, perhaps you're working with a content management system where you are blocked from modifying external CSS files.But for sites with more than one page, an internal stylesheet becomes a ",(0,s.kt)("strong",{parentName:"p"},"less efficient way of working"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Inline styles :")),(0,s.kt)("p",null,"Inline styles are CSS declarations that affect a single HTML element, contained within a style attribute.Avoid using CSS in this way, when possible. It is the opposite of a best practice. First, it is the least efficient implementation of CSS for maintenance. One styling change might require multiple edits within a single web page. Second, inline CSS also mixes (CSS) presentational code with HTML and content, making everything more difficult to read and understand. Separating code and content makes maintenance easier for all who work on the website.There are a few circumstances where inline styles are more common. You might have to",(0,s.kt)("strong",{parentName:"p"}," resort to using inline styles if your working environment is very restrictive"),". For example, perhaps your CMS only allows you to edit the HTML body. You may also see a lot of inline styles in HTML email to achieve compatibility with as many email clients as possible."),(0,s.kt)("h2",{id:"basic-components-of-css"},"Basic Components of CSS"),(0,s.kt)("h3",{id:"selectors"},"Selectors"),(0,s.kt)("p",null,"A selector targets HTML to apply styles to content. We have already discovered a variety of selectors in the Getting started with CSS tutorial. If CSS is not applying to content as expected, your selector may not match the way you think it should match."),(0,s.kt)("p",null,"Each CSS rule starts with a selector or a list of selectors in order to tell the browser which element or elements the rules should apply to. \\"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Specificity :")),(0,s.kt)("p",null,"The CSS language has rules to control which selector is stronger in the event of a conflict. These rules are called ",(0,s.kt)("strong",{parentName:"p"},"cascade "),"and",(0,s.kt)("strong",{parentName:"p"}," specificity"),".Later styles replace conflicting styles that appear earlier in the stylesheet. This is ",(0,s.kt)("strong",{parentName:"p"},"the cascade rule"),"."),(0,s.kt)("p",null,"Sometimes, CSS might not apply as you expected because something else in the stylesheet has more specificity. Recognizing that more than one rule could apply to an element is the first step in fixing these kinds of issues."),(0,s.kt)("h3",{id:"properties-and-values"},"Properties and values"),(0,s.kt)("p",null,"At its most basic level, CSS consists of two components:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Properties:")," These are human-readable identifiers that indicate which stylistic features you want to modify. For example, font-size, width, background-colour."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Values:")," Each property is assigned a value. This value indicates how to style the property."),(0,s.kt)("p",null,"When a property is paired with a value, this pairing is called a CSS declaration. CSS declarations are found within CSS Declaration Blocks. In the example below, highlighting identifies the CSS declaration block.Finally, CSS declaration blocks are paired with selectors to produce CSS rulesets (or CSS rules). Setting CSS properties to specific values is the primary way of defining layout and styling for a document. The CSS engine calculates which declarations apply to every single element of a page."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CSS properties and values are case-insensitive"),". The property and value in a property-value pair are separated by a colon (:)."),(0,s.kt)("h3",{id:"rules"},"@rules"),(0,s.kt)("p",null,'CSS @rules (pronounced "at-rules") provide instruction for what CSS should perform or how it should behave. Some @rules are simple with just a keyword and a value. For example, ',(0,s.kt)("strong",{parentName:"p"},"@import")," imports a stylesheet.Another common @rule that you are likely to encounter is ",(0,s.kt)("strong",{parentName:"p"},"@media"),", which is used to create media queries. Media queries use conditional logic for applying CSS styling.eet into another CSS stylesheet"),(0,s.kt)("h3",{id:"shorthands"},"Shorthands"),(0,s.kt)("p",null,"Some properties like font, background, padding, border, and margin are called shorthand properties. This is because shorthand properties set ",(0,s.kt)("strong",{parentName:"p"},"several values in a single line"),"."),(0,s.kt)("h3",{id:"comments"},"Comments"),(0,s.kt)("p",null,"As with any coding work, it is best practice to write comments along with CSS. This helps you to remember how the code works as you come back later for fixes or enhancement. It also helps others understand the code.CSS comments begin with /",(0,s.kt)("em",{parentName:"p"}," and end with "),"/. In the example below, comments mark the start of distinct sections of code. This helps to navigate the codebase as it gets larger. With this kind of commenting in place, searching for comments in your code editor becomes a way to ",(0,s.kt)("strong",{parentName:"p"},"efficiently find a section of code.")),(0,s.kt)("h3",{id:"white-space"},"White space"),(0,s.kt)("p",null,"White space means actual spaces, tabs and new lines. Just as browsers ignore white space in HTML, ",(0,s.kt)("strong",{parentName:"p"},"browsers ignore white space inside CSS"),". The value of white space is how it can improve readability."),(0,s.kt)("h2",{id:"road-map-for-better-learning"},"Road map for better learning"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.dribbble.com/users/52334/screenshots/1252485/roadmap.gif",alt:null})),(0,s.kt)("p",null,"GIF link: ",(0,s.kt)("a",{parentName:"p",href:"https://cdn.dribbble.com/users/52334/screenshots/1252485/roadmap.gif"},"https://cdn.dribbble.com/users/52334/screenshots/1252485/roadmap.gif")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Milestone 1:")," Complete the following assignments to get a better understanding on \u201cApplying CSS to HTML\u201d before moving to the next exercise  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://codepen.io/zheisey/pen/vMBXNM?editors=1100"},"Click here "),"to learn and practice inline,internal and external css."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured"},"Click here")," to refer to the MDN documentation on the topic."),(0,s.kt)("p",null,"A video on the \u201cApplying CSS to HTML\u201d (time required to watch this video is 10 minutes)"),(0,s.kt)(o.Z,{videoId:"oO6BOBZ_x0o",mdxType:"Youtube"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Milestone 2:")," Complete the following assignments to get a better understanding on \u201cSelectors\u201d before moving to the next exercise  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://codepen.io/alexanderson1993/pen/rzaJpx?editors=1100"},"Click here "),"to learn and practise Css selectors."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured#selectors"},"Click here")," to refer to the MDN documentation on the topic."),(0,s.kt)("p",null,"A video on CSS Selectors (time required to watch this video is 7 minutes)"),(0,s.kt)(o.Z,{videoId:"DlsmZ1hdgPI",mdxType:"Youtube"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Milestone 3:")," Complete the following assignments to get a better understanding on \u201cProperties and Values\u201d before moving to the next exercise  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured#selectors"},"Click here")," to refer to the  MDN documentation on the topic."),(0,s.kt)("p",null,"An interesting video on this topic (time required to watch this video is 4 minutes)"),(0,s.kt)(o.Z,{videoId:"4LtwZQ5jxic",mdxType:"Youtube"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Milestone 4:")," Complete the following assignments to get a better understanding on \u201c@rules\u201d before moving to the next exercise  "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/css/css_at_rules.htm#:~:text=The%20%40charset%20rule%20indicates%20the,over%20the%20author's%20style%20sheets."},"Click here")," to refer to an interesting article  on the topic."),(0,s.kt)("p",null,"A video on this particular topic (time required to watch this video is 5 minutes)"),(0,s.kt)(o.Z,{videoId:"IjDSAbb-IZo",mdxType:"Youtube"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Required links")),(0,s.kt)("p",null,"Boilerplate link: ",(0,s.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/web-platform-3yfrb5?file=styles.css,index.html"},"https://stackblitz.com/edit/web-platform-3yfrb5?file=styles.css,index.html")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How to work with exercise")),(0,s.kt)("p",null,"This exercise has 10 iterations. You are expected to complete the iterations in increasing order."),(0,s.kt)("p",null,"For example, you will have to complete the first iteration before starting the second iteration, and so on."),(0,s.kt)("p",null,"You can find the instructions for completing the iterations in the boilerplate file as comments. "),(0,s.kt)("h1",{id:"useful-resources-for-you"},"Useful resources for you"),(0,s.kt)("p",null,"Now that you\u2019re done with this lesson, here are some useful post-class reading links for you."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing"},"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://linuxhint.com/css-structure/"},"https://linuxhint.com/css-structure/")),(0,s.kt)("p",null,"Before you go, here\u2019s a quick 10-question quiz for you."),(0,s.kt)("h1",{id:"end-of-the-lesson-assessment"},"End-of-the-lesson assessment"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Learning unit: Applying CSS to HTML")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Which of the following is the correct syntax for referring to the external style sheet?"),(0,s.kt)("p",{parentName:"li"},"a. ","<","style src = example.css>"),(0,s.kt)("p",{parentName:"li"},"b. ","<",'style src = "example.css" >'),(0,s.kt)("p",{parentName:"li"},"c. ","<","stylesheet> example.css ","<","/stylesheet>"),(0,s.kt)("p",{parentName:"li"},"d. ","<",'link rel="stylesheet" type="text/css" href="example.css">'))),(0,s.kt)("p",null,"Answer: d"),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The HTML attribute used to define the inline styles is -"),(0,s.kt)("p",{parentName:"li"},"a. style"),(0,s.kt)("p",{parentName:"li"},"b. styles"),(0,s.kt)("p",{parentName:"li"},"c. class"),(0,s.kt)("p",{parentName:"li"},"d. None of the above"))),(0,s.kt)("p",null,"Answer : a"),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In how many ways can CSS be written in?"),(0,s.kt)("p",{parentName:"li"},"a. 1"),(0,s.kt)("p",{parentName:"li"},"b. 2"),(0,s.kt)("p",{parentName:"li"},"c. 3"),(0,s.kt)("p",{parentName:"li"},"d. 4"))),(0,s.kt)("p",null,"Answer : d"),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"What type of CSS is generally recommended for designing large web pages?"),(0,s.kt)("p",{parentName:"li"},"a. inline"),(0,s.kt)("p",{parentName:"li"},"b. external"),(0,s.kt)("p",{parentName:"li"},"c. internal"))),(0,s.kt)("p",null,"Answer: b"),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Which of the following is the correct syntax to link an external style sheet in the HTML file?"),(0,s.kt)("p",{parentName:"li"},"a. ","<","link rel=\u201dstylesheet\u201d href=\u201dstyle.css\u201d />"),(0,s.kt)("p",{parentName:"li"},"b. ","<","link rel=\u201dstylesheet\u201d src=\u201dstyle.css\u201d />"),(0,s.kt)("p",{parentName:"li"},"c. ","<","style rel=\u201dstylesheet\u201d src=\u201dstyle.css\u201d />"),(0,s.kt)("p",{parentName:"li"},"d. ","<","style rel=\u201dstylesheet\u201d link=\u201dstyle.css\u201d />"))),(0,s.kt)("p",null,"Answer: a"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Learning unit: Basic Components of CSS")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Which of the following is not a type of selector"),(0,s.kt)("p",{parentName:"li"},"a. combination"),(0,s.kt)("p",{parentName:"li"},"b. article"),(0,s.kt)("p",{parentName:"li"},"c. pseudo"),(0,s.kt)("p",{parentName:"li"},"d. attribute"))),(0,s.kt)("p",null,"Answer: b"),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Which of the following selectors is used to style elements on the basis of their state?"),(0,s.kt)("p",{parentName:"li"},"a. type"),(0,s.kt)("p",{parentName:"li"},"b. attribute"),(0,s.kt)("p",{parentName:"li"},"c. combination"),(0,s.kt)("p",{parentName:"li"},"d. pseudo"),(0,s.kt)("p",{parentName:"li"},"Answer : d"))),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"How do you add a background color for all ","<","h1> elements?"),(0,s.kt)("p",{parentName:"li"},"a. h1 {background-color:blue;}"),(0,s.kt)("p",{parentName:"li"},"b. all.h1 {background-color:blue;}"),(0,s.kt)("p",{parentName:"li"},"c. h1.all {background-color:blue;}"),(0,s.kt)("p",{parentName:"li"},"d. h{background-color:blue;}"))),(0,s.kt)("p",null,"Answer : a"),(0,s.kt)("ol",{start:9},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"How do you select all anchor tags inside a paragraph?"),(0,s.kt)("p",{parentName:"li"},"a. p+a"),(0,s.kt)("p",{parentName:"li"},"b. p.a"),(0,s.kt)("p",{parentName:"li"},"c. p a"),(0,s.kt)("p",{parentName:"li"},"d. p>a"))),(0,s.kt)("p",null,"Answer: c"),(0,s.kt)("ol",{start:10},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"How do you select an element with id 'unique'?"),(0,s.kt)("p",{parentName:"li"},"a. #unique"),(0,s.kt)("p",{parentName:"li"},"b. \u2018#unique\u2019"),(0,s.kt)("p",{parentName:"li"},"c. #\u2019unique\u2019"),(0,s.kt)("p",{parentName:"li"},"d. .unique"))),(0,s.kt)("p",null,"Answer: a"))}d.isMDXComponent=!0},9304:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(3191),s=n(7294);const o=e=>{var t;const n={height:"390",width:"640",playerVars:{autoplay:0,...e.start&&{start:e.start},...e.end&&{end:e.end}}};return s.createElement(a.Z,{videoId:null!=(t=e.videoId)?t:"",opts:n})}}}]);
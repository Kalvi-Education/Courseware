"use strict";(self.webpackChunkcourseware=self.webpackChunkcourseware||[]).push([[4770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),m=u(n),g=l,c=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return n?o.createElement(c,r(r({ref:t},h),{},{components:n})):o.createElement(c,r({ref:t},h))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(7462),l=(n(7294),n(3905));const i={},r="Efficient Problem Solving",a={unversionedId:"docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Efficient-problem-solving",id:"docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Efficient-problem-solving",title:"Efficient Problem Solving",description:"Objective",source:"@site/Semester-1/docs/Problem-solving-using-Programming/01-Solving-problems-&-Writing-Algorithms/06-Efficient-problem-solving.mdx",sourceDirName:"docs/Problem-solving-using-Programming/01-Solving-problems-&-Writing-Algorithms",slug:"/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Efficient-problem-solving",permalink:"/Courseware/Semester-1/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Efficient-problem-solving",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Thinking with visuals - Part 2",permalink:"/Courseware/Semester-1/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Thinking-with-visuals-part2"},next:{title:"Applications-of-problem-solving---TSI",permalink:"/Courseware/Semester-1/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Applications-of-problem-solving---TSI"}},s={},u=[{value:"Objective",id:"objective",level:2},{value:"Why should we solve a problem effeciently?",id:"why-should-we-solve-a-problem-effeciently",level:2},{value:"Introduction to the Lesson",id:"introduction-to-the-lesson",level:2},{value:"Cut  Hive  Puzzle",id:"cut--hive--puzzle",level:2},{value:"These are the Puzzles which are inspired by \u2018Cut block\u2019 Puzzles of japan.",id:"these-are-the-puzzles-which-are-inspired-by-cut-block-puzzles-of-japan",level:2},{value:"SEARCH ALGORITHM",id:"search-algorithm",level:2},{value:"Bakuro PUZZLES",id:"bakuro-puzzles",level:2},{value:"End-of-the-lesson Assessment",id:"end-of-the-lesson-assessment",level:2}],h={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"efficient-problem-solving"},"Efficient Problem Solving"),(0,l.kt)("h2",{id:"objective"},"Objective"),(0,l.kt)("p",null,"In this lesson we will be dealing with the structured way of approaching a Programming Question and solving it efficiently. We will learn about the various methodologies and techniques used to get the right approach towards solving a question by simply discussing a problem of getting the shortest path in the puzzle."),(0,l.kt)("h2",{id:"why-should-we-solve-a-problem-effeciently"},"Why should we solve a problem effeciently?"),(0,l.kt)("p",null,"As we know that in today's world there are so many computer softwares that helps us in getting our task done in an instant of time. So have you ever imagined that if these programs that had made up the software were just based on brute force approach then what would have happened.I\u2019ll tell you, if these programs were not made efficiently then our software might have taken years to complete the task which could be done within seconds."),(0,l.kt)("p",null,"So Solving a Programming problem efficiently is much more important rather than just solving it.As it might not help us to achieve our goal for which we were aiming for."),(0,l.kt)("h2",{id:"introduction-to-the-lesson"},"Introduction to the Lesson"),(0,l.kt)("p",null,"Today, we will be working on three topics:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Cut hive Puzzle"),(0,l.kt)("li",{parentName:"ol"},"Algorithmic Pattern"),(0,l.kt)("li",{parentName:"ol"},"Bakuro Puzzle")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All these topics will help you to understand the concept of efficient problem solving and will make our concepts crystal clear in an amazing way.")),(0,l.kt)("h2",{id:"cut--hive--puzzle"},"Cut  Hive  Puzzle"),(0,l.kt)("h2",{id:"these-are-the-puzzles-which-are-inspired-by-cut-block-puzzles-of-japan"},"These are the Puzzles which are inspired by \u2018Cut block\u2019 Puzzles of japan."),(0,l.kt)("p",null,"The Cut Hive Puzzles consists of a block of hexagons,the \u2018hive\u2019,with different areas marked out using thicker lines."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A figure shows an example of cut hive problem:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/euDKi0jjdxyIfk1WqPd0tAFWiFg973An8vY76fTAvvspzK2IhbnpAt1y0aGDtJi_xQWp9uDGdNotjCqlNdhwM5gKbQVhpanEps8uaWqWkkLoqYoEh-ezPpZkt4T1JUVOnycRQBX6pCGJ-6dsjQ",alt:null})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"There are basically two rules for solving this puzzle:")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rule 1:")," Each area must contain numbers from 1 up to the number N, where N is the total number of hexagons in the area.For example, the topmost area in the puzzle below consists of 4 hexagons so those hexagons must be filled with the numbers: 1, 2, 3 and 4 with no repeated numbers. If the area has two hexagons, like the one bottom left below, then it must be filled with the numbers 1 and 2."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rule 2:")," No number can be next to the same number in any direction, along a shared edge. So in the grid below, the fact that there is a 4 in the middle means there cannot be a 4 in any of the 5 hexagons surrounding it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Problem Statement"),": Complete the following cut hive problem  without violating the rules:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/yU5tZOEpWGXnNzH2v-HrYhVJmZFp98fumiwQHW-dCGCTzUAaQcpFW9fjZyf9S7AD0m-4hlpPifaXeChjwvqVglT7fjLiaAB1AW1DksatNbLxF1FwCQdZXMMe8l33L2v2nO7NVL_h3mjKEegLFg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Approach")," Now to solve this problem the first basic thing that a person should do here is to focus on only one area and start filling the numbers on the hexagon of that area without violating rule number 1."),(0,l.kt)("p",null,"After filling out the numbers in the hexagons of a given area check out whether any hexagon of this given area is having the same number in it which is placed in the hexagon of another area and is sharing it\u2019s edge with it."),(0,l.kt)("p",null,"If this condition arises then swap this number with another number of the hexagon of the same area and then check whether the numbers on hexagons sharing the edges are still same or not if they are again same then swap it with another number do this until all the hexagons of the given area do not share the same number with the hexagons which are sharing it\u2019s edge with it."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After performing these operations on all the areas we will get our desired result without violating any rule.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Another Efficient Approach")," First choose a hexagon in which the number is already placed. After choosing it, place different numbers on the hexagons which are sharing it\u2019s edge with it such that each number which is stored in the hexagon is different with the hexagon to which it is sharing it\u2019s edge."),(0,l.kt)("p",null,"Do this process to every hexagon which was initially having the numbers stored in it.After this start filling out the hexagons of a given area with numbers from 1 to X where X is the total number of hexagons of that area such that no two hexagons which are sharing it\u2019s edge is having same number."),(0,l.kt)("p",null,"In this manner the question is solved and the solution looks like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/ETWiSqLcKefJJsVgDoBuicKmVkDosTn-AkdP7ud_pX-MIbN9uffvJgCId8DKPgC-aBOB-cO9_2tOLl1QFFDjQuaZ5-V6k6Ke10VjuPAP1f0NkCkYMoWgWKhHCPg_JsAhRqCBRctm_OxxlGZwNA",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Follow Up questions:")),(0,l.kt)("p",null,"Try solving these questions by your own"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 1:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/R3Zt3_kjUhul2FJOBYVXbb4DC_W54l7ITTQi-53itkrKjPHNiXofDNLr9h9DgvW1E75xPipvIfDSWGmwB0CPlg277KlcpubnVgVKyo_RAPnao1wwFVNZ2zKgJaM6ND-ilCwhMyZSLIUY5CcoZg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Solution:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/0AcA6uYbxr7vrFe2pYPaw1eFC8W-dTnV6OqsQ03PzxbziO_tVGaqbtALnVF9EjgtsZoMGIJlkt-vojuZbPE9WHFSEXQbXC2-n9r5HaVQD2bk5n78dLLan-jdeax4TvToF1hddV1sQbAxsihgJWc",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 2:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/3Mn8S6u0tfS0MMhEKwPCOZAJzSRDdbQUI5boqsaCeQ2xDRCH5tCV8KK08UBozXxH3yKTbe5jgS_pL9GwQa0MutJUfXJi2MNjmuTcZ7p3SHtWUtd8ERBSCnzZ8VZ3RUaKxV9iF6Bx8C7273qZeA",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Solution 2:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/5shQVhnmBOSZx15yAPlh7Ft7fs1_jml9jODrwswc1CMFddutWPX7sBHRCr75xuNHxefQe8UdCiSxW-jx_1WbKcrp55nid40pIK-2a2mwlctais1ud-JFBWNgKwOS6cXjsV964kKO5MvMW92Q0Fo",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 3:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/HBqULZsLgAKqLV3qtBgF0n6WlyJWGxqxpTVqP7x8xbhbVt7JtsGuIKeilQ6AlqCfwYx7VZpxGS8MnFihQqn56hCDW_WEduRlaAPxqy3vnNFvJDUpe6FVcvncaU6fl6ckkZfKUXap6CjPbZykPA",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Solution 3:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/HA6d8iySayI_GkgP5cvQ5WiLTHZh73tl4d_AzMxWuha_mVD74gWGR5R0wJz6aNxGmptZriiTwGiIySi-gti93uRB7CN_fqyi9qlzFNdW87TOGQYS-EUdgLrpLGkcj_HNz2pd6TrpZ7IfLl7zKLU",alt:null})),(0,l.kt)("h2",{id:"search-algorithm"},"SEARCH ALGORITHM"),(0,l.kt)("p",null,"In this topic we will be studying on how to develop the techniques to get the best efficient algorithm for a problem by simply solving the puzzles."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"These puzzles will train your brain to develop your thinking on algorithm building in a right direction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Problem Statement:")),(0,l.kt)("p",null,"You have been given an array of integer elements and a number in a circle you have to identify whether this number is present in the array or not.If it is present then print the position of it in the array and if it is not then print -1."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Consider the following figure for better understanding of the question")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/rnM0iTRf_J9gOkDIQFqDZpwYpW5cEa_Nfdb65JyiwiSdwuAHfpKe3yfTDVb7JPKCtuQzznRXfQAMMomkgjePxhx_uAMguWcjHPOOtG3mThN8OZ-0BtxDn29CJaknuzudnzW3axG0I61954vssA",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Intuition for the approach")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Here we can see that if we start searching for the element from the middle of the array then we would end up missing some elements and it could be possible that our required element could lie in that missing part so to access all the elements we will begin our searching from the first element that is 0th index.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Approach")),(0,l.kt)("p",null,"Here we are asked to find the position of 7 in the given array, So first we will start comparing this element with the element which is kept at the 0th index in the array as the indexing used here is 0 based."),(0,l.kt)("p",null,"As we can see here that the element kept here is 5 and it is not equal to 7 then we will increment our value by 1 and will move to the 1st position now here as we can see 2 is present which is again not equal to 7 so we will again increment our value by 1 and move to the 2nd index where 19 is present which is again not equal to 7 So we will again increment our value by 1 and move to the third position."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Now as at the third position 7 is present which is equal to the given number so we will stop here and print the index of this position which is 3.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Follow up:")),(0,l.kt)("p",null,"Try solving these questions it will increase your understanding and will force you to think in the right direction for building up an efficient algorithm."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 1.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/fftqmWuStzoi36RBJ40HF6iDgsdukdr9QDRq7i1cD_eFAzH4ZTyhx2cIFluiDvYSpNv-3LdRnTdEFBgEV0bBKu2sk9P9eHIcwI8EDr1gABYBVHnzKapv4aGT8UaSlOXf6nMN5IIw38WvS8XYxg",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 2.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/z8bMGsLykgySiLnc4eNsf9Ein7cuXZVoRRuPPkogz16x64t3tpi6e_tEqt5_GAQnDnXhloLIeyQV2gKzZ6PoO1aUledOHIRlgTNlU_ue5WK5JSCbD4yexOgfmVrZfKq2KtlVvX2zH4x8eWMT_A",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 3.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/kaYJ_bkC7RlRZmAc0u5j8gB3AJ2UsQaO2mR9c9BSthHj5cHkqC7ySuu1MUkv4TL7RDqpjSnYLXujU-f1FongmnUM49UGM-8TWxja_t5uXonDiHnk_b6hPFSaCOtmw8YOjYJfCSn5ZYkmHqhU1A",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"-1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 4.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/jOo4v9Ai_3HMmwUzWZ0GMK84nxLE7v0aYymuNNFVbjwKnZTyILsfuh1LKtZ74nIlfmnjHCTP46m9JyRGHM7lx3xV_5JBnvOm_PXpae0Y6tKPpwE7kCcQD3JzSBDtoE6-eaEBXLXg8R4AYal4Tw",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"2"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 5.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/bYboUpk8YKmA8fvOxyYxY-ByF8G3zxR0x2dqlbAVYQIsdGzJuuTB8Thoamd0qGHHO_i7dKa0USqVLpZcByu2DldBJwcs_yUk5S2dIGw662H-sucscswLtQZdmP5rRUSFKkBECuuNqPYjOD-g-g",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"-1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 6.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/em1CI1WA809dTM9kNA0ge6tDBWm1VwCwHMzy-4DnyQebNQFiL9W1cioOCmzi08QLXMdbhklxxUbeJip4o-1QVHjASKmdoL5qkW-zX3aABFyd9ieDCeudDVA7GJcieSDnncUCFHooqoDB7aIlxw",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 7.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/aZtcCE1zANzvj9WgyUhMIseNA7eO4Mx80E_C_qonbYraP9lN9A0PmX9LWiLkL0jMveEL7mGrDVqD7zbR6bLqS3NzCZVRWanHqnC-V81aRs0dq5Yi9zuoEOpe29yupPpauYbFGx01XjWLzHlVvg",alt:null})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Check the solution!"),"-1"),(0,l.kt)("h2",{id:"bakuro-puzzles"},"Bakuro PUZZLES"),(0,l.kt)("p",null,"These puzzles are binary versions of the popular Kakuro puzzle. The empty cells of the grid must be filled with the numbers 1, 2, 4, 8,16 \u2026. and so on (i.e., only powers of 2). As with Kakuro, the numbers in each block in a column or row must add up to the number given in the clue above or to the left, respectively. No number can be used twice within any sum. The clues are given in both binary and decimal. The answers must also be written in both binary and decimal. Here is an example with a solution and the method to how to approach in the right direction for a given problem."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Problem statement:")),(0,l.kt)("p",null,"Solve the given bakuro problem as shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/hbMAkAQlTR9-f8Ms00LZjZRrilEvbft2j7wwlg62s3lfQZMEnR6sH5HHzkowLkANl5T3_fxt4xn1Szlt8JACuJa40_kpXsd61WAAfW5cJdkO_TS6Xv1QEju50AmXOrJAFmd363aWz-5F7eqDVg",alt:null})),(0,l.kt)("p",null,"Now Let\u2019s first Understand the basic Logical Intuition to solve this Problem:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Intuition:")),(0,l.kt)("p",null,"We can deduce the answer by noticing that the top row adds up to 3. The only way this can be done with the numbers 1,2,4 and 8 is with 1 + 2. Now the leftmost column must add up to 9, so it must be 1 + 8. The top left cell must hold a number from both those sums, which means it must be 1 (0001 in binary). Now if the top left cell holds 1, then the top right cell must hold 2 (0010 in binary) to make the row add up to 3."),(0,l.kt)("p",null,"Similarly, the bottom right column must be 8 (1000) to make the leftmost column add to 9. That leaves the bottom right cell. It must hold 4 as the bottom row has to add up to 12 (8 + 4). That also makes the rightmost column add to 6 as required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Calculation Hint :")),(0,l.kt)("p",null,"Binary numbers are just a way of making up numbers by adding powers of 2 (1, 2, 4, 8, \u2026) together, just like decimal numbers involve adding powers of 10 (1, 10, 100, 1000) together."),(0,l.kt)("p",null,"Have you noticed any patterns in the numbers? The answers that go in the grid only have a single 1 in their binary representation. The binary of the clue actually tells you which numbers you are looking for. 12 is 1100 in binary which says that 12 is made up of one 8 (1000) and one 4 (0100) with no 2s and no units added together. The row must therefore hold an 8 and a 4. Similarly, 9 is 1001 in binary: one 8 (1000), no 4, no 2 and one unit (0001) added together, so its column must hold an 8 and a 1."),(0,l.kt)("p",null,"So the Solution to this looks like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/pMFRFjQHPGkVYvIm9KUTiY2oaGAkRXgi5MrRK64gpZjQCX_6mvlXs2R51cB9gO0dIp1JFFi79j3HFteo4C3MMrL-rWDzI2zzWDHiRbrGC4a_ZeF5xtoLRNNy-Kb5OAybxjaHJgS9UVyIR60KNg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Follow up:")),(0,l.kt)("p",null,"Now try solving these questions by your own:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 1:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/iLM2QesDWeDa4ZFwKrJnz-cw0vtgXaJ9bugNBdzvIaD3HPYxsUKVVGWIMp9oTgrXDffJiQgZEdrNLIrSDlxqQp9TWc-5UXKQOrPWS6nCegfSjp7qdrumO-ypXCZ7wEKk3MxvmhFybqWWD76_VA",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Solution 1:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/ewPtHIogIOquHfsgy10eJuxtsHcqOw81JC8yhIad5C8ELinzi9CNmHEddhDltcaskISDNyDMuMwuAwIQw7m5rDaLbFSIRzy7gtDDHh52eqYIHelXCKgCNRIQnoUKUnaQudQSpxLSkj0zefMebcE",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 2:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/AoBiYtzOcqRJutXcSWbOQsBK5hiQDtnwbgdPxDFCvYiQJvfZFlnBTJZarT8H4f_DNj0wgFGd31-PF_pSi_2HvrMHwApTRqr8Dy9fYbTgCl5tiMoG1G4u8tpyeEOr0j4FmiRv-hVT0FJwotPD2Q",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Solution:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/pJdgfZLta2KpyRfq_ioLUyfQ0AvwIn17AXz4Df75T7aaYz8GH2kPFTbyjDUwyFQKhVHkLVBO9RZYQz2SpVBzONQu9RKRvGuX6SH8qTdy30QliR24fLZnKyhYu2CbG3iLiMNOVFTtQiqmx3ecAtY",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 3:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/3ErVX3VJ1TbyXp8JehklHyF_a6YBK9Ou9Rzm_8Gd3HLPTcDcRGLs6CW-GPTMyFNeNfS_Xb_MdX7QUHyslJ68_0cNP7jyCs8DXWazVlKJCVe8UXyLQ0vBDm_ZDSLTEs2qBTZoVZG1DpbB9Ug_yg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Solution:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/9l5u6yLgJKLkMjO28vyq1ut2HXNZhklXlsWcIxBjDomvIUHAsR-J8ZyTBPdBFLkUgLiRlcFOlmQc4U7b_3R66y6t8jd0-8O6xrNrDg33iwyiFF1b_H9UUWt7hv5e1byq4IQtqkmMJwaIipJj_xQ",alt:null})),(0,l.kt)("h2",{id:"end-of-the-lesson-assessment"},"End-of-the-lesson Assessment"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 1:")," In the following Cut hive Problem, find the value of a and b."),(0,l.kt)("p",null,"Option A: 1,2"),(0,l.kt)("p",null,"Option B: 1,3"),(0,l.kt)("p",null,"Option C: 2,2"),(0,l.kt)("p",null,"Option D: None of the above"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ans:")," option B"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 2:")," How many iterations will be required if the size of the array in the searching algorithm is 10 and the number to be searched is not present in the array?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"5"),(0,l.kt)("li",{parentName:"ol"},"0"),(0,l.kt)("li",{parentName:"ol"},"10"),(0,l.kt)("li",{parentName:"ol"},"1")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Answer:")),(0,l.kt)("p",null,"Option (C) 10."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Que 3.")," The binary Representation of number 15 is:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"1001"),(0,l.kt)("li",{parentName:"ol"},"1000"),(0,l.kt)("li",{parentName:"ol"},"0101"),(0,l.kt)("li",{parentName:"ol"},"1111")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Answer:")),(0,l.kt)("p",null,"Option (D) 1111"))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcourseware=self.webpackChunkcourseware||[]).push([[22],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,g=p["".concat(s,".").concat(c)]||p[c]||h[c]||a;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={},l="Thinking with Numbers",r={unversionedId:"docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Thinking-with-numbers",id:"docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Thinking-with-numbers",title:"Thinking with Numbers",description:"Lesson Objective",source:"@site/Semester-1/docs/Problem-solving-using-Programming/01-Solving-problems-&-Writing-Algorithms/02-Thinking-with-numbers.mdx",sourceDirName:"docs/Problem-solving-using-Programming/01-Solving-problems-&-Writing-Algorithms",slug:"/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Thinking-with-numbers",permalink:"/Courseware/Semester-1/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Thinking-with-numbers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Problem Solving",permalink:"/Courseware/Semester-1/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Introduction-to-Problem-Solving"},next:{title:"Thinking with Numbers - Part 2",permalink:"/Courseware/Semester-1/docs/Problem-solving-using-Programming/Solving-problems-&-Writing-Algorithms/Thinking-with-numbers-part2"}},s={},u=[{value:"Lesson Objective",id:"lesson-objective",level:2},{value:"Why should we think with numbers?",id:"why-should-we-think-with-numbers",level:2},{value:"Introduction to the Lesson",id:"introduction-to-the-lesson",level:2},{value:"1. Match Stick Magic",id:"1-match-stick-magic",level:3},{value:"2. Number Series",id:"2-number-series",level:3},{value:"3. KenKen Puzzles",id:"3-kenken-puzzles",level:3},{value:"End-of-the-lesson Assessment",id:"end-of-the-lesson-assessment",level:2}],m={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thinking-with-numbers"},"Thinking with Numbers"),(0,i.kt)("h2",{id:"lesson-objective"},"Lesson Objective"),(0,i.kt)("p",null,"In this lesson, you will learn how to approach programming problems. We will try to understand the thinking process that is involved in approaching programming problems by building an analogy with numbers and observations related to numbers. This is a ",(0,i.kt)("strong",{parentName:"p"},"self-paced")," class."),(0,i.kt)("h2",{id:"why-should-we-think-with-numbers"},"Why should we think with numbers?"),(0,i.kt)("p",null,"You must understand that computers are basically naive devices that process data and convert it into the required results. They use the instructions provided by the programmer to do so. Basically, in the future when you will be required to use your programming skills to solve coding problems, you will find that in order to think of the logic involved in the problems, you will be trying to uncover patterns in the examples provided. This is where numbers and number patterns come into play."),(0,i.kt)("p",null,"You will also find pattern problems like these to check your logical thinking ability in preliminary tests that you will face for getting hired. They\u2019re like brain teasers, so let's tease your brain into thinking more critically."),(0,i.kt)("h2",{id:"introduction-to-the-lesson"},"Introduction to the Lesson"),(0,i.kt)("p",null,"Today, we will be solving some number puzzles which will mainly test your skills of observation and pattern discovery."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002.jpeg",alt:"image"})),(0,i.kt)("p",null,"This will be a fun and playful lesson and you will be guided through the thought process that is involved in solving these puzzles.You can find a plethora of such problems on various online platforms. We will be discussing 3 different formats for problems in this lesson and they are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"MatchStick Magic"),(0,i.kt)("li",{parentName:"ol"},"Number Series"),(0,i.kt)("li",{parentName:"ol"},"KenKen Puzzles")),(0,i.kt)("h3",{id:"1-match-stick-magic"},"1. Match Stick Magic"),(0,i.kt)("p",null,"We will be looking at some mathematical equations and geometrical shapes made from matchsticks(which are nothing but straight lines of the same length). Let's consider the following problem statement:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Statement:")," Correct the equation by rearranging exactly two matchsticks\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img1.png",alt:"image"})),(0,i.kt)("p",null,"Think about it, don\u2019t go looking for the answer just yet.Trial and error is how you will learn to solve such brain teasers. If you need a hint, here\u2019s one"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hint: Start your thought process from the right hand side of the equal to sign. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ways of thinking and dealing with such problems")),(0,i.kt)("p",null,"The way to approach these types of problems is to just observe the structure of the shapes included and try using the information you just gathered in multiple places until a solution clicks. The trick here is the speed with which you can observe and that will just come from practice and forcing your brain to think."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to approach")),(0,i.kt)("p",null,"Let us consider this arrangement of matchsticks, as you can see that the equation specified in the pattern is wrong. Observation is an important part of this, so keep an eye out."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Observation 1:")," 9 times 4 is 36 but the answer depicted is 46.\nNow, the first thing that might come to mind is can we rearrange the 4 in RHS to make it 3 somehow by moving 2 sticks because that will make it 36.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Observation 2:")," On further inspection we see that to formulate 3 we would need at least 5 sticks but the 4 in RHS has only 4 sticks, and we also can\u2019t take a stick from the other digits because then it would change the equation.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Observation 3:"),"  We can also observe that 46 does not appear in the tables of any of the 1 digit numbers from 1 to 9 (Pause and try determining why?).\nIf you were able to determine the reason for the above statement, excellent. If you were not, we are here to discuss just that. Now because we are dealing with multiplication, we have to broaden our mind and think in terms of numbers(factors, multiples, etc.). ")),(0,i.kt)("p",null,"Possible pairs of numbers that multiply to the number 46:\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img2.png",alt:"image"})),(0,i.kt)("p",null,"46 does not appear in the tables of any 1 digit number because we can observe that 1, 2, 23, 43 are the factors of 46. So, we can conclude that we surely would have to change the RHS for this to be correct."),(0,i.kt)("p",null,"Let\u2019s explore more,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One option that comes to mind is removing a stick from 6 and making it 5(RHS = 45). Now we would need a 5 * 9 in LHS"),(0,i.kt)("li",{parentName:"ul"},"We already have 9"),(0,i.kt)("li",{parentName:"ul"},"Can we change the 4 to 5 somehow by using the stick from RHS, upon inspection yes we can.")),(0,i.kt)("p",null,"This way, the output will be as shown below\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img3.png",alt:"image"})),(0,i.kt)("p",null,"So that was fun wasn\u2019t it? Let\u2019s do some more of these questions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Follow Up"),"\nYou can try to identify the solution to some example problems that I am providing. Remember that the problems similar to the coding problems you will face later do not have a single pre-defined algorithm to find their solution. Your job is to find a solution by taking inspiration from the methodologies we discussed above."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 1:")," In the following figure, remove 3 sticks to leave 3 squares\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img4.png",alt:"image"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the hint!"),"Think about the various patterns the squares form and how you can change them."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img5.png"},"Check the solution!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 2:")," In the following figure, remove 3 sticks to leave 5 squares\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img4.png",alt:"image"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the hint!"),"Have you forgotten that four small squares together form a single big square."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img6.png"},"Check the solution!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 3:")," In the following figure, Move 1 stick to correct the equation\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img7.png",alt:"image"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the hint!"),"Did you try moving one stick from the LHS to RHS"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/problem-solving/PS0002_img8.png"},"Check the solution!")),(0,i.kt)("h3",{id:"2-number-series"},"2. Number Series"),(0,i.kt)("p",null,"We will be looking at some diagrams consisting of numbers and some of the number(s) might be missing from the diagram. Your job is to identify the missing number(s) and to do so you will be using the specified numbers in the diagram to find some pattern. Let's consider the following problem statement:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Statement:")," Which number should come in the place of the question mark?"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/KpHwVkd7fI-BR61tgz9K90KO_TXhCgxCnk8xr0G8gutmyTLwRzuiPcygvLrc9MBTe7BFjVxecPPZWeTDkvHTdAnikcaYhFuzONe0y4_UZ-mX2C-UqjzQwVbvFOhbuyXekeda5ITNSyB7WD5DGQ",alt:null})),(0,i.kt)("p",null,"Think about how you would approach this problem before moving forward."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ways of thinking and dealing with such problems")),(0,i.kt)("p",null,"The method of dealing with numbers series problems like this one is to just observe the numbers that are known and find patterns between those numbers. The basic approach that I would suggest for such problems is to just ",(0,i.kt)("strong",{parentName:"p"},"look for relationships and patterns between numbers in all directions")," i.e. vertically, horizontally, diagonally etc. Along with that, your numerical ability also plays an important role here i.e. how quickly you can perform basic arithmetic operations. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Tip:")," I would suggest you learn squares and cubes of at least the first 15 numbers. This would turn out to be very helpful in the future.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to approach")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 1:")," If we consider the sample problem we have taken, we can observe that we have been given 3 individual circular shapes with 4 parts each. So, from this we can conclude that a common pattern is followed in all three of these circles. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 2:")," To uncover the pattern, we just brainstorm by remembering these two things:\nLook for relationships and patterns between numbers in all directions i.e. vertically, horizontally, diagonally etc. as I already specified.\nCheck for the exact arithmetic operations being performed here.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 3:")," Observe that the diagonal elements from bottom-left to top-right are being multiplied and the result consists of 2 digits that are represented by the digits from bottom-right to top-left in that order.\nFor example in the first circle, 7 x 8 = 56\nSo, the number that is missing is 6  (9 x 4 = 3 6)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Follow Up")),(0,i.kt)("p",null,"You can try to identify the solution to some example problems provided below. Remember that the problems similar to the coding problems you will face later do not have a single pre-defined algorithm to find their solution. Your job is to find a solution by taking inspiration from the methodologies discussed above."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 1:")," Find out the number that should come in place of the question mark."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/lEzB6qym2Cfwnm4gG2T6Zf5i1pj0wCLhGklqKXfCws14xJ2DN088nbxXM695-SVqbSwAf5Iah53561uKjsogkoVnyDtZ8cmaN9ajRW-mpha43IYGsKY7xbi-qEMC1ZHFicrl6MDKR0wtdHljug",alt:null})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the hint!"),"Please take a closer look at the numbers in alternate columns."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the solution!"),"4 + 8 = 12 + x => x = 0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 2:")," Find out the number that should come in place of the question mark."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/i09W3_7WJ223sF8y_Om1mkxaHrgvDnQnKKeQ-mSZ1mnjF0S9QcO7u_0PFJ58IeWXsEGKkSzf_n89NFkTG4N1TXtt7ph8065GodyIHClDG_bmh4Nlvgsx29FIWE2JK7jGm_agDloeNgwAmwmnUQ",alt:null})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the hint!"),"Take the product of the 1st and 2nd column and do a basic mathematical operation with the 3rd column."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the solution!"),"(6 x 12) \u2013 5 = 67"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Question 3:")," Find out the number that should come in place of the question mark."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/Byz33e5BUqu-_TD4JPMkVkugH6FIrhGBW4noKDx-KgZxItTeZx3XGmCWg4f-YVm7LQJT36bDY3_aLkZ2yJb9aVBJXkPAGyyjEP-Mp2Mdo9XYUs6dD0-woGp26rCzkwvnqC2LZgLXCIyY-9dbkw",alt:null})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the hint!"),"Look at the digits from the upper half and lower half as 3 digit numbers. Eg: fig1 has 496, 992"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check the solution!"),"358 x 2 = 716, so 1"),(0,i.kt)("h3",{id:"3-kenken-puzzles"},"3. KenKen Puzzles"),(0,i.kt)("p",null,"We will be looking at some special puzzle games in this section. We have already previously talked about the importance of quickness in using basic arithmetic operations. Well, KenKen puzzles test just that particular ability."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Statement:")," Here, we are given a grid of size 4x4 and it has been divided into highly outlined areas as we can see."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These heavily outlined areas are called \u201ccages\u201d"),(0,i.kt)("li",{parentName:"ul"},"The top left corner of each cage has a number and an arithmetic operation associated with it, the number defines the result that we must get after applying the specified arithmetic operation on the numbers in the cage."),(0,i.kt)("li",{parentName:"ul"},"Each row and column must be uniquely filled with numbers within a range and this range is decided by grid size (4x4 grid means we have to fill each row and column with numbers from 1 to 4).")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/AIu7GuIzs6EdIYf1Liog1dobDl2Hux4ov-L7lk9-Y7zdQ5KXVT_85-4Wo8GyYLOkjaiXifCQp87CZ4OpeLqWFQCf3qAeW1Z1fHoVCHxGlS0tTLgVrQQ046Tfy4-ozW6D74dHK8SPCiKngM4-lg",alt:null}),"  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Approach to KenKen puzzles")),(0,i.kt)("p",null,"These puzzles will help us in making ",(0,i.kt)("strong",{parentName:"p"},"decisions in a constrained manner")," which is very helpful while solving problems. Here, you can\u2019t use a number more than once in a row or column.(It's like a sudoku!) Similarly, while solving coding problems you might be constrained to not use some tools by an interviewer in an interview. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 1:")," In the puzzle we can see that, first of all we see that there are two cages with only one cell and they can only have one number i.e. 3 and 1. Take this as the starting point, and move forward with the consideration fix 3 and 1 there. Hence we can\u2019t use 3 in the 2nd row and 2nd column and 1 in the 4th row and 1st column. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 2:")," Now, we just have to consider the possible combinations of numbers that can work by keeping the constraints in mind. For example, in the top left most cage, we have 1-, the possible combinations that can achieve this result are 1,2(X); 2,1; 2,3(X); 3,4; 4,3(X). The combinations marked with X are not possible due to the constraints we obtained by filling the initial unit cells.1,2 \u2192 1 is already in the first column 2,3 & 4,3 \u2192 3 is already in the second column")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 3:")," We can see that we\u2019re left with two possible combinations 2,1 and 3,4. Now, again we take 3,4 and fill the box, we see that we are only left with 2 and 4 for the first column. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Step 4:")," This is a problem, because we have to fill the middle-left cage with 1- which is not possible with 2 and 4. Hence, we have reached the only possible combination for the top-left cage i.e. 2,1. Similarly, we can use the already filled cells to fill the cells that are empty. Remember, ",(0,i.kt)("strong",{parentName:"p"},"the process of elimination of possibilities")," is the key here.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Complete Solution:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/stnRvgDr3mNWUKq9BxxClj4gicJDCauiWffzdWmrp9nY_ZBVRAIIOZ7TlngoUmVquWLHcRynk6qCXiRQgZeyaGYP79nNKzKFspmOyjq_w-8XT5rg_h7n1NfZj9VCk1ON4seAOnon83BN6dP6iA",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Follow Up")),(0,i.kt)("p",null,"You can try to solve more of these puzzles and if you are still stuck, try solving KenKen Puzzles of size 3x3 online and then using the experience you will be able to solve the harder 4x4 puzzles."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solve the given KenKen puzzle:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/ThI0pyhqbWeZrf4z9TOs1vO3vDoE5H77A7s9NyLOiQVmmpQEE6HErVg24ZusTVpfSOzIGTGPXhYZc9N5EOaTcp5_y3O-bP_s_rAcq-QF5DVAutFqD11hI6Orn4R8zeGZTkparm1u8bCHGCcu9Q",alt:null})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://lh4.googleusercontent.com/3eEmnAHMqVp0gj6IKseD80jEt2QCtWyvANUEjgdqfa--kKYRfzsRDwMA5QsGbc9dvDmEKeyxpBm2cPN6BFQeBPegIBQkMlGu0hjbDS-y00WLyJYkh3fNAcU_bUFYn-2EfRmkmDmUfHsBrVXaYg"},"Check the solution!")),(0,i.kt)("h2",{id:"end-of-the-lesson-assessment"},"End-of-the-lesson Assessment"),(0,i.kt)("p",null,"Q1: In the Match Stick Magic challenge, which two digit number can be formed with the help of sticks from digit 9?"),(0,i.kt)("p",null,"A.  41"),(0,i.kt)("p",null,"B.  22"),(0,i.kt)("p",null,"C.  14"),(0,i.kt)("p",null,"D.  (a) & (b) both "),(0,i.kt)("p",null,"Answer: Option D"),(0,i.kt)("p",null,"LU Measured: Problem solving    "),(0,i.kt)("p",null,"Q2: Find the number that will come in place of the question mark."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/E7Se3nVJE8LqAk45Fuah8ENF6CP-3D53WIamhviISt5Ct3ohc6RFvtRLQvDzNdvQ9B63ykV8Qe0JfhK_e5WY6LtspLlsavcZEUb60BZvAcjpSZLYbw7baSNtvsr_YIwnnxBLXI1Cj22BGRMZLw",alt:null}),"  "),(0,i.kt)("p",null,"A.  51 "),(0,i.kt)("p",null,"B.  22"),(0,i.kt)("p",null,"C.  12"),(0,i.kt)("p",null,"D.  54"),(0,i.kt)("p",null,"Ans: Option A"),(0,i.kt)("p",null,"LU Measured: Problem solving"),(0,i.kt)("p",null,"Q3: Find the digit that will come in place of the question mark in the following KenKen puzzle",(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/MJAEJ2P5JfTWOi7JlZOlAiw8fUF6_cjZBHS8FLDVuzCqZWnRHQ5UkON7lN7Slla4z35AO754MV3yNus84Z53w7Kadd3efa9PUs6y2E2mZf-dQmIP9mV_9ALc6f9Fq_IlGhXX8TC0y6ZnMxN2yw",alt:null})),(0,i.kt)("p",null,"A.  1"),(0,i.kt)("p",null,"B.  3 "),(0,i.kt)("p",null,"C.  2"),(0,i.kt)("p",null,"D.  4"),(0,i.kt)("p",null,"Ans: Option B"),(0,i.kt)("p",null,"LU Measured: Problem solving"),(0,i.kt)("p",null,"And if you think we are done with Numbers, here is what we wanted to say. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://media4.giphy.com/media/3ohzAkPDu0uTEPBKqQ/giphy.gif?cid=ecf05e47z6iz9es9rzide5xlyt0fkj2glmhpo588r9j5373v&rid=giphy.gif&ct=g",alt:null})),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://giphy.com/gifs/spongebob-season-4-spongebob-squarepants-3ohzAkPDu0uTEPBKqQ?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term="},"Giphy")))}h.isMDXComponent=!0}}]);
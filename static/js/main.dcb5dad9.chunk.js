(window.webpackJsonpisometricks=window.webpackJsonpisometricks||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/isometricks_logo.97a25612.svg"},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),i=n.n(c),r=(n(12),n(1)),l=n(6),s=n(4),u=1;function m(e){return Math.sqrt(3)/2*e}var d=m(u);function h(e,t){return e%2===t%2?"right":"left"}function p(e,t,n,a){var o,c=e*d,i=c+d,r=t*(u/2),l=r+u/2,s=r+u,m=r-u/2,h=s+u/2;"left"===a&&(o=i+d),"right"===a&&(o=c-d);var p,g,f,b,v=u/100;return"left"===a&&(p="".concat(i,",").concat(r," ").concat(i,",").concat(s," ").concat(c,",").concat(l),g=o>n.width+v?p:"".concat(i,",").concat(r," ").concat(o,",").concat(l," ").concat(i,",").concat(s," ").concat(c,",").concat(l),f=m<0?p:"".concat(c,",").concat(m," ").concat(i,",").concat(r," ").concat(i,",").concat(s," ").concat(c,",").concat(l),b=h>n.height?p:"".concat(i,",").concat(r," ").concat(i,",").concat(s," ").concat(c,",").concat(h," ").concat(c,",").concat(l)),"right"===a&&(p="".concat(c,",").concat(r," ").concat(i,",").concat(l," ").concat(c,",").concat(s),g=o<0?p:"".concat(c,",").concat(r," ").concat(i,",").concat(l," ").concat(c,",").concat(s," ").concat(o,",").concat(l),b=m<0?p:"".concat(i,",").concat(m," ").concat(i,",").concat(l," ").concat(c,",").concat(s," ").concat(c,",").concat(r),f=h>n.height?p:"".concat(c,",").concat(r," ").concat(i,",").concat(l," ").concat(i,",").concat(h," ").concat(c,",").concat(s)),{orientation:a,triangleCoord:p,topFaceCoord:g,leftFaceCoord:f,rightFaceCoord:b}}function g(e,t){return{width:e*m(u),height:(t-1)*u/2+u}}var f=30;n(14);var b=function(e){var t=e.onDialog,n=e.setOnDialog,c=e.setGridDimensionsInTriangles,i=Object(a.useState)(null),l=Object(r.a)(i,2),s=l[0],u=l[1];function m(){null!==s&&u(null),n(null)}return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",disabled:null!==t&&"grid size"!==t,className:"grid-size toolbar-btn ".concat("grid size"===t&&"active"),onClick:function(){null===t?n("grid size"):"grid size"===t&&m()}},o.a.createElement("svg",{viewBox:"0 0 42 47.75"},o.a.createElement("path",{d:"m 40,47.75 c 1.104,0 2,-0.896 2,-2 v -24 c 0,-0.53 -0.211,-1.039 -0.586,-1.414 l -8,-8 C 33.039,11.961 32.53,11.75 32,11.75 H 14 c -1.104,0 -2,0.896 -2,2 v 32 c 0,1.104 0.896,2 2,2 z m -3.829,-27 H 32 V 16.579 Z M 16,15.75 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 v 19 H 16 Z"}),o.a.createElement("path",{d:"m 38,6 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 V 2 C 42,0.896 41.104,0 40,0 38.896,0 38,0.896 38,2 H 16 C 16,0.896 15.104,0 14,0 12.896,0 12,0.896 12,2 v 4 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2"}),o.a.createElement("path",{d:"m 0,45.75 c 0,1.104 0.896,2 2,2 h 4 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 v -28 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 H 2 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 v 28 c -1.104,0 -2,0.896 -2,2 z"}))),"grid size"===t&&o.a.createElement("div",{className:"grid-size-wrapper"},o.a.createElement("div",{className:"grid-size-dropdown"},o.a.createElement("p",null,"Select a size for a new ",o.a.createElement("strong",null,"empty")," grid:"),o.a.createElement("div",{className:"radio-component"},o.a.createElement("input",{id:"mobile-size",type:"radio",name:"size",onClick:function(){return u({width:16,height:35})}}),o.a.createElement("label",{htmlFor:"mobile-size"},"for mobile phone (16 x 35)")),o.a.createElement("div",{className:"radio-component"},o.a.createElement("input",{id:"desktop-size",type:"radio",name:"size",onClick:function(){return u({width:46,height:35})}}),o.a.createElement("label",{htmlFor:"desktop-size"},"for desktop (46 x 35)")),o.a.createElement("button",{type:"button",className:"apply-grid-size dialog-btn",disabled:null===s,onClick:function(){return null!==s&&(c(s),u(null)),void n(null)}},"Apply"),o.a.createElement("button",{type:"button",className:"close-grid-size dialog-btn",onClick:function(){return m()}},"Close"))))};n(15);var v=function(e){var t=e.activeFace,n=e.setActiveFace,a=e.onDialog,c=e.setOnDialog,i=e.backwardInHistory,r=e.forwardInHistory,l=e.setGridDimensionsInTriangles,s=e.buildAndSaveFile;return o.a.createElement("div",{className:"Toolbar"},o.a.createElement("div",{className:"left-buttons"},o.a.createElement(b,{onDialog:a,setOnDialog:c,setGridDimensionsInTriangles:l}),o.a.createElement("button",{type:"button",disabled:null!==a,className:"download toolbar-btn",onClick:function(){return s()}},o.a.createElement("svg",{viewBox:"0 0 30 36"},o.a.createElement("path",{d:"m 28,36 c 1.104,0 2,-0.896 2,-2 V 10 C 30,9.47 29.789,8.961 29.414,8.586 l -8,-8 C 21.039,0.211 20.53,0 20,0 H 2 C 0.896,0 0,0.896 0,2 v 32 c 0,1.104 0.896,2 2,2 z M 24.171,9 H 20 V 4.829 Z M 4,4 h 12 v 7 c 0,1.104 0.896,2 2,2 h 8 V 32 H 4 Z"}),o.a.createElement("path",{d:"m 15,27.641506 -5.033641,-3.25 m 5.033641,3.25 5.033641,-3.25 M 15,16.95101 v 10.690496",style:{strokeWidth:"3.25",strokeLinecap:"round",strokeLinejoin:"round"}}))),o.a.createElement("button",{type:"button",className:"backward toolbar-btn",disabled:null===i||null!==a,onClick:i},o.a.createElement("svg",{viewBox:"0 0 454.839 454.839"},o.a.createElement("path",{d:"M404.908,283.853c0,94.282-76.71,170.986-170.986,170.986h-60.526c-10.03,0-18.158-8.127-18.158-18.157v-6.053c0-10.031,8.127-18.158,18.158-18.158h60.526c70.917,0,128.618-57.701,128.618-128.618c0-70.917-57.701-128.618-128.618-128.618H122.255l76.905,76.905c8.26,8.257,8.26,21.699,0,29.956c-8.015,8.009-21.964,7.997-29.961,0L56.137,149.031c-4.001-4.001-6.206-9.321-6.206-14.981c0-5.656,2.205-10.979,6.206-14.978L169.205,6.002c7.997-8.003,21.958-8.003,29.956,0c8.26,8.255,8.26,21.699,0,29.953l-76.905,76.911h111.666C328.198,112.866,404.908,189.573,404.908,283.853z"}))),o.a.createElement("button",{type:"button",className:"forward toolbar-btn",disabled:null===r||null!==a,onClick:r},o.a.createElement("svg",{viewBox:"0 0 454.839 454.839"},o.a.createElement("g",{transform:"rotate(-180 227.41949462890625,227.45840454101562)"},o.a.createElement("path",{d:"m404.908004,170.994574c0,-94.332459 -76.709999,-171.07751 -170.985997,-171.07751l-60.525999,0c-10.03,0 -18.158,8.13135 -18.158,18.166717l0,6.05624c0,10.036369 8.127,18.167718 18.158,18.167718l60.525999,0c70.916999,0 128.617998,57.731881 128.617998,128.686835c0,70.954954 -57.700999,128.686835 -128.617998,128.686835l-111.666998,0l76.904999,-76.946159c8.26,-8.261419 8.26,-21.710613 0,-29.972032c-8.015,-8.013286 -21.964,-8.00128 -29.960999,0l-113.061998,113.125512c-4.001,4.003141 -6.206,9.325989 -6.206,14.989018c0,5.659027 2.205,10.984876 6.206,14.986016l113.067998,113.130514c7.997,8.007283 21.958,8.007283 29.955999,0c8.26,-8.259418 8.26,-21.710613 0,-29.969031l-76.904999,-76.952162l111.665998,0c94.275998,0 170.985997,-76.748053 170.985997,-171.078511z"}))))),o.a.createElement("div",{className:"right-buttons"},o.a.createElement("button",{type:"button",disabled:null!==a,className:"left toolbar-btn ".concat("left"===t&&"active"),onClick:function(){return n("left")}},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{points:"0,0 0.8660,0.5 0.8660,1.5 0,1"}))),o.a.createElement("button",{type:"button",disabled:null!==a,className:"top toolbar-btn ".concat("top"===t&&"active"),onClick:function(){return n("top")}},o.a.createElement("svg",{viewBox:"0 0 1.7321 1"},o.a.createElement("polygon",{points:"0.8660,0 1.7321,0.5 0.8660,1 0,0.5"}))),o.a.createElement("button",{type:"button",disabled:null!==a,className:"right toolbar-btn ".concat("right"===t&&"active"),onClick:function(){return n("right")}},o.a.createElement("svg",{viewBox:"0 0 0.8660 1.5"},o.a.createElement("polygon",{points:"0.8660,0 0.8660,1 0,1.5 0,0.5"})))))};n(16);var E=function(e){for(var t=e.presentation,n=e.gridDimensionsInTriangles,a=e.trianglesMap,c=e.triangleClickHandler,i=[],r=0;r<n.width;r++)for(var l=function(e){var n=a[r][e];i.push(o.a.createElement("polygon",{key:"".concat(r,",").concat(e),points:n.triangleCoord,"data-orientation":n.orientation,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,onClick:c&&function(){return c(n)}}))},s=0;s<n.height;s++)l(s);return o.a.createElement("g",{className:"TrianglesGrid"},i)};n(17);var w=function(e){var t=e.gridDimensionsInTriangles,n=e.triangleClickHandler,a=e.polygonStack,c=function(e,t){for(var n=g(e,t),a=[],o=0;o<e;o++){a[o]=[];for(var c=0;c<t;c++){var i=h(o,c);a[o][c]=p(o,c,n,i)}}return a}(t.width,t.height),i=g(t.width,t.height),r=[];return a.forEach((function(e,t){r.push(o.a.createElement("polygon",{key:t,points:e.points,stroke:"none",fill:e.fill}))})),o.a.createElement("div",{className:"Frame"},o.a.createElement("svg",{className:"Frame-svg",viewBox:"0 ".concat(u/2," ").concat(i.width," ").concat(i.height-u),preserveAspectRatio:"xMidYMin"},o.a.createElement("rect",{x:"0",y:"0",width:i.width,height:i.height,className:"Frame-background",stroke:"none",fill:"white"}),o.a.createElement(E,{presentation:{stroke:"silver",strokeWidth:"0.01",fill:"transparent"},gridDimensionsInTriangles:t,trianglesMap:c}),r,o.a.createElement(E,{presentation:{stroke:"none",fill:"transparent"},gridDimensionsInTriangles:t,trianglesMap:c,triangleClickHandler:n})))},k=(n(18),{width:16,height:35}),y="royalblue",C="lightskyblue",N="mediumblue";var z=function(){var e=Object(a.useState)(k),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("left"),m=Object(r.a)(i,2),d=m[0],h=m[1],p=Object(a.useState)(null),b=Object(r.a)(p,2),E=b[0],z=b[1],x=Object(a.useState)([[]]),O=Object(r.a)(x,2),j=O[0],F=O[1],D=Object(a.useState)(null),H=Object(r.a)(D,2),I=H[0],T=H[1];Object(a.useEffect)((function(){F([[]]),T(null)}),[n]);var B=j.length-1;function M(){return null===I?B:I}function S(){T(null===I?B-1:I-1)}function A(){T(I===B-1?null:I+1)}function W(e){var t=function(e,t){for(var n=Object(l.a)(e),a=0;a<n.length;a++){if(n[a].points===t.points){n.splice(a,1);break}}return n.concat(t)}(j[M()],e),n=j.slice(0,M()+1);n.push(t),F(n),T(null)}return o.a.createElement("div",{className:"Editor"},o.a.createElement(v,{activeFace:d,setActiveFace:h,onDialog:E,setOnDialog:z,backwardInHistory:0===B||0===I?null:S,forwardInHistory:null===I?null:A,setGridDimensionsInTriangles:c,buildAndSaveFile:function(){!function(e,t){var n=g(t.width,t.height),a="0 ".concat(u/2," ").concat(n.width," ").concat(n.height-u),o='\n<svg class="isometricks-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="'.concat(n.width*f,'px" height="').concat((n.height-u)*f,'px" preserveAspectRatio="xMinYMin" viewBox="').concat(a,'">').concat(function(e){var t="";return e.forEach((function(e){t+='\n  <polygon points="'.concat(e.points,'" stroke="none" fill="').concat(e.fill,'" />')})),t}(e),"\n</svg>\n  "),c=new Blob([o],{type:"image/svg+xml"});Object(s.saveAs)(c,"isometricks.svg")}(j[M()],n)}}),o.a.createElement(w,{gridDimensionsInTriangles:n,triangleClickHandler:function(e){var t,n;null!==d&&null===E&&("left"===d?(t=e.leftFaceCoord,n=y):"top"===d?(t=e.topFaceCoord,n=C):"right"===d&&(t=e.rightFaceCoord,n=N),W({type:"face",points:t,fill:n}))},polygonStack:j[M()]}))};n(19);var x=function(){return o.a.createElement("div",{className:"info-page"},o.a.createElement("h2",null,"What is it?"),o.a.createElement("p",null,"isometricks.com is meant to be an easy-to-use digital counterpart of isometric paper, with the features of an editor, to be used directly in the browser (use it on mobile, tablet or desktop, with any OS)."),o.a.createElement("h2",null,"And what for?"),o.a.createElement("p",null,'Isometric projections are an easy way to represent 3D shapes on a 2D image. With this editor, you can draw shapes based on basic isometric tiles (or "faces"). It can be used for quick prototyping of isometric designs, such as logos for example. Or just have fun with it, experimenting and drawing isometric shapes, illustrations or illusions!'),o.a.createElement("h2",null,"How to use it?"),o.a.createElement("p",null,"The easiest isometric shape is a cube, you draw it with three faces: a left face, an upper face, and a right face. Just select the face you want to draw in the editor's toolbar, and click on the grid where you want to draw it. That's it!"),o.a.createElement("p",null,"Current features are (in the order they appear in the toolbar):"),o.a.createElement("ul",null,o.a.createElement("li",null,"grid size selector"),o.a.createElement("li",null,"download the current illustration as SVG file"),o.a.createElement("li",null,"history backward and forward buttons"),o.a.createElement("li",null,"face selector buttons")),o.a.createElement("p",null,"If you like this tool, please promote it!",o.a.createElement("em",{className:"hashtag"},"#isometricks")),o.a.createElement("h2",null,"Free to use, open source and open to collaboration"),o.a.createElement("p",null,"This editor is free to use, doesn't require registration, and doesn't use any cookie (absolutely no data is stored)."),o.a.createElement("p",null,"The code of this editor is open source and open to collaboration on Github. Feel free to ",o.a.createElement("a",{href:"https://github.com/NicolasLetellier/isometricks"},"have a look")," and see how it works under the hood!"))},O=n(5),j=n.n(O);n(20);var F=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header ".concat(n&&"info-header")},o.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),!n&&o.a.createElement("button",{type:"button",className:"info-btn",onClick:function(){return c((function(e){return!e}))}},o.a.createElement("svg",{viewBox:"0 0 192.01154 192.01204"},o.a.createElement("g",{transform:"translate(-8.9942336,-52.493976)",id:"layer1"},o.a.createElement("path",{d:"M 104.99974,52.493976 A 96.00595,96.00595 0 0 0 8.9942336,148.5 96.00595,96.00595 0 0 0 104.99974,244.50602 96.00595,96.00595 0 0 0 201.00577,148.5 96.00595,96.00595 0 0 0 104.99974,52.493976 Z m 0,16.253272 a 79.752975,79.752975 0 0 1 7.96231,0.398425 79.752975,79.752975 0 0 1 7.8822,1.191141 79.752975,79.752975 0 0 1 7.72408,1.97249 79.752975,79.752975 0 0 1 7.48895,2.733167 79.752975,79.752975 0 0 1 7.17837,3.467489 79.752975,79.752975 0 0 1 6.79597,4.167187 79.752975,79.752975 0 0 1 6.34638,4.824511 79.752975,79.752975 0 0 1 5.83324,5.433777 79.752975,79.752975 0 0 1 5.26117,5.989298 79.752975,79.752975 0 0 1 4.63745,6.484357 79.752975,79.752975 0 0 1 3.96668,6.91534 79.752975,79.752975 0 0 1 3.25613,7.27656 79.752975,79.752975 0 0 1 2.51406,7.56543 79.752975,79.752975 0 0 1 1.74563,7.77833 79.752975,79.752975 0 0 1 0.96067,7.91373 79.752975,79.752975 0 0 1 0.19998,5.64152 79.752975,79.752975 0 0 1 -0.39842,7.96178 79.752975,79.752975 0 0 1 -1.19166,7.88273 79.752975,79.752975 0 0 1 -1.97197,7.72407 79.752975,79.752975 0 0 1 -2.73369,7.48895 79.752975,79.752975 0 0 1 -3.46749,7.17786 79.752975,79.752975 0 0 1 -4.16667,6.79648 79.752975,79.752975 0 0 1 -4.82451,6.34639 79.752975,79.752975 0 0 1 -5.43429,5.83323 79.752975,79.752975 0 0 1 -5.9893,5.26118 79.752975,79.752975 0 0 1 -6.48436,4.63692 79.752975,79.752975 0 0 1 -6.91482,3.96669 79.752975,79.752975 0 0 1 -7.27656,3.25665 79.752975,79.752975 0 0 1 -7.56543,2.51354 79.752975,79.752975 0 0 1 -7.77834,1.74614 79.752975,79.752975 0 0 1 -7.91424,0.96067 79.752975,79.752975 0 0 1 -5.64152,0.19947 79.752975,79.752975 0 0 1 -7.961787,-0.39842 79.752975,79.752975 0 0 1 -7.882723,-1.19114 79.752975,79.752975 0 0 1 -7.724076,-1.97249 79.752975,79.752975 0 0 1 -7.488431,-2.73317 79.752975,79.752975 0 0 1 -7.178373,-3.46749 79.752975,79.752975 0 0 1 -6.796484,-4.16719 79.752975,79.752975 0 0 1 -6.346384,-4.82451 79.752975,79.752975 0 0 1 -5.832718,-5.43378 79.752975,79.752975 0 0 1 -5.261695,-5.98929 79.752975,79.752975 0 0 1 -4.636926,-6.48436 79.752975,79.752975 0 0 1 -3.966683,-6.91534 79.752975,79.752975 0 0 1 -3.256648,-7.27656 79.752975,79.752975 0 0 1 -2.513541,-7.56491 79.752975,79.752975 0 0 1 -1.74563,-7.77886 79.752975,79.752975 0 0 1 -0.960665,-7.91373 79.752975,79.752975 0 0 1 -0.199988,-5.64151 79.752975,79.752975 0 0 1 0.398425,-7.96179 79.752975,79.752975 0 0 1 1.191143,-7.88272 79.752975,79.752975 0 0 1 1.97249,-7.72408 79.752975,79.752975 0 0 1 2.733683,-7.48843 79.752975,79.752975 0 0 1 3.467488,-7.17837 79.752975,79.752975 0 0 1 4.166669,-6.79649 79.752975,79.752975 0 0 1 4.824513,-6.346377 79.752975,79.752975 0 0 1 5.434293,-5.833236 79.752975,79.752975 0 0 1 5.988783,-5.261176 79.752975,79.752975 0 0 1 6.484874,-4.636927 79.752975,79.752975 0 0 1 6.914824,-3.966683 79.752975,79.752975 0 0 1 7.276558,-3.256648 79.752975,79.752975 0 0 1 7.565429,-2.513541 79.752975,79.752975 0 0 1 7.778338,-1.746147 79.752975,79.752975 0 0 1 7.913727,-0.960665 79.752975,79.752975 0 0 1 5.641515,-0.199472 z"}),o.a.createElement("path",{d:"m 90.264317,105.80131 q 0,-6.033504 4.022339,-10.133196 4.099692,-4.099693 10.752024,-4.099693 6.65233,0 10.67467,4.099693 4.02234,4.099692 4.02234,10.133196 0,6.03351 -4.02234,10.21056 -4.02234,4.09969 -10.67467,4.09969 -6.652332,0 -10.752024,-4.09969 -4.022339,-4.17705 -4.022339,-10.21056 z m 28.233723,98.23791 q -1.77911,0.30941 -5.18262,0.85088 -3.40352,0.54147 -6.88439,0.54147 -3.48087,0 -6.26557,-0.46412 -2.784697,-0.46412 -4.718514,-1.85646 -1.856464,-1.4697 -2.862049,-3.86764 -1.005585,-2.47528 -1.005585,-6.42027 v -64.51214 q 1.779112,-0.30941 5.105277,-0.85087 3.403521,-0.54147 6.884391,-0.54147 3.48087,0 6.26556,0.46411 2.7847,0.46412 4.64117,1.93382 1.93381,1.39235 2.9394,3.86763 1.08293,2.39794 1.08293,6.34292 z"})))),n&&o.a.createElement("button",{type:"button",className:"back-to-editor-btn",onClick:function(){return c((function(e){return!e}))}},"Back to editor")),!n&&o.a.createElement(z,null),n&&o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.dcb5dad9.chunk.js.map
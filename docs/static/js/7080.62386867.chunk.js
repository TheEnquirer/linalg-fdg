"use strict";(self.webpackChunklinalg_fdg=self.webpackChunklinalg_fdg||[]).push([[7080],{7080:function(t,e,a){function r(t){var e=t.match(/^\s*\S/);return t.skipToEnd(),e?"error":null}a.r(e),a.d(e,{asciiArmor:function(){return n}});var n={token:function(t,e){var a;if("top"==e.state)return t.sol()&&(a=t.match(/^-----BEGIN (.*)?-----\s*$/))?(e.state="headers",e.type=a[1],"tag"):r(t);if("headers"==e.state){if(t.sol()&&t.match(/^\w+:/))return e.state="header","atom";var n=r(t);return n&&(e.state="body"),n}return"header"==e.state?(t.skipToEnd(),e.state="headers","string"):"body"==e.state?t.sol()&&(a=t.match(/^-----END (.*)?-----\s*$/))?a[1]!=e.type?"error":(e.state="end","tag"):t.eatWhile(/[A-Za-z0-9+\/=]/)?null:(t.next(),"error"):"end"==e.state?r(t):void 0},blankLine:function(t){"headers"==t.state&&(t.state="body")},startState:function(){return{state:"top",type:null}}}}}]);
//# sourceMappingURL=7080.62386867.chunk.js.map
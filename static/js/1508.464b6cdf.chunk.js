"use strict";(self.webpackChunklinalg_fdg=self.webpackChunklinalg_fdg||[]).push([[1508],{1508:function(t,e,n){function r(t){return{type:t,style:"keyword"}}n.r(e),n.d(e,{haxe:function(){return at},hxml:function(){return it}});var a,i=r("keyword a"),o=r("keyword b"),u=r("keyword c"),l=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:u,break:u,continue:u,new:u,throw:u,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:l,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(t,e,n){return e.tokenize=n,n(t,e)}function v(t,e){for(var n,r=!1;null!=(n=t.next());){if(n==e&&!r)return!0;r=!r&&"\\"==n}}function y(t,e,n){return s=t,a=n,e}function b(t,e){var n=t.next();if('"'==n||"'"==n)return m(t,e,(r=n,function(t,e){return v(t,r)&&(e.tokenize=b),y("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(n))return y(n);if("0"==n&&t.eat(/x/i))return t.eatWhile(/[\da-f]/i),y("number","number");if(/\d/.test(n)||"-"==n&&t.eat(/\d/))return t.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),y("number","number");if(e.reAllowed&&"~"==n&&t.eat(/\//))return v(t,"/"),t.eatWhile(/[gimsu]/),y("regexp","string.special");if("/"==n)return t.eat("*")?m(t,e,k):t.eat("/")?(t.skipToEnd(),y("comment","comment")):(t.eatWhile(p),y("operator",null,t.current()));if("#"==n)return t.skipToEnd(),y("conditional","meta");if("@"==n)return t.eat(/:/),t.eatWhile(/[\w_]/),y("metadata","meta");if(p.test(n))return t.eatWhile(p),y("operator",null,t.current());if(/[A-Z]/.test(n))return t.eatWhile(/[\w_<>]/),y("type","type",a=t.current());t.eatWhile(/[\w_]/);var r,a=t.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&e.kwAllowed?y(i.type,i.style,a):y("variable","variable",a)}function k(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=b;break}r="*"==n}return y("comment","comment")}var h={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function x(t,e,n,r,a,i){this.indented=t,this.column=e,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(t,e){for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0}function g(t,e){if(/[a-z]/.test(e.charAt(0)))return!1;for(var n=t.importedtypes.length,r=0;r<n;r++)if(t.importedtypes[r]==e)return!0}function A(t){for(var e=V.state,n=e.importedtypes;n;n=n.next)if(n.name==t)return;e.importedtypes={name:t,next:e.importedtypes}}var V={state:null,column:null,marked:null,cc:null};function S(){for(var t=arguments.length-1;t>=0;t--)V.cc.push(arguments[t])}function W(){return S.apply(null,arguments),!0}function z(t,e){for(var n=e;n;n=n.next)if(n.name==t)return!0;return!1}function T(t){var e=V.state;if(e.context){if(V.marked="def",z(t,e.localVars))return;e.localVars={name:t,next:e.localVars}}else if(e.globalVars){if(z(t,e.globalVars))return;e.globalVars={name:t,next:e.globalVars}}}var E={name:"this",next:null};function _(){V.state.context||(V.state.localVars=E),V.state.context={prev:V.state.context,vars:V.state.localVars}}function D(){V.state.localVars=V.state.context.vars,V.state.context=V.state.context.prev}function O(t,e){var n=function(){var n=V.state;n.lexical=new x(n.indented,V.stream.column(),t,null,n.lexical,e)};return n.lex=!0,n}function Z(){var t=V.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function P(t){return function e(n){return n==t?W():";"==t?S():W(e)}}function I(t){return"@"==t?W(F):"var"==t?W(O("vardef"),Q,P(";"),Z):"keyword a"==t?W(O("form"),C,I,Z):"keyword b"==t?W(O("form"),I,Z):"{"==t?W(O("}"),_,M,Z,D):";"==t?W():"attribute"==t?W(B):"function"==t?W(Y):"for"==t?W(O("form"),P("("),O(")"),U,P(")"),Z,I,Z):"variable"==t?W(O("stat"),H):"switch"==t?W(O("form"),C,O("}","switch"),P("{"),M,Z,Z):"case"==t?W(C,P(":")):"default"==t?W(P(":")):"catch"==t?W(O("form"),_,P("("),rt,P(")"),I,Z,D):"import"==t?W(q,P(";")):"typedef"==t?W(G):S(O("stat"),C,P(";"),Z)}function C(t){return h.hasOwnProperty(t)||"type"==t?W($):"function"==t?W(Y):"keyword c"==t?W(N):"("==t?W(O(")"),N,P(")"),Z,$):"operator"==t?W(C):"["==t?W(O("]"),L(N,"]"),Z,$):"{"==t?W(O("}"),L(K,"}"),Z,$):W()}function N(t){return t.match(/[;\}\)\],]/)?S():S(C)}function $(t,e){return"operator"==t&&/\+\+|--/.test(e)?W($):"operator"==t||":"==t?W(C):";"!=t?"("==t?W(O(")"),L(C,")"),Z,$):"."==t?W(J,$):"["==t?W(O("]"),C,P("]"),Z,$):void 0:void 0}function B(t){return"attribute"==t?W(B):"function"==t?W(Y):"var"==t?W(Q):void 0}function F(t){return":"==t||"variable"==t?W(F):"("==t?W(O(")"),L(j,")"),Z,I):void 0}function j(t){if("variable"==t)return W()}function q(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(A(e),W()):"variable"==t||"property"==t||"."==t||"*"==e?W(q):void 0}function G(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(A(e),W()):"type"==t&&/[A-Z]/.test(e.charAt(0))?W():void 0}function H(t){return":"==t?W(Z,I):S($,P(";"),Z)}function J(t){if("variable"==t)return V.marked="property",W()}function K(t){if("variable"==t&&(V.marked="property"),h.hasOwnProperty(t))return W(P(":"),C)}function L(t,e){function n(r){return","==r?W(t,n):r==e?W():W(P(e))}return function(r){return r==e?W():S(t,n)}}function M(t){return"}"==t?W():S(I,M)}function Q(t,e){return"variable"==t?(T(e),W(tt,R)):W()}function R(t,e){return"="==e?W(C,R):","==t?W(Q):void 0}function U(t,e){return"variable"==t?(T(e),W(X,C)):S()}function X(t,e){if("in"==e)return W()}function Y(t,e){return"variable"==t||"type"==t?(T(e),W(Y)):"new"==e?W(Y):"("==t?W(O(")"),_,L(rt,")"),Z,tt,I,D):void 0}function tt(t){if(":"==t)return W(et)}function et(t){return"type"==t||"variable"==t?W():"{"==t?W(O("}"),L(nt,"}"),Z):void 0}function nt(t){if("variable"==t)return W(tt)}function rt(t,e){if("variable"==t)return T(e),W(tt)}D.lex=!0,Z.lex=!0;var at={startState:function(t){return{tokenize:b,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new x(-t,0,"block",!1),importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:null,indented:0}},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"==s?n:(e.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),e.kwAllowed="."!=s,function(t,e,n,r,a){var i=t.cc;for(V.state=t,V.stream=a,V.marked=null,V.cc=i,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((i.length?i.pop():I)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return V.marked?V.marked:"variable"==n&&w(t,r)?"variableName.local":"variable"==n&&g(t,r)?"variableName.special":e}}(e,n,s,a,t))},indent:function(t,e,n){if(t.tokenize!=b)return 0;var r=e&&e.charAt(0),a=t.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n.unit:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n.unit):a.indented+(/^(?:case|default)\b/.test(e)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},it={startState:function(){return{define:!1,inString:!1}},token:function(t,e){var n=t.peek(),r=t.sol();if("#"==n)return t.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return t.eat(/-/),"-"==t.peek()&&(t.eat(/-/),a="keyword a"),"D"==t.peek()&&(t.eat(/[D]/),a="keyword c",e.define=!0),t.eatWhile(/[A-Z]/i),a}n=t.peek();return 0==e.inString&&"'"==n&&(e.inString=!0,t.next()),1==e.inString?(t.skipTo("'")||t.skipToEnd(),"'"==t.peek()&&(t.next(),e.inString=!1),"string"):(t.next(),null)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=1508.464b6cdf.chunk.js.map
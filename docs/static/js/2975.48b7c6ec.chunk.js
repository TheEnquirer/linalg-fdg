"use strict";(self.webpackChunklinalg_fdg=self.webpackChunklinalg_fdg||[]).push([[2975],{2975:function(e,n,r){r.r(n),r.d(n,{mbox:function(){return h}});var t=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],a=["Date","Subject","Comments","Keywords","Resent-Date"],i=/^[ \t]/,o=/^From /,d=new RegExp("^("+t.join("|")+"): "),s=new RegExp("^("+a.join("|")+"): "),c=/^[^:]+:/,u=/^[^ ]+@[^ ]+/,l=/^.*?(?=[^ ]+?@[^ ]+)/,m=/^<.*?>/,f=/^.*?(?=<.*>)/;var h={startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:function(e,n){if(e.sol()){if(n.inSeparator=!1,n.inHeader&&e.match(i))return null;if(n.inHeader=!1,n.header=null,e.match(o))return n.inHeaders=!0,n.inSeparator=!0,"atom";var r,t=!1;return(r=e.match(s))||(t=!0)&&(r=e.match(d))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=t,n.header=r[1],"atom"):n.inHeaders&&(r=e.match(c))?(n.inHeader=!0,n.emailPermitted=!0,n.header=r[1],"atom"):(n.inHeaders=!1,e.skipToEnd(),null)}if(n.inSeparator)return e.match(u)?"link":(e.match(l)||e.skipToEnd(),"atom");if(n.inHeader){var a=function(e){return"Subject"===e?"header":"string"}(n.header);if(n.emailPermitted){if(e.match(m))return a+" link";if(e.match(f))return a}return e.skipToEnd(),a}return e.skipToEnd(),null},blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1},languageData:{autocomplete:t.concat(a)}}}}]);
//# sourceMappingURL=2975.48b7c6ec.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(t,e,n){t.exports={statistics:"Statistics_statistics__dg1dO",feedback:"Statistics_feedback__23-sm",badStatistics:"Statistics_badStatistics__2Aanr Statistics_feedback__23-sm",middleStatistics:"Statistics_middleStatistics__3_1C8 Statistics_feedback__23-sm",goodStatistics:"Statistics_goodStatistics__COouB Statistics_feedback__23-sm"}},,,,,function(t,e,n){t.exports={container:"Container_container__3TY9f"}},function(t,e,n){t.exports={section:"Section_section__3x0x1"}},function(t,e,n){t.exports={button:"FeedbackOptions_button__1yh49"}},function(t,e,n){t.exports={notification:"Notification_notification__3L8oU"}},,,,,,,function(t,e,n){},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),s=n(5),o=n.n(s),c=(n(18),n(6)),r=n(7),d=n(13),u=n(12),b=(n(19),n(8)),l=n.n(b),j=n(0);var h=function(t){var e=t.children;return Object(j.jsx)("div",{className:l.a.container,children:e})},f=n(1),p=n.n(f),_=n(3),v=n.n(_);var x=function(t){var e,n=t.good,a=t.neutral,i=t.bad,s=t.total,o=t.positivePercentage;return Object(j.jsxs)("section",{children:[Object(j.jsxs)("div",{className:v.a.statistics,children:[Object(j.jsxs)("p",{children:["Good: ",n]}),Object(j.jsxs)("p",{children:["Neutral: ",a]}),Object(j.jsxs)("p",{children:["Bad: ",i]})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Total:",s]}),s<1?Object(j.jsx)("p",{children:"Positive feedback: 0"}):Object(j.jsxs)("p",{className:(e=o,e>=75?v.a.goodStatistics:e>=50&&e<75?v.a.middleStatistics:v.a.badStatistics),children:["Positive feedback: ",o,"%"]})]})]})};x.prototype={good:p.a.number.isRequired,neutral:p.a.number.isRequired,bad:p.a.number.isRequired,total:p.a.number.isRequired,positivePercentage:p.a.number.isRequired};var O=x,g=n(9),k=n.n(g),m=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:k.a.section,children:[Object(j.jsx)("h1",{children:e}),n]})};m.prototype={title:p.a.string};var S=m,P=n(10),F=n.n(P),B=function(t){var e=t.onLeaveFeedback,n=t.options;return Object(j.jsx)("button",{className:F.a.button,type:"button",onClick:n,children:e})};B.prototype={onLeaveFeedback:p.a.string.isRequired,options:p.a.func.isRequired};var N=B,y=n(11),q=n.n(y),R=function(t){var e=t.message;return Object(j.jsx)("h2",{className:q.a.notification,children:e})};R.prototype={message:p.a.string};var T=R,L=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.onButtonGoodPush=function(){t.setState((function(t){return{good:t.good+1}}))},t.onButtonNeutralPush=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.onButtonBadPush=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){return(100*t.state.good/t.countTotalFeedback()).toFixed(2)},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(j.jsxs)(h,{children:[Object(j.jsxs)(S,{title:"Pleas leave feedback",children:[Object(j.jsx)(N,{options:this.onButtonGoodPush,onLeaveFeedback:"Good",name:"good"}),Object(j.jsx)(N,{options:this.onButtonNeutralPush,onLeaveFeedback:"Neutral",name:"neutral"}),Object(j.jsx)(N,{options:this.onButtonBadPush,onLeaveFeedback:"Bad",name:"bad"})]}),Object(j.jsx)(S,{title:"Statistic",children:this.countTotalFeedback()<1?Object(j.jsx)(T,{message:"There is no feedback"}):Object(j.jsx)(O,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component),w=L;o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.3ddc3667.chunk.js.map
(this["webpackJsonpgame-of-bio"]=this["webpackJsonpgame-of-bio"]||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),l=s(4),n=s.n(l),c=(s(10),s(2)),r=(s(11),s.p+"static/media/blob.892b03b2.svg"),d=s.p+"static/media/blobAlb.a9d81542.svg",o=s.p+"static/media/blobDown.19876dfe.svg",j=s.p+"static/media/blobKlain.7c9f6255.svg",b=s.p+"static/media/blobUltra.74bf8b14.svg",h=s.p+"static/media/blobCat.a6d8576c.svg",m=(s.p,s.p+"static/media/grassDivider.d8944b49.svg"),x=(s(12),s(5)),u=function e(t,s,i,a,l,n){var c=this;Object(x.a)(this,e),this.move=function(){if(!c.dead){var e=Math.floor(Math.random()*(window.innerHeight-150)),t=Math.floor(Math.random()*(window.innerWidth-90)),s=Math.hypot(t-c.left,e-c.top);c.speed=2*Math.ceil(s/300),c.top=e,c.left=t,document.getElementById(c.id).style.transition="top "+c.speed+"s linear, left "+c.speed+"s linear, transform .5s linear",document.getElementById(c.id).style.top=c.top+"px",document.getElementById(c.id).style.left=c.left+"px"}},this.show=function(){document.getElementById(c.id).style.transform="scale(1)"},this.die=function(){document.getElementById(c.id).style.transform="scale(0)"},this.test=function(){document.getElementById(c.id).style.transform="scale(.1)"},this.gen=t,this.ind=s,this.id=t+"."+s,this.ill=i,this.illness=a,this.illnessNum="albinism"===a?1:"down"===a?2:null,this.parents=l,this.img="albinism"===a?d:"down"===a?o:"klainfeltur"===a?j:"ultraman"===a?b:"cat"===a?h:r,this.top=Math.floor(Math.random()*(window.innerHeight-150)),this.left=Math.floor(Math.random()*(window.innerWidth-90)),this.speed=2,this.timeout=n,this.moving=!1,this.dead=!1},f=(s.p,s.p+"static/media/grass.149821f9.svg"),O=(s.p,s.p,s.p+"static/media/restart.99b8c3d9.svg"),g=s.p+"static/media/move.247ea358.svg",v=s.p+"static/media/hammer.cbc6cb5b.svg",p=s(0),y=function(){var e=Object(i.useState)(2),t=Object(c.a)(e,2),s=t[0],a=t[1],l=Object(i.useState)(2),n=Object(c.a)(l,2),r=n[0],d=n[1],o=Object(i.useState)([new u(1,0,!1,null,[null,null],0),new u(1,1,!1,null,[null,null],1)]),j=Object(c.a)(o,2),b=j[0],h=j[1];Object(i.useEffect)((function(){var e=setInterval((function(){b.forEach((function(e){e.dead||setTimeout((function(){e.moving||(e.move(),e.moving=!0,document.getElementById(e.id).classList.add("moving"),setTimeout((function(){e.dead||(e.moving=!1,document.getElementById(e.id).classList.remove("moving"))}),1e3*e.speed))}),1e3*e.timeout)}))}),500);return function(){return clearInterval(e)}}),[b]);return Object(p.jsxs)("div",{id:"game",children:[Object(p.jsx)("img",{id:"grass",src:f,alt:""}),Object(p.jsx)("button",{id:"genbtn",onClick:function(){console.log(r);var e=[],t=0;if(s>=2){b.forEach((function(e){e.gen===s-2&&(e.die(),e.dead=!0,d((function(e){return e-1})))}))}for(var i=b.length-r,l=function(a){var l=Math.floor(2*Math.random()+1);console.log("--\x3e "+l),console.log("--\x3e "+b[i].id+" "+b[i+1].id),d((function(e){return e+l}));for(var n=0;n<l;n++){var c=void 0;b[i].ill&&b[i+1].ill?(c=100*Math.random()<=90,console.log("90%")):b[i].ill&&!b[i+1].ill||!b[i].ill&&b[i+1].ill?(c=100*Math.random()<=50,console.log("50%")):(c=100*Math.random()<=30,console.log("30%"));var r=void 0;if(c)if(b[i].ill&&b[i+1].ill)b[i].illness===b[i+1]?r=b[i].illness:b[i].illness!==b[i+1]&&(r=Math.floor(99*Math.random()+1)<50?b[i].illness:b[i+1].illness);else if(b[i].ill&&!b[i+1].ill)r=b[i].illness;else if(!b[i].ill&&b[i+1].ill)r=b[i+1].illness;else{var o=Math.floor(99*Math.random()+1);o<20?r="down":o>20&&o<40?r="klainfeltur":o>40&&o<60?r="ultraman":o>60&&o<80?r="cat":o>80&&(r="albinism")}e.push(new u(s,t,c,r,[b[i],b[i+1]],Math.floor(1*Math.random()+1))),t++}i+=2},n=0;n<Math.floor(r/2);n++)l();h((function(t){return t.concat(e)})),a((function(e){return e+1}))},children:"\u041d\u041e\u0412\u0410 \u0413\u0415\u041d\u0415\u0420\u0410\u0426\u0418\u042f"}),Object(p.jsxs)("div",{id:"toolbar",style:{display:"none"},children:[Object(p.jsx)("div",{className:"tboption",id:"killbtn",children:Object(p.jsx)("img",{src:v,alt:""})}),Object(p.jsx)("div",{className:"tboption",id:"movebtn",children:Object(p.jsx)("img",{src:g,alt:""})}),Object(p.jsx)("div",{className:"tboption",id:"restartbtn",onClick:function(){},children:Object(p.jsx)("img",{src:O,alt:""})})]}),b.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{onLoad:e.show,src:e.img,onClick:e.move,id:e.id,className:"blob "+(e.dead?"dead":""),style:{top:e.top+"px",left:e.left+"px",transition:"top "+e.speed+"s, left "+e.speed+"s, transform .5s"}})},e.id)}))]})},k=(s(14),function(){return Object(p.jsx)("div",{id:"landingpage",children:Object(p.jsxs)("div",{id:"lpcont",children:[Object(p.jsxs)("h1",{children:["\u041d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u0438 \u0431\u043e\u043b\u0435\u0441\u0442\u0438",Object(p.jsx)("br",{}),"\u043f\u0440\u0438 \u0447\u043e\u0432\u0435\u043a\u0430"]}),Object(p.jsx)("p",{children:"\u041d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u0438\u0442\u0435 \u0431\u043e\u043b\u0435\u0441\u0442\u0438 \u043f\u0440\u0438 \u0447\u043e\u0432\u0435\u043a\u0430 \u0441\u0430 \u0431\u043e\u043b\u0435\u0441\u0442\u0438\u0442\u0435, \u0447\u0438\u0435\u0442\u043e \u043f\u0440\u043e\u0442\u0438\u0447\u0430\u043d\u0435 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u044f \u043d\u0435\u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0434\u043e\u0440\u0438 \u043f\u0440\u0438 \u0441\u0438\u043b\u043d\u043e \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 \u0444\u0430\u043a\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u0430 \u0441\u0440\u0435\u0434\u0430\u0442\u0430 \u0438 \u0441\u0430 \u0433\u0435\u043d\u0435\u0442\u0438\u0447\u043d\u043e \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u0440\u0430\u043d\u0438. \u0422\u0435 \u0441\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442 \u043d\u0430 \u0434\u0432\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u0438 \u0433\u0440\u0443\u043f\u0438 \u2013 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u043d\u0438 \u0438 \u043c\u043e\u043b\u0435\u043a\u0443\u043b\u043d\u0438 \u0431\u043e\u043b\u0435\u0441\u0442\u0438."})]})})}),N=(s(15),function(e){var t=e.props;return Object(p.jsx)("div",{className:"infoslide",children:Object(p.jsxs)("div",{className:"iscont "+t.side,children:[Object(p.jsx)("div",{className:"isheader",children:Object(p.jsx)("label",{children:t.title})}),Object(p.jsxs)("div",{className:"istop",children:[Object(p.jsxs)("div",{className:"istleft",children:[Object(p.jsx)("label",{className:"isdata",children:t.mainData}),Object(p.jsx)("label",{className:"issubheader",children:"\u041f\u0440\u0438\u0437\u043d\u0430\u0446\u0438"}),Object(p.jsx)("label",{className:"issubdata",children:t.signs})]}),Object(p.jsx)("div",{className:"istright",children:Object(p.jsx)("img",{src:t.img,alt:""})})]}),Object(p.jsxs)("div",{className:"isbottom",children:[Object(p.jsxs)("div",{className:"isbleft",children:[Object(p.jsx)("label",{className:"issubheader",children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0438"}),Object(p.jsx)("label",{className:"issubdata",children:t.reasons})]}),Object(p.jsxs)("div",{className:"isbright",children:[Object(p.jsx)("label",{className:"issubheader",children:"\u041b\u0435\u0447\u0435\u043d\u0438\u0435"}),Object(p.jsx)("label",{className:"issubdata",children:t.treatment})]})]}),t.facts&&Object(p.jsxs)("div",{className:"isfact",children:[Object(p.jsx)("label",{className:"issubheader",children:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0438 \u0444\u0430\u043a\u0442\u0438"}),Object(p.jsx)("label",{className:"issubdata",children:t.facts})]})]})},t.id)});var M=function(){var e=Object(i.useState)(1),t=Object(c.a)(e,2),s=t[0],a=t[1],l=Object(i.useState)(2),n=Object(c.a)(l,2),r=n[0],x=n[1],u=Object(i.useState)(2),f=Object(c.a)(u,2),O=f[0],g=f[1],v=[{id:0,title:"\u0421\u0438\u043d\u0434\u0440\u043e\u043c \u043d\u0430 \u0414\u0430\u0443\u043d",img:o,mainData:"\u0412\u0441\u0435\u043a\u0438 \u0447\u043e\u0432\u0435\u043a \u0441\u044a\u0441 \u0441\u0438\u043d\u0434\u0440\u043e\u043c\u0430 \u043d\u0430 \u0414\u0430\u0443\u043d \u043f\u0440\u0438\u0442\u0435\u0436\u0430\u0432\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u0442\u043e \u0438 \u0438\u043d\u0442\u0435\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u043d\u0438\u044f \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b, \u043a\u043e\u0438\u0442\u043e \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0432\u0430\u0440\u0438\u0440\u0430\u0442 \u043e\u0442 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u0438, \u0434\u043e \u0441\u0440\u0435\u0434\u043d\u0438 \u0438\u043b\u0438 \u0442\u0430\u043a\u0438\u0432\u0430 \u0441 \u043c\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0438\u043e\u0437\u043d\u0430 \u0442\u0435\u0436\u0435\u0441\u0442. \u041d\u044f\u043a\u043e\u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0438 \u0441\u0430 \u043a\u043b\u0438\u043d\u0438\u0447\u043d\u043e \u0437\u0434\u0440\u0430\u0432\u0438, \u0434\u043e\u043a\u0430\u0442\u043e \u0434\u0440\u0443\u0433\u0438, \u0438\u043c\u0430\u0442 \u0442\u0435\u0436\u043a\u0438 \u0437\u0434\u0440\u0430\u0432\u043e\u0441\u043b\u043e\u0432\u043d\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438.",signs:"\u041f\u043b\u043e\u0441\u043a\u043e \u043b\u0438\u0446\u0435, \u043c\u0430\u043b\u043a\u0430 \u0433\u043b\u0430\u0432\u0430, \u043a\u044a\u0441 \u0432\u0440\u0430\u0442, \u043f\u043e-\u0433\u043e\u043b\u044f\u043c \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0430 \u0435\u0437\u0438\u043a\u0430, \u0447\u0435\u0441\u0442\u043e \u0435 \u0438\u0437\u043f\u043b\u0435\u0437\u0435\u043d \u043d\u0430\u0432\u044a\u043d, \u043e\u0447\u0438\u0442\u0435 \u0438\u0437\u0433\u043b\u0435\u0436\u0434\u0430\u0442 \u043f\u043e-\u0438\u0437\u0432\u0438\u0442\u0438 \u043d\u0430\u0433\u043e\u0440\u0435, \u043d\u0435\u043e\u0431\u0438\u0447\u0430\u0439\u043d\u043e \u043e\u0444\u043e\u0440\u043c\u0435\u043d\u0438 \u0438\u043b\u0438 \u043c\u0430\u043b\u043a\u0438 \u0443\u0448\u0438, \u043d\u0430\u043c\u0430\u043b\u0435\u043d \u043c\u0443\u0441\u043a\u0443\u043b\u0435\u043d \u0442\u043e\u043d\u0443\u0441, \u0448\u0438\u0440\u043e\u043a\u0438, \u043a\u044a\u0441\u0438 \u0440\u044a\u0446\u0435, \u043c\u0430\u043b\u043a\u0438 \u043a\u0440\u0430\u043a\u0430 \u0438 \u0440\u044a\u0446\u0435, \u043f\u043e\u0432\u0438\u0448\u0435\u043d\u0430 \u0433\u044a\u0432\u043a\u0430\u0432\u043e\u0441\u0442 \u0438 \u043c\u043e\u0431\u0438\u043b\u043d\u043e\u0441\u0442 \u043d\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0435, \u043c\u0430\u043b\u043a\u0438 \u0431\u0435\u043b\u0438 \u043f\u0435\u0442\u044a\u043d\u0446\u0430 \u0432\u044a\u0440\u0445\u0443 \u0438\u0440\u0438\u0441\u0430 \u043d\u0430 \u043e\u043a\u043e\u0442\u043e, \u043d\u0438\u0441\u044a\u043a \u0440\u044a\u0441\u0442",reasons:"\u0421\u0438\u043d\u0434\u0440\u043e\u043c\u044a\u0442 \u043d\u0430 \u0414\u0430\u0443\u043d \u0435 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442 \u043e\u0442 \u043f\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043a\u043b\u0435\u0442\u044a\u0447\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u043d\u0435, \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0449\u043e 21\u0432\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0430. \u0422\u0435\u0437\u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0438 \u0432 \u043a\u043b\u0435\u0442\u044a\u0447\u043d\u043e\u0442\u043e \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0432\u0430\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u0437\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435\u0442\u043e \u043d\u0430 \u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 21\u0432\u0430 \u0445\u0440\u043e\u0437\u043e\u043c\u0430 \u0438\u043b\u0438 \u0446\u044f\u043b\u0430 \u0434\u043e\u043f\u044a\u043b\u043d\u0438\u0442\u0435\u043b\u043d\u0430 21\u0432\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0430.",treatment:"\u041d\u044f\u043c\u0430 \u043d\u0430\u0447\u0438\u043d \u0437\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e\u044f\u0432\u0430\u0442\u0430 \u043d\u0430 \u0441\u0438\u043d\u0434\u0440\u043e\u043c\u0430 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u0435\u0434\u043e\u0432\u0442\u0432\u0440\u0430\u0442\u0435\u043d\u0430.",facts:"\u041d\u0430 21 \u043c\u0430\u0440\u0442 \u0441\u0435 \u043e\u0442\u0431\u0435\u043b\u044f\u0437\u0432\u0430 \u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0438\u044f\u0442 \u0434\u0435\u043d \u043d\u0430 \u0445\u043e\u0440\u0430\u0442\u0430 \u0441\u044a\u0441 \u0441\u0438\u043d\u0434\u0440\u043e\u043c \u043d\u0430 \u0414\u0430\u0443\u043d. \u041f\u043e \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u044f \u0432 \u0442\u043e\u0437\u0438 \u0434\u0435\u043d \u0432\u0441\u0438\u0447\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u043f\u043e\u0434\u043a\u0440\u0435\u043f\u044f\u0442 \u043a\u0430\u0443\u0437\u0430\u0442\u0430, \u043e\u0431\u0443\u0432\u0430\u0442 \u0448\u0430\u0440\u0435\u043d\u0438 \u0447\u043e\u0440\u0430\u043f\u0438.",side:"right"},{id:1,title:"\u0421\u0438\u043d\u0434\u0440\u043e\u043c \u043d\u0430 \u041a\u043b\u0430\u0439\u043d\u0444\u0435\u043b\u0442\u044a\u0440",img:j,mainData:"\u0417\u0430\u0441\u044f\u0433\u0430 \u0441\u0430\u043c\u043e \u043c\u044a\u0436\u0435, \u043d\u0430\u0439-\u0447\u0435\u0441\u0442\u043e \u0441\u0440\u0435\u0449\u0430\u043d\u0430\u0442\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u043d\u0430 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u044f (3 : 2000 \u043d\u043e\u0432\u043e\u0440\u043e\u0434\u0435\u043d\u0438 \u043c\u043e\u043c\u0447\u0435\u0442\u0430), \u043a\u0430\u0440\u0438\u043e\u0442\u0438\u043f\u044a\u0442 \u0435 47 XXY (\u043f\u043e\u043b\u0435\u0432\u0438\u0442\u0435 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0438 \u0441\u0430 XXY)",signs:"\u041d\u0435\u0434\u043e\u0440\u0430\u0437\u0432\u0438\u0442\u0438 \u043c\u044a\u0436\u043a\u0438 \u043f\u043e\u043b\u043e\u0432\u0438 \u043e\u0440\u0433\u0430\u043d\u0438, \u0441\u0442\u0435\u0440\u0438\u043b\u0438\u0442\u0435\u0442, \u0432\u0438\u0441\u043e\u043a \u0440\u044a\u0441\u0442, \u0442\u0435\u0441\u043d\u0438 \u0440\u0430\u043c\u0435\u043d\u0435, \u0448\u0438\u0440\u043e\u043a \u0442\u0430\u0437, \u0443\u0434\u044a\u043b\u0436\u0435\u043d\u0438 \u043a\u0440\u0430\u0439\u043d\u0438\u0446\u0438, \u043e\u043a\u043e\u0441\u043c\u044f\u0432\u0430\u043d\u0435 \u0438 \u043e\u0442\u043b\u0430\u0433\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0434\u043a\u043e\u0436\u043d\u0430 \u043c\u0430\u0437\u043d\u0438\u043d\u0430 \u043e\u0442 \u0436\u0435\u043d\u0441\u043a\u0438 \u0442\u0438\u043f",reasons:"\u041d\u0435\u0440\u0430\u0437\u043d\u0435\u043b\u044f\u043d\u0435 \u043d\u0430 \u0425 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0438\u0442\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u043c\u0435\u0439\u043e\u0437\u0430\u0442\u0430",treatment:"\u041f\u0440\u043e\u0432\u0435\u0436\u0434\u0430 \u0441\u0435 \u0441 \u0442\u0435\u0441\u0442\u043e\u0441\u0442\u0435\u0440\u043e\u043d \u0437\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043d\u0430 \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u0438 \u043f\u043e\u043b\u043e\u0432\u0438 \u0431\u0435\u043b\u0435\u0437\u0438",facts:"",side:"left"},{id:2,title:'\u0421\u0438\u043d\u0434\u0440\u043e\u043c "\u0441\u0432\u0440\u044a\u0445\u043c\u044a\u0436\u0435"',img:b,mainData:"\u0417\u0430\u0441\u044f\u0433\u0430 \u0441\u0430\u043c\u043e \u043c\u044a\u0436\u0435, \u0447\u0435\u0441\u0442\u043e\u0442\u0430\u0442\u0430 \u0435 1,3 : 1000 \u043d\u043e\u0432\u043e\u0440\u043e\u0434\u0435\u043d\u0438 \u043c\u043e\u043c\u0447\u0435\u0442\u0430, \u043a\u0430\u0440\u0438\u043e\u0442\u0438\u043f\u044a\u0442 \u0435 47 XYY (\u043f\u043e\u043b\u043e\u0432\u0438\u0442\u0435 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0438 \u0441\u0430 XYY)",signs:"\u0412\u0438\u0441\u043e\u043a \u0440\u044a\u0441\u0442, \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430 \u0434\u043e\u043b\u043d\u0430 \u0447\u0435\u043b\u044e\u0441\u0442, \u0441\u0438\u043b\u043d\u043e \u0438\u0437\u0434\u0430\u0434\u0435\u043d\u0438 \u043d\u0430\u0434\u043e\u0447\u043d\u0438 \u0434\u044a\u0433\u0438, \u0447\u0435\u0441\u0442\u043e \u0438\u043c\u0430\u0442 \u0430\u0433\u0440\u0435\u0441\u0438\u0432\u043d\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435",reasons:"\u041d\u0435\u0440\u0430\u0437\u0434\u0435\u043b\u044f\u043d\u0435 \u043d\u0430 Y \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0430\u0442\u0430 \u043f\u0440\u0438 \u0432\u0442\u043e\u0440\u043e\u0442\u043e \u043c\u0435\u0439\u043e\u0442\u0438\u0447\u043d\u043e \u0434\u0435\u043b\u0435\u043d\u0435",treatment:"\u041d\u042f\u041c\u0410",facts:"",side:"right"},{id:3,title:"\u0421\u0438\u043d\u0434\u0440\u043e\u043c \u043d\u0430 \u043a\u043e\u0442\u0435\u0448\u043a\u043e\u0442\u043e \u043c\u044f\u0443\u043a\u0430\u043d\u0435",img:h,mainData:"\u0421\u0438\u043d\u0434\u0440\u043e\u043c\u044a\u0442 \u043d\u0430 \u043a\u043e\u0442\u0435\u0448\u043a\u043e\u0442\u043e \u043c\u044f\u0443\u043a\u0430\u043d\u0435, \u043d\u0430\u0440\u0438\u0447\u0430\u043d \u0438 \u0441\u0438\u043d\u0434\u0440\u043e\u043c \u043d\u0430 \u041b\u0435\u0436\u0435\u043d, \u0435 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0435, \u043f\u0440\u0438 \u043a\u043e\u0435\u0442\u043e \u0434\u0435\u0442\u0435\u0442\u043e \u043f\u043b\u0430\u0447\u0435 \u043f\u043e\u0434\u043e\u0431\u043d\u043e \u043d\u0430 \u043a\u043e\u0442\u0435\u0448\u043a\u043e \u043c\u044f\u0443\u043a\u0430\u043d\u0435. \u0422\u043e\u0432\u0430 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0435 \u0441\u0435 \u043e\u0442\u043a\u0440\u0438\u0432\u0430 \u0438\u0437\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0440\u044f\u0434\u043a\u043e \u2013 1 \u043e\u0442 45-50 \u0445\u0438\u043b\u044f\u0434\u0438 \u043d\u043e\u0432\u043e\u0440\u043e\u0434\u0435\u043d\u0438. \u0421\u0438\u043d\u0434\u0440\u043e\u043c\u044a\u0442 \u043d\u0430\u0439-\u0447\u0435\u0441\u0442\u043e \u0441\u0435 \u0441\u0440\u0435\u0449\u0430 \u043f\u0440\u0438 \u043c\u043e\u043c\u0438\u0447\u0435\u0442\u0430.",signs:"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u043e \u0437\u0432\u0443\u0447\u0435\u043d\u0435 \u043d\u0430 \u043f\u043b\u0430\u0447\u0430 \u043d\u0430 \u0434\u0435\u0442\u0435\u0442\u043e, \u043f\u043e\u0434\u043e\u0431\u043d\u043e \u043d\u0430 \u043a\u043e\u0442\u0435\u0448\u043a\u043e \u043c\u044f\u0443\u043a\u0430\u043d\u0435, \u043e\u0431\u0438\u043b\u043d\u043e \u043e\u0442\u0434\u0435\u043b\u044f\u043d\u0435 \u043d\u0430 \u0441\u043b\u044e\u043d\u043a\u0430, \u0447\u0435\u0440\u0435\u043f\u044a\u0442 \u0438 \u043c\u043e\u0437\u044a\u043a\u044a\u0442 \u0441\u0430 \u0441 \u043c\u0430\u043b\u044a\u043a \u0440\u0430\u0437\u043c\u0435\u0440, \u0438\u0437\u043e\u0441\u0442\u0430\u0432\u0430\u043d\u0435 \u0432 \u0443\u043c\u0441\u0442\u0432\u0435\u043d\u043e\u0442\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0442\u043e, \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0442\u0435 \u0443\u043c\u0435\u043d\u0438\u044f \u0438 \u0433\u043e\u0432\u043e\u0440\u043d\u0438\u0442\u0435 \u043d\u0430\u0432\u0438\u0446\u0438. \u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0432\u0430 \u0441\u0435 \u0445\u0438\u043f\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442, \u043d\u0435\u043c\u043e\u0442\u0438\u0432\u0438\u0440\u0430\u043d\u0430 \u0430\u0433\u0440\u0435\u0441\u0438\u044f, \u0438\u0441\u0442\u0435\u0440\u0438\u0447\u043d\u043e\u0441\u0442, \u0447\u0435\u0441\u0442 \u0437\u0430\u043f\u0435\u043a \u0438 \u043f\u043e\u043d\u0438\u0436\u0435\u043d \u043c\u0443\u0441\u043a\u0443\u043b\u0435\u043d \u0442\u043e\u043d\u0443\u0441 \u043d\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u0430.",reasons:"\u0412\u044a\u0437\u043d\u0438\u043a\u0432\u0430 \u0432\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043d\u0430 \u043b\u0438\u043f\u0441\u0430 \u0443 \u0434\u0435\u0442\u0435\u0442\u043e \u043d\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u0433\u0435\u043d\u0435\u0442\u0438\u0447\u043d\u0430\u0442\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0440\u0430\u0437\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0430 \u043d\u0430 \u043a\u044a\u0441\u043e\u0442\u043e \u0440\u0430\u043c\u043e \u043d\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0430 \u21165. \u0422\u043e\u0432\u0430 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0438 \u043e\u0442 \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u0430 \u043d\u0430 \u0430\u043b\u043a\u043e\u0445\u043e\u043b\u043d\u0438 \u043d\u0430\u043f\u0438\u0442\u043a\u0438, \u043d\u0430\u0440\u043a\u043e\u0442\u0438\u0446\u0438 \u0438 \u0442\u044e\u0442\u044e\u043d\u043e\u043f\u0443\u0448\u0435\u043d\u0435 \u043f\u043e \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u0431\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442.",treatment:"\u041d\u044f\u043c\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u0430 \u0442\u0435\u0440\u0430\u043f\u0438\u044f \u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430 \u0441\u0435 \u0441\u0430\u043c\u043e \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0430 \u0442\u0435\u0440\u0430\u043f\u0438\u044f \u043d\u0430 \u043f\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0438\u0442\u0435, \u0432\u044a\u0437\u043d\u0438\u043a\u0432\u0430\u0449\u0438 \u0432\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u043d\u0430 \u0442\u043e\u0432\u0430 \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0435. \u0417\u0430 \u0434\u0430 \u0441\u0435 \u0441\u0442\u0438\u043c\u0443\u043b\u0438\u0440\u0430 \u043f\u0441\u0438\u0445\u043e\u043c\u043e\u0442\u043e\u0440\u043d\u043e\u0442\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0442\u043e, \u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u043e\u0434 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0435\u0442\u0441\u043a\u0438 \u043d\u0435\u0432\u0440\u043e\u043b\u043e\u0433.",facts:"\u041a\u043e\u0435\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u044a\u0442 \u043d\u0430 \u0438\u043d\u0442\u0435\u043b\u0438\u0433\u0435\u043d\u0442\u043d\u043e\u0441\u0442 \u043f\u0440\u0438 \u0442\u0435\u0437\u0438 \u0445\u043e\u0440\u0430 \u043e\u0431\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u043e \u043d\u0435 \u043d\u0430\u0434\u0445\u0432\u044a\u0440\u043b\u044f 20.",side:"left"}],M=[{id:0,title:"\u0410\u043b\u0431\u0438\u043d\u0438\u0437\u044a\u043c",img:d,mainData:"\u0422\u043e\u0432\u0430 \u0435 \u043d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043e \u0437\u0430\u0431\u043e\u043b\u044f\u0432\u0430\u043d\u0435, \u043a\u043e\u0435\u0442\u043e \u0441\u0435 \u0434\u044a\u043b\u0436\u0438 \u043d\u0430 \u043f\u044a\u043b\u043d\u043e\u0442\u043e \u043e\u0442\u0441\u044a\u0441\u0442\u0432\u0438\u0435 \u0438\u043b\u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u044a\u0447\u043d\u043e\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043d\u0430 \u043f\u0438\u0433\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u043b\u0430\u043d\u0438\u043d, \u043a\u043e\u0435\u0442\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f \u0446\u0432\u0435\u0442\u0430 \u043d\u0430 \u043a\u043e\u0436\u0430\u0442\u0430, \u043a\u043e\u0441\u0430\u0442\u0430 \u0438 \u043e\u0447\u0438\u0442\u0435.",signs:"\u041f\u0440\u0435\u043a\u0430\u043b\u0435\u043d\u043e \u0441\u0443\u0445\u0430 \u043a\u043e\u0436\u0430, \u043f\u043e\u044f\u0432\u0430 \u043d\u0430 \u0431\u0435\u043b\u0438 \u043f\u0435\u0442\u043d\u0430 \u043f\u043e \u043a\u043e\u0436\u0430\u0442\u0430, \u0442\u0432\u044a\u0440\u0434\u0435 \u0441\u0432\u0435\u0442\u043b\u0430 \u0438\u043b\u0438 \u0431\u044f\u043b\u0430 \u043a\u043e\u0436\u0430, \u043f\u043e\u0432\u0438\u0448\u0435\u043d\u0430 \u0444\u043e\u0442\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442, \u0441\u0442\u0440\u0430\u0431\u0438\u0437\u044a\u043c, \u0432\u043b\u043e\u0448\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0437\u0440\u0438\u0442\u0435\u043b\u043d\u0430\u0442\u0430 \u043e\u0441\u0442\u0440\u043e\u0442\u0430, \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u0430 \u0441\u043b\u0435\u043f\u043e\u0442\u0430 \u043f\u043e\u0440\u0430\u0434\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0442\u0430 \u043d\u0430 \u043e\u0447\u0438\u0442\u0435, \u043d\u0435\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d \u0446\u0432\u044f\u0442 \u043d\u0430 \u0438\u0440\u0438\u0441\u0430, \u043f\u043e\u0440\u0430\u0434\u0438 \u043b\u0438\u043f\u0441\u0430\u0442\u0430 \u043d\u0430 \u043f\u0438\u0433\u043c\u0435\u043d\u0442 \u0432 \u043d\u0435\u0433\u043e.",reasons:"\u041f\u0440\u0438\u0447\u0438\u043d\u0438\u0442\u0435 \u0437\u0430 \u0442\u0430\u0437\u0438 \u0431\u043e\u043b\u0435\u0441\u0442 \u0441\u0430 \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u0441 \u0433\u0435\u043d\u0435\u0442\u0438\u0447\u043d\u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u0438, \u043f\u0440\u0438\u0447\u0438\u043d\u0435\u043d\u0438 \u043e\u0442 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u043e\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043d\u0430 \u043c\u0435\u043b\u0430\u043d\u0438\u043d\u0430. \u041f\u0440\u0438 \u043d\u044f\u043a\u043e\u0438 \u0445\u043e\u0440\u0430 \u0432\u044a\u043f\u0440\u0435\u043a\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0435\u0442\u043e \u043d\u0430 \u0442\u043e\u0437\u0438 \u0433\u0435\u043d, \u0442\u043e\u0439 \u0441\u0435 \u043f\u043e\u0442\u0438\u0441\u043a\u0430 \u043e\u0442 \u043d\u043e\u0440\u043c\u0430\u043b\u043d\u0438\u0442\u0435 \u0433\u0435\u043d\u0438 \u0438 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u043d\u043e \u0431\u043e\u043b\u0435\u0441\u0442\u0442\u0430 \u043d\u0435 \u0441\u0435 \u043f\u0440\u043e\u044f\u0432\u044f\u0432\u0430.",treatment:"\u041d\u044f\u043c\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u0438 \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0430\u043b\u0431\u0438\u043d\u0438\u0437\u044a\u043c. P\u0440\u0438 100 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432 \u0430\u043b\u0431\u0438\u043d\u0438\u0437\u044a\u043c, \u043d\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0438\u0442\u0435 \u0441\u0435 \u043f\u0440\u0435\u0434\u043f\u0438\u0441\u0432\u0430 \u0431\u0435\u0442\u0430-\u043a\u0430\u0440\u043e\u0442\u0438\u043d, \u0437\u0430 \u0434\u0430 \u043f\u0440\u0438\u0434\u0430\u0434\u0435 \u043b\u0435\u043a \u043d\u044e\u0430\u043d\u0441 \u043d\u0430 \u043a\u043e\u0436\u0430\u0442\u0430.",facts:"\u0425\u043e\u0440\u0430\u0442\u0430 \u0441 \u0430\u043b\u0431\u0438\u043d\u0438\u0437\u044a\u043c \u0441\u0430 \u0435\u0434\u043d\u0438 \u043e\u0442 \u043d\u0430\u0439-\u043c\u0430\u043b\u043a\u043e \u0440\u0430\u0437\u0431\u0440\u0430\u043d\u0438\u0442\u0435 \u043d\u0430 \u043f\u043b\u0430\u043d\u0435\u0442\u0430\u0442\u0430. \u041e\u043a\u043e\u043b\u043e \u0442\u044f\u0445 \u0438\u043c\u0430 \u0438\u0437\u043e\u0431\u0438\u043b\u0438\u0435 \u043e\u0442 \u043c\u0438\u0442\u043e\u0432\u0435, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e, \u0447\u0435 \u0441\u0430 \u0441\u0442\u0435\u0440\u0438\u043b\u043d\u0438, \u043d\u043e\u0441\u044f\u0442 \u043f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435 \u0438 \u0434\u043e\u0440\u0438, \u0447\u0435 \u0447\u0430\u0441\u0442\u0438 \u043d\u0430 \u0442\u044f\u043b\u043e\u0442\u043e \u0438\u043c \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438 \u043a\u0430\u0442\u043e \u043c\u0430\u0433\u0438\u0447\u0435\u0441\u043a\u0438 \u0442\u0430\u043b\u0438\u0441\u043c\u0430\u043d\u0438.",side:"right"}],w=[{id:0,title:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f",value:s},{id:1,title:"\u0416\u0438\u0432\u0438",value:r},{id:2,title:"\u0412\u0441\u0438\u0447\u043a\u0438",value:O}];return Object(p.jsxs)("div",{id:"app",children:[Object(p.jsxs)("svg",{id:"bg",viewBox:"0 0 1282 6522",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("line",{x1:"16.75",y1:"100%",x2:"16.7503",y2:"-1.09276e-08",stroke:"#687789",strokeWidth:"0.5"}),Object(p.jsx)("line",{x1:"266.75",y1:"100%",x2:"266.75",y2:"-1",stroke:"#687789",strokeWidth:"0.5"}),Object(p.jsx)("line",{x1:"516.75",y1:"100%",x2:"516.75",y2:"-1.09276e-08",stroke:"#687789",strokeWidth:"0.5"}),Object(p.jsx)("line",{x1:"766.75",y1:"100%",x2:"766.75",y2:"-1",stroke:"#687789",strokeWidth:"0.5"}),Object(p.jsx)("line",{x1:"1016.75",y1:"100%",x2:"1016.75",y2:"-1",stroke:"#687789",strokeWidth:"0.5"}),Object(p.jsx)("line",{x1:"1266.75",y1:"100%",x2:"1266.75",y2:"-1.09276e-08",stroke:"#687789",strokeWidth:"0.5"}),Object(p.jsx)("line",{x1:"250.669",y1:"1958.46",x2:"279.26",y2:"1929.87",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("line",{y1:"-5",x2:"40.4337",y2:"-5",transform:"matrix(0.707107 0.707107 0.707107 -0.707107 254.205 1926)",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("path",{d:"M1002 1176.95L1030 1149M1002 1149.05L1030 1177",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("circle",{cx:"16",cy:"201",r:"11",fill:"#373F48",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("circle",{cx:"767",cy:"975",r:"18",fill:"#373F48",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("circle",{cx:"517",cy:"2795",r:"18",fill:"#373F48",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("circle",{cx:"1266",cy:"431",r:"11",fill:"#373F48",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("line",{x1:"253.192",y1:"795.464",x2:"276.737",y2:"771.919",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("line",{y1:"-5",x2:"33.2983",y2:"-5",transform:"matrix(0.707107 0.707107 0.707107 -0.707107 256.727 768)",stroke:"#687789",strokeWidth:"10"}),Object(p.jsx)("path",{d:"M1002 86.9463L1030 59M1002 59.0537L1030 87",stroke:"#687789",strokeWidth:"10"})]}),Object(p.jsx)(k,{}),Object(p.jsxs)("div",{className:"pointheadercont",children:[Object(p.jsx)("label",{className:"pheader",children:"\u0425\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u043d\u0438 \u0431\u043e\u043b\u0435\u0441\u0442\u0438"}),Object(p.jsx)("label",{className:"psubheader",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(p.jsx)("label",{className:"pdata",children:"\u0425\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u043d\u0438\u0442\u0435 \u0431\u043e\u043b\u0435\u0441\u0442\u0438 \u0441\u0435 \u0434\u044a\u043b\u0436\u0430\u0442 \u043d\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0442\u0430 \u0438\u043b\u0438 \u0432 \u0431\u0440\u043e\u044f \u043d\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0438\u0442\u0435. \u041d\u0430\u0439-\u0447\u0435\u0441\u0442\u0430\u0442\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u043d\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u0435 \u043e\u0442\u043a\u044a\u0441\u0432\u0430\u043d\u0435 \u043d\u0430 \u0445\u0440\u043e\u043c\u043e\u0437\u043e\u043c\u0435\u043d \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442, \u0430 \u043d\u0430\u0439-\u0447\u0435\u0441\u0442\u0430\u0442\u0430 \u0433\u0435\u043d\u043e\u043c\u043d\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u2013 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u044f."})]}),v.map((function(e){return Object(p.jsx)(N,{props:e},e.id)})),Object(p.jsxs)("div",{className:"pointheadercont",children:[Object(p.jsx)("label",{className:"pheader",children:"\u041c\u043e\u043b\u0435\u043a\u0443\u043b\u043d\u0438 \u0431\u043e\u043b\u0435\u0441\u0442\u0438"}),Object(p.jsx)("label",{className:"psubheader",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(p.jsx)("label",{className:"pdata",children:"\u041c\u043e\u043b\u0435\u043a\u0443\u043b\u043d\u0438\u0442\u0435 \u0431\u043e\u043b\u0435\u0441\u0442\u0438 \u0441\u0430 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442 \u043e\u0442 \u0433\u0435\u043d\u043d\u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u0438. \u0422\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0437\u0430\u0441\u0435\u0433\u043d\u0430\u0442 \u0440\u0435\u0433\u0443\u043b\u0430\u0442\u043e\u0440\u043d\u0438 \u0438\u043b\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0438 \u0433\u0435\u043d\u0438. \u0410\u043a\u043e \u0435 \u043c\u0443\u0442\u0438\u0440\u0430\u043b \u0440\u0435\u0433\u0443\u043b\u0430\u0442\u043e\u0440\u0435\u043d \u0433\u0435\u043d, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0438\u0442\u0435 \u0433\u0435\u043d\u0438, \u043a\u043e\u0438\u0442\u043e \u0441\u0430 \u043f\u043e\u0434 \u043d\u0435\u0433\u043e\u0432 \u043a\u043e\u043d\u0442\u0440\u043e\u043b, \u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0430\u0442 \u0438 \u0441\u044a\u043e\u0442\u0432\u0435\u0442\u043d\u0438\u044f\u0442 \u0431\u0435\u043b\u0442\u044a\u043a \u043d\u0435 \u0441\u0435 \u0441\u0438\u043d\u0442\u0435\u0437\u0438\u0440\u0430 \u0438\u0437\u043e\u0431\u0449\u043e. \u0410\u043a\u043e \u0435 \u043c\u0443\u0442\u0438\u0440\u0430\u043b \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435\u043d \u0433\u0435\u043d, \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0442\u0430 \u043d\u0430 \u0441\u044a\u043e\u0442\u0432\u0435\u0442\u043d\u0438\u044f \u0431\u0435\u043b\u0442\u044a\u043a, \u0442\u043e\u0439 \u0441\u0435 \u0441\u0438\u043d\u0442\u0435\u0437\u0438\u0440\u0430, \u043d\u043e \u0435 \u0441 \u043f\u0440\u043e\u043c\u0435\u043d\u0435\u043d\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442."})]}),M.map((function(e){return Object(p.jsx)(N,{props:e},e.id)})),Object(p.jsx)("div",{className:"pointheadercont",style:{textAlign:"center"},children:Object(p.jsx)("label",{className:"pheader",style:{fontSize:"50px"},children:"\u0421\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u044f \u043d\u0430 \u043f\u043e\u044f\u0432\u0430\u0442\u0430 \u043d\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u0438 \u0431\u043e\u043b\u0435\u0441\u0442\u0438"})}),Object(p.jsx)("div",{className:"divider",style:{background:"url("+m+")"}}),Object(p.jsx)(y,{changeGen:function(e){a(e)},changeLive:function(e){x(e)},changeAll:function(e){g(e)}}),Object(p.jsx)("div",{id:"stats",style:{display:"none"},children:w.map((function(e){return Object(p.jsxs)("div",{className:"stat",children:[Object(p.jsx)("label",{className:"stattitle",children:e.title}),Object(p.jsx)("label",{className:"statdivider",children:" -- "}),Object(p.jsx)("label",{className:"statvalue",children:e.value})]})}))})]})};n.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.bea6a8f3.chunk.js.map
(this["webpackJsonpphasmophobia-cheatsheet"]=this["webpackJsonpphasmophobia-cheatsheet"]||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/ghost.c97139a7.svg"},48:function(e,a,t){e.exports=t(62)},53:function(e,a,t){},55:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(21),r=t.n(i),s=t(15),c=(t(53),t(24)),d=t(26),l=t(8),u=t(10),h=t(11),p=t(18),m=t(14),y=t(13),g=t(5),v=(t(54),t(55),t(22)),w=t(20),k=t(39),z=t(64),b=t(65),j=t(66),E=t(67),f=function(e){Object(m.a)(t,e);var a=Object(y.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this,a=this.props.data.primaryevidence.map((function(a,t){var n=o.a.createElement(k.a,{className:"evidence-header"+(e.props.remainingEvidence[a]?"":" grey")},a),i=e.props.ghostNames.map((function(t){var n=" grey";return e.props.ignoredGhosts[t]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[t]||(n=""),o.a.createElement(k.a,{className:"ghost-evidence"+n,key:"col-"+t+"-"+a},e.props.ghostHasEvidence[t][a]?"X":"")})),r="evidence-row";return e.props.selectedEvidence[a]?r+=" green-background":e.props.ignoredEvidence[a]?r+=" red-background":t%2===0&&(r+=" darkgrey-background"),o.a.createElement(z.a,{className:r,onClick:function(t){return e.props.onEvidenceClick(t,a)},onContextMenu:function(t){return e.props.onEvidenceClick(t,a)},key:"row-"+a},n,i)})),t=0,n=null;(this.props.selectedEvidenceAmount>0||this.props.selectedSecondaryEvidenceAmount>0||this.props.showAllSecondaryEvidence)&&(n=this.props.data.secondaryevidence.map((function(a){var n,i=!1,r=Object(l.a)(e.props.ghostNames);try{for(r.s();!(n=r.n()).done;){var s=n.value;if(e.props.selectedGhosts[s]&&e.props.ghostHasEvidence[s][a]){i=!0;break}}}catch(h){r.e(h)}finally{r.f()}if(i||e.props.ignoredEvidence[a]||e.props.selectedEvidence[a]||e.props.showAllSecondaryEvidence){var c=o.a.createElement(k.a,{className:"evidence-header"+(e.props.remainingEvidence[a]?"":" grey"),key:"header-"+a},a),d=e.props.ghostNames.map((function(t){return o.a.createElement(k.a,{className:"ghost-evidence"+(0===e.props.selectedEvidenceAmount||e.props.selectedGhosts[t]?"":" grey"),key:"col-"+t+"-"+a},e.props.ghostHasEvidence[t][a]?"X":"")})),u="evidence-row";return e.props.selectedEvidence[a]?u+=" green-background":e.props.ignoredEvidence[a]?u+=" red-background":t%2===0&&(u+=" darkgrey-background"),t++,o.a.createElement(z.a,{className:u,onClick:function(t){return e.props.onEvidenceClick(t,a)},onContextMenu:function(t){return e.props.onEvidenceClick(t,a)},key:"row-"+a},c,d)}return null})));var i=this.props.ghostNames.map((function(a,t){var n=" grey";return e.props.ignoredGhosts[a]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[a]||(n=""),1===e.props.selectedGhostAmount&&e.props.selectedGhosts[a]&&(n=" green"),o.a.createElement(k.a,{className:"ghost-header"+n,key:"header-"+a},o.a.createElement("div",{className:"rotated45"},a))}));return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},o.a.createElement(b.a,{style:{padding:"0",margin:"20px",marginTop:"0px",maxWidth:"100000px"}},o.a.createElement(z.a,null,o.a.createElement(k.a,{style:{textAlign:"center"}},o.a.createElement("b",null,"Lewy przycisk myszy: Zaznacz/odznacz poszlak\u0119.",o.a.createElement("br",null),"Prawy przycisk myszy: Zignoruj/odignoruj poszlak\u0119."))),o.a.createElement(z.a,null,o.a.createElement(k.a,{className:"evidence-header"},o.a.createElement(j.a,{variant:"danger",onClick:function(){return e.props.resetSelected()}},"Odznacz wszystkie poszlaki"))),o.a.createElement(z.a,{style:{width:"100%"}},o.a.createElement(k.a,{className:"evidence-header"},"POSZLAKI"),i),a,o.a.createElement(E.a.Check,{id:"toggleSecondaryEvidence",draggable:!1,type:"checkbox",custom:"true",label:"Zawsze wy\u015bwietlaj dodatkowe poszlaki",checked:this.props.showAllSecondaryEvidence,style:{margin:"15px"},onChange:function(a){return e.props.toggleSetting("showAllSecondaryEvidence")}}),null!==n&&o.a.createElement(z.a,{style:{width:"100%",marginTop:"25px"}},o.a.createElement(k.a,{className:"evidence-header"},"SECONDARY EVIDENCE")),n)))}}]),t}(n.Component),x=function(e){Object(m.a)(t,e);var a=Object(y.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(p.a)(n)),n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,a={marginTop:"5px",marginLeft:"5px"},t=function(e,t){return t<e.length?o.a.createElement(k.a,{style:a,key:"voiceline-"+e[t]},e[t]):o.a.createElement(k.a,null)},n=function(a){return o.a.createElement(z.a,{key:"voicelines-row-"+a},t(e.props.data.voicelines.general,a),t(e.props.data.voicelines.ouija,a),t(e.props.data.voicelines.spiritbox,a),t(e.props.data.voicelines.attacktrigger,a))};if(this.state.width>1e3){for(var i=[],r=0,s=Math.max(this.props.data.voicelines.general.length,this.props.data.voicelines.ouija.length,this.props.data.voicelines.spiritbox.length,this.props.data.voicelines.attacktrigger.length);r<s;)i.push(n(r++));var c=["General Questions","Ouija Board Questions","Spirit Box Questions","Anger and Attack Trigger Words"].map((function(e,a){return o.a.createElement(k.a,{key:"header-"+e},o.a.createElement("h3",null,e))}));return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},o.a.createElement(b.a,{style:{padding:"0",margin:"20px",maxWidth:"90%"}},o.a.createElement(z.a,{style:{width:"100%"}},c),i)))}var d=[],l={general:"General Questions",ouija:"Ouija Board Questions",spiritbox:"Spirit Box Questions",attacktrigger:"Anger and Attack Trigger Words"};for(var u in this.props.data.voicelines){console.log(u);var h=[];h.push(o.a.createElement(k.a,{key:"header-"+l[u],style:{marginTop:"35px"}},o.a.createElement("h3",null,l[u])));for(var p=0;p<this.props.data.voicelines[u].length;p++)h.push(t(this.props.data.voicelines[u],p)),p++;d.push(h)}return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{display:"flex",margin:"25px 0px 15px 0px"}},o.a.createElement(b.a,{style:{marginLeft:"20px"}},d)))}}]),t}(n.Component),A=function(e){Object(m.a)(t,e);var a=Object(y.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},o.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},o.a.createElement("h2",{style:{textAlign:"center"}},"About Phasmophobia CheatSheet"),o.a.createElement("br",null),o.a.createElement("p",null,"Phasmophobia CheatSheet provides an interactive 2D grid overview about all ghost types and their evidence. Add evidence to rule out ghosts and narrow down your search. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Phasmophobia CheatSheet isn\u2019t endorsed by Kinetic Games and doesn\u2019t reflect the views or opinions of Kinetic Games or anyone officially involved in producing or managing Phasmophobia."))))}}]),t}(n.Component),O=function(e){Object(m.a)(t,e);var a=Object(y.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},o.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},o.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},o.a.createElement("h2",{style:{textAlign:"center"}},"Contact"),o.a.createElement("br",null),o.a.createElement("p",null,"Hi, I am unobtanium. I created this project in my freetime. You can find the project repository with the source code on my GitHub page ",o.a.createElement("a",{href:"https://github.com/un0btanium/phasmophobia-cheatsheet"},"here"),"."),o.a.createElement("p",null,"If you want to send me some feedback, feel free to write me an ",o.a.createElement("a",{href:"mailto:unobtaniumlol@gmail.de?subject=Phasmophobia-Cheatsheet%20Feedback"},"eMail"),"."))))}}]),t}(n.Component),S={primaryevidence:["EMF 5","Odciski palc\xf3w","Mro\u017ane temperatury","Orby","Pismo ducha","Spirit Box"],secondaryevidence:["Atakuje powy\u017cej 50% m\xf3zgu","Atakuje powy\u017cej 60% m\xf3zgu","Atakuje powy\u017cej 65% m\xf3zgu","Atakuje od 60% m\xf3zgu, gdy w jego pokoju jest wy\u0142\u0105czone \u015bwiat\u0142o i od 40% gdy \u015bwiat\u0142o jest w\u0142\u0105czone","Rzuca mocniej (dalej) przedmiotami","Bardziej aktywny przy wi\u0119kszej ilo\u015bci graczy w pokoju","Kadzid\u0142o zapobiega atakom na 180 sekund (zamiast 90 sekund)","Nie zostawia \u015blad\xf3w po wej\u015bciu w s\xf3l","Patrzenie na ducha w zasi\u0119gu 10 metr\xf3w zmniejsza szybciej m\xf3zg (0.4% na sekund\u0119 zamiast 0.2%)","Zrobienie zdj\u0119cia powoduje znikni\u0119cie ducha (poza nawiedzaniem). Na zdj\u0119ciu nie jest on widoczny mimo jego zaliczenia","Jego moc\u0105 specjaln\u0105 jest rzucanie wielu obiekt\xf3w naraz zmniejszaj\u0105c m\xf3zg graczy w pobli\u017cu (ilo\u015b\u0107 rzuconych przedmiot\xf3w x 2%)","Gdy nawiedza obiera za cel tylko jednego gracza","Ma wi\u0119kszy zasi\u0119g krucyfiksu (6 metr\xf3w zamiast 3)","Porusza si\u0119 2x szybciej od gracza gdy s\u0105 w\u0142\u0105czone bezpieczniki i duch znajduje si\u0119 dalej ni\u017c 3 metry od celu","Lubi elektronik\u0119, cz\u0119\u015bciej prze\u0142\u0105cza \u015bwiat\u0142a, w\u0142\u0105cza telefony, radia, alarm w samochodzie","Du\u017co rzadziej (o ile w og\xf3le) wy\u0142\u0105cza bezpieczniki","Cz\u0119\u015bciej atakuje gdy w jego pokoju jest wy\u0142\u0105czone \u015bwiat\u0142o","Porusza si\u0119 2x szybciej od gracza gdy widzi sw\xf3j cel","Gdy nikogo nie widzi porusza si\u0119 2x wolniej od gracza","Ma zmniejszon\u0105 aktywno\u015b\u0107 gdy w pokoju znajduje si\u0119 wiele os\xf3b","Nie nawiedza gdy w jego pokoju znajduj\u0105 si\u0119 2 osoby","Cz\u0119sto atakuje","Nie spada m\xf3zg gdy uzyska si\u0119 odpowied\u017a na pytanie na Ouija Board","U\u017cycie kadzid\u0142a zapobiega przemieszczaniu si\u0119 ducha na 90 sekund"],ghosts:[{name:"Spirit",description:"",uniquestrength:"",weaknesses:"",evidence:["Odciski palc\xf3w","Pismo ducha","Spirit Box","Kadzid\u0142o zapobiega atakom na 180 sekund (zamiast 90 sekund)"]},{name:"Wraith",description:"",uniquestrength:"",weaknesses:"",evidence:["Odciski palc\xf3w","Mro\u017ane temperatury","Spirit Box","Nie zostawia \u015blad\xf3w po wej\u015bciu w s\xf3l"]},{name:"Phantom",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF 5","Mro\u017ane temperatury","Orby","Patrzenie na ducha w zasi\u0119gu 10 metr\xf3w zmniejsza szybciej m\xf3zg (0.4% na sekund\u0119 zamiast 0.2%)","Zrobienie zdj\u0119cia powoduje znikni\u0119cie ducha (poza nawiedzaniem). Na zdj\u0119ciu nie jest on widoczny mimo jego zaliczenia"]},{name:"Poltergeist",description:"",uniquestrength:"",weaknesses:"",evidence:["Odciski palc\xf3w","Orby","Spirit Box","Jego moc\u0105 specjaln\u0105 jest rzucanie wielu obiekt\xf3w naraz zmniejszaj\u0105c m\xf3zg graczy w pobli\u017cu (ilo\u015b\u0107 rzuconych przedmiot\xf3w x 2%)","Rzuca mocniej (dalej) przedmiotami"]},{name:"Banshee",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF 5","Odciski palc\xf3w","Mro\u017ane temperatury","Gdy nawiedza obiera za cel tylko jednego gracza","Ma wi\u0119kszy zasi\u0119g krucyfiksu (6 metr\xf3w zamiast 3)","Atakuje powy\u017cej 50% m\xf3zgu","Atakuje powy\u017cej 60% m\xf3zgu","Atakuje powy\u017cej 65% m\xf3zgu"]},{name:"Jinn",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF 5","Orby","Spirit Box","Lubi elektronik\u0119, cz\u0119\u015bciej prze\u0142\u0105cza \u015bwiat\u0142a, w\u0142\u0105cza telefony, radia, alarm w samochodzie","Du\u017co rzadziej (o ile w og\xf3le) wy\u0142\u0105cza bezpieczniki","Porusza si\u0119 2x szybciej od gracza gdy s\u0105 w\u0142\u0105czone bezpieczniki i duch znajduje si\u0119 dalej ni\u017c 3 metry od celu"]},{name:"Mare",description:"",uniquestrength:"",weaknesses:"",evidence:["Mro\u017ane temperatury","Orby","Spirit Box","Atakuje od 60% m\xf3zgu, gdy w jego pokoju jest wy\u0142\u0105czone \u015bwiat\u0142o i od 40% gdy \u015bwiat\u0142o jest w\u0142\u0105czone","Cz\u0119\u015bciej atakuje gdy w jego pokoju jest wy\u0142\u0105czone \u015bwiat\u0142o","Atakuje powy\u017cej 50% m\xf3zgu"]},{name:"Revenant",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF 5","Odciski palc\xf3w","Pismo ducha","Porusza si\u0119 2x szybciej od gracza gdy widzi sw\xf3j cel","Gdy nikogo nie widzi porusza si\u0119 2x wolniej od gracza"]},{name:"Shade",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF 5","Orby","Pismo ducha","Ma zmniejszon\u0105 aktywno\u015b\u0107 gdy w pokoju znajduje si\u0119 wiele os\xf3b","Nie nawiedza gdy w jego pokoju znajduj\u0105 si\u0119 2 osoby"]},{name:"Demon",description:"",uniquestrength:"",weaknesses:"",evidence:["Mro\u017ane temperatury","Pismo ducha","Spirit Box","Cz\u0119sto atakuje","Nie spada m\xf3zg gdy uzyska si\u0119 odpowied\u017a na pytanie na Ouija Board","Atakuje powy\u017cej 50% m\xf3zgu","Atakuje powy\u017cej 60% m\xf3zgu"]},{name:"Yurei",description:"",uniquestrength:"",weaknesses:"",evidence:["Mro\u017ane temperatury","Orby","Pismo ducha","Patrzenie na ducha w zasi\u0119gu 10 metr\xf3w zmniejsza szybciej m\xf3zg (0.4% na sekund\u0119 zamiast 0.2%)","U\u017cycie kadzid\u0142a zapobiega przemieszczaniu si\u0119 ducha na 90 sekund"]},{name:"Oni",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF 5","Pismo ducha","Spirit Box","Rzuca mocniej (dalej) przedmiotami","Bardziej aktywny przy wi\u0119kszej ilo\u015bci graczy w pokoju"]}],voicelines:{general:["What do you want?","Why are you here?","Do you want to hurt us?","Are you angry?","Do you want us here?","Shall we leave?","Should we leave?","Do you want us to leave?","What should we do?","Can we help?","Are you friendly?","What are you?","Are you close?","Can you show yourself?","Give us a sign.","Let us know you are here.","Show yourself.","Can you talk?","Speak to us.","Are you here?","Are you with us?","Anybody with us?","Is anyone here?","Anybody in the room?","Anybody here?","Is there a spirit here?","Is there a Ghost here?","Are you a girl?","Are you a boy?","Are you male?","Are you female?","Who are you?","What are you?","Who is this?","Who are we talking to?","Who am I talking to?","Hello?","What is your name?","Can you give me your name?","How old are you?","How young are you?","What is your age?","When were you born?","Are you a child?","Are you old?","Are you young?","What is your location?","What is your gender?","Are you male or female?","Are you a woman?"],ouija:["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favorite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"],spiritbox:["Can you speak?","Can you speak to us?","Make a noise.","Open a door.","Open this door.","Turn on the light.","Turn off the light.","Are there any ghosts?","Give us a sign.","Show us.","Let us know you are here.","Do something.","Is there anyone with me?","Scream.","Can we speak?","Would like to speak to you.","Is there anyone here?","May I ask you?","Would you like to talk?","Are you the only one here?","Are you waiting?","Is there anything I can do?","Do you know who we are?","Are you happy?","Are you here all the time?","Are you male or female?","Do you want us to leave?","Can I ask you?","Can you make a sound?","Show us your presence.","Knock something.","Make a sound.","Open the door.","Throw something.","Talk to me.","Talk to us.","We mean you no harm.","We are friends.","Is this you're home?","Can you speak to us?"],attacktrigger:["<The Ghosts Name>","I'm scared.","I am scared.","Scared.","Scary.","Spooky.","Horror.","Scare.","Frighten.","Panic.","Fright.","Hide.","Run.","Show your presence.","Show us.","Show me.","Fuck","Bitch","Shit","Cunt","Ass","Bastard","Motherfucker (high response)","Arsehole","Crap","Pussy","Dickhead","Bloody Mary"]}},C=t(40),W=t.n(C),N=function(e){Object(m.a)(t,e);var a=Object(y.a)(t);function t(e){var n;Object(u.a)(this,t),n=a.call(this,e);var o,i=[],r={},s={},c={},d={},h={},m={},y={},g=Object(l.a)(S.ghosts);try{for(g.s();!(o=g.n()).done;){var v=o.value;s[v.name]=!1,c[v.name]=!1,r[v.name]=v,i.push(v.name)}}catch(M){g.e(M)}finally{g.f()}var w=function(e,a){return e<a?-1:e>a?1:0};for(var k in i.sort(w),S.voicelines)S.voicelines[k].sort(w);var z,b=Object(l.a)(S.primaryevidence);try{for(b.s();!(z=b.n()).done;){var j=z.value;h[j]=!1,m[j]=!1,y[j]=!0}}catch(M){b.e(M)}finally{b.f()}var E,f=Object(l.a)(S.secondaryevidence);try{for(f.s();!(E=f.n()).done;){var x=E.value;h[x]=!1,m[x]=!1,y[x]=!0}}catch(M){f.e(M)}finally{f.f()}for(var A=0,O=i;A<O.length;A++){var C=O[A];d[C]={};var W,N=Object(l.a)(r[C].evidence);try{for(N.s();!(W=N.n()).done;){var G=W.value;d[C][G]=!0}}catch(M){N.e(M)}finally{N.f()}}return n.onEvidenceClick=n.onEvidenceClick.bind(Object(p.a)(n)),n.toggleSetting=n.toggleSetting.bind(Object(p.a)(n)),n.resetSelected=n.resetSelected.bind(Object(p.a)(n)),n.state={showAllSecondaryEvidence:!1,data:S,ghostNames:i,ghostsByName:r,selectedGhosts:s,ignoredGhosts:c,selectedEvidence:h,ignoredEvidence:m,remainingEvidence:y,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0,ghostHasEvidence:d,onEvidenceClick:n.onEvidenceClick,toggleSetting:n.toggleSetting,resetSelected:n.resetSelected},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,null,o.a.createElement("div",{className:"full-screenable-node"},o.a.createElement(v.a,{bg:"dark",variant:"dark",expand:"xl",style:{boxShadow:"0px 2px 5px #000000"}},o.a.createElement(v.a.Brand,{style:{marginLeft:"15%"}},o.a.createElement("a",{href:"http://buguslavv.github.io/phasmophobia-cheatsheet/"},o.a.createElement("img",{src:W.a,width:"35",height:"35",alt:"Logo"}),o.a.createElement("b",null," Phasmophobia CheatSheet"))),o.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(v.a.Collapse,{id:"basic-navbar-nav",style:{marginRight:"10%"}},o.a.createElement(w.a,{className:"mr-auto"},o.a.createElement(w.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/ghostsandevidence"},o.a.createElement("b",null,"Ghosts & Evidence")),o.a.createElement(w.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/voicelines"},o.a.createElement("b",null,"Voicelines"))),o.a.createElement(w.a,null,o.a.createElement(w.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/about"},o.a.createElement("b",null,"About")),o.a.createElement(w.a.Link,{as:s.b,variant:"light",to:"/phasmophobia-cheatsheet/contact"},o.a.createElement("b",null,"Contact")),o.a.createElement(v.a.Text,{style:{color:"rgb(223, 105, 26)",marginLeft:"20px"}},o.a.createElement("b",null,"Patch ",o.a.createElement("i",null,"Post Launch Update #2")))))),o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/ghostsandevidence",render:function(a){return o.a.createElement(f,Object.assign({},a,e.state))}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/voicelines",render:function(a){return o.a.createElement(x,Object.assign({},a,e.state))}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/about",render:function(e){return o.a.createElement(A,e)}}),o.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/contact",render:function(e){return o.a.createElement(O,e)}}),o.a.createElement(g.a,{render:function(a){return o.a.createElement(f,Object.assign({},a,e.state))}}))))}},{key:"preventEvent",value:function(e){e.preventDefault()}},{key:"toggleSetting",value:function(e){localStorage.setItem(e,!this.state[e]),this.setState(Object(d.a)({},e,!this.state[e]))}},{key:"onEvidenceClick",value:function(e,a){e.preventDefault();var t=Object(c.a)({},this.state.selectedEvidence),n=Object(c.a)({},this.state.ignoredEvidence);"click"===e.type?(t[a]=!t[a],t[a]&&(n[a]=!1)):"contextmenu"===e.type&&(n[a]=!n[a],n[a]&&(t[a]=!1));var o=0,i=0;for(var r in t)!0!==t[r]&&!0!==n[r]||(o++,this.state.data.secondaryevidence.includes(r)&&i++);var s,d={},u={},h=0,p={},m=Object(l.a)(this.state.data.ghosts);try{for(m.s();!(s=m.n()).done;){var y=s.value,g=!0;for(var v in t)if(t[v]&&!y.evidence.includes(v)){g=!1;break}for(var w in n)if(n[w]&&y.evidence.includes(w)){u[y.name]=!0,g=!1;break}if(g){d[y.name]=!0,h++;var k,z=Object(l.a)(y.evidence);try{for(z.s();!(k=z.n()).done;){p[k.value]=!0}}catch(b){z.e(b)}finally{z.f()}}else d[y.name]=!1}}catch(b){m.e(b)}finally{m.f()}this.setState({selectedGhosts:d,ignoredGhosts:u,selectedEvidence:t,ignoredEvidence:n,remainingEvidence:p,selectedGhostAmount:h,selectedEvidenceAmount:o,selectedSecondaryEvidenceAmount:i})}},{key:"resetSelected",value:function(){var e,a={},t={},n=Object(c.a)({},this.state.selectedEvidence),o=Object(c.a)({},this.state.ignoredEvidence),i={},r=Object(l.a)(S.ghosts);try{for(r.s();!(e=r.n()).done;){var s=e.value;a[s.name]=!1,t[s.name]=!1}}catch(g){r.e(g)}finally{r.f()}var d,u=Object(l.a)(S.primaryevidence);try{for(u.s();!(d=u.n()).done;){var h=d.value;n[h]=!1,o[h]=!1,i[h]=!0}}catch(g){u.e(g)}finally{u.f()}var p,m=Object(l.a)(S.secondaryevidence);try{for(m.s();!(p=m.n()).done;){var y=p.value;n[y]=!1,o[y]=!1,i[y]=!0}}catch(g){m.e(g)}finally{m.f()}this.setState({selectedGhosts:a,ignoredGhosts:t,selectedEvidence:n,ignoredEvidence:o,remainingEvidence:i,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0})}}]),t}(n.Component),G=Object(g.f)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(s.a,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.23a7fa07.chunk.js.map
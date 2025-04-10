import{p as Z}from"./chunk-4BMEZGHF-QC0As9Wg.js";import{I as F}from"./chunk-XZIHB7SX-BOrwHOz7.js";import{_ as h,q as U,p as rr,s as er,g as tr,a as ar,b as nr,l as w,c as sr,d as or,u as cr,C as ir,y as dr,k as B,D as hr,E as lr,F as $r,G as fr}from"./page-quiz-GHKDFj1r.js";import{p as gr}from"./radar-MK3ICKWK-D2KAKpr6.js";import"./index-2vPUwkHb.js";import"./modal-settings.vue_vue_type_script_setup_true_lang-DFS20Kg6.js";import"./_baseUniq-DvXPvPSa.js";import"./_basePickBy-BtnAuHYS.js";import"./clone-DXUmWTEP.js";var u={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},yr=$r.gitGraph,z=h(()=>hr({...yr,...lr().gitGraph}),"getConfig"),i=new F(()=>{const t=z(),r=t.mainBranchName,a=t.mainBranchOrder;return{mainBranchName:r,commits:new Map,head:null,branchConfig:new Map([[r,{name:r,order:a}]]),branches:new Map([[r,null]]),currBranch:r,direction:"LR",seq:0,options:{}}});function S(){return fr({length:7})}h(S,"getID");function N(t,r){const a=Object.create(null);return t.reduce((s,e)=>{const n=r(e);return a[n]||(a[n]=!0,s.push(e)),s},[])}h(N,"uniqBy");var pr=h(function(t){i.records.direction=t},"setDirection"),ur=h(function(t){w.debug("options str",t),t=t==null?void 0:t.trim(),t=t||"{}";try{i.records.options=JSON.parse(t)}catch(r){w.error("error while parsing gitGraph options",r.message)}},"setOptions"),xr=h(function(){return i.records.options},"getOptions"),br=h(function(t){let r=t.msg,a=t.id;const s=t.type;let e=t.tags;w.info("commit",r,a,s,e),w.debug("Entering commit:",r,a,s,e);const n=z();a=B.sanitizeText(a,n),r=B.sanitizeText(r,n),e=e==null?void 0:e.map(o=>B.sanitizeText(o,n));const c={id:a||i.records.seq+"-"+S(),message:r,seq:i.records.seq++,type:s??u.NORMAL,tags:e??[],parents:i.records.head==null?[]:[i.records.head.id],branch:i.records.currBranch};i.records.head=c,w.info("main branch",n.mainBranchName),i.records.commits.set(c.id,c),i.records.branches.set(i.records.currBranch,c.id),w.debug("in pushCommit "+c.id)},"commit"),mr=h(function(t){let r=t.name;const a=t.order;if(r=B.sanitizeText(r,z()),i.records.branches.has(r))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);i.records.branches.set(r,i.records.head!=null?i.records.head.id:null),i.records.branchConfig.set(r,{name:r,order:a}),_(r),w.debug("in createBranch")},"branch"),wr=h(t=>{let r=t.branch,a=t.id;const s=t.type,e=t.tags,n=z();r=B.sanitizeText(r,n),a&&(a=B.sanitizeText(a,n));const c=i.records.branches.get(i.records.currBranch),o=i.records.branches.get(r),$=c?i.records.commits.get(c):void 0,l=o?i.records.commits.get(o):void 0;if($&&l&&$.branch===r)throw new Error(`Cannot merge branch '${r}' into itself.`);if(i.records.currBranch===r){const d=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw d.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},d}if($===void 0||!$){const d=new Error(`Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`);throw d.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["commit"]},d}if(!i.records.branches.has(r)){const d=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw d.hash={text:`merge ${r}`,token:`merge ${r}`,expected:[`branch ${r}`]},d}if(l===void 0||!l){const d=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw d.hash={text:`merge ${r}`,token:`merge ${r}`,expected:['"commit"']},d}if($===l){const d=new Error('Incorrect usage of "merge". Both branches have same head');throw d.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},d}if(a&&i.records.commits.has(a)){const d=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw d.hash={text:`merge ${r} ${a} ${s} ${e==null?void 0:e.join(" ")}`,token:`merge ${r} ${a} ${s} ${e==null?void 0:e.join(" ")}`,expected:[`merge ${r} ${a}_UNIQUE ${s} ${e==null?void 0:e.join(" ")}`]},d}const f=o||"",g={id:a||`${i.records.seq}-${S()}`,message:`merged branch ${r} into ${i.records.currBranch}`,seq:i.records.seq++,parents:i.records.head==null?[]:[i.records.head.id,f],branch:i.records.currBranch,type:u.MERGE,customType:s,customId:!!a,tags:e??[]};i.records.head=g,i.records.commits.set(g.id,g),i.records.branches.set(i.records.currBranch,g.id),w.debug(i.records.branches),w.debug("in mergeBranch")},"merge"),vr=h(function(t){let r=t.id,a=t.targetId,s=t.tags,e=t.parent;w.debug("Entering cherryPick:",r,a,s);const n=z();if(r=B.sanitizeText(r,n),a=B.sanitizeText(a,n),s=s==null?void 0:s.map($=>B.sanitizeText($,n)),e=B.sanitizeText(e,n),!r||!i.records.commits.has(r)){const $=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw $.hash={text:`cherryPick ${r} ${a}`,token:`cherryPick ${r} ${a}`,expected:["cherry-pick abc"]},$}const c=i.records.commits.get(r);if(c===void 0||!c)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(e&&!(Array.isArray(c.parents)&&c.parents.includes(e)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");const o=c.branch;if(c.type===u.MERGE&&!e)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!a||!i.records.commits.has(a)){if(o===i.records.currBranch){const g=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw g.hash={text:`cherryPick ${r} ${a}`,token:`cherryPick ${r} ${a}`,expected:["cherry-pick abc"]},g}const $=i.records.branches.get(i.records.currBranch);if($===void 0||!$){const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${r} ${a}`,token:`cherryPick ${r} ${a}`,expected:["cherry-pick abc"]},g}const l=i.records.commits.get($);if(l===void 0||!l){const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${r} ${a}`,token:`cherryPick ${r} ${a}`,expected:["cherry-pick abc"]},g}const f={id:i.records.seq+"-"+S(),message:`cherry-picked ${c==null?void 0:c.message} into ${i.records.currBranch}`,seq:i.records.seq++,parents:i.records.head==null?[]:[i.records.head.id,c.id],branch:i.records.currBranch,type:u.CHERRY_PICK,tags:s?s.filter(Boolean):[`cherry-pick:${c.id}${c.type===u.MERGE?`|parent:${e}`:""}`]};i.records.head=f,i.records.commits.set(f.id,f),i.records.branches.set(i.records.currBranch,f.id),w.debug(i.records.branches),w.debug("in cherryPick")}},"cherryPick"),_=h(function(t){if(t=B.sanitizeText(t,z()),i.records.branches.has(t)){i.records.currBranch=t;const r=i.records.branches.get(i.records.currBranch);r===void 0||!r?i.records.head=null:i.records.head=i.records.commits.get(r)??null}else{const r=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw r.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},r}},"checkout");function A(t,r,a){const s=t.indexOf(r);s===-1?t.push(a):t.splice(s,1,a)}h(A,"upsert");function D(t){const r=t.reduce((e,n)=>e.seq>n.seq?e:n,t[0]);let a="";t.forEach(function(e){e===r?a+="	*":a+="	|"});const s=[a,r.id,r.seq];for(const e in i.records.branches)i.records.branches.get(e)===r.id&&s.push(e);if(w.debug(s.join(" ")),r.parents&&r.parents.length==2&&r.parents[0]&&r.parents[1]){const e=i.records.commits.get(r.parents[0]);A(t,r,e),r.parents[1]&&t.push(i.records.commits.get(r.parents[1]))}else{if(r.parents.length==0)return;if(r.parents[0]){const e=i.records.commits.get(r.parents[0]);A(t,r,e)}}t=N(t,e=>e.id),D(t)}h(D,"prettyPrintCommitHistory");var Cr=h(function(){w.debug(i.records.commits);const t=V()[0];D([t])},"prettyPrint"),Er=h(function(){i.reset(),dr()},"clear"),Br=h(function(){return[...i.records.branchConfig.values()].map((r,a)=>r.order!==null&&r.order!==void 0?r:{...r,order:parseFloat(`0.${a}`)}).sort((r,a)=>(r.order??0)-(a.order??0)).map(({name:r})=>({name:r}))},"getBranchesAsObjArray"),kr=h(function(){return i.records.branches},"getBranches"),Lr=h(function(){return i.records.commits},"getCommits"),V=h(function(){const t=[...i.records.commits.values()];return t.forEach(function(r){w.debug(r.id)}),t.sort((r,a)=>r.seq-a.seq),t},"getCommitsArray"),Tr=h(function(){return i.records.currBranch},"getCurrentBranch"),Mr=h(function(){return i.records.direction},"getDirection"),Rr=h(function(){return i.records.head},"getHead"),X={commitType:u,getConfig:z,setDirection:pr,setOptions:ur,getOptions:xr,commit:br,branch:mr,merge:wr,cherryPick:vr,checkout:_,prettyPrint:Cr,clear:Er,getBranchesAsObjArray:Br,getBranches:kr,getCommits:Lr,getCommitsArray:V,getCurrentBranch:Tr,getDirection:Mr,getHead:Rr,setAccTitle:nr,getAccTitle:ar,getAccDescription:tr,setAccDescription:er,setDiagramTitle:rr,getDiagramTitle:U},Ir=h((t,r)=>{Z(t,r),t.dir&&r.setDirection(t.dir);for(const a of t.statements)qr(a,r)},"populate"),qr=h((t,r)=>{const s={Commit:h(e=>r.commit(Or(e)),"Commit"),Branch:h(e=>r.branch(zr(e)),"Branch"),Merge:h(e=>r.merge(Gr(e)),"Merge"),Checkout:h(e=>r.checkout(Hr(e)),"Checkout"),CherryPicking:h(e=>r.cherryPick(Pr(e)),"CherryPicking")}[t.$type];s?s(t):w.error(`Unknown statement type: ${t.$type}`)},"parseStatement"),Or=h(t=>({id:t.id,msg:t.message??"",type:t.type!==void 0?u[t.type]:u.NORMAL,tags:t.tags??void 0}),"parseCommit"),zr=h(t=>({name:t.name,order:t.order??0}),"parseBranch"),Gr=h(t=>({branch:t.branch,id:t.id??"",type:t.type!==void 0?u[t.type]:void 0,tags:t.tags??void 0}),"parseMerge"),Hr=h(t=>t.branch,"parseCheckout"),Pr=h(t=>{var a;return{id:t.id,targetId:"",tags:((a=t.tags)==null?void 0:a.length)===0?void 0:t.tags,parent:t.parent}},"parseCherryPicking"),Wr={parse:h(async t=>{const r=await gr("gitGraph",t);w.debug(r),Ir(r,X)},"parse")},j=sr(),b=j==null?void 0:j.gitGraph,R=10,I=40,k=4,L=2,O=8,C=new Map,E=new Map,P=30,G=new Map,W=[],M=0,p="LR",Sr=h(()=>{C.clear(),E.clear(),G.clear(),M=0,W=[],p="LR"},"clear"),J=h(t=>{const r=document.createElementNS("http://www.w3.org/2000/svg","text");return(typeof t=="string"?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(s=>{const e=document.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),e.setAttribute("dy","1em"),e.setAttribute("x","0"),e.setAttribute("class","row"),e.textContent=s.trim(),r.appendChild(e)}),r},"drawText"),Q=h(t=>{let r,a,s;return p==="BT"?(a=h((e,n)=>e<=n,"comparisonFunc"),s=1/0):(a=h((e,n)=>e>=n,"comparisonFunc"),s=0),t.forEach(e=>{var c,o;const n=p==="TB"||p=="BT"?(c=E.get(e))==null?void 0:c.y:(o=E.get(e))==null?void 0:o.x;n!==void 0&&a(n,s)&&(r=e,s=n)}),r},"findClosestParent"),jr=h(t=>{let r="",a=1/0;return t.forEach(s=>{const e=E.get(s).y;e<=a&&(r=s,a=e)}),r||void 0},"findClosestParentBT"),Ar=h((t,r,a)=>{let s=a,e=a;const n=[];t.forEach(c=>{const o=r.get(c);if(!o)throw new Error(`Commit not found for key ${c}`);o.parents.length?(s=Yr(o),e=Math.max(s,e)):n.push(o),Kr(o,s)}),s=e,n.forEach(c=>{Nr(c,s,a)}),t.forEach(c=>{const o=r.get(c);if(o!=null&&o.parents.length){const $=jr(o.parents);s=E.get($).y-I,s<=e&&(e=s);const l=C.get(o.branch).pos,f=s-R;E.set(o.id,{x:l,y:f})}})},"setParallelBTPos"),Dr=h(t=>{var s;const r=Q(t.parents.filter(e=>e!==null));if(!r)throw new Error(`Closest parent not found for commit ${t.id}`);const a=(s=E.get(r))==null?void 0:s.y;if(a===void 0)throw new Error(`Closest parent position not found for commit ${t.id}`);return a},"findClosestParentPos"),Yr=h(t=>Dr(t)+I,"calculateCommitPosition"),Kr=h((t,r)=>{const a=C.get(t.branch);if(!a)throw new Error(`Branch not found for commit ${t.id}`);const s=a.pos,e=r+R;return E.set(t.id,{x:s,y:e}),{x:s,y:e}},"setCommitPosition"),Nr=h((t,r,a)=>{const s=C.get(t.branch);if(!s)throw new Error(`Branch not found for commit ${t.id}`);const e=r+a,n=s.pos;E.set(t.id,{x:n,y:e})},"setRootPosition"),_r=h((t,r,a,s,e,n)=>{if(n===u.HIGHLIGHT)t.append("rect").attr("x",a.x-10).attr("y",a.y-10).attr("width",20).attr("height",20).attr("class",`commit ${r.id} commit-highlight${e%O} ${s}-outer`),t.append("rect").attr("x",a.x-6).attr("y",a.y-6).attr("width",12).attr("height",12).attr("class",`commit ${r.id} commit${e%O} ${s}-inner`);else if(n===u.CHERRY_PICK)t.append("circle").attr("cx",a.x).attr("cy",a.y).attr("r",10).attr("class",`commit ${r.id} ${s}`),t.append("circle").attr("cx",a.x-3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${s}`),t.append("circle").attr("cx",a.x+3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${s}`),t.append("line").attr("x1",a.x+3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${s}`),t.append("line").attr("x1",a.x-3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${s}`);else{const c=t.append("circle");if(c.attr("cx",a.x),c.attr("cy",a.y),c.attr("r",r.type===u.MERGE?9:10),c.attr("class",`commit ${r.id} commit${e%O}`),n===u.MERGE){const o=t.append("circle");o.attr("cx",a.x),o.attr("cy",a.y),o.attr("r",6),o.attr("class",`commit ${s} ${r.id} commit${e%O}`)}n===u.REVERSE&&t.append("path").attr("d",`M ${a.x-5},${a.y-5}L${a.x+5},${a.y+5}M${a.x-5},${a.y+5}L${a.x+5},${a.y-5}`).attr("class",`commit ${s} ${r.id} commit${e%O}`)}},"drawCommitBullet"),Vr=h((t,r,a,s)=>{var e;if(r.type!==u.CHERRY_PICK&&(r.customId&&r.type===u.MERGE||r.type!==u.MERGE)&&(b!=null&&b.showCommitLabel)){const n=t.append("g"),c=n.insert("rect").attr("class","commit-label-bkg"),o=n.append("text").attr("x",s).attr("y",a.y+25).attr("class","commit-label").text(r.id),$=(e=o.node())==null?void 0:e.getBBox();if($&&(c.attr("x",a.posWithOffset-$.width/2-L).attr("y",a.y+13.5).attr("width",$.width+2*L).attr("height",$.height+2*L),p==="TB"||p==="BT"?(c.attr("x",a.x-($.width+4*k+5)).attr("y",a.y-12),o.attr("x",a.x-($.width+4*k)).attr("y",a.y+$.height-12)):o.attr("x",a.posWithOffset-$.width/2),b.rotateCommitLabel))if(p==="TB"||p==="BT")o.attr("transform","rotate(-45, "+a.x+", "+a.y+")"),c.attr("transform","rotate(-45, "+a.x+", "+a.y+")");else{const l=-7.5-($.width+10)/25*9.5,f=10+$.width/25*8.5;n.attr("transform","translate("+l+", "+f+") rotate(-45, "+s+", "+a.y+")")}}},"drawCommitLabel"),Xr=h((t,r,a,s)=>{var e;if(r.tags.length>0){let n=0,c=0,o=0;const $=[];for(const l of r.tags.reverse()){const f=t.insert("polygon"),g=t.append("circle"),d=t.append("text").attr("y",a.y-16-n).attr("class","tag-label").text(l),y=(e=d.node())==null?void 0:e.getBBox();if(!y)throw new Error("Tag bbox not found");c=Math.max(c,y.width),o=Math.max(o,y.height),d.attr("x",a.posWithOffset-y.width/2),$.push({tag:d,hole:g,rect:f,yOffset:n}),n+=20}for(const{tag:l,hole:f,rect:g,yOffset:d}of $){const y=o/2,x=a.y-19.2-d;if(g.attr("class","tag-label-bkg").attr("points",`
      ${s-c/2-k/2},${x+L}  
      ${s-c/2-k/2},${x-L}
      ${a.posWithOffset-c/2-k},${x-y-L}
      ${a.posWithOffset+c/2+k},${x-y-L}
      ${a.posWithOffset+c/2+k},${x+y+L}
      ${a.posWithOffset-c/2-k},${x+y+L}`),f.attr("cy",x).attr("cx",s-c/2+k/2).attr("r",1.5).attr("class","tag-hole"),p==="TB"||p==="BT"){const m=s+d;g.attr("class","tag-label-bkg").attr("points",`
        ${a.x},${m+2}
        ${a.x},${m-2}
        ${a.x+R},${m-y-2}
        ${a.x+R+c+4},${m-y-2}
        ${a.x+R+c+4},${m+y+2}
        ${a.x+R},${m+y+2}`).attr("transform","translate(12,12) rotate(45, "+a.x+","+s+")"),f.attr("cx",a.x+k/2).attr("cy",m).attr("transform","translate(12,12) rotate(45, "+a.x+","+s+")"),l.attr("x",a.x+5).attr("y",m+3).attr("transform","translate(14,14) rotate(45, "+a.x+","+s+")")}}}},"drawCommitTags"),Jr=h(t=>{switch(t.customType??t.type){case u.NORMAL:return"commit-normal";case u.REVERSE:return"commit-reverse";case u.HIGHLIGHT:return"commit-highlight";case u.MERGE:return"commit-merge";case u.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),Qr=h((t,r,a,s)=>{const e={x:0,y:0};if(t.parents.length>0){const n=Q(t.parents);if(n){const c=s.get(n)??e;return r==="TB"?c.y+I:r==="BT"?(s.get(t.id)??e).y-I:c.x+I}}else return r==="TB"?P:r==="BT"?(s.get(t.id)??e).y-I:0;return 0},"calculatePosition"),Zr=h((t,r,a)=>{var c,o;const s=p==="BT"&&a?r:r+R,e=p==="TB"||p==="BT"?s:(c=C.get(t.branch))==null?void 0:c.pos,n=p==="TB"||p==="BT"?(o=C.get(t.branch))==null?void 0:o.pos:s;if(n===void 0||e===void 0)throw new Error(`Position were undefined for commit ${t.id}`);return{x:n,y:e,posWithOffset:s}},"getCommitPosition"),K=h((t,r,a)=>{if(!b)throw new Error("GitGraph config not found");const s=t.append("g").attr("class","commit-bullets"),e=t.append("g").attr("class","commit-labels");let n=p==="TB"||p==="BT"?P:0;const c=[...r.keys()],o=(b==null?void 0:b.parallelCommits)??!1,$=h((f,g)=>{var x,m;const d=(x=r.get(f))==null?void 0:x.seq,y=(m=r.get(g))==null?void 0:m.seq;return d!==void 0&&y!==void 0?d-y:0},"sortKeys");let l=c.sort($);p==="BT"&&(o&&Ar(l,r,n),l=l.reverse()),l.forEach(f=>{var y;const g=r.get(f);if(!g)throw new Error(`Commit not found for key ${f}`);o&&(n=Qr(g,p,n,E));const d=Zr(g,n,o);if(a){const x=Jr(g),m=g.customType??g.type,q=((y=C.get(g.branch))==null?void 0:y.index)??0;_r(s,g,d,x,q,m),Vr(e,g,d,n),Xr(e,g,d,n)}p==="TB"||p==="BT"?E.set(g.id,{x:d.x,y:d.posWithOffset}):E.set(g.id,{x:d.posWithOffset,y:d.y}),n=p==="BT"&&o?n+I:n+I+R,n>M&&(M=n)})},"drawCommits"),Fr=h((t,r,a,s,e)=>{const c=(p==="TB"||p==="BT"?a.x<s.x:a.y<s.y)?r.branch:t.branch,o=h(l=>l.branch===c,"isOnBranchToGetCurve"),$=h(l=>l.seq>t.seq&&l.seq<r.seq,"isBetweenCommits");return[...e.values()].some(l=>$(l)&&o(l))},"shouldRerouteArrow"),H=h((t,r,a=0)=>{const s=t+Math.abs(t-r)/2;if(a>5)return s;if(W.every(c=>Math.abs(c-s)>=10))return W.push(s),s;const n=Math.abs(t-r);return H(t,r-n/5,a+1)},"findLane"),Ur=h((t,r,a,s)=>{var y,x,m,q,Y;const e=E.get(r.id),n=E.get(a.id);if(e===void 0||n===void 0)throw new Error(`Commit positions not found for commits ${r.id} and ${a.id}`);const c=Fr(r,a,e,n,s);let o="",$="",l=0,f=0,g=(y=C.get(a.branch))==null?void 0:y.index;a.type===u.MERGE&&r.id!==a.parents[0]&&(g=(x=C.get(r.branch))==null?void 0:x.index);let d;if(c){o="A 10 10, 0, 0, 0,",$="A 10 10, 0, 0, 1,",l=10,f=10;const T=e.y<n.y?H(e.y,n.y):H(n.y,e.y),v=e.x<n.x?H(e.x,n.x):H(n.x,e.x);p==="TB"?e.x<n.x?d=`M ${e.x} ${e.y} L ${v-l} ${e.y} ${$} ${v} ${e.y+f} L ${v} ${n.y-l} ${o} ${v+f} ${n.y} L ${n.x} ${n.y}`:(g=(m=C.get(r.branch))==null?void 0:m.index,d=`M ${e.x} ${e.y} L ${v+l} ${e.y} ${o} ${v} ${e.y+f} L ${v} ${n.y-l} ${$} ${v-f} ${n.y} L ${n.x} ${n.y}`):p==="BT"?e.x<n.x?d=`M ${e.x} ${e.y} L ${v-l} ${e.y} ${o} ${v} ${e.y-f} L ${v} ${n.y+l} ${$} ${v+f} ${n.y} L ${n.x} ${n.y}`:(g=(q=C.get(r.branch))==null?void 0:q.index,d=`M ${e.x} ${e.y} L ${v+l} ${e.y} ${$} ${v} ${e.y-f} L ${v} ${n.y+l} ${o} ${v-f} ${n.y} L ${n.x} ${n.y}`):e.y<n.y?d=`M ${e.x} ${e.y} L ${e.x} ${T-l} ${o} ${e.x+f} ${T} L ${n.x-l} ${T} ${$} ${n.x} ${T+f} L ${n.x} ${n.y}`:(g=(Y=C.get(r.branch))==null?void 0:Y.index,d=`M ${e.x} ${e.y} L ${e.x} ${T+l} ${$} ${e.x+f} ${T} L ${n.x-l} ${T} ${o} ${n.x} ${T-f} L ${n.x} ${n.y}`)}else o="A 20 20, 0, 0, 0,",$="A 20 20, 0, 0, 1,",l=20,f=20,p==="TB"?(e.x<n.x&&(a.type===u.MERGE&&r.id!==a.parents[0]?d=`M ${e.x} ${e.y} L ${e.x} ${n.y-l} ${o} ${e.x+f} ${n.y} L ${n.x} ${n.y}`:d=`M ${e.x} ${e.y} L ${n.x-l} ${e.y} ${$} ${n.x} ${e.y+f} L ${n.x} ${n.y}`),e.x>n.x&&(o="A 20 20, 0, 0, 0,",$="A 20 20, 0, 0, 1,",l=20,f=20,a.type===u.MERGE&&r.id!==a.parents[0]?d=`M ${e.x} ${e.y} L ${e.x} ${n.y-l} ${$} ${e.x-f} ${n.y} L ${n.x} ${n.y}`:d=`M ${e.x} ${e.y} L ${n.x+l} ${e.y} ${o} ${n.x} ${e.y+f} L ${n.x} ${n.y}`),e.x===n.x&&(d=`M ${e.x} ${e.y} L ${n.x} ${n.y}`)):p==="BT"?(e.x<n.x&&(a.type===u.MERGE&&r.id!==a.parents[0]?d=`M ${e.x} ${e.y} L ${e.x} ${n.y+l} ${$} ${e.x+f} ${n.y} L ${n.x} ${n.y}`:d=`M ${e.x} ${e.y} L ${n.x-l} ${e.y} ${o} ${n.x} ${e.y-f} L ${n.x} ${n.y}`),e.x>n.x&&(o="A 20 20, 0, 0, 0,",$="A 20 20, 0, 0, 1,",l=20,f=20,a.type===u.MERGE&&r.id!==a.parents[0]?d=`M ${e.x} ${e.y} L ${e.x} ${n.y+l} ${o} ${e.x-f} ${n.y} L ${n.x} ${n.y}`:d=`M ${e.x} ${e.y} L ${n.x-l} ${e.y} ${o} ${n.x} ${e.y-f} L ${n.x} ${n.y}`),e.x===n.x&&(d=`M ${e.x} ${e.y} L ${n.x} ${n.y}`)):(e.y<n.y&&(a.type===u.MERGE&&r.id!==a.parents[0]?d=`M ${e.x} ${e.y} L ${n.x-l} ${e.y} ${$} ${n.x} ${e.y+f} L ${n.x} ${n.y}`:d=`M ${e.x} ${e.y} L ${e.x} ${n.y-l} ${o} ${e.x+f} ${n.y} L ${n.x} ${n.y}`),e.y>n.y&&(a.type===u.MERGE&&r.id!==a.parents[0]?d=`M ${e.x} ${e.y} L ${n.x-l} ${e.y} ${o} ${n.x} ${e.y-f} L ${n.x} ${n.y}`:d=`M ${e.x} ${e.y} L ${e.x} ${n.y+l} ${$} ${e.x+f} ${n.y} L ${n.x} ${n.y}`),e.y===n.y&&(d=`M ${e.x} ${e.y} L ${n.x} ${n.y}`));if(d===void 0)throw new Error("Line definition not found");t.append("path").attr("d",d).attr("class","arrow arrow"+g%O)},"drawArrow"),re=h((t,r)=>{const a=t.append("g").attr("class","commit-arrows");[...r.keys()].forEach(s=>{const e=r.get(s);e.parents&&e.parents.length>0&&e.parents.forEach(n=>{Ur(a,r.get(n),e,r)})})},"drawArrows"),ee=h((t,r)=>{const a=t.append("g");r.forEach((s,e)=>{var x;const n=e%O,c=(x=C.get(s.name))==null?void 0:x.pos;if(c===void 0)throw new Error(`Position not found for branch ${s.name}`);const o=a.append("line");o.attr("x1",0),o.attr("y1",c),o.attr("x2",M),o.attr("y2",c),o.attr("class","branch branch"+n),p==="TB"?(o.attr("y1",P),o.attr("x1",c),o.attr("y2",M),o.attr("x2",c)):p==="BT"&&(o.attr("y1",M),o.attr("x1",c),o.attr("y2",P),o.attr("x2",c)),W.push(c);const $=s.name,l=J($),f=a.insert("rect"),d=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);d.node().appendChild(l);const y=l.getBBox();f.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-y.width-4-((b==null?void 0:b.rotateCommitLabel)===!0?30:0)).attr("y",-y.height/2+8).attr("width",y.width+18).attr("height",y.height+4),d.attr("transform","translate("+(-y.width-14-((b==null?void 0:b.rotateCommitLabel)===!0?30:0))+", "+(c-y.height/2-1)+")"),p==="TB"?(f.attr("x",c-y.width/2-10).attr("y",0),d.attr("transform","translate("+(c-y.width/2-5)+", 0)")):p==="BT"?(f.attr("x",c-y.width/2-10).attr("y",M),d.attr("transform","translate("+(c-y.width/2-5)+", "+M+")")):f.attr("transform","translate(-19, "+(c-y.height/2)+")")})},"drawBranches"),te=h(function(t,r,a,s,e){return C.set(t,{pos:r,index:a}),r+=50+(e?40:0)+(p==="TB"||p==="BT"?s.width/2:0),r},"setBranchPosition"),ae=h(function(t,r,a,s){if(Sr(),w.debug("in gitgraph renderer",t+`
`,"id:",r,a),!b)throw new Error("GitGraph config not found");const e=b.rotateCommitLabel??!1,n=s.db;G=n.getCommits();const c=n.getBranchesAsObjArray();p=n.getDirection();const o=or(`[id="${r}"]`);let $=0;c.forEach((l,f)=>{var q;const g=J(l.name),d=o.append("g"),y=d.insert("g").attr("class","branchLabel"),x=y.insert("g").attr("class","label branch-label");(q=x.node())==null||q.appendChild(g);const m=g.getBBox();$=te(l.name,$,f,m,e),x.remove(),y.remove(),d.remove()}),K(o,G,!1),b.showBranches&&ee(o,c),re(o,G),K(o,G,!0),cr.insertTitle(o,"gitTitleText",b.titleTopMargin??0,n.getDiagramTitle()),ir(void 0,o,b.diagramPadding,b.useMaxWidth)},"draw"),ne={draw:ae},se=h(t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(r=>`
        .branch-label${r} { fill: ${t["gitBranchLabel"+r]}; }
        .commit${r} { stroke: ${t["git"+r]}; fill: ${t["git"+r]}; }
        .commit-highlight${r} { stroke: ${t["gitInv"+r]}; fill: ${t["gitInv"+r]}; }
        .label${r}  { fill: ${t["git"+r]}; }
        .arrow${r} { stroke: ${t["git"+r]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles"),oe=se,pe={parser:Wr,db:X,renderer:ne,styles:oe};export{pe as diagram};

import{_ as pe}from"./index.966c3542.js";const fe=Symbol(),Z=Object.getPrototypeOf,H=new WeakMap,me=e=>e&&(H.has(e)?H.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),ge=e=>me(e)&&e[fe]||null,ee=(e,t=!0)=>{H.set(e,t)},q=e=>typeof e=="object"&&e!==null,C=new WeakMap,$=new WeakSet,he=(e=Object.is,t=(o,h)=>new Proxy(o,h),s=o=>q(o)&&!$.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,h,v=r)=>{const y=l.get(o);if((y==null?void 0:y[0])===h)return y[1];const b=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return ee(b,!0),l.set(o,[h,b]),Reflect.ownKeys(o).forEach(_=>{if(Object.getOwnPropertyDescriptor(b,_))return;const L=Reflect.get(o,_),D={value:L,enumerable:!0,configurable:!0};if($.has(L))ee(L,!1);else if(L instanceof Promise)delete D.value,D.get=()=>v(L);else if(C.has(L)){const[I,Q]=C.get(L);D.value=c(I,Q(),v)}Object.defineProperty(b,_,D)}),Object.preventExtensions(b)},m=new WeakMap,f=[1,1],A=o=>{if(!q(o))throw new Error("object required");const h=m.get(o);if(h)return h;let v=f[0];const y=new Set,b=(i,a=++f[0])=>{v!==a&&(v=a,y.forEach(n=>n(i,a)))};let _=f[1];const L=(i=++f[1])=>(_!==i&&!y.size&&(_=i,I.forEach(([a])=>{const n=a[1](i);n>v&&(v=n)})),v),D=i=>(a,n)=>{const g=[...a];g[1]=[i,...g[1]],b(g,n)},I=new Map,Q=(i,a)=>{if(y.size){const n=a[3](D(i));I.set(i,[a,n])}else I.set(i,[a])},F=i=>{var a;const n=I.get(i);n&&(I.delete(i),(a=n[1])==null||a.call(n))},de=i=>(y.add(i),y.size===1&&I.forEach(([n,g],U)=>{const k=n[3](D(U));I.set(U,[n,k])}),()=>{y.delete(i),y.size===0&&I.forEach(([n,g],U)=>{g&&(g(),I.set(U,[n]))})}),z=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(z,{deleteProperty(i,a){const n=Reflect.get(i,a);F(a);const g=Reflect.deleteProperty(i,a);return g&&b(["delete",[a],n]),g},set(i,a,n,g){const U=Reflect.has(i,a),k=Reflect.get(i,a,g);if(U&&(e(k,n)||m.has(n)&&e(k,m.get(n))))return!0;F(a),q(n)&&(n=ge(n)||n);let B=n;if(n instanceof Promise)n.then(W=>{n.status="fulfilled",n.value=W,b(["resolve",[a],W])}).catch(W=>{n.status="rejected",n.reason=W,b(["reject",[a],W])});else{!C.has(n)&&s(n)&&(B=A(n));const W=!$.has(B)&&C.get(B);W&&Q(a,W)}return Reflect.set(i,a,B,g),b(["set",[a],n,k]),!0}});m.set(o,V);const ue=[z,L,c,de];return C.set(V,ue),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(V[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(z,i,a)}),V})=>[A,C,$,e,t,s,r,l,c,m,f],[ye]=he();function M(e={}){return ye(e)}function S(e,t,s){const r=C.get(e);let l;const c=[],m=r[3];let f=!1;const o=m(h=>{if(c.push(h),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function be(e,t){const s=C.get(e),[r,l,c]=s;return c(r,l(),t)}const d=M({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ce={state:d,subscribe(e){return S(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ce.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},Ie=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=M({enabled:Ie,userSessionId:"",events:[],connectedWalletId:void 0}),Ee={state:u,subscribe(e){return S(u.events,()=>e(be(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},w=M({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),E={state:w,subscribe(e){return S(w,()=>e(w))},setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},x=M({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:x,subscribe(e){return S(x,()=>e(x))},setConfig(e){var t,s;Ee.initialize(),E.setChains(e.chains),E.setIsAuth(Boolean(e.enableAuthMode)),E.setIsCustomMobile(Boolean((t=e.mobileWallets)==null?void 0:t.length)),E.setIsCustomDesktop(Boolean((s=e.desktopWallets)==null?void 0:s.length)),p.setModalVersionInStorage(),Object.assign(x,e)}};var ve=Object.defineProperty,te=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,se=(e,t,s)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Le=(e,t)=>{for(var s in t||(t={}))we.call(t,s)&&se(e,s,t[s]);if(te)for(var s of te(t))Oe.call(t,s)&&se(e,s,t[s]);return e};const X="https://explorer-api.walletconnect.com",Y="wcm",J="js-2.6.2";async function K(e,t){const s=Le({sdkType:Y,sdkVersion:J},t),r=new URL(e,X);return r.searchParams.append("projectId",N.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const j={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${X}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${Y}&sdkVersion=${J}`},getAssetImageUrl(e){return`${X}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${Y}&sdkVersion=${J}`}};var Ae=Object.defineProperty,oe=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))We.call(t,s)&&ne(e,s,t[s]);if(oe)for(var s of oe(t))Ce.call(t,s)&&ne(e,s,t[s]);return e};const re=p.isMobile(),O=M({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:O,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return O.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await j.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const f=e.indexOf(c.id),A=e.indexOf(m.id);return f-A}),O.recomendedWallets=l}else{const{chains:s,isAuth:r}=E.state,l=s==null?void 0:s.join(","),c=p.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=re?await j.getMobileListings(m):await j.getDesktopListings(m);O.recomendedWallets=Object.values(f)}return O.recomendedWallets},async getWallets(e){const t=Me({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=O;if(r==="ALL")return O.wallets;l.length?t.excludedIds=l.map(v=>v.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),E.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:f,total:A}=re?await j.getMobileListings(t):await j.getDesktopListings(t),o=Object.values(f),h=m?"search":"wallets";return O[h]={listings:[...O[h].listings,...o],total:A,page:c!=null?c:1},{listings:o,total:A}},getWalletImageUrl(e){return j.getWalletImageUrl(e)},getAssetImageUrl(e){return j.getAssetImageUrl(e)},resetSearch(){O.search={listings:[],total:0,page:1}}},R=M({open:!1}),G={state:R,subscribe(e){return S(R,()=>e(R))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=E.state;if(p.removeWalletConnectDeepLink(),E.setWalletConnectUri(e==null?void 0:e.uri),E.setChains(e==null?void 0:e.chains),ce.reset("ConnectWallet"),s&&r)R.open=!0,t();else{const l=setInterval(()=>{const c=E.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),R.open=!0,t())},200)}})},close(){R.open=!1}};var De=Object.defineProperty,ae=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))je.call(t,s)&&ie(e,s,t[s]);if(ae)for(var s of ae(t))Pe.call(t,s)&&ie(e,s,t[s]);return e};function _e(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=M({themeMode:_e()?"dark":"light"}),le={state:T,subscribe(e){return S(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=Se({},s))}},P=M({open:!1,message:"",variant:"success"}),Te={state:P,subscribe(e){return S(P,()=>e(P))},openToast(e,t){P.open=!0,P.message=e,P.variant=t},closeToast(){P.open=!1}};class Ue{constructor(t){this.openModal=G.open,this.closeModal=G.close,this.subscribeModal=G.subscribe,this.setTheme=le.setThemeConfig,le.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index.4b044d49.js"),["./index.4b044d49.js","./index.966c3542.js","./index.9200c64f.css"],import.meta.url);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),E.setIsUiLoaded(!0)}}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ue},Symbol.toStringTag,{value:"Module"}));export{Ee as R,ce as T,p as a,Ve as i,le as n,Te as o,E as p,G as s,ke as t,N as y};
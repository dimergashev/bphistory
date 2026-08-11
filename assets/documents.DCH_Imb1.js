import{P as Me,a8 as Ie,x as V,f as h,y as re,W as me,q as i,U as A,G as W,c as C,z as M,D as j,H as je,ah as Ee,T as Ae,s as N,A as z,Q as ge,i as oe,B as ae,r as U,L as fe,o as Ne,w as ne,e as $e,C as Ue,I as Te,J as Le,O as Oe}from"./vue-vendor.CT4IcATu.js";import{S as He}from"./StatusBadge.C3-2i8fC.js";import{K as Ve,a3 as Ke,a8 as Re,au as Fe,X as qe,_ as ie,aI as Ze,h as Ge}from"./index.C5UMSYdr.js";/* empty css                                                                            *//* empty css                                                                   */import{u as Xe}from"./index.DISzQorg.js";import{D as We}from"./DataCollectionDocumentViewer.JQ2bcCLE.js";import{b as he}from"./route-block.Qi-2obbP.js";import"./utils-vendor.C5noEFev.js";import"./aws-vendor.BmGS-6e9.js";import"./monitoring-vendor.Kw_R0_KG.js";import"./archiveUpload.DzAI90-1.js";var Qe=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,Ye={root:function(o){var a=o.props;return["p-message p-component p-message-"+a.severity,{"p-message-outlined":a.variant==="outlined","p-message-simple":a.variant==="simple","p-message-sm":a.size==="small","p-message-lg":a.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Je=Ve.extend({name:"message",style:Qe,classes:Ye}),et={name:"BaseMessage",extends:Fe,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Je,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},K(e)}function ve(e,o,a){return(o=tt(o))in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function tt(e){var o=nt(e,"string");return K(o)=="symbol"?o:o+""}function nt(e,o){if(K(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,o);if(K(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}var we={name:"Message",extends:et,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var o=this;this.life&&setTimeout(function(){o.visible=!1,o.$emit("life-end")},this.life)},methods:{close:function(o){this.visible=!1,this.$emit("close",o)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return qe(ve(ve({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:Re},components:{TimesIcon:Ke}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},R(e)}function be(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(g){return Object.getOwnPropertyDescriptor(e,g).enumerable})),a.push.apply(a,r)}return a}function ye(e){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?be(Object(a),!0).forEach(function(r){st(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):be(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function st(e,o,a){return(o=ot(o))in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function ot(e){var o=at(e,"string");return R(o)=="symbol"?o:o+""}function at(e,o){if(R(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,o);if(R(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}var rt=["data-p"],it=["data-p"],ct=["data-p"],lt=["aria-label","data-p"],dt=["data-p"];function ut(e,o,a,r,g,p){var u=Me("TimesIcon"),c=Ie("ripple");return h(),V(Ae,A({name:"p-message",appear:""},e.ptmi("transition")),{default:re(function(){return[me(i("div",A({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":p.dataP},e.ptm("root")),[e.$slots.container?W(e.$slots,"container",{key:0,closeCallback:p.close}):(h(),C("div",A({key:1,class:e.cx("content"),"data-p":p.dataP},e.ptm("content")),[W(e.$slots,"icon",{class:j(e.cx("icon"))},function(){return[(h(),V(je(e.icon?"span":null),A({class:[e.cx("icon"),e.icon],"data-p":p.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(h(),C("div",A({key:0,class:e.cx("text"),"data-p":p.dataP},e.ptm("text")),[W(e.$slots,"default")],16,ct)):M("",!0),e.closable?me((h(),C("button",A({key:1,class:e.cx("closeButton"),"aria-label":p.closeAriaLabel,type:"button",onClick:o[0]||(o[0]=function(m){return p.close(m)}),"data-p":p.dataP},ye(ye({},e.closeButtonProps),e.ptm("closeButton"))),[W(e.$slots,"closeicon",{},function(){return[e.closeIcon?(h(),C("i",A({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":p.dataP},e.ptm("closeIcon")),null,16,dt)):(h(),V(u,A({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":p.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,lt)),[[c]]):M("",!0)],16,it))],16,rt),[[Ee,g.visible]])]}),_:3},16)}we.render=ut;const pt={class:"status-icon"},mt={key:0,width:"7",height:"5",viewBox:"0 0 7 5",fill:"none"},gt={key:1,xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none"},ft={key:2,width:"6",height:"9",viewBox:"0 0 6 9",fill:"none"},ht={key:3,width:"8",height:"8",viewBox:"0 0 8 8",fill:"none"},vt={key:4,width:"8",height:"8",viewBox:"0 0 8 8",fill:"none"},bt={class:"status-text"},yt={__name:"StatusBadge",props:{status:{type:String,required:!0,validator:e=>["active","expiring","expiring-soon","pending","not-applicable","expired","inactive"].includes(e)}},setup(e){const o=e,a=N(()=>{switch(o.status){case"active":return"ACTIVE";case"expiring":return"EXPIRING";case"expiring-soon":return"EXPIRING";case"pending":return"PENDING";case"not-applicable":return"NOT REQUIRED";case"expired":return"EXPIRED";case"inactive":return"INACTIVE";default:return""}}),r=N(()=>["status-badge",`status-${o.status.replace("-soon","")}`]);return(g,p)=>(h(),C("div",{class:j(r.value)},[i("i",pt,[e.status==="active"?(h(),C("svg",mt,p[0]||(p[0]=[i("path",{d:"M1 2.5L2.5 4L6 0.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):e.status==="expiring"||e.status==="expiring-soon"?(h(),C("svg",gt,p[1]||(p[1]=[i("path",{d:"M6 7.5V5M6.25 3.5C6.25 3.63807 6.13807 3.75 6 3.75C5.86193 3.75 5.75 3.63807 5.75 3.5M6.25 3.5C6.25 3.36193 6.13807 3.25 6 3.25C5.86193 3.25 5.75 3.36193 5.75 3.5M6.25 3.5H5.75M11 5.5C11 8.26142 8.76142 10.5 6 10.5C3.23858 10.5 1 8.26142 1 5.5C1 2.73858 3.23858 0.5 6 0.5C8.76142 0.5 11 2.73858 11 5.5Z",stroke:"#C48A2D","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):e.status==="pending"?(h(),C("svg",ft,p[2]||(p[2]=[i("rect",{x:"2",y:"0",width:"2",height:"6",rx:"1",fill:"white"},null,-1),i("circle",{cx:"3",cy:"7.5",r:"1.5",fill:"white"},null,-1)]))):e.status==="expired"?(h(),C("svg",ht,p[3]||(p[3]=[i("path",{d:"M1 1L7 7M7 1L1 7",stroke:"white","stroke-width":"1.5","stroke-linecap":"round"},null,-1)]))):(h(),C("svg",vt,p[4]||(p[4]=[i("circle",{cx:"4",cy:"4",r:"3",stroke:"white","stroke-width":"1.5",fill:"none"},null,-1),i("path",{d:"M2.5 4H5.5",stroke:"white","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])))]),i("span",bt,z(a.value),1)],2))}},wt=ie(yt,[["__scopeId","data-v-8612214a"]]),Ct={class:"card-content"},kt={class:"preview-section"},_t=["src","alt"],xt={key:1,class:"blur-placeholder"},Dt={key:2,"data-v-dbb16292":"",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"56",viewBox:"0 0 50 56",fill:"none"},St={class:"status-section"},Pt={class:"document-title"},Bt={key:0,class:"document-name"},zt={class:"document-details"},Mt={class:"detail-item"},It={class:"value"},jt={class:"remaining-time-wrapper"},Et={class:"value"},At={key:0,class:"remaining-time"},Nt={class:"detail-item"},$t={class:"actions-section"},Ut={__name:"DocumentCard",props:{title:{type:String,required:!0},expires:{type:[Date,String],default:null},status:{type:String,required:!0,validator:e=>["active","expiring-soon","pending","not-applicable","expired","inactive"].includes(e)},remainingDays:{type:Number,default:null},previewImage:{type:String,default:null},showUpdate:{type:Boolean,default:!1},documentName:{type:String,default:null},uploadedAt:{type:[Date,String],default:null},expiryDate:{type:[Date,String],default:null},uploadedToFta:{type:Boolean,default:!1},s3Key:{type:String,default:null},previewLoading:{type:Boolean,default:!1}},emits:["download","update","preview"],setup(e,{emit:o}){const a=e,r=o,g=u=>{if(!u)return"";if(typeof u=="string"){const c=new Date(u);if(isNaN(c.getTime()))return u;u=c}return u.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},p=()=>{r("preview",{documentUrl:a.previewImage,document_url:a.previewImage,s3Key:a.s3Key||null,title:a.title,documentName:a.documentName})};return(u,c)=>(h(),C("div",{class:j(["document-card",e.status])},[c[8]||(c[8]=i("div",{class:"card-background"},[i("div",{class:"card-inner"})],-1)),i("div",Ct,[i("div",kt,[i("div",{class:"preview-image",onClick:p},[e.previewImage?(h(),C("img",{key:0,src:e.previewImage,alt:e.title,class:j({"blur-loading":e.previewLoading})},null,10,_t)):e.previewLoading?(h(),C("div",xt,c[2]||(c[2]=[ge('<div class="placeholder-content" data-v-83cfe1d8><svg width="40" height="45" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.3" data-v-83cfe1d8><path data-v-dbb16292="" d="M44.174 8.05139V53.0847C44.174 54.1425 43.3168 55 42.2594 55H7.74281C6.68541 55 5.82812 54.1425 5.82812 53.0847V2.91525C5.82812 1.85754 6.68541 1 7.74281 1H37.1247L44.174 8.05139Z" stroke="#B38D97" stroke-miterlimit="10" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M44.174 8.05131H39.0416C37.9842 8.05131 37.127 7.19377 37.127 6.13606V1.0022" stroke="#B38D97" stroke-miterlimit="10" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M1.91504 24.5H48.085C48.8661 24.5 49.4999 25.1334 49.5 25.915V45.3496C49.5 46.1314 48.8661 46.7646 48.085 46.7646H1.91504C1.13387 46.7646 0.5 46.1314 0.5 45.3496V25.915C0.500113 25.1334 1.13394 24.5 1.91504 24.5Z" fill="#FCFAFA" stroke="#B38D97" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M12.9688 10.269H29.6665" stroke="#B38D97" stroke-miterlimit="10" stroke-linecap="round" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M12.9688 15.3052H36.709" stroke="#B38D97" stroke-miterlimit="10" stroke-linecap="round" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M12.9688 20.198H36.709" stroke="#B38D97" stroke-miterlimit="10" stroke-linecap="round" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M13 32.1326H16.4657C17.294 32.1326 18.0241 32.2947 18.6563 32.6188C19.2956 32.9355 19.7897 33.3849 20.1384 33.9669C20.4944 34.5488 20.6724 35.2265 20.6724 36C20.6724 36.7735 20.4944 37.4512 20.1384 38.0331C19.7897 38.6151 19.2956 39.0681 18.6563 39.3923C18.0241 39.709 17.294 39.8674 16.4657 39.8674H13V32.1326ZM16.3785 38.3978C17.1414 38.3978 17.7481 38.1842 18.1985 37.7569C18.6563 37.3223 18.8851 36.7366 18.8851 36C18.8851 35.2634 18.6563 34.6814 18.1985 34.2541C17.7481 33.8195 17.1414 33.6022 16.3785 33.6022H14.7655V38.3978H16.3785Z" fill="#B38D97" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M25.6985 40C24.9065 40 24.1909 39.8269 23.5515 39.4807C22.9194 39.1344 22.4217 38.6593 22.0584 38.0552C21.7024 37.4438 21.5244 36.7587 21.5244 36C21.5244 35.2413 21.7024 34.5599 22.0584 33.9558C22.4217 33.3444 22.9194 32.8656 23.5515 32.5193C24.1909 32.1731 24.9065 32 25.6985 32C26.4904 32 27.2024 32.1731 27.8345 32.5193C28.4667 32.8656 28.9643 33.3444 29.3276 33.9558C29.6909 34.5599 29.8725 35.2413 29.8725 36C29.8725 36.7587 29.6909 37.4438 29.3276 38.0552C28.9643 38.6593 28.4667 39.1344 27.8345 39.4807C27.2024 39.8269 26.4904 40 25.6985 40ZM25.6985 38.4751C26.1489 38.4751 26.5558 38.372 26.9191 38.1657C27.2824 37.9521 27.5657 37.6575 27.7692 37.2818C27.9799 36.9061 28.0852 36.4788 28.0852 36C28.0852 35.5212 27.9799 35.0939 27.7692 34.7182C27.5657 34.3425 27.2824 34.0516 26.9191 33.8453C26.5558 33.6317 26.1489 33.5249 25.6985 33.5249C25.248 33.5249 24.8411 33.6317 24.4779 33.8453C24.1146 34.0516 23.8276 34.3425 23.6169 34.7182C23.4134 35.0939 23.3117 35.5212 23.3117 36C23.3117 36.4788 23.4134 36.9061 23.6169 37.2818C23.8276 37.6575 24.1146 37.9521 24.4779 38.1657C24.8411 38.372 25.248 38.4751 25.6985 38.4751Z" fill="#B38D97" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M34.8504 40C34.073 40 33.3682 39.8306 32.7361 39.4917C32.1112 39.1455 31.6172 38.6703 31.2539 38.0663C30.8979 37.4549 30.7199 36.7661 30.7199 36C30.7199 35.2339 30.8979 34.5488 31.2539 33.9448C31.6172 33.3333 32.1112 32.8582 32.7361 32.5193C33.3682 32.1731 34.0766 32 34.8613 32C35.5224 32 36.1182 32.1179 36.6486 32.3536C37.1863 32.5893 37.6367 32.9282 38 33.3702L36.8666 34.4309C36.3507 33.8269 35.7113 33.5249 34.9485 33.5249C34.4762 33.5249 34.0548 33.6317 33.6842 33.8453C33.3137 34.0516 33.0231 34.3425 32.8124 34.7182C32.6089 35.0939 32.5072 35.5212 32.5072 36C32.5072 36.4788 32.6089 36.9061 32.8124 37.2818C33.0231 37.6575 33.3137 37.9521 33.6842 38.1657C34.0548 38.372 34.4762 38.4751 34.9485 38.4751C35.7113 38.4751 36.3507 38.1694 36.8666 37.558L38 38.6188C37.6367 39.0681 37.1863 39.4107 36.6486 39.6464C36.1109 39.8821 35.5115 40 34.8504 40Z" fill="#B38D97" data-v-83cfe1d8></path></svg></div>',1)]))):(h(),C("svg",Dt,c[3]||(c[3]=[ge('<path data-v-dbb16292="" d="M44.174 8.05139V53.0847C44.174 54.1425 43.3168 55 42.2594 55H7.74281C6.68541 55 5.82812 54.1425 5.82812 53.0847V2.91525C5.82812 1.85754 6.68541 1 7.74281 1H37.1247L44.174 8.05139Z" stroke="#B38D97" stroke-miterlimit="10" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M44.174 8.05131H39.0416C37.9842 8.05131 37.127 7.19377 37.127 6.13606V1.0022" stroke="#B38D97" stroke-miterlimit="10" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M1.91504 24.5H48.085C48.8661 24.5 49.4999 25.1334 49.5 25.915V45.3496C49.5 46.1314 48.8661 46.7646 48.085 46.7646H1.91504C1.13387 46.7646 0.5 46.1314 0.5 45.3496V25.915C0.500113 25.1334 1.13394 24.5 1.91504 24.5Z" fill="#FCFAFA" stroke="#B38D97" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M12.9688 10.269H29.6665" stroke="#B38D97" stroke-miterlimit="10" stroke-linecap="round" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M12.9688 15.3052H36.709" stroke="#B38D97" stroke-miterlimit="10" stroke-linecap="round" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M12.9688 20.198H36.709" stroke="#B38D97" stroke-miterlimit="10" stroke-linecap="round" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M13 32.1326H16.4657C17.294 32.1326 18.0241 32.2947 18.6563 32.6188C19.2956 32.9355 19.7897 33.3849 20.1384 33.9669C20.4944 34.5488 20.6724 35.2265 20.6724 36C20.6724 36.7735 20.4944 37.4512 20.1384 38.0331C19.7897 38.6151 19.2956 39.0681 18.6563 39.3923C18.0241 39.709 17.294 39.8674 16.4657 39.8674H13V32.1326ZM16.3785 38.3978C17.1414 38.3978 17.7481 38.1842 18.1985 37.7569C18.6563 37.3223 18.8851 36.7366 18.8851 36C18.8851 35.2634 18.6563 34.6814 18.1985 34.2541C17.7481 33.8195 17.1414 33.6022 16.3785 33.6022H14.7655V38.3978H16.3785Z" fill="#B38D97" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M25.6985 40C24.9065 40 24.1909 39.8269 23.5515 39.4807C22.9194 39.1344 22.4217 38.6593 22.0584 38.0552C21.7024 37.4438 21.5244 36.7587 21.5244 36C21.5244 35.2413 21.7024 34.5599 22.0584 33.9558C22.4217 33.3444 22.9194 32.8656 23.5515 32.5193C24.1909 32.1731 24.9065 32 25.6985 32C26.4904 32 27.2024 32.1731 27.8345 32.5193C28.4667 32.8656 28.9643 33.3444 29.3276 33.9558C29.6909 34.5599 29.8725 35.2413 29.8725 36C29.8725 36.7587 29.6909 37.4438 29.3276 38.0552C28.9643 38.6593 28.4667 39.1344 27.8345 39.4807C27.2024 39.8269 26.4904 40 25.6985 40ZM25.6985 38.4751C26.1489 38.4751 26.5558 38.372 26.9191 38.1657C27.2824 37.9521 27.5657 37.6575 27.7692 37.2818C27.9799 36.9061 28.0852 36.4788 28.0852 36C28.0852 35.5212 27.9799 35.0939 27.7692 34.7182C27.5657 34.3425 27.2824 34.0516 26.9191 33.8453C26.5558 33.6317 26.1489 33.5249 25.6985 33.5249C25.248 33.5249 24.8411 33.6317 24.4779 33.8453C24.1146 34.0516 23.8276 34.3425 23.6169 34.7182C23.4134 35.0939 23.3117 35.5212 23.3117 36C23.3117 36.4788 23.4134 36.9061 23.6169 37.2818C23.8276 37.6575 24.1146 37.9521 24.4779 38.1657C24.8411 38.372 25.248 38.4751 25.6985 38.4751Z" fill="#B38D97" data-v-83cfe1d8></path><path data-v-dbb16292="" d="M34.8504 40C34.073 40 33.3682 39.8306 32.7361 39.4917C32.1112 39.1455 31.6172 38.6703 31.2539 38.0663C30.8979 37.4549 30.7199 36.7661 30.7199 36C30.7199 35.2339 30.8979 34.5488 31.2539 33.9448C31.6172 33.3333 32.1112 32.8582 32.7361 32.5193C33.3682 32.1731 34.0766 32 34.8613 32C35.5224 32 36.1182 32.1179 36.6486 32.3536C37.1863 32.5893 37.6367 32.9282 38 33.3702L36.8666 34.4309C36.3507 33.8269 35.7113 33.5249 34.9485 33.5249C34.4762 33.5249 34.0548 33.6317 33.6842 33.8453C33.3137 34.0516 33.0231 34.3425 32.8124 34.7182C32.6089 35.0939 32.5072 35.5212 32.5072 36C32.5072 36.4788 32.6089 36.9061 32.8124 37.2818C33.0231 37.6575 33.3137 37.9521 33.6842 38.1657C34.0548 38.372 34.4762 38.4751 34.9485 38.4751C35.7113 38.4751 36.3507 38.1694 36.8666 37.558L38 38.6188C37.6367 39.0681 37.1863 39.4107 36.6486 39.6464C36.1109 39.8821 35.5115 40 34.8504 40Z" fill="#B38D97" data-v-83cfe1d8></path>',9)])))]),i("div",St,[oe(wt,{status:e.status},null,8,["status"])])]),i("div",{class:j(["info-section",e.expires?"has-expiry":"no-expiry"])},[i("h3",Pt,z(e.title),1),e.documentName?(h(),C("div",Bt,z(e.documentName),1)):M("",!0),i("div",zt,[i("div",Mt,[c[4]||(c[4]=i("span",{class:"label"},"Uploaded:",-1)),i("span",It,z(e.uploadedAt?g(e.uploadedAt):"Not specified"),1)]),i("div",{class:j(["detail-item expiry-detail",{"has-remaining-days":e.remainingDays!==null}])},[c[6]||(c[6]=i("span",{class:"label"},"Expires:",-1)),i("div",jt,[i("span",Et,z(e.expiryDate||e.expires?g(e.expiryDate||e.expires):"Not specified"),1),e.remainingDays!==null?(h(),C("div",At,[c[5]||(c[5]=i("i",{class:"time-icon"},[i("svg",{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none"},[i("path",{d:"M6.5 1.16667V6.5L10.0833 8.29167M11.9167 6.5C11.9167 9.72567 9.22567 12.4167 6 12.4167C2.77433 12.4167 0.0833333 9.72567 0.0833333 6.5C0.0833333 3.27433 2.77433 0.583333 6 0.583333C9.22567 0.583333 11.9167 3.27433 11.9167 6.5Z",stroke:"#4F5058","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),ae(" "+z(e.remainingDays<0?`Expired ${Math.abs(e.remainingDays)} days ago`:`${e.remainingDays} days remaining`),1)])):M("",!0)])],2),i("div",Nt,[c[7]||(c[7]=i("span",{class:"label"},"FTA Upload:",-1)),e.uploadedToFta!=="—"?(h(),V(He,{key:0,class:"status-badge-full-width",variant:e.uploadedToFta?"success":"error"},{default:re(()=>[ae(z(e.uploadedToFta?"Uploaded to FTA":"Not Uploaded"),1)]),_:1},8,["variant"])):M("",!0)])]),i("div",$t,[e.showUpdate?(h(),C("button",{key:0,onClick:c[0]||(c[0]=m=>u.$emit("update",e.title)),class:"action-btn update-btn"}," Update ")):M("",!0),i("button",{onClick:c[1]||(c[1]=m=>u.$emit("download",e.title)),class:"action-btn download-btn"}," Download ")])],2)])],2))}},Tt=ie(Ut,[["__scopeId","data-v-83cfe1d8"]]),Lt="DocumentPreviewCache",Ot=1,k="previews",H=7,se=50;class Ht{constructor(){this.db=null,this.initPromise=null}async init(){return this.initPromise?this.initPromise:(this.initPromise=new Promise((o,a)=>{const r=indexedDB.open(Lt,Ot);r.onerror=()=>{console.error("IndexedDB open error:",r.error),a(r.error)},r.onsuccess=()=>{this.db=r.result,o(this.db)},r.onupgradeneeded=g=>{const p=g.target.result;if(!p.objectStoreNames.contains(k)){const u=p.createObjectStore(k,{keyPath:"s3Key"});u.createIndex("timestamp","timestamp",{unique:!1}),u.createIndex("sourceUrl","sourceUrl",{unique:!1})}}}),this.initPromise)}async ensureDB(){return this.db||await this.init(),this.db}async get(o){try{const a=await this.ensureDB();return new Promise((r,g)=>{const c=a.transaction([k],"readonly").objectStore(k).get(o);c.onsuccess=()=>{const m=c.result;if(!m){r(null);return}const w=Date.now()-m.timestamp,_=H*24*60*60*1e3;if(w>_){this.remove(o).catch(()=>{}),r(null);return}r(m.thumbnail)},c.onerror=()=>{console.warn("IndexedDB get error:",c.error),g(c.error)}})}catch(a){return console.warn("Cache get error:",a),null}}async set(o,a,r){try{const g=await this.ensureDB(),p=await this.getCacheSize(),u=a.length/(1024*1024);return p+u>se&&await this.cleanupOldest(),new Promise((c,m)=>{const _=g.transaction([k],"readwrite").objectStore(k),v={s3Key:o,thumbnail:a,sourceUrl:r,timestamp:Date.now(),size:a.length},x=_.put(v);x.onsuccess=()=>c(),x.onerror=()=>{console.warn("IndexedDB set error:",x.error),m(x.error)}})}catch(g){throw console.warn("Cache set error:",g),g}}async remove(o){try{const a=await this.ensureDB();return new Promise((r,g)=>{const c=a.transaction([k],"readwrite").objectStore(k).delete(o);c.onsuccess=()=>r(),c.onerror=()=>{console.warn("IndexedDB remove error:",c.error),g(c.error)}})}catch(a){throw console.warn("Cache remove error:",a),a}}async shouldUpdate(o,a){try{const r=await this.ensureDB();return new Promise((g,p)=>{const m=r.transaction([k],"readonly").objectStore(k).get(o);m.onsuccess=()=>{const w=m.result;if(!w){g(!0);return}if(w.sourceUrl!==a){g(!0);return}const _=Date.now()-w.timestamp,v=H*24*60*60*1e3;g(_>v)},m.onerror=()=>{console.warn("IndexedDB shouldUpdate error:",m.error),p(m.error)}})}catch(r){return console.warn("Cache shouldUpdate error:",r),!0}}async cleanup(){try{const o=await this.ensureDB();return new Promise((a,r)=>{const c=o.transaction([k],"readwrite").objectStore(k).index("timestamp").openCursor();let m=0;const w=H*24*60*60*1e3;c.onsuccess=_=>{const v=_.target.result;v?(Date.now()-v.value.timestamp>w&&(v.delete(),m++),v.continue()):a(m)},c.onerror=()=>{console.warn("IndexedDB cleanup error:",c.error),r(c.error)}})}catch(o){return console.warn("Cache cleanup error:",o),0}}async cleanupOldest(o=10){try{const a=await this.ensureDB();return new Promise((r,g)=>{const u=a.transaction([k],"readwrite").objectStore(k),m=u.index("timestamp").openCursor(),w=[];let _=0;const v=o*1024*1024;m.onsuccess=x=>{const S=x.target.result;if(S)w.push({key:S.primaryKey,size:S.value.size||0}),S.continue();else{w.sort((L,q)=>L.timestamp-q.timestamp);let F=0;for(const L of w){if(_>=v)break;try{u.delete(L.key),_+=L.size,F++}catch{}}r(F)}},m.onerror=()=>{console.warn("IndexedDB cleanupOldest error:",m.error),g(m.error)}})}catch(a){return console.warn("Cache cleanupOldest error:",a),0}}async getCacheSize(){try{const o=await this.ensureDB();return new Promise((a,r)=>{const u=o.transaction([k],"readonly").objectStore(k).openCursor();let c=0;u.onsuccess=m=>{const w=m.target.result;w?(c+=w.value.size||0,w.continue()):a(c/(1024*1024))},u.onerror=()=>{console.warn("IndexedDB getCacheSize error:",u.error),r(u.error)}})}catch(o){return console.warn("Cache getCacheSize error:",o),0}}async getStats(){try{const o=await this.ensureDB();return new Promise((a,r)=>{const u=o.transaction([k],"readonly").objectStore(k).openCursor();let c=0,m=0,w=0;const _=H*24*60*60*1e3;u.onsuccess=v=>{const x=v.target.result;x?(c++,m+=x.value.size||0,Date.now()-x.value.timestamp>_&&w++,x.continue()):a({totalEntries:c,totalSizeMB:(m/(1024*1024)).toFixed(2),expiredEntries:w,maxSizeMB:se,maxAgeDays:H})},u.onerror=()=>{console.warn("IndexedDB getStats error:",u.error),r(u.error)}})}catch(o){return console.warn("Cache getStats error:",o),{totalEntries:0,totalSizeMB:0,expiredEntries:0,maxSizeMB:se,maxAgeDays:H}}}async clear(){try{const o=await this.ensureDB();return new Promise((a,r)=>{const u=o.transaction([k],"readwrite").objectStore(k).clear();u.onsuccess=()=>a(),u.onerror=()=>{console.warn("IndexedDB clear error:",u.error),r(u.error)}})}catch(o){throw console.warn("Cache clear error:",o),o}}}const T=new Ht,Vt={key:0,class:"documents-page denied"},Kt={key:1,class:"documents-page"},Rt={key:0,class:"loading-state"},Ft={key:1,class:"error-state"},qt={key:2,class:"status-legend"},Zt={class:"count"},Gt={class:"count"},Xt={class:"count"},Wt={key:3,class:"documents-grid"},Qt={key:0,class:"no-documents"},Yt=3,Ce={__name:"documents",setup(e){const o=Oe(),a=Ze(),r=Ge(),g=Xe(),p=N(()=>{try{const t=r.selectedClientId;return((r.clientsList||[]).find(n=>String(n?.clientId)===String(t))?.userRole||"").toString()==="partial_access"}catch{return!1}}),u={active:"active",Active:"active",valid:"active",Valid:"active",current:"active",Current:"active",inactive:"inactive",Inactive:"inactive",expired:"expired",Expired:"expired",invalid:"expired",Invalid:"expired",pending:"pending",Pending:"pending",in_progress:"pending","In Progress":"pending",processing:"pending",Processing:"pending",not_required:"not-applicable","Not required":"not-applicable","Not Required":"not-applicable",not_applicable:"not-applicable","Not Applicable":"not-applicable","Not applicable":"not-applicable","Not Required for PE":"not-applicable","Not Applicable - Private Entrepreneur":"not-applicable","n/a":"not-applicable","N/A":"not-applicable","Private Entrepreneur":"active"},c=(t,s=null)=>{if(s){const d=Math.ceil((new Date(s)-new Date)/864e5);if(d<=0)return"expired";if(d<=30)return"expiring-soon"}let n=null;if(t&&(n=t.status||t.document_type||t.reason||t.ownership_type),typeof n=="string"){const d=u[n];if(d)return d}return"active"},m=U(null),w=U(!1),_=U(null),v=(t,s,n,d=null)=>{if(!s?.s3_key)return null;const l=d&&n&&n[d]?new Date(n[d]):s.expiry_date?new Date(s.expiry_date):null,b=l?Math.ceil((l-new Date)/(1e3*60*60*24)):null,y=c(n,l),f=s.document_name||null,D=s.uploaded_at||null,E=s.expiry_date||(l?l.toISOString().split("T")[0]:null),I=s.uploaded_to_fta||!1;return{title:t,status:y,expires:l,remainingDays:b,s3Key:s.s3_key,data:n||{},showUpdate:y==="expiring-soon"||y==="expired",documentName:f,uploadedAt:D,expiryDate:E,uploadedToFta:I}},x=N(()=>{if(!m.value?.clientDetails)return[];const t=m.value.clientDetails,s=[];if(t.main_trade_license){const n=v("Trade License",t.main_trade_license,t.main_trade_license.extracted_data||{},"expiry_date");n&&s.push(n)}if(t.certificate_of_incorporation){const n=v("Certificate of Incorporation",t.certificate_of_incorporation,t.certificate_of_incorporation.extracted_data||{});n&&s.push(n)}if(t.moa_aoa){const n=v("Memorandum & Articles of Association",t.moa_aoa,t.moa_aoa.extracted_data||{});n&&s.push(n)}if(t.memorandum_articles&&t.memorandum_articles.s3_key!==t.moa_aoa?.s3_key){const n=v("Memorandum Articles",t.memorandum_articles,t.memorandum_articles.extracted_data);n&&s.push(n)}if(t.shareholder_register){const n=v("Shareholder Register",t.shareholder_register,t.shareholder_register.extracted_data||{});n&&s.push(n)}if(t.owner_shareholder_register&&t.owner_shareholder_register.s3_key!==t.shareholder_register?.s3_key){const n=v("Owner Shareholder Register",t.owner_shareholder_register,t.owner_shareholder_register.extracted_data);n&&s.push(n)}if(t.owner_passports?.length>0&&t.owner_passports.forEach((n,d)=>{const l=v(`Owner Passport ${t.owner_passports.length>1?`#${d+1}`:""}`.trim(),n,n.extracted_data||{},"expiry_date");l&&s.push(l)}),t.owner_emirates_ids?.length>0&&t.owner_emirates_ids.forEach((n,d)=>{const l=v(`Owner Emirates ID ${t.owner_emirates_ids.length>1?`#${d+1}`:""}`.trim(),n,n.extracted_data||{},"expiry_date");l&&s.push(l)}),t.owner_proof_of_current_address){const n=v("Owner Proof of Address",t.owner_proof_of_current_address,t.owner_proof_of_current_address.extracted_data);n&&s.push(n)}if(t.proof_of_address&&t.proof_of_address.s3_key!==t.owner_proof_of_current_address?.s3_key){const n=v("Proof of Address",t.proof_of_address,t.proof_of_address.extracted_data);n&&s.push(n)}if(t.branch_trade_license){const n=v("Branch Trade License",t.branch_trade_license,t.branch_trade_license.extracted_data);n&&s.push(n)}if(t.poabod){const n=v("Proof of Address (Beneficial Owner)",t.poabod,t.poabod.extracted_data);n&&s.push(n)}if(t.authorized_signatory_passport){const n=v("Authorized Signatory Passport",t.authorized_signatory_passport,t.authorized_signatory_passport.extracted_data,"expiry_date");n&&s.push(n)}if(t.authorized_signatory_emirates_id){const n=v("Authorized Signatory Emirates ID",t.authorized_signatory_emirates_id,t.authorized_signatory_emirates_id.extracted_data,"expiry_date");n&&s.push(n)}if(t.cit_registration_certificate){const n=v("CT Registration Certificate",t.cit_registration_certificate,t.cit_registration_certificate.extracted_data||{});n&&s.push(n)}if(t.vat_registration_certificate){const n=v("VAT Registration Certificate",t.vat_registration_certificate,t.vat_registration_certificate.extracted_data||{});n&&s.push(n)}return s.forEach(n=>{n.s3Key&&!$[n.s3Key]&&B[n.s3Key]===void 0&&(B[n.s3Key]=!0)}),s}),S=U("active"),F=N(()=>x.value.filter(t=>t.status==="active")),L=N(()=>x.value.filter(t=>t.status==="expiring")),q=N(()=>x.value.filter(t=>["pending","expired"].includes(t.status))),ke=N(()=>[...x.value].sort((s,n)=>{const d=S.value==="active"&&s.status==="active"||S.value==="expiring"&&s.status==="expiring"||S.value==="pendingExpired"&&["pending","expired"].includes(s.status),l=S.value==="active"&&n.status==="active"||S.value==="expiring"&&n.status==="expiring"||S.value==="pendingExpired"&&["pending","expired"].includes(n.status);return d&&!l?-1:!d&&l?1:0})),Q=t=>{S.value=t},ce=async()=>{try{w.value=!0,_.value=null,m.value=await a.getClientInfo()}catch(t){_.value=t.message||"Failed to fetch client information",console.error("Error fetching client info:",t)}finally{w.value=!1}},_e=t=>{x.value.find(n=>n.title===t)?.s3Key||console.warn("No S3 key found for document:",t)},xe=t=>{},Z=U(null),O=U([]),Y=U(!1),J=async()=>{if(!Y.value)try{Y.value=!0;const t=await g.getDocumentClientUrls();O.value=t||[],t.forEach(s=>{B[s.s3_key]=!0}),await ue()}catch(t){console.error("Error loading document URLs:",t),O.value=[]}finally{Y.value=!1}},ee=t=>{if(!t)return null;const s=O.value||[],n=s.find(y=>y.s3_key===t);if(n)return n;const d=y=>{if(!y)return"";const D=y.split("?")[0].replace(/^s3:\/\//,"").split("/");return D[D.length-1]},l=d(t);return s.find(y=>d(y.s3_key)===l)||null},le=async t=>{const{document:s}=t.detail||{};if(!s){console.warn("[Client Documents] No document in event detail");return}let n=s.documentUrl||s.document_url||"",d=s.mimetype||"application/pdf";if(!n){const y=s.s3_key||s.s3Key||null;if(y){const f=ee(y);f&&(f.link&&(n=f.link),f.mimetype&&(d=f.mimetype))}}let l=0;if(s.s3_key||s.s3Key){const y=s.s3_key||s.s3Key,f=ee(y);f&&f.size&&(l=f.size)}const b={...s,documentUrl:n,document_url:n,original_document_name:s.document_name||s.original_document_name||"Document",name:s.document_name||s.original_document_name||"Document",documentType:d,mimetype:d,size:l};Z.value=b},De=t=>{try{const s=typeof t=="object"?t:{},n=s.s3Key||s.s3_key||null;let d="",l=null,b=0;if(n){const f=ee(n);f&&(d=f.link,l=f.mimetype,b=f.size||0)}d||(d=s.documentUrl||s.document_url||"",console.warn("[Client Documents] ⚠️ Using fallback URL (not from cache):",d)),l||(l="application/pdf");const y={s3_key:n,documentUrl:d,document_url:d,document_name:s.documentName||s.title||"Document",original_document_name:s.documentName||s.title||"Document",displayName:s.title||s.documentName||"Document",mimetype:l,documentType:l,size:b};window.dispatchEvent(new CustomEvent("openDocumentViewer",{detail:{document:y}}))}catch(s){console.error("[Client Documents] Error in handlePreview:",s)}},$=fe({}),B=fe({});let te=0;const G=[],de=async()=>{for(;G.length>0&&te<Yt;){const t=G.shift();t&&(te++,t().finally(()=>{te--,de()}).catch(()=>{}))}},Se=async(t,s)=>{try{if(!window.pdfjsLib){const P=document.createElement("script");P.src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",await new Promise((pe,ze)=>{P.onload=()=>{window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",pe()},P.onerror=ze,document.head.appendChild(P)})}const l=await(await window.pdfjsLib.getDocument(t).promise).getPage(1),b=l.getViewport({scale:.2}),y=300,f=400;let D=b.width,E=b.height;if(D>y){const P=y/D;D=y,E=E*P}if(E>f){const P=f/E;E=f,D=D*P}const I=document.createElement("canvas"),Be=I.getContext("2d",{alpha:!1,willReadFrequently:!1});I.width=Math.floor(D),I.height=Math.floor(E),await l.render({canvasContext:Be,viewport:l.getViewport({scale:D/b.width*.2})}).promise;let X=null;try{const P=document.createElement("canvas");P.width=1,P.height=1,P.toDataURL("image/webp").startsWith("data:image/webp")?X=I.toDataURL("image/webp",.6):X=I.toDataURL("image/jpeg",.5)}catch{X=I.toDataURL("image/jpeg",.5)}return I.remove(),X}catch(n){return console.error("[Client Documents] Error generating PDF thumbnail:",n),null}},ue=async()=>{const t=O.value||[];Object.keys($).forEach(d=>delete $[d]);const s=[],n=[];for(const d of t){const l=d.s3_key;try{if(d.mimetype?.startsWith("image/"))$[l]=d.link,B[l]=!1;else if(d.mimetype==="application/pdf"){const b=(async()=>{try{if(!await T.shouldUpdate(l,d.link)){const f=await T.get(l);if(f)return $[l]=f,B[l]=!1,!0}return!1}catch{return!1}})();s.push(b),b.then(y=>{if(!y){const f=async()=>{try{const D=await Se(d.link,l);D?($[l]=D,B[l]=!1,T.set(l,D,d.link).catch(()=>{})):B[l]=!1}catch{B[l]=!1}};G.push(f),n.push(f)}})}else B[l]=!1}catch{B[l]=!1}}await Promise.all(s),G.length>0&&de(),Promise.all(n).catch(()=>{})},Pe=()=>{Z.value=null};return Ne(async()=>{try{await T.init(),await T.cleanup()}catch(t){console.error("[Cache] Failed to initialize:",t)}await ce(),await J(),window.addEventListener("openDocumentViewer",le)}),ne(()=>o.query.app_client_id,async(t,s)=>{t!==s&&(await ce(),await J())}),ne(()=>r.selectedClientId,async(t,s)=>{t&&t!==s&&(O.value=[],await J())}),ne(()=>O.value,async(t,s)=>{if(!(!s||s.length===0))try{const n=new Map(t.map(b=>[b.s3_key,b.link])),d=new Map(s.map(b=>[b.s3_key,b.link])),l=[];for(const[b,y]of n){const f=d.get(b);f&&f!==y&&(l.push(b),await T.remove(b))}for(const[b]of d)n.has(b)||await T.remove(b);l.length>0&&await ue()}catch(n){console.error("[Cache] Error in invalidation logic:",n)}},{deep:!0}),$e(()=>{try{window.removeEventListener("openDocumentViewer",le)}catch{}}),(t,s)=>p.value?(h(),C("div",Vt,s[3]||(s[3]=[i("div",{class:"denied-wrapper"},[i("h3",null,"You do not have sufficient permissions to view Documents."),i("p",null,"Please contact your administrator if you believe this is a mistake.")],-1)]))):(h(),C("div",Kt,[s[12]||(s[12]=i("hr",{class:"page-divider"},null,-1)),w.value?(h(),C("div",Rt,s[4]||(s[4]=[i("div",{class:"loading-spinner"},null,-1),i("p",null,"Loading...",-1)]))):_.value?(h(),C("div",Ft,[oe(Ue(we),{severity:"error"},{default:re(()=>[ae(z(_.value),1)]),_:1})])):M("",!0),!w.value&&!_.value?(h(),C("div",qt,[i("div",{class:j(["legend-item",{active:S.value==="active"}]),onClick:s[0]||(s[0]=n=>Q("active"))},[s[5]||(s[5]=i("div",{class:"legend-dot active"},null,-1)),s[6]||(s[6]=i("span",{class:"legend-text"},"Active",-1)),i("span",Zt,"("+z(F.value.length)+")",1)],2),i("div",{class:j(["legend-item",{active:S.value==="expiring"}]),onClick:s[1]||(s[1]=n=>Q("expiring"))},[s[7]||(s[7]=i("div",{class:"legend-dot expiring"},null,-1)),s[8]||(s[8]=i("span",{class:"legend-text"},"Expiring",-1)),i("span",Gt,"("+z(L.value.length)+")",1)],2),i("div",{class:j(["legend-item",{active:S.value==="pendingExpired"}]),onClick:s[2]||(s[2]=n=>Q("pendingExpired"))},[s[9]||(s[9]=i("div",{class:"legend-dot danger"},null,-1)),s[10]||(s[10]=i("span",{class:"legend-text"},"Pending/Expired",-1)),i("span",Xt,"("+z(q.value.length)+")",1)],2)])):M("",!0),!w.value&&!_.value?(h(),C("div",Wt,[(h(!0),C(Te,null,Le(ke.value,n=>(h(),V(Tt,{key:n.title,title:n.title,"document-name":n.documentName,"uploaded-at":n.uploadedAt,"expiry-date":n.expiryDate,"uploaded-to-fta":n.uploadedToFta,expires:n.expires,status:n.status,"remaining-days":n.remainingDays,"show-update":n.showUpdate,"preview-image":$[n.s3Key],"preview-loading":B[n.s3Key],"s3-key":n.s3Key||null,onDownload:_e,onUpdate:xe,onPreview:De},null,8,["title","document-name","uploaded-at","expiry-date","uploaded-to-fta","expires","status","remaining-days","show-update","preview-image","preview-loading","s3-key"]))),128)),x.value.length===0?(h(),C("div",Qt,s[11]||(s[11]=[i("p",null,"There are no documents uploaded yet.",-1)]))):M("",!0)])):M("",!0),oe(We,{document:Z.value,"is-open":!!Z.value,onClose:Pe},null,8,["document","is-open"])]))}};typeof he=="function"&&he(Ce);const pn=ie(Ce,[["__scopeId","data-v-97beb7a8"]]);export{pn as default};

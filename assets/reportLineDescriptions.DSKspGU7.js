import{K as u,au as h,f,$ as a}from"./index.g4LX6N1f.js";import{c as l,f as d,U as p,q as g}from"./vue-vendor.CT4IcATu.js";var m=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,b={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},y=u.extend({name:"progressspinner",style:m,classes:b}),k={name:"BaseProgressSpinner",extends:h,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:y,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},v={name:"ProgressSpinner",extends:k,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},w=["fill","stroke-width"];function _(e,n,t,s,o,r){return d(),l("div",p({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(d(),l("svg",p({class:e.cx("spin"),viewBox:"25 25 50 50",style:r.svgStyle},e.ptm("spin")),[g("circle",p({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,w)],16))],16)}v.render=_;const $={atAGlance:(e,n={})=>a.get("/api/reports/at-a-glance",{params:{clientId:e,...n}}).then(t=>t.data),getStatement:(e,n={})=>a.get("/api/reports/statement",{params:{clientId:e,...n}}).then(t=>t.data),lineDrill:(e={})=>a.get("/api/reports/line-drill",{params:e}).then(n=>n.data),aging:(e,n,t={})=>a.get("/api/reports/aging",{params:{clientId:e,side:n,...t}}).then(s=>s.data),generateMockData:e=>a.post("/api/reports/mock-data",null,{params:{clientId:e}}).then(n=>n.data),createShare:(e,n={})=>a.post("/api/reports/shares",n,{params:{clientId:e}}).then(t=>t.data),getShared:e=>f.get(`/api/reports/shared/${encodeURIComponent(e)}`).then(n=>n.data)};function M(e){if(e==null)return"—";const n=Math.round(Number(e));if(!Number.isFinite(n))return"—";const t=Math.abs(n).toLocaleString("en-US");return n<0?`(${t})`:t}function C(e,n){if(e==null||n===null||n===void 0)return{text:"—",direction:null};const t=Number(e),s=Number(n),o=Math.abs(t);if(!Number.isFinite(o)||o===0||!Number.isFinite(s))return{text:"—",direction:null};const r=s-t;if(r===0)return{text:"0%",direction:null};const i=Math.round(Math.abs(r)/o*100),c=r>0?"up":"down";return{text:`${c==="up"?"▲":"▼"} ${i}%`,direction:c}}function A(e){if(e==null)return"—";const n=Math.round(Number(e));return Number.isFinite(n)?n.toLocaleString("en-US"):"—"}function D(e,n){if(e==null||n===null||n===void 0)return null;const t=Number(e),s=Number(n);if(!Number.isFinite(t)||!Number.isFinite(s))return null;const o=t-s,r=Math.abs(s),i=r===0?null:Math.round(Math.abs(o)/r*100);return{abs:o,pct:i}}const S={revenue:"Money earned from sales to customers during the period, before any costs.",cogs:"Costs directly tied to delivering what you sold — materials, subcontractors, direct labour.",gross_profit:"Revenue minus direct costs — what's left to cover the running costs.",opex:"The running costs of the business — salaries, rent, software, marketing and the like.",ebit:"Earnings Before Interest and Taxes — profit from core operations, before financing costs and tax.",below_ebit:"Income and costs outside core operations — interest, tax and other one-offs.",net_profit:"The bottom line — what the business keeps after all costs, interest and tax.",d_nwc:"Change in Net Working Capital (receivables − payables) — cash tied up in, or released from, day-to-day operations.",capex:"Cash spent on long-lived assets like equipment, vehicles and property.",other_cf:"Cash movements outside operations and investments — loans, transfers and owner funding.",ncf:"The period's total change in cash.",cash:"Money in the bank at the end of the period.",ar:"Accounts Receivable — invoices you've issued that customers haven't paid yet.",ap:"Accounts Payable — bills you've received but not paid yet.",debt:"What the business owes on loans and borrowings at period end.",cf_operating:"Cash generated or consumed by day-to-day operations.",cf_investing:"Cash spent on, or received from, long-term assets like equipment.",cf_financing:"Cash from funding the business — loans taken or repaid, owner contributions and drawings.",cf_net_change:"The period's total change in cash across all activities.",cf_opening_cash:"Cash on hand at the start of the period.",cf_closing_cash:"Cash on hand at the end of the period — the opening balance plus the period's net change.",bs_assets:"Everything the business owns that has value — cash, amounts due from customers, equipment.",bs_assets_current:"Assets expected to turn into cash within a year — cash itself and customer balances.",bs_assets_noncurrent:"Long-lived assets held for the long run, like property and equipment.",bs_liabilities:"Everything the business owes to others — suppliers, banks, the tax authority.",bs_liab_current:"Debts due within a year — supplier bills and other near-term obligations.",bs_liab_noncurrent:"Debts due beyond a year, like long-term bank borrowings.",bs_equity:"The owners’ stake — capital put in plus profits kept in the business.",bs_total_liab_equity:"Liabilities plus equity — always equals Assets, showing how everything owned is financed."};function P(e){return S[e]||null}export{M as a,C as b,D as c,A as f,P as g,$ as r,v as s};

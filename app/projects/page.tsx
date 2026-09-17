import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Search, SlidersHorizontal } from 'lucide-react';

const supply=[
 {id:'PRX-PH-001',name:'Pasig River Recovery',place:'Metro Manila · Philippines',type:'Plastic',standard:'PPRS',available:'4,218 t',price:'€92',change:'+2.4%',cls:'river'},
 {id:'PRX-ID-014',name:'Katingan Forest Restoration',place:'Central Kalimantan · Indonesia',type:'Carbon',standard:'Third-party',available:'11,600 tCO₂',price:'€28',change:'−0.8%',cls:'forest'},
 {id:'PRX-IN-008',name:'Clean Coast Tamil Nadu',place:'Tamil Nadu · India',type:'Ocean',standard:'OBP',available:'1,180 t',price:'€118',change:'+1.1%',cls:'coast'},
 {id:'PRX-BR-021',name:'Atlantic Forest Corridor',place:'Bahia · Brazil',type:'Forests',standard:'Ecological',available:'8,940 ha',price:'€41',change:'+0.3%',cls:'forest2'},
];

function Mark(){return <div className="marketLogo">PR<span>X</span><small>MARKETS</small></div>}
export default function Projects(){return <main className="exchange">
 <header className="exchangeNav"><Link href="/"><Mark/></Link><div className="marketNav"><b>MARKET</b><span>REGISTRY</span><span>METHODOLOGY</span></div><div className="marketActions"><Search size={17}/><button>Connect</button></div></header>
 <section className="marketHero"><Link href="/" className="back"><ArrowLeft size={14}/> PRX HOME</Link><div><p className="kicker">RECOVERY EXCHANGE / LIVE SUPPLY</p><h1>Recovery<br/>market.</h1></div><div className="marketIntro"><p>Browse measurable environmental recovery available through PRX.</p><div className="marketStatus"><i/> MARKET OPEN <span>11:42:18 CET</span></div></div></section>
 <section className="marketStats"><div><span>AVAILABLE SUPPLY</span><strong>25,938</strong><small>units across active projects</small></div><div><span>24H FUNDED</span><strong>€284,190</strong><small>+12.8% vs previous 24h</small></div><div><span>ACTIVE PROJECTS</span><strong>312</strong><small>28 countries</small></div><div><span>VERIFIED RECORDS</span><strong>842</strong><small>publicly auditable</small></div></section>
 <section className="marketTools"><div className="searchBox"><Search size={17}/><span>Search projects, countries, recovery types</span></div><button><SlidersHorizontal size={16}/> Filters <b>4</b></button><div className="viewSwitch"><span className="selected">LIST</span><span>MAP</span></div></section>
 <section className="supplyTable"><div className="tableHead"><span>PROJECT</span><span>RECOVERY</span><span>VERIFICATION</span><span>AVAILABLE</span><span>UNIT PRICE</span><span>24H</span><span></span></div>{supply.map((p,i)=><article className="supplyRow" key={p.id}><div className="projectCell"><div className={`thumb ${p.cls}`}><b>{String(i+1).padStart(2,'0')}</b></div><div><small>{p.id}</small><strong>{p.name}</strong><span>{p.place}</span></div></div><div><span className="typePill">{p.type}</span></div><div className="standard"><CheckCircle2 size={14}/><span>{p.standard}</span></div><strong>{p.available}</strong><strong>{p.price}<small> / unit</small></strong><span className={p.change.startsWith('+')?'up':'down'}>{p.change}</span><button aria-label={`Open ${p.name}`}><ArrowRight size={17}/></button></article>)}</section>
 <section className="marketFoot"><div><span>PRX MARKET DATA</span><p>Illustrative prototype supply · Not an offer to buy or sell financial instruments.</p></div><div><span>SETTLEMENT</span><p>Recovery records settle to the PRX public registry after verification.</p></div></section>
 </main>}

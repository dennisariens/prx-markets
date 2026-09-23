import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import MarketExplorer from '../components/market-explorer';
import { projects, recoveryRecords } from '../../lib/prx-data';

function Mark() {
  return <div className="marketLogo">PR<span>X</span><small>MARKETS</small></div>;
}

export default function Projects() {
  const totalSupply = projects.reduce((sum, project) => sum + project.available, 0);

  return (
    <main className="exchange">
      <header className="exchangeNav">
        <Link href="/"><Mark /></Link>
        <div className="marketNav"><b>MARKET</b><Link href="/registry">REGISTRY</Link><span>METHODOLOGY</span></div>
        <div className="marketActions"><Search size={17}/><button>Connect</button></div>
      </header>
      <section className="marketHero">
        <Link href="/" className="back"><ArrowLeft size={14}/> PRX HOME</Link>
        <div><p className="kicker">RECOVERY EXCHANGE / ILLUSTRATIVE SUPPLY</p><h1>Recovery<br/>market.</h1></div>
        <div className="marketIntro"><p>Browse measurable environmental recovery available through PRX.</p><div className="marketStatus"><i/> MARKET PROTOTYPE <span>DATA / 23 SEP 2026</span></div></div>
      </section>
      <section className="marketStats">
        <div><span>AVAILABLE SUPPLY</span><strong>{totalSupply.toLocaleString('en-US')}</strong><small>illustrative units</small></div>
        <div><span>RECOVERY TYPES</span><strong>04</strong><small>plastic · carbon · ocean · forest</small></div>
        <div><span>ACTIVE PROJECTS</span><strong>{projects.length}</strong><small>prototype listings</small></div>
        <div><span>PUBLIC RECORDS</span><strong>{recoveryRecords.length}</strong><small>inspectable examples</small></div>
      </section>
      <MarketExplorer projects={projects} />
      <section className="marketFoot">
        <div><span>PRX MARKET DATA</span><p>Illustrative prototype supply · Not an offer to buy or sell financial instruments.</p></div>
        <div><span>SETTLEMENT</span><p>Recovery records settle to the PRX public registry after verification.</p></div>
      </section>
    </main>
  );
}

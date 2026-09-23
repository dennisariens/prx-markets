'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import type { Project } from '../../lib/prx-data';

const currencyFormatter = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' });

export default function FundingPanel({ project }: { project: Project }) {
  const [quantity, setQuantity] = useState(10);
  const [reviewing, setReviewing] = useState(false);

  const safeQuantity = Number.isFinite(quantity) ? Math.min(Math.max(quantity, 0), project.available) : 0;
  const total = safeQuantity * project.price;

  return (
    <aside className="fundPanel">
      <div className="fundTop"><span>AVAILABLE SUPPLY</span><strong>{project.availableLabel}</strong></div>
      <div className="quote"><span>INDICATIVE UNIT PRICE</span><strong>€{project.price.toFixed(2)} <small>/ {project.unit}</small></strong><i>{project.change} / 24H</i></div>
      <label htmlFor="recovery-quantity">RECOVERY TO FUND</label>
      <div className="amount">
        <input
          id="recovery-quantity"
          type="number"
          min="0"
          max={project.available}
          step="0.5"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <span>{project.unit.toUpperCase()}</span>
      </div>
      <div className="total"><span>ESTIMATED TOTAL</span><strong>{currencyFormatter.format(total)}</strong></div>
      <button type="button" disabled={safeQuantity <= 0} onClick={() => setReviewing(true)}>Review funding <ArrowRight size={17}/></button>
      <p>Illustrative prototype — no payment or recovery claim is executed.</p>

      {reviewing && (
        <div className="fundReview" role="dialog" aria-modal="true" aria-labelledby="review-title">
          <button className="reviewClose" type="button" onClick={() => setReviewing(false)} aria-label="Close funding review"><X size={18}/></button>
          <div className="reviewIcon"><CheckCircle2 /></div>
          <p>FUNDING REVIEW / PROTOTYPE</p>
          <h3 id="review-title">Traceable recovery,<br/>before checkout.</h3>
          <dl>
            <div><dt>Project</dt><dd>{project.name}</dd></div>
            <div><dt>Quantity</dt><dd>{safeQuantity.toFixed(2)} {project.unit}{safeQuantity === 1 ? '' : 's'}</dd></div>
            <div><dt>Unit price</dt><dd>€{project.price.toFixed(2)}</dd></div>
            <div><dt>Total</dt><dd>{currencyFormatter.format(total)}</dd></div>
          </dl>
          <div className="reviewNotice">A live transaction would reserve supply, collect buyer details and issue a record after evidence verification.</div>
          <button type="button" onClick={() => setReviewing(false)}>Return to project</button>
        </div>
      )}
    </aside>
  );
}

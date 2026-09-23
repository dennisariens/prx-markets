'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Search, SlidersHorizontal, X } from 'lucide-react';
import type { Project, RecoveryType } from '../../lib/prx-data';

const recoveryTypes: Array<'All' | RecoveryType> = ['All', 'Plastic', 'Carbon', 'Ocean', 'Forests'];

export default function MarketExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'All' | RecoveryType>('All');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesType = type === 'All' || project.type === type;
      const matchesQuery =
        !normalizedQuery ||
        [project.name, project.country, project.place, project.standard, project.type]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesType && matchesQuery;
    });
  }, [projects, query, type]);

  const reset = () => {
    setQuery('');
    setType('All');
  };

  return (
    <>
      <section className="marketTools" aria-label="Project market controls">
        <label className="searchBox">
          <Search size={17} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, countries, recovery types"
            aria-label="Search projects"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              <X size={14} />
            </button>
          )}
        </label>
        <button type="button" onClick={() => setFiltersOpen((open) => !open)} aria-expanded={filtersOpen}>
          <SlidersHorizontal size={16} /> Filters {type !== 'All' && <b>1</b>}
        </button>
        <div className="resultCount">{visibleProjects.length} PROJECTS</div>
      </section>

      {filtersOpen && (
        <section className="filterBar" aria-label="Recovery type filters">
          <span>RECOVERY TYPE</span>
          <div>
            {recoveryTypes.map((option) => (
              <button
                type="button"
                key={option}
                className={type === option ? 'active' : ''}
                onClick={() => setType(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="supplyTable" aria-live="polite">
        <div className="tableHead">
          <span>PROJECT</span><span>RECOVERY</span><span>VERIFICATION</span><span>AVAILABLE</span><span>UNIT PRICE</span><span>24H</span><span></span>
        </div>
        {visibleProjects.map((project, index) => (
          <article className="supplyRow" key={project.id}>
            <div className="projectCell">
              <div className={`thumb ${project.className}`}><b>{String(index + 1).padStart(2, '0')}</b></div>
              <div><small>{project.id}</small><strong>{project.name}</strong><span>{project.place}</span></div>
            </div>
            <div><span className="typePill">{project.type}</span></div>
            <div className="standard"><CheckCircle2 size={14}/><span>{project.standard}</span></div>
            <strong>{project.availableLabel}</strong>
            <strong>€{project.price}<small> / {project.unit}</small></strong>
            <span className={project.change.startsWith('+') ? 'up' : 'down'}>{project.change}</span>
            <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.name}`} className="rowLink"><ArrowRight size={17}/></Link>
          </article>
        ))}
        {visibleProjects.length === 0 && (
          <div className="emptyMarket">
            <span>NO MATCHING SUPPLY</span>
            <p>Adjust the recovery type or search terms to reopen the market view.</p>
            <button type="button" onClick={reset}>Reset market</button>
          </div>
        )}
      </section>
    </>
  );
}

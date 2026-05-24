/** PRIENZ Nav — sticky bar with scroll-spy + scroll progress + scrolled shadow. */
const { useEffect, useState } = React;

function NavBrand({ onClick }) {
  return (
    <div className="nav-brand" onClick={onClick} role="button" tabIndex={0} aria-label="PRIENZ home">
      <img src={(window.__resources && window.__resources.logo) || "homepage/prienz-logo.png"} alt="PRIENZ" className="nav-logo" />
    </div>
  );
}

function Nav({ links = [], onCta }) {
  const [active, setActive] = useState(links[0]?.id);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    function onScroll() {
      const sy = window.scrollY;
      const offset = sy + 120;
      let current = window.__pageId === 'team' ? 'team' : (links[0]?.id);
      if (window.__pageId !== 'team') {
        for (const link of links) {
          if (link.href) continue;
          const el = document.getElementById(link.id);
          if (el && el.offsetTop <= offset) current = link.id;
        }
      }
      setActive(current);
      setScrolled(sy > 8);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(1, sy / docH) : 0;
      document.documentElement.style.setProperty('--scroll-pct', pct.toFixed(4));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [links]);

  function go(id) {
    setOpen(false);
    const link = links.find((l) => l.id === id);
    if (link && link.href) {
      window.location.href = link.href;
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}${open ? ' nav-open' : ''}`}>
      <div className="container">
        <NavBrand onClick={() => {
          setOpen(false);
          if (window.__pageId === 'team' || window.__pageId === 'legal') window.location.href = 'PRIENZ Homepage.html';
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                className={active === link.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); go(link.id); }}
                href={link.href || `#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary nav-cta" style={{ padding: '10px 20px', fontSize: 14 }} onClick={() => { setOpen(false); onCta(); }}>
          문의하기
        </button>
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile${open ? ' is-open' : ''}`} role="dialog" aria-hidden={!open}>
        <ul className="nav-mobile-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                onClick={(e) => { e.preventDefault(); go(link.id); }}
                href={link.href || `#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary nav-mobile-cta" onClick={() => { setOpen(false); onCta(); }}>
          문의하기
        </button>
      </div>
      <div className="nav-progress" aria-hidden="true" />
    </nav>
  );
}

window.Nav = Nav;
window.NavBrand = NavBrand;

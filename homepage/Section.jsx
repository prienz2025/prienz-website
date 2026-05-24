/** PRIENZ Section — eyebrow + gradient divider + title + description wrapper. */
function Section({ id, variant, eyebrow, title, description, children }) {
  const cls = ['section', variant === 'mint' && 'section-mint', variant === 'sky' && 'section-sky'].
  filter(Boolean).join(' ');
  return (
    <section id={id} className={cls}>
      <div className="container">
        <div className="section-head reveal">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <hr className="gradient-divider" />
          {title && <h2 className="section-title">{title}</h2>}
          {description && <p className="section-desc">{description}</p>}
        </div>
        {children}
      </div>
    </section>);

}

window.Section = Section;
/** PRIENZ TeamDetail — full team profile card for the Team page. */
function TeamDetail({ initials, name, nameEn, role, bio, focus, links }) {
  return (
    <div className="team-detail">
      <div className="team-detail-avatar">
        <span>{initials}</span>
      </div>
      <div className="team-detail-body">
        <div className="team-detail-role">{role}</div>
        <h3 className="team-detail-name">
          {name}
          {nameEn && <span className="team-detail-name-en">{nameEn}</span>}
        </h3>
        {bio && <p className="team-detail-bio">{bio}</p>}
        {focus && focus.length > 0 && (
          <ul className="team-detail-focus">
            {focus.map((f, i) => (<li key={i}><span className="team-detail-focus-dot" />{f}</li>))}
          </ul>
        )}
        {links && links.length > 0 && (
          <div className="team-detail-links">
            {links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.label} →</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

window.TeamDetail = TeamDetail;

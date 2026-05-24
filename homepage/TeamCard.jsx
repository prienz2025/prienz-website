/** PRIENZ TeamCard — circular avatar + name + role. */
function TeamCard({ initials, name, role }) {
  return (
    <div className="team-card">
      <div className="team-avatar">{initials}</div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
    </div>
  );
}

window.TeamCard = TeamCard;

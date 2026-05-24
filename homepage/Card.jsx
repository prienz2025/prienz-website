/** PRIENZ Card — letter-tile icon + heading + body + hover arrow. */
function Card({ icon, title, children, iconSize }) {
  const style = iconSize ? { fontSize: iconSize } : undefined;
  return (
    <div className="card">
      <div className="card-icon" style={style}>{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
      <span className="card-arrow" aria-hidden="true">→</span>
    </div>);

}

window.Card = Card;
/** PRIENZ ContactModal — front-end-only contact form with success state. */
const { useState: useStateCM, useEffect: useEffectCM, useRef: useRefCM } = React;

function ContactModal({ open, onClose }) {
  const [name, setName] = useStateCM('');
  const [email, setEmail] = useStateCM('');
  const [message, setMessage] = useStateCM('');
  const [submitted, setSubmitted] = useStateCM(false);
  const nameRef = useRefCM(null);

  useEffectCM(() => {
    if (open) {
      setSubmitted(false);
      setTimeout(() => nameRef.current?.focus(), 100);
      const onKey = (e) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setTimeout(() => { onClose(); setName(''); setEmail(''); setMessage(''); }, 1800);
  }

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {submitted ? (
          <div className="success-state">
            <div className="check">✓</div>
            <h2 style={{ marginBottom: 8 }}>고맙습니다</h2>
            <p style={{ margin: 0 }}>곧 연락드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>문의하기</h2>
            <p>PRIENZ에 어떤 이야기를 들려주시겠어요?</p>
            <div className="field-group">
              <div>
                <label>이름</label>
                <input ref={nameRef} className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" required />
              </div>
              <div>
                <label>이메일</label>
                <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@example.com" required />
              </div>
              <div>
                <label>메시지</label>
                <textarea className="field" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="투자 · 협업 · 채용 · 미디어 — 무엇이든 좋습니다." />
              </div>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose} style={{ padding: '10px 20px', fontSize: 14 }}>취소</button>
              <button type="submit" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>보내기</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

window.ContactModal = ContactModal;

export function QuickMenu() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  function scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className="quick-menu">
      <button className="up-btn" onClick={scrollTop}>
        <img src="/images/quick_btn_top.png" alt="up-btn" />
      </button>
      <button className="down-btn" onClick={scrollBottom}>
        <img src="/images/quick_btn_bottom.png" alt="down-btn" />
      </button>
    </div>
  );
}

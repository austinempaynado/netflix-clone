import "./footer.css";

export const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-content">
        <h1 id="heading">Questions? Call 1-844-542-4813</h1>
        <div id="footer-links">
          <div className="columns">
            <a>FAQ</a>
            <a>Investor Relations</a>
            <a>Ways to Watch</a>
            <a>Corporate Information</a>
            <a>Only on Netflix</a>
          </div>
          <div className="columns">
            <a>Help Center</a>
            <a>Jobs</a>
            <a>Terms of Use</a>
            <a>Contact Us</a>
          </div>
          <div className="columns">
            <a>Account</a>
            <a>Redeem Gift Cards</a>
            <a>Privacy</a>
            <a>Speed Test</a>
          </div>
          <div className="columns">
            <a>Media Center</a>
            <a>Buy Gift Cards</a>
            <a>Cookie Preferences</a>
            <a>Legal Notices</a>
          </div>
        </div>
      </div>
    </div>
  );
};

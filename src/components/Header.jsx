import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>
          <Link to="./">{text}</Link>
        </h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Header;

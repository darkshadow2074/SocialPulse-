import { MdDarkMode } from "react-icons/md";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <h2 className="logo">
        Social<span className="logo-secondary-light">Pulse</span>
      </h2>

      <div className="profile-action-container">
        <div className="color-mode">
          <MdDarkMode />
        </div>
        <div className="profile-logo"></div>
      </div>
    </div>
  );
};

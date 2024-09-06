import { useEffect, useState } from "react";

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        id="darkModeSwitch"
        checked={isDarkMode}
        onChange={toggleMode}
      />
      <label className="form-check-label" htmlFor="darkModeSwitch">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
};
export default ToggleDark;

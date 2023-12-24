import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects/Projects";
import RandomSpotifyTrack from "./RandomSpotifyTrack/SpotifySearch";
import AboutMe from "./AboutMe";
import dark_mode_icon from "./Images/dark-mode-icon-blue.png";
import light_mode_icon from "./Images/light-mode-icon-orange.png";
import NotFound from "./NotFound";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    if (theme === "light") {
      html.classList.add("dark");
      html.classList.remove("business");
      html.classList.add("corporate");
    } else {
      html.classList.remove("dark");
      html.classList.remove("corporate");
      html.classList.add("business");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <>
        <div
          id="main-div"
          data-theme={theme === "light" ? "business" : "corporate"}
        >
          <div className="mx-auto min-w-screen min-h-screen">
            <div className="navbar">
              <Nav />
              <div className="navbar-end">
                <div className="hidden lg:flex">
                  <ul className="menu menu-horizontal px-4">
                    <li>
                      <NavLink to={"/random-spotify-track/"}>
                        Random Spotify Track!
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={handleThemeSwitch}
                  id="theme-toggle"
                  type="button"
                  className="mr-2"
                >
                  <img
                    className="h-10"
                    id="theme-toggle-icon"
                    src={theme === "light" ? light_mode_icon : dark_mode_icon}
                    alt="Theme Icon"
                  ></img>
                </button>
              </div>
            </div>

            <Routes>
              <Route index element={<HomePage />} />
              <Route path="aboutme/" element={<AboutMe />} />
              <Route path="projects/" element={<Projects />} />
              <Route
                path="random-spotify-track/"
                element={<RandomSpotifyTrack />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    </HashRouter>
  );
}

export default App;

import GitLab from "./Images/gitlab-svgrepo-com.svg"
import GitHub from "./Images/github-color-svgrepo-com.svg"
import LinkedIn from "./Images/linkedin-color-svgrepo-com.svg"

const Footer = () => {
    return (
<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div>
    <div className="grid grid-flow-col gap-8">
      <a
          href="https://gitlab.com/murphynick10"
          target="_blank"
          rel="noreferrer"
      >
        <img className="transition duration-300 ease-in-out hover:scale-110"
        width="40" src={GitLab} alt="Gitlab Icon"></img>
      </a>
      <a
          href="https://github.com/NicolasMurphy"
          target="_blank"
          rel="noreferrer"
      >
        <img className="transition duration-300 ease-in-out hover:scale-110"
         width="40" src={GitHub} alt="Github Icon"></img>
      </a>
      <a
          href="https://www.linkedin.com/in/nicolas-murphy/"
          target="_blank"
          rel="noreferrer"
      >
        <img className="transition duration-300 ease-in-out hover:scale-110"
         width="40" src={LinkedIn} alt="LinkedIn Icon"></img>
      </a>
    </div>
  </div>
</footer>
    );
  };

  export default Footer;

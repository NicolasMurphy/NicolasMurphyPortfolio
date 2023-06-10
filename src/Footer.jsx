import GitLab from "./Images/gitlab-svgrepo-com.png"
import GitHub from "./Images/github-142-svgrepo-com.png"
import LinkedIn from "./Images/linkedin-161-svgrepo-com.png"

const Footer = () => {
    return (
<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div>
    <div className="grid grid-flow-col gap-8">
      <a>
        <img width="40" src={GitLab}></img>
      </a>
      <a>
        <img width="40" src={GitHub}></img>
      </a>
      <a>
        <img width="40" src={LinkedIn}></img>
      </a>
    </div>
  </div>
</footer>
    );
  };

  export default Footer;
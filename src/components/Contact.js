import Data from "./data";

import Classes from "./Contact.module.css";

const Contact = ({ language }) => {
  const data = Data[language].contact;

  return (
    <footer id="Contact" className={Classes.container}>
      <p>{data.note}</p>
      <div className={Classes.containerContact}>
        <h3>{data.name}</h3>
        <div>
          <h4 className={Classes.email}>
            Email<span> </span>
          </h4>
          {data.links.map((link, i) => {
            return (
              <a
                key={link.id + i}
                rel="noopener noreferrer"
                href={link.link}
                target="_blank"
              >
                <h4>
                  {link.name}
                  <span>{link.profile}</span>
                </h4>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Contact;

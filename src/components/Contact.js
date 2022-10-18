import Classes from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={Classes.container}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className={Classes.containerContact}>
        <h3>Contact</h3>
        <div>
          <h4 className={Classes.email}>
            Email<span>test@test.com</span>
          </h4>
          <h4>
            Linkedin<span>test23</span>
          </h4>
          <h4>
            Github<span>testtest2</span>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

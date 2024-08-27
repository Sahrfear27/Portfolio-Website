import { ChangeEvent, FormEvent, useContext, useState } from "react";
import formdataService from "../../APIS/Service/formdata.service";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import TheameContex from "../Theame/Theame";
import { FiPhone } from "react-icons/fi";
import "./Contact.css";

type Props = {
  id: string;
};
export default function Contact(props: Props) {
  const { lightMode } = useContext(TheameContex);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [subject, setUserSubject] = useState("");
  const [message, setUserMessage] = useState("");

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value);
  };

  const handleSubject = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSubject(e.currentTarget.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const response = await formdataService.addMessage(formData);

      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setFailure(true);
        setTimeout(() => {
          setFailure(false);
        }, 3000);
      }
    } catch (error) {
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
      }, 3000);
    }
    setUserName("");
    setUserEmail("");
    setUserMessage("");
    setUserSubject("");
  };
  return (
    <section
      id="contact"
      className="bg-image contact-sec"
      data-lightmode={lightMode ? "true" : "false"}
    >
      <div className="container text-center" data-aos="zoom-in">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-card">
              <div id="contact">
                <div className="title-card">
                  <h2 className="title-header">Contact Me</h2>
                </div>

                <div className="callMe">
                  <div>
                    <h3>Address</h3>
                    <p>
                      <a
                        href="http://maps.google.com/?q=1678+Costa+Mesa+Drive,+San+Jose,+CA"
                        className="locLink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLocationOutline />
                      </a>
                      <span className="location">
                        1678 San Ramon Way, San Jose, CA
                      </span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <h3>Phone</h3>
                      <p>
                        <a href="tel: +16697997164" className="phoLink">
                          <FiPhone />
                        </a>
                        <span className="phone">+1(669) 799-7164</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3>Email</h3>
                    <p>
                      <a
                        href="mailto:sahrfearmacarthy@gmail.com"
                        className="emailLink"
                      >
                        <MdOutlineMailOutline />
                      </a>
                      <span className="email">sahrfearmacarthy@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={handleUserName}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={handleEmail}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Subject"
                            required
                            value={subject}
                            onChange={handleSubject}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Message"
                            required
                            value={message}
                            onChange={handleMessage}
                          />
                        </div>
                        {success && (
                          <p className="text-success">
                            Message Sent successfully!
                          </p>
                        )}
                        {failure && (
                          <p className="text-danger">
                            Fail to send message. Please try again.
                          </p>
                        )}
                      </div>
                      <div className="col-md-12 text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  <p id="responseMessage"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

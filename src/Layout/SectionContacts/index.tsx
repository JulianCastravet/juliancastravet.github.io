import { ChangeEvent, useCallback, useState } from "react";
import { send } from "emailjs-com";
import "./style.css";

export const SectionContacts = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_mail: "",
    phone_no: "",
    message: "",
  });

  const handleSetForm = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [setForm, form]
  );

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    send("service_mzcdpkw", "template_5aqt5fk", form, "294Aup5BCW5AlVIZg")
      .then(() => {
        alert(`Your message has been succesfully sent!`);
      })
      .catch((e) => {
        console.log("UPSS! Something went wrong :( !", e);
      });
  };

  return (
    <section className="section_contacts" id="contacts">
      <div className="container">
        <div className="contacts_title">Contact Me</div>
        <div className="contacts_container">
          <div className="contacts_container_form">
            <p className="contacts_title_inner">Get In Touch</p>
            <form className="contacts_form" onSubmit={handleOnSubmit}>
              <input
                required={true}
                className="input"
                type={"text"}
                placeholder="Your Name"
                value={form.from_name}
                onChange={handleSetForm}
                name="from_name"
              />
              <input
                required
                className="input"
                type={"email"}
                placeholder="Your Email"
                value={form.from_mail}
                onChange={handleSetForm}
                name="from_mail"
              />
              <input
                className="input"
                type="tel"
                placeholder="Your Phone"
                value={form.phone_no}
                onChange={handleSetForm}
                name="phone_no"
              />
              <textarea
                required
                name="message"
                className="input textarea"
                placeholder="Write a Message"
                value={form.message}
                onChange={handleSetForm}
                maxLength={450}
              />
              <button className="button contact_submit" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="contacts_details">
            <p className="contacts_title_inner">My Contact Details </p>
            <div className="contacts_details_data">
              <div className="details_data_private">
                <div className="details_data_label">EMAIL</div>
                <div className="details_data_data">
                  castravet.iulian@gmail.com
                </div>
              </div>
              <div className="details_data_private">
                <div className="details_data_label">PHONE</div>
                <div className="details_data_data">+39 327 8638886</div>
              </div>

              <div className="details_data_private">
                <div className="details_data_label">ADDRESS</div>
                <div className="details_data_data">
                  <p>3, Pio Poletti street</p>
                  <p>48123 Ravenna, RA</p>
                  <p>Emilia-Romagna, Italy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { FC } from "react";
import "./style.css";
import { myAge } from "../../utils/birthday";
import { Button } from "../../Components/Button/Button";
//@ts-expect-error
import img from "../../images/my_photo.jpg";

interface Props {
  onClick: (id: string) => void;
}

export const SectionAbout: FC<Props> = ({ onClick }) => {
  return (
    <section className="section_about" id="about">
      <div className="content_about">
        <div className="content_photo">
          <img
            className="img_about"
            src={img}
            alt="myphoto"
            width={900}
            height={500}
          />
        </div>

        <div className="content_description">
          <div className="content_description_title">About Me</div>
          <div className="content-description_info">
            I'm a {myAge()} year old self-taught Front-End Developer born in
            Moldova and who has lived in Italy for a long time. I enjoy creating
            components, websites and learning new skills from this industry.
          </div>
          <div className="contacts_handlers">
            <Button path="contacts" type="link" onClick={onClick}>
              Contact me
            </Button>
            <Button path="cv.pdf" type="folder">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

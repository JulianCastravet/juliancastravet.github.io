import { FC } from "react";
import { Header,Props } from "../../Components/Header/Header";
import "./style.css";

export const SectionHome: FC<Props> = (props) => {
  return (
    <section id="home" className="section_home">
      <Header {...props} />
      <div className="content_home">
        <div className="intro_main">
          Hello, I'm
          <div className="intro_name">Julian Castravet</div>
          <div className="intro_secondary">and this is my website</div>
        </div>
      </div>
    </section>
  );
};

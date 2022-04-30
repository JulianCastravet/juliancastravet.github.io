import "./style.css";
interface Props {
  title: string;
  imageSrc?: string;
}

export const WebCard = (props: Props) => {
  const { title, imageSrc } = props;

  return (
    <div className="webcard">
      <div className="webcard_image">
        <a href="/">
          <img src={imageSrc} alt="/" />
        </a>
      </div>
      <div className="webcard_image__title">{title}</div>
    </div>
  );
};

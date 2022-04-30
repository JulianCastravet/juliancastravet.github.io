import "./style.css";
import iconSet from "../../utils/selection.json";
import IcomoonReact from "icomoon-react";

interface Props {
  iconName: string;
  href: string;
  size: number | string;
}

export const IconItem = (props: Props) => {
  const { href, iconName, size } = props;

  return (
    <a className="icon-item" href={href} target="_blank" rel="noreferrer">
      <IcomoonReact
        iconSet={iconSet}
        icon={iconName}
        size={size}
        color="inherit"
      />
    </a>
  );
};

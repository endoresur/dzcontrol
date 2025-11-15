import { cc } from "../../utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <header className={cc(styles.headerRoot, className)}>
      Header component
    </header>
  );
};

export default Header;

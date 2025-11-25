import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { icons } from "constants/icons";
import { Sections } from "app/App";
import { MouseEvent } from "react";

interface Props {
  ids: Sections;
  bcc: string;
  className?: string;
}

const Header = ({ ids, bcc, className }: Props) => {
  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    e.stopPropagation();

    const block = document.getElementById(id);
    if (block) {
      block.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header style={{ backgroundColor: bcc }} className={styles.headerRoot}>
      <div className={cc(styles.header, className)}>
        <div className={styles.left}>
          <div className={styles.logoWrapper}>
            <img src={icons.logo} />
          </div>
          <p>ДЗ-Контроль</p>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a
                  href={`#${ids.tarifs}`}
                  onClick={(e) => onLinkClick(e, ids.tarifs)}
                >
                  Тарифы
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href={`#${ids.workflow}`}
                  onClick={(e) => onLinkClick(e, ids.workflow)}
                >
                  Процесс
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href={`#${ids.faq}`}
                  onClick={(e) => onLinkClick(e, ids.faq)}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

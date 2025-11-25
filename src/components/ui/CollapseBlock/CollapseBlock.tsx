import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { KeyboardEvent, useRef, useState } from "react";

interface Props {
  summary: React.ReactNode;
  children: React.ReactNode;
  initialOpen?: boolean;
  className?: string;
}

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
      />
    </svg>
  );
};

const CollapseBlock = ({
  children,
  summary,
  initialOpen = false,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!isOpen) {
      setHeight(contentRef.current?.clientHeight ?? 0);
    }

    setIsOpen((s) => !s);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={cc(styles.collapseBlockRoot, className)}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={styles.summary}
      >
        <div className={styles.summaryText}>{summary}</div>
        <div className={cc(styles.chevron, isOpen && styles.chevronOpen)}>
          <ArrowIcon />
        </div>
      </div>

      <div
        className={cc(styles.content)}
        style={{ height: isOpen ? `${height}px` : "0px" }}
      >
        <div className={styles.inner} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseBlock;

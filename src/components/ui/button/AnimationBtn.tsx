import React from "react";

import styles from "./AnimationBtn.module.css";

function AnimationBtn({ children }: { children: React.ReactNode }) {
  return <button className={`${styles.customBtn} ${styles.animationBtn}`}>{children}</button>;
}

export default AnimationBtn;

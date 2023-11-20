import React from "react";
import styles from "./Error.module.scss";
function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.content}>
      <div className="">{children}</div>
    </div>
  );
}

export default Error;

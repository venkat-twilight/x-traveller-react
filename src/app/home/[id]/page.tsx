import React from "react";
import styles from "@/src/app/page.module.css";
import Link from "next/link";
import { HOME } from "@/src/utils/constant";

export default function Details() {
  return (
    <div className={styles.main}>
      <Link href={HOME}>Back to Home</Link>
    </div>
  );
}

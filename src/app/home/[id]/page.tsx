import React from "react";
import styles from "@/src/app/page.module.css";
import Link from "next/link";

export default function Details() {
  return (
    <div className={styles.main}>
      <Link href="/home">Back to Home</Link>
    </div>
  );
}

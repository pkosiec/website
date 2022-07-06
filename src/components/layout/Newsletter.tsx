import clsx from "clsx";
import React, { FunctionComponent } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import NewsIcon from "./icon-news.svg";

import styles from "./Newsletter.module.scss";

export const Newsletter: FunctionComponent = () => {
  const { siteConfig } = useDocusaurusContext();
  const formAction = siteConfig.customFields.newsletterFormAction as string;

  return (
    <div className={styles.footerWrapper}>
      <div className="container padding-vert--lg">
        <NewsIcon className={styles.newsIcon} />
        <h2>Subscribe to the Newsletter</h2>
        <p>Get my latest content by email. Unsubscribe at any time.</p>

        <form action={formAction} className={styles.form} method="post">
          <input name="EMAIL" placeholder="Your email" type="email" />
          <input name="FNAME" placeholder="Your name" />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_4ed0fd1909674fddee53ac3e7_dfdcae99f5"
              tabIndex={-1}
              value=""
            />
          </div>

          <button
            type="submit"
            name="subscribe"
            className="button button--primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

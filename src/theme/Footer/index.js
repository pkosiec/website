import React from "react";
import Footer from "@theme-original/Footer";
import { Newsletter } from "../../components/layout/Newsletter";

export default function FooterWrapper(props) {
  return (
    <>
      <Newsletter />
      <Footer {...props} />
    </>
  );
}

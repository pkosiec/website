import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faLinkedinIn,
  faMediumM,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(
  faTwitter,
  faLinkedinIn,
  faMediumM,
  faGithub,
  faInstagram,
  faEnvelope,
);

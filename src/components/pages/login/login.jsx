import "./login.css";

import { Footer } from "../../footer/footer";
import { SignInCard } from "../../sign-in-card/sign-in-card";
import { Accordion } from "../../accordion/accordion";
import { Showcase } from "../../showcase/showcase";

import faq from "../../../constants/faq.jsx";
import showcaseConstants from "../../../constants/showcase-constants";

import showcaseEnjoyImg from "../../../constants/showcase-assets/showcase-enjoy.png";
import showcaseDownloadImg from "../../../constants/showcase-assets/showcase-download.jpg";
import showcaseWatchImg from "../../../constants/showcase-assets/showcase-watch.png";
import showcaseCreateImg from "../../../constants/showcase-assets/showcase-create.png";

export const Login = () => {
  return (
    <div id="login-page">
      <SignInCard />
      <div>
        <Showcase
          label={showcaseConstants.label.enjoy}
          text={showcaseConstants.text.enjoy}
          image={showcaseEnjoyImg}
        />
        <Showcase
          label={showcaseConstants.label.download}
          text={showcaseConstants.text.download}
          image={showcaseDownloadImg}
          flipped
        />
        <Showcase
          label={showcaseConstants.label.watch}
          text={showcaseConstants.text.watch}
          image={showcaseWatchImg}
        />
        <Showcase
          label={showcaseConstants.label.create}
          text={showcaseConstants.text.create}
          image={showcaseCreateImg}
          flipped
        />
      </div>
      <div id="faq-container">
        <h1 id="faq-heading">Frequently Asked Questions</h1>
        <Accordion label={faq.label.about} text={faq.text.about} />
        <Accordion label={faq.label.cost} text={faq.text.cost} />
        <Accordion label={faq.label.where} text={faq.text.where} />
        <Accordion label={faq.label.cancel} text={faq.text.cancel} />
        <Accordion label={faq.label.what} text={faq.text.what} />
        <Accordion label={faq.label.kids} text={faq.text.kids} />
      </div>

      <Footer />
    </div>
  );
};

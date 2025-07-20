import { css } from "../../styled-system/css";
import GiantMachinesContent from "../components/GiantMachinesContent";
import Nav from "../components/Nav";
import { toHomeWithOpeningSequenceComplete } from "../routes";
import type { Route } from "./+types/websites";

const wrapper = css({
  width: "100%",
  height: "100%",
  paddingTop: "50px",
  display: "flex",
});

const contentWrapper = css({
  width: "100%",
  height: "100%",
  color: "azure",
  padding: "50px",
});

const iframe = css({
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  marginRight: "16px",
});

export enum WebsiteKeys {
  giantmachines = "giantmachines",
}

interface WebsitePage {
  siteSrc: string;
  content: React.ReactNode;
  title: string;
  description: string;
}

const WebsitePages: Record<WebsiteKeys, WebsitePage> = {
  [WebsiteKeys.giantmachines]: {
    title: "",
    description: "",
    siteSrc:
      "https://web.archive.org/web/20221129225342/https://www.giantmachines.com/",
    content: <GiantMachinesContent />,
  },
};

export default function WebsitePage({ params }: Route.LoaderArgs) {
  if (!(params.id in WebsiteKeys)) {
    return;
  }

  const { title, description, siteSrc, content } =
    WebsitePages[params.id as WebsiteKeys];

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={wrapper}>
        <div className={contentWrapper}>{content}</div>

        <iframe
          className={iframe}
          src={siteSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

import { css, cx } from "../../styled-system/css";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import FinJSContent from "../components/FinJSContent";
import GiantMachinesContent from "../components/GiantMachinesContent";
import Nav from "../components/Nav";
import NotaContent from "../components/NotaContent";
import { toHomeWithOpeningSequenceComplete } from "../routes";
import type { Route } from "./+types/websites";

const pageWrapper = css({
  width: "100%",
  height: "100%",
  paddingTop: "50px",
  display: "flex",
});

const contentSectionWrapper = css({
  display: "none",
  xl: {
    width: "30%",
  },
  lg: {
    width: "40%",
  },
  md: {
    width: "50%",
    display: "flex",
  },
  height: "100%",
  color: "azure",
  overflow: "scroll",
});

const iframe = css({
  height: "80%",
  sm: {
    height: "100%",
  },
  width: "100%",
  borderRadius: "16px",
  margin: "0 25px",
});

export enum WebsiteKeys {
  giantmachines = "giantmachines",
  nota = "nota",
  "fin-js" = "fin-js",
}

interface WebsitePage {
  embedSrc: string;
  content: React.ReactNode;
  title: string;
  description: string;
  autoplay?: boolean;
}

const WebsitePages: Record<WebsiteKeys, WebsitePage> = {
  [WebsiteKeys.giantmachines]: {
    title: "Giant Machines",
    description:
      "Giant Machines, a boutique engineering consulting firm that was acquired by Deloitte in 2024",
    embedSrc:
      "https://web.archive.org/web/20221129225342/https://www.giantmachines.com/",
    content: <GiantMachinesContent />,
  },
  [WebsiteKeys.nota]: {
    title: "Nota",
    description: "M&T Nota App for IOLTA Legal Account Management",
    embedSrc:
      "https://hsmandt.s3.amazonaws.com/mandt/courses/nota-iolta-management/introduction-to-nota/video_introduction-to-nota.mp4",
    content: <NotaContent />,
  },
  [WebsiteKeys["fin-js"]]: {
    title: "FinJS",
    description: "FinJS Talk, 2019",
    embedSrc: "https://www.youtube.com/embed/P1-SmUtwrlY?controls=0",
    content: <FinJSContent />,
  },
};

export default function WebsitePage({ params }: Route.LoaderArgs) {
  if (!(params.id in WebsiteKeys)) {
    return;
  }

  const { title, description, embedSrc, content, autoplay } =
    WebsitePages[params.id as WebsiteKeys];

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={pageWrapper}>
        {content && <div className={contentSectionWrapper}>{content}</div>}

        <iframe
          className={iframe}
          src={embedSrc}
          title={title}
          frameBorder="0"
          allow={`${autoplay && "autoplay; "}accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {content && <ExpandingInfoButton>{content}</ExpandingInfoButton>}
    </>
  );
}

import { css } from "../../styled-system/css";
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

const GiantMachinesContent = () => (
  <>
    <h1>Giant Machines</h1>
    <p>
      - Helped build Giant Machines from a small boutique engineering consulting
      group of 14 people into a consultancy over 100 strong, winning #1 best
      place to work, small company nyc multiple years in a row and becoming a
      desirable acquisition target for multiple buyers, ultimately exiting to
      Deloitte via acquisition
      <p>
        - Led cross-functional teams to build strategic product verticals for
        clients across various industries, including energy & utilities,
        fintech, healthcare & life sciences, and transportation
      </p>
      <p>
        - Managed portfolios of client projects, engaging clients and distilling
        business goals to drive execution teams, at points managing 30+ direct
        reports across a portfolio
      </p>
      <p>
        - Interviewed engineers with a focus on building a diverse and inclusive
        culture that reflects the city live in, and trained engineers to enable
        rapid onboarding into client-facing roles and a culture of continuous
        learning
      </p>
      <p>
        - Conceived and led a mentorship program to enable distributed support
        systems within the engineering team as we scaled; mentored 5 other
        engineering leaders formally, and many others informally
      </p>
      <p>
        - Created and facilitated a Team Leadership Forum community of practice
        to align leadership best practices and create space for new leaders to
        feel supported stepping into new responsibilities
      </p>
      <p>
        - Led the Knowledge Sharing committee for developing learning
        initiatives, presentations and workshops, and also co-led the DevOps
        Working Group for developing internal DevOps strategies and thought
        leadership
      </p>
    </p>
  </>
);

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

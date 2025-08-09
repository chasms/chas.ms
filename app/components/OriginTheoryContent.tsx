import {
  contentBody,
  contentHeading,
  contentWrapper,
} from "../content/content.css";

export default function OriginTheoryContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Origin Theory</h1>
      <p className={contentBody}>
        A comprehensive exploration of fundamental concepts and theoretical
        frameworks that form the foundation of creative and analytical thinking.
      </p>
      <p className={contentBody}>
        This document presents original research and theoretical perspectives
        developed through extensive study and practical application.
      </p>
    </div>
  );
}

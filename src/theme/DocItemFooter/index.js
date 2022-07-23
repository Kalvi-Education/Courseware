import React from "react";
import DocItemFooter from "@theme-original/DocItemFooter";
import ReadStatus from "@site/src/components/ReadStatus";

export default function DocItemFooterWrapper(props) {
  return (
    <>
      <ReadStatus frontMatter={props.content.frontMatter} />
      <DocItemFooter {...props} />
    </>
  );
}

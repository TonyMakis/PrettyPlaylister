// React
import React from 'react';

import { CopyBlock, github } from "react-code-blocks";

export default function CopyTracks({ code, language, showLineNumbers }) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={github}
      customStyle={{
        height: '325px',
        overflow: 'scroll',
      }}
    />
  );
}

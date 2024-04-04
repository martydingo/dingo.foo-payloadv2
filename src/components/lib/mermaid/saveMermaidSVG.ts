"use server";
import fs from "fs"

export default async function saveMermaidSVG(mermaidSvg: string, mermaidFileName: string) {
  fs.writeFileSync(`${process.cwd()}/public/images/blog/mermaid/${mermaidFileName}.svg`, mermaidSvg)
  return `${process.cwd()}/public/images/blog/mermaid/${mermaidFileName}.svg`
}

// %% {
//   init: {
//     "theme": "dark",
//     "flowchart": {
//       "defaultRenderer": "elk"
//     }
//   }
// } %%

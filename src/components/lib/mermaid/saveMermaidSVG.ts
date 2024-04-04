"use server";
import mermaid from "mermaid"
import fs from "fs"


export default async function saveMermaidSVG(mermaidSvg: string) {
  console.log(mermaidSvg)
  fs.writeFileSync('mermaid.svg', mermaidSvg)
}
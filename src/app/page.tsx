import "@/styles/css/globals.css";
import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";
import MermaidModal from "@/components/ui/blog/MermaidModal";

export default function Home() {

  console.log(process.cwd())



  const mermaidCode = `%%{init:{'flowchart':{'defaultRenderer':'elk'}}}%%
  flowchart
  direction RL
  
      Start --> Stop
  `
  console.log(JSON.stringify(mermaidCode, null, 2))
  return (
    <div>
      <NavigationBar />
      <div className="prose dark:prose-invert mx-auto container">
        <pre id="mermaid-123" className="mermaid">
            {mermaidCode}
        </pre>
        <MermaidModal mermaidId="mermaid-123" />
      </div>
    </div>
  );
}

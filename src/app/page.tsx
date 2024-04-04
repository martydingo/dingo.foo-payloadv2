import "@/styles/css/globals.css";
import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";
import MermaidModal from "@/components/ui/blog/MermaidModal";

export default function Home() {

  return (
    <div>
      <NavigationBar />
      <div className="prose dark:prose-invert mx-auto container">


        <MermaidModal mermaidId="mermaid-123" />
      </div>
    </div>
  );
}

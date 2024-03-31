import "./globals.css";
import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="prose dark:prose-invert mx-auto container">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

import "@/styles/css/globals.css";
import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";

export default function Home() {

  return (
    <div>
      <NavigationBar />
      <div className="prose dark:prose-invert mx-auto container">
        <BreadCrumb pageDicts={[{ "pageTitle": "Home", "pageHref": "/" }]} renderHeadings={false} />
      </div>
    </div>
  );
}

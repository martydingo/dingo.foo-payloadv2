import "@/styles/css/globals.css";
import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";
import { Separator } from "@/shadcn-ui/separator";

export default function Home() {

  return (
    <div>
      <NavigationBar curPage="Home" />
      <div className="grid grid-cols-3 grid-rows-3 h-[90vh]">
        <div className=" col-start-2 row-start-2 text-center">
          <div>
            <div className="space-y-2">
              <h1 className="h-14 bg-gradient-to-r from-orange-700 to-slate-600 font-titillium inline-block text-transparent bg-clip-text text-5xl">dingo.foo</h1>
              <p className="text-sm text-muted-foreground">
                Yet another mix of a personal website, a blog, and a portfolio.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center justify-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Projects</div>
              <Separator orientation="vertical" />
              <div>About</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

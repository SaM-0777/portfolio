import dynamic from "next/dynamic";
import WorkDetails from "../work-details";
import works from "@/constant/works";

const AnimatedPage = dynamic(() => import("@/wrapper/animated-page"), { ssr: false })
export default function ClaviusPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.clavius, nextProjectPath: works.fresking.path}} />
    </AnimatedPage>
  );
}

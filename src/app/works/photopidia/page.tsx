import dynamic from "next/dynamic";
import works from "@/constant/works";
import WorkDetails from "../work-details";

const AnimatedPage = dynamic(() => import("@/wrapper/animated-page"), { ssr: false })
export default function PhotopidiaPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.photopidia, nextProjectPath: works.secretspices.path}} />
    </AnimatedPage>
  );
}

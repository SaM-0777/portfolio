import dynamic from "next/dynamic";
import WorkDetails from "../work-details";
import works from "@/constant/works";

const AnimatedPage = dynamic(() => import("@/wrapper/animated-page"), { ssr: false })
export default function AskAIPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.askai, nextProjectPath: works.bastu.path}} />
    </AnimatedPage>
  );
}

import AnimatedPage from "@/wrapper/animated-page";
import WorkDetails from "../work-details";
import works from "@/constant/works";

export default function AskAIPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.askai, nextProjectPath: works.bastu.path}} />
    </AnimatedPage>
  );
}

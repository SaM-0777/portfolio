import AnimatedPage from "@/wrapper/animated-page";
import WorkDetails from "../work-details";
import works from "@/constant/works";


export default function ClaviusPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.clavius, nextProjectPath: works.fresking.path}} />
    </AnimatedPage>
  );
}

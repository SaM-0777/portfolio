import AnimatedPage from "@/wrapper/animated-page";
import WorkDetails from "../work-details";
import works from "@/constant/works";


export default function BastuPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.bastu, nextProjectPath: works.carspace.path}} />
    </AnimatedPage>
  );
}

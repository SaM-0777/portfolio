import AnimatedPage from "@/wrapper/animated-page";
import WorkDetails from "../work-details";
import works from "@/constant/works";


export default function CarspacePage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.carspace,  nextProjectPath: works.clavius.path}} />
    </AnimatedPage>
  );
}

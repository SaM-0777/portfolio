import AnimatedPage from "@/wrapper/animated-page";
import works from "@/constant/works";
import WorkDetails from "../work-details";


export default function SecretSpicesPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.secretspices, nextProjectPath: works.truezk.path}} />
    </AnimatedPage>
  );
}

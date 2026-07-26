import AnimatedPage from "@/wrapper/animated-page";
import WorkDetails from "../work-details";
import works from "@/constant/works";


export default function FreskingPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.fresking, nextProjectPath: works.photopidia.path}} />
    </AnimatedPage>
  );
}

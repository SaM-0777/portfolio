import AnimatedPage from "@/wrapper/animated-page";
import works from "@/constant/works";
import WorkDetails from "../work-details";


export default function PhotopidiaPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.photopidia, nextProjectPath: works.secretspices.path}} />
    </AnimatedPage>
  );
}

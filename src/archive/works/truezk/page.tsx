import AnimatedPage from "@/wrapper/animated-page";
import WorkDetails from "../work-details";
import works from "@/constant/works";

export default function TruezkPage() {
  return (
    <AnimatedPage>
      <WorkDetails
        details={{ ...works.truezk, nextProjectPath: works.askai.path }}
      />
    </AnimatedPage>
  );
}

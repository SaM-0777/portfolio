import dynamic from "next/dynamic";
import works from "@/constant/works";
import WorkDetails from "../work-details";

const AnimatedPage = dynamic(() => import("@/wrapper/animated-page"), { ssr: false })
export default function SecretSpicesPage() {
  return (
    <AnimatedPage>
      <WorkDetails details={{...works.secretspices, nextProjectPath: works.truezk.path}} />
    </AnimatedPage>
  );
}

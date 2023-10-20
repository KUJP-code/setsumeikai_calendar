import BackLink from "./BackLink";
import ForwardLink from "./ForwardLink";

interface props {
  currentStep: string;
  schoolName: string;
  schoolId: number;
  setsumeikaiDate: Date | undefined;
  setsumeikaiId: number;
}

export default function FooterNav({
  currentStep,
  schoolName,
  schoolId,
  setsumeikaiDate,
  setsumeikaiId,
}: props) {
  return (
    <nav className="z-50 sticky bottom-0 flex justify-between gap-3 p-3 bg-white border rounded">
      <BackLink currentStep={currentStep} schoolId={schoolId} />
      <div className="flex-grow"></div>
      <ForwardLink
        currentStep={currentStep}
        schoolId={schoolId}
        schoolName={schoolName}
        setsumeikaiDate={setsumeikaiDate}
        setsumeikaiId={setsumeikaiId}
      />
    </nav>
  );
}

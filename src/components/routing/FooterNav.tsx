import BackLink from "./BackLink";
import ForwardLink from "./ForwardLink";
import { selections } from "../../declarations";

interface props {
  currentStep: string;
  selections: selections;
}

export default function FooterNav({ currentStep, selections }: props) {
  return (
    <nav className="z-50 sticky bottom-0 flex justify-between gap-3 p-3 bg-white border rounded">
      <BackLink currentStep={currentStep} selections={selections} />
      <div className="flex-grow"></div>
      <ForwardLink currentStep={currentStep} selections={selections} />
    </nav>
  );
}

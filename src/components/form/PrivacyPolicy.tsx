interface Props {
  policyAccepted: boolean;
  setPolicyAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

const PRIVACY_POLICY_URL = "https://www.p-up.world/privacypolicy/";

export default function PrivacyPolicy({
  policyAccepted,
  setPolicyAccepted,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2">
        <input
          type="checkbox"
          id="privacy_policy"
          checked={policyAccepted}
          required
          onChange={() => setPolicyAccepted(!policyAccepted)}
          className="appearance-none rounded border-2 border-ku-faded w-[14px] h-[14px] checked:border-ku-orange checked:before:bg-ku-orange checked:before:w-[10px] checked:before:h-[10px] flex items-center justify-center"
        />
        <label
          htmlFor="privacy_policy"
          className="text-ku-secondary font-semibold text-base"
        >
          個人情報保護方針に同意する
        </label>
      </div>

      <a
        href={PRIVACY_POLICY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="border-button rounded px-2 py-1 font-semibold text-base text-center hover:bg-main-background hover:text-ku-secondary bg-ku-button text-white"
      >
        個人情報保護方針を見る
      </a>
    </div>
  );
}

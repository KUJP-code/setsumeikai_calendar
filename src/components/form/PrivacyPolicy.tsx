import { useEffect, useRef, useState } from "react";

interface Props {
  policyAccepted: boolean;
  setPolicyAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PrivacyPolicy({
  policyAccepted,
  setPolicyAccepted,
}: Props) {
  const [displayModal, setDisplayModal] = useState(false);
  const [policyHtml, setPolicyHtml] = useState<string>("");
  const modalRef = useRef<HTMLDialogElement | null>(null);


  useEffect(() => {
    if (displayModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [displayModal]);


  useEffect(() => {
    if (!displayModal || policyHtml) return;

    const POLICY_URL = "https://www.p-up.world/privacypolicy/";

    (async () => {
      try {
        const txt = await fetch(POLICY_URL, { cache: "no-cache" }).then((r) =>
          r.text()
        );

        const doc = new DOMParser().parseFromString(txt, "text/html");
        const bodyEl = doc.querySelector(".policy_body");

        setPolicyHtml(bodyEl?.innerHTML ?? txt);
      } catch (err) {
        console.error("Failed to load policy:", err);
        setPolicyHtml(
          "<p>現在プライバシーポリシーを取得できませんでした。時間を置いて再度お試しください。</p>"
        );
      }
    })();
  }, [displayModal, policyHtml]);

  return (
    <div className="flex flex-col gap-2">

      <div className="flex justify-center items-center gap-2">
        <input
          type="checkbox"
          name="privacy_policy"
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

      <button
        type="button"
        onClick={() => setDisplayModal(true)}
        className="border-button rounded px-2 py-1 font-semibold text-base hover:bg-main-background hover:text-ku-secondary bg-ku-button text-white"
      >
        個人情報保護方針を見る
      </button>


      <dialog
        ref={modalRef}
        onClose={() => setDisplayModal(false)}
        className="z-50 fixed inset-0 h-screen w-screen p-10 rounded text-start bg-main-background backdrop:bg-black backdrop:opacity-75 m-auto"
      >
        <div className="modal flex flex-col h-full">

          <div className="modal-header flex justify-between items-center text-xl mb-4">
            <h2 className="font-semibold">プライバシーポリシー</h2>
            <button
              type="button"
              className="h-5 w-5 flex items-center justify-center p-4 border-button rounded font-semibold text-base text-ku-secondary hover:bg-ku-button hover:text-white"
              onClick={() => setDisplayModal(false)}
            >
              X
            </button>
          </div>

          <div
            className="modal-content flex-1 overflow-y-auto leading-relaxed text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: policyHtml }}
          />


          <div className="modal-footer flex justify-end items-center pt-4">
            <button
              type="button"
              className="border-button flex justify-center items-center text-ku-secondary font-semibold basis-2/5 md:basis-1/4 rounded text-center p-1 hover:bg-ku-button hover:text-white"
              onClick={() => setDisplayModal(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

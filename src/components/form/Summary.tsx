import jaFormat from "../../helpers/jaFormat";

interface SummaryProps {
  selections: selections;
  inquiry: inquiry;
}

export default function Summary({ selections, inquiry }: SummaryProps) {
  return (
    <main className="flex flex-col md:flex-row md:flex-wrap items-center justify-evenly gap-5 p-3 text-center">
      <div className="w-full rounded text-xl bg-green-700 text-white p-3">
        Inquiry successfully made!
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">School</h3>
        <p>{selections.schoolName}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">Setsumeikai</h3>
        <p>
          {selections.setsumeikaiDate
            ? jaFormat(selections.setsumeikaiDate)
            : ""}
        </p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">保護者のお名前</h3>
        <p>{inquiry.parent_name}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">電話番号</h3>
        <p>{inquiry.phone}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">メール</h3>
        <p>{inquiry.email}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">お子様のお名前</h3>
        <p>{inquiry.child_name}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">お子様の生年月日</h3>
        <p>{inquiry.child_birthday}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">保育園・幼稚園名と在園状況</h3>
        <p>{inquiry.kindy}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">保護者のお名前</h3>
        <p>{inquiry.ele_school}</p>
      </div>

      <div className="flex flex-col basis-2/5 gap-2">
        <h3 className="font-semibold text-lg">通学をご検討中のスクール</h3>
        <p>{inquiry.planned_school}</p>
      </div>

      {inquiry.start_date ? (
        <div className="flex flex-col basis-2/5 gap-2">
          <h3 className="font-semibold text-lg">ご希望の利用開始時期</h3>
          <p>{inquiry.start_date}</p>
        </div>
      ) : null}

      {inquiry.referrer ? (
        <div className="flex flex-col basis-2/5 gap-2">
          <h3 className="font-semibold text-lg">お申し込みのきっかけ</h3>
          <p>{inquiry.referrer}</p>
        </div>
      ) : null}

      {inquiry.requests ? (
        <div className="flex flex-col w-full gap-2">
          <h3 className="font-semibold text-lg">
            説明会で聞きたい内容・ご要望
          </h3>
          <p>{inquiry.requests}</p>
        </div>
      ) : null}
    </main>
  );
}

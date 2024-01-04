import { useEffect } from "react";
import jaFormat from "../../helpers/jaFormat";
import { GTMWindow, inquiry, selections, school } from "../../declarations";
import SelectionFields from "./SelectionFields";
declare const window: GTMWindow;

interface SummaryProps {
  schools: school[];
  selections: selections;
  inquiry: inquiry;
}

export default function Summary({
  schools,
  selections,
  inquiry,
}: SummaryProps) {
  const school = schools.find((s) => s.id === inquiry.school_id)?.name || "";
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "setsu_inquiry_success",
      });
    }
  }, []);
  const groupClasses = "flex flex-col md:flex-row md:justify-between md:w-1/2";
  const headingClasses = "font-semibold text-lg";
  const pClasses = "text-ku-faded font-semibold";

  return (
    <main className="flex flex-col md:items-center justify-evenly gap-5 p-3 text-start text-ku-secondary">
      <div className="w-full rounded text-xl bg-green-700 text-white p-3 text-center">
        問い合わせ成功
      </div>

      <SelectionFields selections={selections} plannedSchool={school} />

      <div className={groupClasses}>
        <h3 className={headingClasses}>説明会場</h3>
        <p className={pClasses}>{selections.schoolName}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>参加日程</h3>
        <p className={pClasses}>
          {selections.setsumeikaiDate
            ? jaFormat(selections.setsumeikaiDate)
            : ""}
        </p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>保護者のお名前</h3>
        <p className={pClasses}>{inquiry.parent_name}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>電話番号</h3>
        <p className={pClasses}>{inquiry.phone}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>メール</h3>
        <p className={pClasses}>{inquiry.email}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>お子様のお名前</h3>
        <p className={pClasses}>{inquiry.child_name}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>お子様の生年月日</h3>
        <p className={pClasses}>{inquiry.child_birthday}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>保育園・幼稚園名と在園状況</h3>
        <p className={pClasses}>{inquiry.kindy}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>保護者のお名前</h3>
        <p className={pClasses}>{inquiry.ele_school}</p>
      </div>

      <div className={groupClasses}>
        <h3 className={headingClasses}>通学をご検討中のスクール</h3>
        <p className={pClasses}>{school}</p>
      </div>

      {inquiry.start_date ? (
        <div className={groupClasses}>
          <h3 className={headingClasses}>ご希望の利用開始時期</h3>
          <p className={pClasses}>{inquiry.start_date}</p>
        </div>
      ) : null}

      {inquiry.referrer ? (
        <div className={groupClasses}>
          <h3 className={headingClasses}>お申し込みのきっかけ</h3>
          <p className={pClasses}>{inquiry.referrer}</p>
        </div>
      ) : null}

      {inquiry.requests ? (
        <div className={groupClasses}>
          <h3 className={headingClasses}>説明会で聞きたい内容・ご要望</h3>
          <p className={pClasses}>{inquiry.requests}</p>
        </div>
      ) : null}
    </main>
  );
}

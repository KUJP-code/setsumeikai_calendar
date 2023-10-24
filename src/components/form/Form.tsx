import { Form as RRForm } from "react-router-dom";
import useSelectionContext from "../../hooks/useSelectionContext";
import SelectionFields from "./SelectionFields";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

export default function Form() {
  const { schools, selections } = useSelectionContext();
  const schoolOptions: formOption[] = schools.map((s) => {
    return { name: s.name, value: s.id.toString() };
  });

  return (
    <RRForm
      method="post"
      className="flex flex-col md:flex-row md:flex-wrap items-center justify-evenly gap-5 p-3 text-center"
    >
      <SelectionFields {...selections} />
      <InputField
        type="text"
        label="保護者のお名前"
        name="parentName"
        placeholder="保護者のお名前を入力してください"
        required={true}
      />
      <InputField
        type="tel"
        label="電話番号"
        name="phone"
        placeholder="電話番号を入力してください(ハイフン無し)"
        required={true}
      />
      <InputField
        type="email"
        label="メール"
        name="email"
        placeholder="メールアドレスを入力してください"
        required={true}
      />
      <InputField
        type="text"
        label="お子様のお名前"
        name="childName"
        placeholder="カタカナでお子様のお名前を入力してください"
        required={true}
      />
      <InputField
        type="date"
        label="お子様の生年月日"
        name="childBirthday"
        placeholder=""
        required={true}
      />
      <InputField
        type="text"
        label="保育園・幼稚園名と在園状況"
        name="kindy"
        placeholder="例) ○○保育園　来年4月から・卒園済"
        required={true}
      />
      <InputField
        type="text"
        label="保護者のお名前"
        name="eleSchool"
        placeholder="例)  ○○小学校に来年4月から"
        required={true}
      />
      {/* TODO: group schools by prefecture */}
      <SelectField
        label="通学をご検討中のスクール"
        name="plannedSchool"
        options={schoolOptions}
        required={true}
      />
      <InputField
        type="date"
        label="ご希望の利用開始時期"
        name="startDate"
        placeholder="保護者のお名前を入力してください"
        required={false}
      />
      <RadioField
        label="お申し込みのきっかけ"
        name="referrer"
        options={[
          { name: "チラシ", value: "flyer" },
          { name: "口コミ", value: "recommendation" },
          { name: "ホームページ", value: "homepage" },
          { name: "看板", value: "billboard" },
          { name: "資料", value: "document" },
          { name: "その他", value: "other" },
        ]}
      />
      <button
        type="submit"
        className="w-full rounded p-2 bg-ku-orange font-semibold text-white text-lg hover:opacity-90"
      >
        内容の確認へ
      </button>
    </RRForm>
  );
}

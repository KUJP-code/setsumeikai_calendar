import { Form as RRForm } from "react-router-dom";
import useSelectionContext from "../../hooks/useSelectionContext";
import SelectionFields from "./SelectionFields";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import useInquiryResponse from "../../hooks/useInquiryResponse";
import Summary from "./Summary";
import { formOption, school } from "../../declarations";

export default function Form() {
  const { schools, selections } = useSelectionContext();
  const schoolOptions: formOption[] = schools.map((s: school) => {
    return { name: s.name, value: s.id };
  });
  const inquiryResponse = useInquiryResponse();

  if (inquiryResponse && inquiryResponse.response.status === 200) {
    return (
      <Summary
        schools={schools}
        selections={selections}
        inquiry={inquiryResponse.inquiryObject}
      />
    );
  } else {
    return (
      <div className="flex flex-col justify-between items-center gap-2 p-3">
        <SelectionFields selections={selections} />
        <RRForm
          method="post"
          className="w-full md:w-4/5 flex flex-col md:flex-row md:flex-wrap md:items-center justify-evenly md:justify-between gap-y-5 pt-3 text-center"
        >
          <input
            type="hidden"
            name="setsumeikai_id"
            value={selections.setsumeikaiId}
          />
		  <input type="hidden" name="category" value="R" />
          {inquiryResponse && inquiryResponse.response.status === 500 ? (
            <div className="w-full rounded text-xl bg-red-600 text-white p-3">
              問い合わせができなかった
            </div>
          ) : null}
          <InputField
            type="text"
            label="保護者のお名前"
            name="parent_name"
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
            name="child_name"
            placeholder="カタカナでお子様のお名前を入力してください"
            required={true}
          />
          <InputField
            type="date"
            label="お子様の生年月日"
            name="child_birthday"
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
            label="小学校名と在学状況"
            name="ele_school"
            placeholder="例)  ○○小学校に来年4月から"
            required={true}
          /> 
          <InputField
            type="date"
            label="ご希望の利用開始時期"
            name="start_date"
            placeholder="保護者のお名前を入力してください"
            required={false}
          />
		  {/* TODO: group schools by prefecture */}
          <SelectField
            label="通学をご検討中のスクール"
            name="school_id"
            options={schoolOptions}
            required={true}
          />
		  <div className="hidden md:block md:basis-[45%]"></div>
          <RadioField
            label="お申し込みのきっかけ"
            name="referrer"
            options={[
              { name: "チラシ", value: "チラシ" },
              { name: "口コミ", value: "口コミ" },
              { name: "ホームページ", value: "ホームページ" },
              { name: "看板", value: "看板" },
              { name: "資料", value: "資料" },
              { name: "その他", value: "その他" },
            ]}
          />
          <InputField
            type="textarea"
            label="説明会で聞きたい内容・ご要望"
            name="requests"
            placeholder="スクール、サービス、お子様について気になる点があれば記入ください。例）送迎について詳しく聞きたい２歳の弟も一緒に参加したい"
            required={false}
          />
          <button
            type="submit"
            className="w-full rounded p-1 bg-ku-orange font-semibold text-white text-base hover:opacity-90"
          >
            内容の確認へ
          </button>
        </RRForm>
      </div>
    );
  }
}

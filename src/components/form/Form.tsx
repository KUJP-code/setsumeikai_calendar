import { Form as RRForm } from "react-router-dom";
import useSelectionContext from "../../hooks/useSelectionContext";
import SelectionFields from "./SelectionFields";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import useInquiryResponse from "../../hooks/useInquiryResponse";
import Summary from "./Summary";
import type { formOption, school } from "../../declarations";
import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Form() {
	const { schools, selections } = useSelectionContext();
	const venue =
		selections.schoolName === "Kids UP オンラインコース"
			? "自宅からオンラインで参加"
			: selections.schoolName;
	function filterSchoolOptions(schools: school[]) {
		const onlineSchool = schools.find((s) => s.id === "2");
		if (
			selections.setsumeikaiId &&
			onlineSchool?.setsumeikais
				.map((s) => s.id)
				.includes(selections.setsumeikaiId)
		) {
			return [{ name: onlineSchool.name, value: onlineSchool.id }];
		}

		return schools.map((s: school) => {
			return { name: s.name, value: s.id };
		});
	}
	const schoolOptions: formOption[] = filterSchoolOptions(schools);
	const [policyAccepted, setPolicyAccepted] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const inquiryResponse = useInquiryResponse();

	if (inquiryResponse && inquiryResponse.response.status !== 200) {
		setSubmitted(false);
	}

	if (inquiryResponse && inquiryResponse.response.status === 200) {
		return (
			<Summary
				schools={schools}
				selections={selections}
				inquiry={inquiryResponse.inquiryObject}
			/>
		);
	}
	return (
		<div className="flex flex-col items-center justify-between gap-y-5 p-3">
			<SelectionFields selections={selections} venue={venue} />
			{selections.schoolId !== "2" &&
			selections.setsumeikaiDate?.getHours() === 16 ? (
				<div className="fieldset-border w-full rounded border-ku-orange p-2 text-center font-semibold text-ku-orange md:w-4/5">
					<p>※事前にご確認ください！※</p>
					<p>
						平日16時台の説明会は、通常レッスン内での体験となるため、大人数に不慣れなお子様は教室に入れないケースが御座います。
					</p>
					<p>
						人見知りのお子様、特に幼児のお子様の体験は、少人数で行う「平日18時以降」及び「土曜日」の参加を強く推奨いたします。
					</p>
				</div>
			) : null}
			<RRForm
				method="post"
				className="flex w-full flex-col justify-evenly gap-y-5 pt-3 text-center md:w-4/5"
				onSubmit={(event) => {
					if (submitted) {
						event.preventDefault();
					} else {
						setSubmitted(true);
						setPolicyAccepted(false);
					}
				}}
			>
				<input
					type="hidden"
					name="setsumeikai_id"
					value={selections.setsumeikaiId}
				/>
				<input type="hidden" name="category" value="R" />
				{inquiryResponse && inquiryResponse.response.status !== 200 ? (
					<div className="w-full rounded bg-red-600 p-3 text-xl text-white">
						問い合わせができなかった
						<ul>
							{inquiryResponse.response.errors?.map((error) => {
								return <li key={error}>{error}</li>;
							})}
						</ul>
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
					selected={selections.schoolName}
				/>
				<div className="hidden md:block md:basis-[45%]" />
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
				<PrivacyPolicy
					policyAccepted={policyAccepted}
					setPolicyAccepted={setPolicyAccepted}
				/>
				<button
					type="submit"
					className={`w-full rounded bg-ku-orange p-1 text-base font-semibold text-white ${
						!policyAccepted ? "opacity-50" : "hover:opacity-90"
					}`}
					disabled={!policyAccepted}
				>
					{policyAccepted
						? "内容の確認へ"
						: "個人情報保護方針に同意の上、次へお進みください"}
				</button>
			</RRForm>
		</div>
	);
}

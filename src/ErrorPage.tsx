import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  if (error instanceof Error) {
	return (
		<main id="error-page" className="bg-main-background text-center text-rose-500">
			<h1 className="font-bold text-5xl">学校のリストは入手できなかった。しばらく待ってからページを更新して再試行してください。</h1>
			<h3 className="">{error.name}</h3>
		    <i>{error.message}</i>
		</main>
	)
  } else {
	return <div>Congrats, you got an error that's not an error!</div>
  }
}

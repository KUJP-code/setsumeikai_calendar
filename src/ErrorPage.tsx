import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong!</p>
      <p>This should be in Japanese, and the errors should be too.</p>
      <p>
        <i>{error instanceof Error ? error.message : ""}</i>
      </p>
    </div>
  );
}

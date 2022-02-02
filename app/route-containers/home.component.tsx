import { UserGithub } from "constants/userGithub";
import { Form, useActionData, useLoaderData, useTransition } from "remix";

export default function Index() {
  const userGithubData: UserGithub = useLoaderData();
  const transition = useTransition();
  const data = useActionData();

  console.log(data);

  const { avatar_url, created_at, login, blog } = userGithubData;

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        display: "flex",
      }}
    >
      <section>
        <h1>Hello user {login} 😀</h1>
        <p>
          Personal website{" "}
          <a href={`https:\\${blog}`} target="_blank" rel="noopener">
            {blog}
          </a>
        </p>
        <p>Member of github since {new Date(created_at).toLocaleString()}</p>
        <img src={avatar_url} alt={login} />
      </section>
      <section>
        <Form method="post">
          <p
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <label>What is your name?</label>
            <input type="text" name="visitorsName" />
          </p>
          <button type="submit">
            {transition.submission ? "Creating Name..." : "Submit Name"}
          </button>
          {data?.message && <p>{data.message}</p>}
        </Form>
      </section>
    </main>
  );
}

import { UserGithub } from "constants/userGithub";
import { useLoaderData } from "remix";

export default function Index() {
  const userGithubData: UserGithub = useLoaderData();

  const { avatar_url, created_at, login, blog } = userGithubData;

  console.log(userGithubData);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hello user {login} 😀</h1>
      <p>
        Personal website{" "}
        <a href={`https:\\${blog}`} target="_blank" rel="noopener">
          {blog}
        </a>
      </p>
      <p>Member of github since {new Date(created_at).toLocaleString()}</p>
      <img src={avatar_url} alt={login} />
    </div>
  );
}

import { LoaderFunction } from "remix";

export const loader: LoaderFunction = async () => {
  const res = await fetch("https://api.github.com/users/reyhannaufal");
  if (res.status !== 200) {
    throw new Error(`Failed to fetch user data: ${res.status}`);
  }

  const data = res.json();

  return data;
}

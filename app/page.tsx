import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect("/news", RedirectType.replace)
  return <></>;
}

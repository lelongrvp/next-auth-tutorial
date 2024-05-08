import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

type Member = {
  user: {
    name: string;
    email: string;
    role: string;
  };
} | null;

const Member = async () => {
  const session: Member = await getServerSession(options);

  console.log(session);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div>
      <h1>Member server session</h1>
      <p>{session?.user.name}</p>
      <p>{session?.user.email}</p>
      <p>{session?.user.role}</p>
    </div>
  );
};

export default Member;

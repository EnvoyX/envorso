import { SignIn } from "@clerk/nextjs";
const Page = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <SignIn />
    </main>
  );
};

export default Page;

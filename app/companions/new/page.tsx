import CompanionForm from "@/components/CompanionForm";
import { newCompanionsPermissions } from "@/lib/actions/companion.action";
import { auth } from "@clerk/nextjs/server";
// import Image from "next/image";
// import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // const canCreateCompanion = await newCompanionsPermissions();
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
      {/* {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image src="/images/limit.svg" alt="limit" width={360} height={230} />
          <div className="cta-badge">Upgrade your plan</div>
          <h1>Companion Limit Reached</h1>
          <p>
            You have reached the limit of companions for your current plan.
            Please upgrade your plan to create more companions and premium
            features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade Plan
          </Link>
        </article>
      )} */}
    </main>
  );
};

export default NewCompanion;

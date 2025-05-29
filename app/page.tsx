import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainly Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#FFDA6E"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Calculus & Its Application"
          subject="Maths"
          duration={60}
          color="#E5D0FF"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        ></CompanionsList>
        <CTA></CTA>
      </section>
    </main>
  );
};

export default Page;

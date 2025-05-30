import { PricingTable } from "@clerk/nextjs";

const Subcription = () => {
  return (
    <div className="flex flex-col m-6 items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">Subscription Plans</h1>
      <PricingTable />
    </div>
  );
};

export default Subcription;

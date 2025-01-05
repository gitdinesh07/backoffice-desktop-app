import CustomLayout from "../../layout";

const FireFightingPage = () => {
  return (
    <CustomLayout title="MEP Fire Fighting Services - Design Draft">
      <div className="w-full px-4 md:px-20 mt-12">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">Fire Fighting</h2>
        <img src="../assets/image12.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p className="opacity-60">
            At Design Drafter, safety is our priority. We provide professional fire fighting
            consultancy services to help you safeguard your property and protect lives.
          </p>
          <p>Services We Offer</p>
          <ul className="opacity-60">
            {[
              "Fire Sprinklers Layouts",
              "Fire Hydrant Layouts",
              "Fire Alarms",
              "Head Loss Calculation",
              "Pump Selection",
              "Pump Room Layout",
            ].map((item: string, index: number) => (
              <li key={index} className="flex gap-6 items-start">
                <span className="text-lg font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CustomLayout>
  );
};

export default FireFightingPage;

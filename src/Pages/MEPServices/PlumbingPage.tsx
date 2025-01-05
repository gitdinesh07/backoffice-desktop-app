import CustomLayout from "../../layout";

const PlumbingPage = () => {
  return (
    <CustomLayout title="MEP Plumbing Services - Design Draft">
      <div className="w-full px-4 md:px-20 mt-12">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">Plumbing</h2>
        <img src="../assets/image11.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p className="opacity-60">
            At Design Drafter, we offer specialized plumbing design consultancy services to ensure
            your water systems are efficient, reliable, and sustainable. Whether for residential,
            commercial, or industrial applications, we deliver innovative solutions tailored to your
            specific needs.
          </p>
          <p>Services We Offer</p>
          <ul className="opacity-60">
            {[
              "Water Supply System Design",
              "Drainage and Wastewater Systems",
              "Rainwater Harvesting Systems",
              "Fixture Selection and Specification",
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

export default PlumbingPage;

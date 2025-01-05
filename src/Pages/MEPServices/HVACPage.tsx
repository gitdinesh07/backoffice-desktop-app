import CustomLayout from "../../layout";

const HVACPage = () => {
  return (
    <CustomLayout title="MEP HVAC Services - Design Draft">
      <div className="w-full px-4 md:px-20 mt-12">
        <h2 className="text-1xl md:text-3xl inline font-bold leading-tight">HVAC</h2>
        <img src="../assets/image10.png" className="mt-4" />
        <div className="flex flex-col gap-4 mt-4">
          <p className="opacity-60">
            Welcome to Design Drafter, your trusted partner for advanced HVAC (Heating, Ventilation,
            and Air Conditioning) solutions. We specialize in creating efficient and sustainable
            environments for residential, commercial, and industrial spaces.
          </p>
          <p>Services We Offer</p>
          <ul className="opacity-60">
            {[
              "Air Conditioning",
              "HVAC System Design",
              "Heat Load Calculation",
              "VRV System",
              "Chilled Water System",
              "Ventilation System",
              "Product Selection",
              "System Upgrades",
              "ECS and TVS System",
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

export default HVACPage;

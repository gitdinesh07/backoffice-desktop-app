import { Link } from "react-router-dom";
import CustomLayout from "../layout";
import { Done } from "@mui/icons-material";

export type ServiceType = {
  title: string;
  description: string;
  link: string;
};

export type DataType = {
  title: string;
  description: string;
};

export const serviceList: ServiceType[] = [
  {
    title: "MEP DESIGN",
    description:
      "We specialize in delivering comprehensive MEP (Mechanical, Electrical, and Plumbing) services designed to meet the demands of modern infrastructure. Our expert team ensures efficient systems integration, focusing on energy efficiency, sustainability, and cutting-edge technology.",
    link: "/mep-design",
  },
  {
    title: "ENGINEERING DESIGN",
    description:
      "we revolutionize engineering design with the power of Artificial Intelligence. Our AI-driven solutions streamline complex design processes, delivering precision, efficiency, and innovative outcomes.",
    link: "/engineering-design",
  },
  {
    title: "BIM SERVICES",
    description:
      "From conceptualization to final modeling, we leverage advanced AI tools to optimize designs, reduce errors, and accelerate project timelines. Whether 3D modeling, or Conversion of CAD to Revit Model, our approach ensures cutting-edge results tailored to your unique needs.",
    link: "/bim-services",
  },
];

const priceData = [
  {
    title: "Free",
    description:
      "The all-in-one solution that does all the work and drives real growth for small businesses",
    previousPrice: "39",
    newPrice: "0",
    savePrice: "240",
    download: "10",
    isCustom: false,
    features: [
      "DESIGNDRAFTER WATERMARK",
      "5 AI-GENERATED REPORTS/MONTH",
      "DIALUX",
      "HEAT LOAD",
      "EXTRACT QUANTITIES",
      "PRODUCT COMPARISION",
      "5GB OF CLOUD STORAGE",
    ],
  },
  {
    title: "PRO",
    description:
      "The all-in-one solution that does all the work and drives real growth for small businesses",
    previousPrice: "39",
    newPrice: "99",
    savePrice: "240",
    download: "10",
    isCustom: false,
    features: [
      "1 BRAND",
      "15 AI-GENERATED REPORTS/MONTH",
      "DIALUX",
      "HEAT LOAD",
      "EQUIPMENT LOAD",
      "FULL ENGINEERING DESIGN",
      "EXTRACT QUANTITIES",
      "PRODUCT COMPARISION",
      "1TB OF CLOUD STORAGE",
      "ONLINE CUSTOMER SUPPORT",
    ],
  },
  {
    title: "TEAM",
    description:
      "The all-in-one solution that does all the work and drives real growth for small businesses",
    previousPrice: "39",
    newPrice: "199",
    savePrice: "240",
    download: "10",
    isCustom: false,
    features: [
      "UPTO 5 BRANDS",
      "UNLIMITED AI-GENERATED REPORTS/MONTH",
      "DIALUX",
      "HEAT LOAD",
      "EQUIPMENT LOAD",
      "FULL ENGINEERING DESIGN",
      "EXTRACT QUANTITIES",
      "PRODUCT COMPARISION",
      "1TB OF CLOUD STORAGE",
      "ONLINE CUSTOMER SUPPORT",
      "CAD TO REVIT",
      "EDIT, COMMENT AND COLLABORATE",
      "SCALE YOUR BRAND AND CENTRALISE ASSETS",
    ],
  },
  {
    title: "ENTERPRISE",
    description:
      "The all-in-one solution that does all the work and drives real growth for small businesses",
    previousPrice: "39",
    newPrice: "299",
    savePrice: "240",
    download: "10",
    isCustom: true,
    features: [
      "UPTO 5 BRANDS",
      "UNLIMITED AI-GENERATED REPORTS/MONTH",
      "DIALUX",
      "HEAT LOAD",
      "EQUIPMENT LOAD",
      "FULL ENGINEERING DESIGN",
      "EXTRACT QUANTITIES",
      "PRODUCT COMPARISION",
      "UNLIMITED CLOUD STORAGE",
      "PRIORITY CUSTOMER SUPPORT",
      "CAD TO REVIT",
      "DESIGN SUPPORT FROM DD TEAM",
      "CENTRALLY MANAGE MULTIPLE TEAMS AND BRANDS",
    ],
  },
];

const designData: DataType[] = [
  {
    title: "Engineering Design Calculations",
    description:
      "At Design Drafter, we blend engineering expertise with Artificial Intelligence to create smarter, faster, and more reliable design solutions. Our AI-powered tools enhance accuracy, streamline workflows, and drive innovation in every project.",
  },
  {
    title: "Product Selection and Comparison",
    description:
      "we simplify the selection of construction materials with cutting-edge Artificial Intelligence. Our AI-driven platform compares materials based on cost, durability, sustainability, and performance, ensuring you make informed decisions for your projects.",
  },
  {
    title: "Convert CAD to Revit",
    description:
      "Transform your 2D CAD designs into intelligent 3D Revit models with Design drafter. Our expert team specializes in accurate and efficient CAD to Revit conversions, enabling enhanced visualization, coordination, and project collaboration.",
  },
];

const buildingData: DataType[] = [
  {
    title: "Construction Management",
    description:
      "We provide comprehensive construction management solutions to ensure your projects are delivered on time, within budget, and to the highest quality standards. Our experienced team oversees every phase, from planning and scheduling to execution and quality control.",
  },
  {
    title: "End-to-End Solutions",
    description:
      "We offer end-to-end suite of services, guiding your project from initial design to final construction. Our expertise spans architectural design, detailed drawings, and seamless project management, ensuring every phase is executed with precision and efficiency.",
  },
];

const HomePage = () => {
  return (
    <CustomLayout title="Design Draft">
      <div className="text-center px-4 md:px-8">
        <h1 className="title text-2xl md:text-4xl inline font-bold leading-tight gradient-color">
          AI tool for Building Design & <br className="hidden md:inline" /> Drawing
        </h1>
        <p className="description opacity-75 mt-4 text-sm md:text-base">
          Generate Engineering Design Calculations, Reports, Material Quantities,{" "}
          <br className="hidden md:inline" />
          Product comparison and Converts CAD into Ravit files that outperform{" "}
          <br className="hidden md:inline" />
          those of your competitors.
        </p>
        <Link to="/about-us">
          <button className="btn mt-4 rounded-md transform hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7eb3] transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </Link>

        <div className="relative my-16 md:my-32 mx-auto md:w-9/12">
          <img src="assets/image1.png" className="w-full" />
          <img
            src="assets/image2.png"
            className="absolute top-[-25%] left-[-5%] w-[25%] md:top-[-37%] md:left-[-10%] md:w-[31%] bg-transparent"
          />
          <img
            src="assets/image3.png"
            className="absolute top-[-25%] right-[-5%] w-[25%] md:top-[-37%] md:right-[-10%] md:w-[31%] bg-transparent"
          />
          <img
            src="assets/image4.png"
            className="absolute top-[77%] left-[-5%] w-[25%] md:top-[67%] md:left-[-10%] md:w-[31%] bg-transparent"
          />
          <img
            src="assets/image5.png"
            className="absolute top-[77%] right-[-5%] w-[25%] md:top-[67%] md:right-[-10%] md:w-[31%] bg-transparent"
          />
        </div>
      </div>

      <div className="p-4 md:px-20 md:py-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 mt-8 text-center md:text-left">
          SERVICES
        </h2>
        <ul className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {serviceList.map((service: ServiceType, index: number) => (
            <li className="service bg-[#111] p-2 rounded-lg" key={index}>
              <div className="card">
                <img src={`assets/service${index + 1}.png`} className="w-full" />
                <h3 className="text-lg mt-4 md:mt-8 font-semibold px-2">{service.title}</h3>
                <p className="opacity-60 mt-2 text-sm px-2 pb-4 md:text-base leading-[1.5rem]">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 md:px-20 md:py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          Automate Design Production
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div>
            <ul>
              {designData.map((data: DataType, index: number) => (
                <li key={index} className="mb-4 md:mb-8">
                  <h3 className="text-lg font-semibold">{data.title}</h3>
                  <p className="opacity-60 mt-2 text-sm md:text-base leading-[1.5rem] mr-0 md:mr-8">
                    {data.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="assets/image6.png" className="w-full rounded-lg" />
          </div>
        </div>
      </div>

      <div className="p-4 md:px-20 md:py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Your all-in-one Building <br className="hidden md:inline" /> Design, Drawing and
          Development Powerhouse
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {buildingData.map((data: DataType, index: number) => (
            <li key={index} className="my-4 md:my-8">
              <img src={`assets/building${index + 1}.png`} className="w-full" />
              <h3 className="text-lg text-start font-semibold mt-4">{data.title}</h3>
              <p className="opacity-60 text-start mt-2 text-sm md:text-base leading-[1.5rem] mr-0 md:mr-8">
                {data.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 md:px-20 md:py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">Pricing</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {priceData.map((item: any, index: number) => (
            <li className="price bg-[#111] px-4 py-6 rounded-lg relative pb-16" key={index}>
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-4 opacity-60">{item.description}</p>
              {/* {item.isCustom ? <div></div> : <></>} */}
              {/* <div className="inline-block relative mt-2 ml-4 opacity-80">
                <span className="text-lg font-medium">₹{item.previousPrice}</span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 -translate-y-1/2 rotate-12"></span>
              </div> */}
              <div className="flex items-end mt-4">
                <div className="flex items-start justify-start">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="text-5xl font-bold">{item.newPrice}</span>
                </div>
                <span className="opacity-60">/month*</span>
              </div>
              <p className="opacity-60 my-3">Save ₹{item.savePrice} yearly</p>
              <div className="bg-[#1c1c1c] p-3 text-center font-medium">
                {item.download} Downloads / Month
              </div>
              <ul className="flex flex-col gap-2 my-4">
                {item.features.map((feature: string, index: any) => (
                  <li key={index} className="flex items-end opacity-60 gap-2 text-xs">
                    {feature && <Done fontSize="small" />} {feature}
                  </li>
                ))}
              </ul>
              <button className="btn absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 px-4 py-2 bg-[#56e6b6] text-black mt-4 rounded-md cursor-pointer">
                Start Free Trial
              </button>
            </li>
          ))}
        </ul>
      </div>
    </CustomLayout>
  );
};

export default HomePage;

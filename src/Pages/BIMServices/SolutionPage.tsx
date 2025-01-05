import CustomLayout from "../../layout";
import { DataType } from "../HomePage";

const data: DataType[] = [
  {
    title: "BIM Modeling",
    description:
      "Our Architecture, Structure and MEPF Modeling Services helps client to Leverage BIM To Drive Efficiencies & Reduce Project Risk.",
  },
  {
    title: "Shop Drawings",
    description:
      "We provide accurate shop drawings for Contractors, Manufacturers and Suppliers to ensure drawings are concise and as per Industry standards.",
  },
  {
    title: "CAD to Revit Conversion",
    description: "Converting legacy 2D drawings into intelligent, information-rich 3D BIM models.",
  },
  {
    title: "Level of Development (LOD)",
    description:
      "Design Drafter has expertise of delivering LOD for different levels including LOD 100, 200, 300, 400 and 500. We adopt internationally accepted standard for LOD.",
  },
  {
    title: "Revit Plugins",
    description:
      "Several Autodesk Revit Productivity Tools for Data Management, Filtering, Model Checking, Drawing Production, Point Clouds, etc.",
  },
  {
    title: "Revit Family Creation",
    description:
      "We provide standard and customized library creation services for building product manufacturers, fabricators, architects and engineers for their product model catalogs which are downloadable from websites",
  },
];

const SolutionPage = () => {
  return (
    <CustomLayout title="BIM Solution - Design Draft">
      <div className="w-full px-4 md:px-20 ">
        <h2 className="title text-2xl md:text-4xl inline font-bold leading-tight">BIM Solutions</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center gap-8 sm:gap-12 mt-6">
          <div className="flex flex-col gap-4 mt-4">
            <p>Design Drafter: Empowering AEC Professionals with Comprehensive BIM Solutions</p>
            <p className="opacity-60">
              At Design drafter, we are a trusted provider of cutting-edge Building Information
              Modelling (BIM) services, catering to the needs of architecture, engineering, and
              construction (AEC) professionals worldwide. Our team specializes in delivering
              end-to-end BIM solutions that streamline project workflows from initial concept
              through to construction and facilities management.
            </p>
            <p>Our BIM Services Include:</p>
            <ul className="opacity-60">
              {[
                "3D Modelling and Visualization: Transforming concepts into accurate, detailed 3D models for better design insights and presentations.",
                "2D to 3D Conversion: Converting legacy 2D drawings into intelligent, information-rich 3D BIM models.",
                "Design and Analysis: Supporting your design process with detailed analysis and optimization using industry-leading tools.",
                "Quantity Take-Off and Cost Estimation: Delivering precise quantity extraction and cost analysis to keep projects on track.",
                "Construction Documentation: Developing coordinated drawings and documentation to support on-site construction.",
                "Clash Detection and Coordination: Identifying and resolving conflicts to ensure smooth project execution.",
                "Facilities Management Integration: Extending BIM into the operational phase with seamless FM integration.",
              ].map((item: string, index: number) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="text-lg font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="../assets/image13.png"
              alt="BIM Services"
              className="w-full max-w-sm mx-auto object-cover rounded-md"
            />
          </div>
        </div>

        <div className="mb-12 mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {data.map((item: DataType, index: number) => (
              <li key={index} className="bg-[#9a3eaa] p-6 sm:p-8 rounded-lg shadow-md">
                <h4 className="font-semibold text-center mt-4 sm:mt-8 mb-4 sm:mb-12">
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CustomLayout>
  );
};

export default SolutionPage;

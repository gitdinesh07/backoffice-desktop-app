import CustomLayout from '../../layout'

const RevitPlugins = () => {
  return (
    <CustomLayout title="BIM Revite Plugins - Design Draft">
      <div className="w-full px-4 md:px-20 ">
      <h2 className="title text-2xl md:text-4xl font-bold leading-tight">Revit Plugins</h2>
        <div className="flex flex-col gap-4 mt-4 mb-12">
          <p>Revit Plugins: Elevating Your BIM Experience</p>
          <p className="opacity-60" >
            At Design Drafter, we provide a suite of Autodesk Revit productivity tools designed to
            enhance your BIM workflows and streamline project execution. These powerful plugins are
            tailored to address specific challenges in data management, model quality, and efficient
            documentation, enabling you to achieve superior results with reduced effort.
          </p>
          <p>Key Features of Our Revit Plugins</p>
          <ul className="list-decimal pl-6 space-y-2 md:space-y-4 opacity-60">
            {[
              "Data Management: Simplify data handling with tools that allow you to organize, manage, and extract information seamlessly. Gain better control over project data for improved decision-making and efficiency.",
              "Filtering: Easily locate, isolate, and work with specific elements in your model using advanced filtering options. This feature ensures a cleaner workspace and faster navigation within complex projects.",
              "Model Checking: Maintain model accuracy and compliance with automated model-checking tools that identify inconsistencies, missing elements, and other potential issues before they escalate.",
              "Drawing Production: Accelerate the creation of detailed drawings and documentation with tools that automate repetitive tasks, ensuring precision and uniformity across all deliverables.",
              "Point Clouds: Work effortlessly with point cloud data by integrating and manipulating scanned 3D data directly in Revit. This enables accurate as-built modeling and enhances renovation or retrofitting projects.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item.split(":").map((line, idx) => (
                  <>
                    {`${line}:`}
                    {idx < item.split(":").length - 1 && <br />}
                  </>
                ))}
              </li>
            ))}
          </ul>
          <p>Why Use Our Revit Plugins?</p>
          <ul className="list-disc pl-6 space-y-2 md:space-y-4 opacity-60">
            {[
              "Boost Productivity: Automate tedious tasks and free up time for design and innovation.",
              "Enhance Accuracy: Reduce errors and ensure consistency in every phase of the project.",
              "Simplify Workflows: Tackle complex processes with user-friendly tools that integrate seamlessly with Revit.",
              "Cost-Efficient Solutions: Achieve higher quality output while minimizing project time and cost.",
            ].map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
          <p>Revolutionize Your Revit Experience Today</p>
          <p className="opacity-60" >
            Elevate your BIM capabilities with [Your Company Name]’s Revit plugins. Whether you’re
            looking to streamline your workflows, improve data accuracy, or create detailed
            documentation with ease, our tools are the perfect solution to take your projects to the
            next level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <p className="opacity-60" >
                Contact Us Now 
                <br />
                Email: [your-email@example.com] 
                <br />
                Phone: [your-phone-number] 
                <br />
                Website: [Your Website URL]
              </p>
              <p>[Your Company Name] – Elevating your designs, empowering your projects.</p>
            </div>
            <div>
              <img src="../assets/image17.png" alt="Contact" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  )
}

export default RevitPlugins
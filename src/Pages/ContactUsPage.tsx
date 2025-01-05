import CustomLayout from "../layout";

const ContactUsPage = () => {
  return (
    <CustomLayout title="Contact Us - Design Draft">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:px-20 md:py-8 gap-8">
        <div></div>
        <div>
          <h2 className="text-2xl font-semibold mb-8">Contact me</h2>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <label className="font-semibold">First Name</label>
                <input
                  className="rounded-md outline-none  bg-[#2f2f2f] border-[#828282] text-[0.8rem] p-3"
                  placeholder="Jane"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-semibold">Last Name</label>
                <input
                  className="rounded-md outline-none  bg-[#2f2f2f] border-[#828282] text-[0.8rem] p-3"
                  placeholder="Smitherton"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold">Email Address</label>
              <input
                className="rounded-md outline-none   bg-[#2f2f2f] border-[#828282] text-[0.8rem] p-3"
                placeholder="email@janesfakedomain.net"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold">Your message</label>
              <textarea
                className="w-full p-4 outline-none   bg-[#2f2f2f] border-gray-300 rounded-md resize-y"
                rows={4}
                placeholder="Enter your question or message"
              ></textarea>
            </div>
            <button className="btn w-full rounded-md p-3">Submit</button>
          </form>
        </div>
      </div>
    </CustomLayout>
  );
};

export default ContactUsPage;

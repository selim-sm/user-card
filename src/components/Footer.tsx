import { Divider } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <div className="mt-10">
        <Divider />
        <div className="text-xl text-blue-500 text-center">
          <div className="">Powered by RandomAPI</div>
          <div className="">https://randomuser.me</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

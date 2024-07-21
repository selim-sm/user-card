import { Button, Divider } from "@nextui-org/react";
import SwichBttn from "./SwichBttn";
import RefechBttn from "./RefechBttn";

const Nav = () => {
  return (
    <>
      <div className="flex justify-around items-center py-5">
        <div className="text-3xl font-bold">RnadomUser</div>
        <div className="flex gap-5 items-center">
          <div className="">
            <SwichBttn />
          </div>
          <div className="">
            <RefechBttn />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Nav;

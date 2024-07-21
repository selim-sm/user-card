import { darkSwich } from "@/utils/switchAtom";
import { Switch } from "@nextui-org/react";
import { useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";

const SwichBttn = () => {
  const [black, setBlack] = useAtom(darkSwich);
  return (
    <>
      <Switch
        isSelected={black}
        onValueChange={(isselected: boolean) => setBlack(isselected)}
        startContent={<Sun />}
        endContent={<Moon />}
        size="lg"
        color="warning"
      />
    </>
  );
};

export default SwichBttn;

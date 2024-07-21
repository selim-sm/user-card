import { reFechAtom } from "@/utils/btn";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const RefechBttn = () => {
  const [load, setLoad] = useAtom(reFechAtom);
  const queryClient = useQueryClient();
  const refechHandler = () => {
    queryClient.invalidateQueries({ queryKey: ["getUser"] });
  };

  return (
    <>
      <Button color="primary" isLoading={load} onPress={refechHandler}>
        <span className={`${load ? "hidden" : ""}`}> Refetch</span>
      </Button>
    </>
  );
};

export default RefechBttn;

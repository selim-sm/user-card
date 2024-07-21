import { apiType } from "@/utils/apiData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LodingState from "./LodingState";
import CardOne from "./CardOne";
import { reFechAtom } from "@/utils/btn";
import { useAtom } from "jotai";
import { useEffect } from "react";

const Display = () => {
  const [load, setLoad] = useAtom(reFechAtom);

  const { data, isLoading, isFetching, isFetched, isSuccess, isError } =
    useQuery({
      queryKey: ["getUser"],
      queryFn: async () => {
        const request = await axios("https://randomuser.me/api/");

        const response = request.data.results[0] as apiType;
        return response;
      },
    });

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  });

  if (isError) {
    return (
      <>
        <div className="flex justify-center items-center h-[80dvh]">
          Error kichu vul hoise...🤦‍♂️😅
        </div>
      </>
    );
  }
  if (isLoading || isFetching) {
    return (
      <>
        <LodingState />
      </>
    );
  }
  if (isFetched && isSuccess) {
    return (
      <>
        <CardOne userInfo={data} />
      </>
    );
  }
};

export default Display;

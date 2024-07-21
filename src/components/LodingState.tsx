import { Card, CardBody, Avatar, Divider, Skeleton } from "@nextui-org/react";
import { ContactRound, Clock3, Inbox, MapPin, Earth } from "lucide-react";

const LodingState = () => {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Card>
          <CardBody>
            <div className="flex justify-center">
              <Skeleton className="rounded-full">
                <Avatar isBordered color="primary" className="w-32 h-32" />
              </Skeleton>
            </div>
            <div className="text-4xl font-bold flex justify-center my-5">
              <Skeleton>Mr Arne Rempel</Skeleton>
            </div>
            <Divider />
            <div className="flex gap-5 flex-col pt-4">
              <div className="flex items-center gap-6">
                <div className="">
                  <Skeleton>
                    <ContactRound />
                  </Skeleton>
                </div>
                <Skeleton>
                  {" "}
                  <div className="font-bold text-2xl">Male</div>
                </Skeleton>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Skeleton>
                    <Clock3 />{" "}
                  </Skeleton>
                </div>
                <Skeleton>
                  {" "}
                  <div className="font-bold text-2xl">42 Years</div>
                </Skeleton>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Skeleton>
                    {" "}
                    <Inbox />
                  </Skeleton>
                </div>
                <Skeleton>
                  {" "}
                  <div className="font-bold text-2xl">
                    arne.rempel@example.com
                  </div>
                </Skeleton>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Skeleton>
                    {" "}
                    <MapPin />
                  </Skeleton>
                </div>
                <Skeleton>
                  {" "}
                  <div className="font-bold text-2xl">Dresden, Thüringen</div>
                </Skeleton>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Skeleton>
                    {" "}
                    <Earth />
                  </Skeleton>
                </div>
                <Skeleton>
                  {" "}
                  <div className="font-bold text-2xl">Germany</div>
                </Skeleton>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default LodingState;

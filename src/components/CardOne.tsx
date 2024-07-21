import { apiType } from "@/utils/apiData";
import { Avatar, Card, CardBody, Divider } from "@nextui-org/react";
import { Clock3, ContactRound, Earth, Inbox, MapPin } from "lucide-react";

type userPropsType = {
  userInfo: apiType;
};

const CardOne = ({ userInfo }: userPropsType) => {
  return (
    <>
      <div className="flex justify-center pt-10">
        <Card>
          <CardBody>
            <div className="flex justify-center">
              <Avatar
                src={userInfo.picture.large}
                isBordered
                color="primary"
                className="w-32 h-32"
              />
            </div>
            <div className="text-4xl font-bold flex justify-center py-5">
              {userInfo.name.title}
              {userInfo.name.first}
              {userInfo.name.last}
            </div>
            <Divider />
            <div className="flex gap-5 flex-col pt-4">
              <div className="flex items-center gap-6">
                <div className="">
                  <ContactRound />
                </div>
                <div className="font-bold text-2xl">{userInfo.gender}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Clock3 />{" "}
                </div>
                <div className="font-bold text-2xl">
                  {userInfo.dob.age} Years
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Inbox />
                </div>
                <div className="font-bold text-2xl">{userInfo.email}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <MapPin />
                </div>
                <div className="font-bold text-2xl">
                  {userInfo.location.city}
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <Earth />
                </div>
                <div className="font-bold text-2xl">
                  {userInfo.location.country}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CardOne;

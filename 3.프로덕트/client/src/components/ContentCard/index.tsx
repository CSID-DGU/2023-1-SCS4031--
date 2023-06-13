import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ContentCardProps {
  cardName: string;
  cardType: string;
  children: string | any;
}
const ContentCard = ({ cardName, cardType, children }: ContentCardProps) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>("/Image/road.png");

  useEffect(() => {
    if (cardType === "TODAY_MAP") {
      setImageUrl("primary");
    } else {
      setImageUrl(`[url('../../../public/Image/delivery.png')]`);
    }
  }, [imageUrl]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleClickEvent = (cardType: string) => {
    if (cardType === "TODAY_AREA") {
      return navigate("/area");
    }
    if (cardType === "TODAY_MAP") {
      return navigate("/map");
    }

    if (cardType === "MEMO_LIST") {
      return navigate("/memo");
    }
    return navigate("item");
  };

  return (
    <div
      className={`card h-full w-full shadow-xl text-white bg-${imageUrl} bg-no-repeat bg-center bg-cover`}
      onClick={() => {
        handleClickEvent(cardType);
      }}
    >
      <div className="card-body">
        <div className="card-title">{cardName}</div>
        <div className="items-center h-full mt-5">{children}</div>
      </div>
    </div>
  );
};

export default ContentCard;

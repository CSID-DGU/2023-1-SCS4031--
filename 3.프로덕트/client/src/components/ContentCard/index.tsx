import { Outlet, useNavigate } from "react-router-dom";

interface ContentCardProps {
  cardName: string;
  cardType: string;
  children: string;
}
const ContentCard = ({ cardName, cardType, children }: ContentCardProps) => {
  const navigate = useNavigate();

  const handleClickEvent = (cardType: string) => {
    if (cardType === "TODAY_AREA") {
      return navigate("/area");
    }
    if (cardType === "TODAY_MAP") {
      return navigate("/map");
    }

    return navigate("item");
  };

  return (
    <div
      className={`card h-full w-full bg-primary shadow-xl text-white`}
      onClick={() => {
        handleClickEvent(cardType);
      }}
    >
      <div className={"card-body"}>
        <div className={"card-title"}>{cardName}</div>
        <div className={"flex items-center h-full"}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

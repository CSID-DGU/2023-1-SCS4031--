import RoadMap from "../components/RoadMap";
import ContentCard from "../components/ContentCard";

const MainPage = () => {
  return (
    <>
        <div className={'w-full h-[180px]'}>
            <ContentCard cardName={'오늘의 업무 바로가기'}>
                오늘의 업무 목록을 확인하세요.
            </ContentCard>
        </div>


    </>
  );
};

export default MainPage;

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

        <div className={"flex w-full h-[180px] mt-6"}>
            <div className={"w-full h-full mr-6"}>
                <ContentCard cardName={'상품 확인하기'} >
                    오늘의 배송 상품
                </ContentCard>
            </div>
            <div className={"w-full h-full"}>
                <ContentCard cardName={'지도 바로가기'} >
                    지도 바로가기
                </ContentCard>
            </div>
        </div>


    </>
  );
};

export default MainPage;

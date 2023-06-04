import RoadMap from "../components/RoadMap";
import FilterCheckBox from "../components/FilterCheckBox";

const MapPage = () => {
  return (
    <>
      <RoadMap />
      <div className={"flex mt-10"}>
        <FilterCheckBox
          OptionName={"거리"}
          OnClickEvent={() => {
            console.log("test");
          }}
        />
        <FilterCheckBox
          OptionName={"업무량"}
          OnClickEvent={() => {
            console.log("test");
          }}
        />
        <FilterCheckBox
          OptionName={"업무강도"}
          OnClickEvent={() => {
            console.log("test");
          }}
        />
      </div>
    </>
  );
};

export default MapPage;

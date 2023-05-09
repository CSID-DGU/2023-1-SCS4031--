import RoadMap from "../components/RoadMap";
import FilterCheckBox from "../components/FilterCheckBox";

const MapPage = () => {
  return (
    <>
      <RoadMap />
      <div>
        <FilterCheckBox
          OptionName={"test"}
          OnClickEvent={() => {
            console.log("test");
          }}
        />
      </div>
    </>
  );
};

export default MapPage;

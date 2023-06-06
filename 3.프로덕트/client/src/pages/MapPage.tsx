import RoadMap from "../components/RoadMap";
import FilterCheckBox from "../components/FilterCheckBox";
import { useState } from "react";
import IntroductoryRemark from "../components/IntroductoryRemark";

const MapPage = () => {
  const [mainVisible, setMainVisible] = useState(true);
  const [subVisible, setSubVisible] = useState(true);

  return (
    <>
      <RoadMap isMainVisible={mainVisible} isSubVisible={subVisible} />
      <IntroductoryRemark />
      <div className={"flex mt-10"}>
        <FilterCheckBox
          OptionName={"주기사"}
          isChecked={mainVisible}
          OnClickEvent={() => {
            setMainVisible(!mainVisible);
          }}
        />
        <FilterCheckBox
          OptionName={"보조기사"}
          isChecked={subVisible}
          OnClickEvent={() => {
            setSubVisible(!subVisible);
          }}
          isSub={true}
        />
      </div>
      <div>
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
      </div>
      <div>
            여기에 메모
      </div>
    </>
  );
};

export default MapPage;

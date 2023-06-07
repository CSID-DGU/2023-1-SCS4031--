import RoadMap from "../components/RoadMap";
import FilterCheckBox from "../components/FilterCheckBox";
import { useState } from "react";
import IntroductoryRemark from "../components/IntroductoryRemark";
import useModal from "../hooks/useModal";
import MapCustomModal from "../components/Modal/MapCustomModal";

const MapPage = () => {
  const [mainVisible, setMainVisible] = useState(true);
  const [subVisible, setSubVisible] = useState(true);

  const { modalState, closeModal, openModal } = useModal();

  const handleOpenModal = () => {
    openModal({
      title: "지도 보기 설정",
      content: (
        <MapCustomModal
          mainVisible={mainVisible}
          subVisible={subVisible}
          setMainVisible={setMainVisible}
          setSubVisible={setSubVisible}
        />
      ),
    });
  };

  return (
    <>
      <MapCustomModal
        mainVisible={mainVisible}
        subVisible={subVisible}
        setMainVisible={setMainVisible}
        setSubVisible={setSubVisible}
      />
      <RoadMap isMainVisible={mainVisible} isSubVisible={subVisible} />
      <div className={"w-full text-right mt-5 flex"}>
        <IntroductoryRemark />
        <button className={"btn btn-primary w-40"} onClick={handleOpenModal}>
          옵션
        </button>
      </div>
      <div>
        <label className="label">
          <span className="label-text">메모</span>
        </label>
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="메모를 입력해주세요"
        ></textarea>
      </div>
    </>
  );
};

export default MapPage;

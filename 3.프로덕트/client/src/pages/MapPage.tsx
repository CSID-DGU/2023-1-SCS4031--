import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import RoadMap from "../components/RoadMap";
import IntroductoryRemark from "../components/IntroductoryRemark";
import useModal from "../hooks/useModal";
import MapCustomModal from "../components/Modal/MapCustomModal";
import useLocalMemo from "../hooks/useLocalMemo";

const MapPage = () => {
  const [mainVisible, setMainVisible] = useState(true);
  const [subVisible, setSubVisible] = useState(true);
  const [localMemo, setLocalMemo] = useLocalMemo();
  const { openModal } = useModal();

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

  const handleChangeTextArea = debounce(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const textAreaValue: string = event.target.value as string;
      setLocalMemo(textAreaValue);
    },
    500
  );

  return (
    <>
      <MapCustomModal
        mainVisible={mainVisible}
        subVisible={subVisible}
        setMainVisible={setMainVisible}
        setSubVisible={setSubVisible}
      />
      <RoadMap isMainVisible={mainVisible} isSubVisible={subVisible} />
      <div className="w-full text-right mt-5 flex">
        <IntroductoryRemark />
        <button className="btn btn-primary w-40" onClick={handleOpenModal}>
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
          defaultValue={(localMemo as string) || ""}
          onChange={handleChangeTextArea}
        />
      </div>
    </>
  );
};

export default MapPage;

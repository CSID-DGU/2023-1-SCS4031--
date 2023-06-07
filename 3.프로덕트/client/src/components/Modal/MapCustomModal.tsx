import { Dispatch, SetStateAction, useEffect } from "react";
import { standardType } from "../../constants/standard";
import useModal from "../../hooks/useModal";
import ModalPortal from "../../common/layer/ModalPortal";
import FilterCheckBox from "../FilterCheckBox";

interface MapCustomModalProps {
  mainVisible: boolean;
  subVisible: boolean;
  setMainVisible: Dispatch<SetStateAction<boolean>>;
  setSubVisible: Dispatch<SetStateAction<boolean>>;
  standard?: standardType;
}
const MapCustomModal = (props: MapCustomModalProps) => {
  const { modalState, closeModal } = useModal();
  return (
    <>
      {modalState.isOpen && (
        <ModalPortal closePortal={closeModal} isOpened={modalState.isOpen}>
          <div className="modal-box w-96">
            <div className={"w-full text-center"}>
              <h3 className="font-bold text-lg">{modalState.title}</h3>
            </div>
            <div className={"mt-10"}>
              <label className={"w-full text-left font-bold"}>
                지도에 표시
              </label>
              <FilterCheckBox
                OptionName={"주기사"}
                isChecked={props.mainVisible}
                OnClickEvent={() => {
                  props.setMainVisible(!props.mainVisible);
                }}
              />
              <FilterCheckBox
                OptionName={"보조기사"}
                isChecked={props.subVisible}
                OnClickEvent={() => {
                  props.setSubVisible(!props.subVisible);
                }}
                isSub={true}
              />
            </div>
            <div className={"mt-5 mb-10"}>
              <label className={"w-full text-left font-bold"}>설정기준</label>
              <select className="select select-primary w-full max-w-xs">
                <option disabled>기준을 선택해주세요</option>
                <option>거리</option>
                <option>업무량</option>
                <option>업무강도</option>
              </select>
            </div>
            <div className="modal-action">
              <button className="btn btn-primary w-full" onClick={closeModal}>
                설정완료
              </button>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default MapCustomModal;

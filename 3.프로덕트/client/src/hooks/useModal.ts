import {useRecoilState} from "recoil";
import {modalVisibleState} from "../recoil/atom";
import {useCallback} from "react";

type OpenModalType = {
    title: string;
    content: JSX.Element | string;
    callback?: () => any;
};
const useModal = () => {
    const [modalState, setModalState] = useRecoilState(modalVisibleState);

    const closeModal = useCallback(
        () =>
            setModalState((prev) => {
                return { ...prev, isOpen: false };
            }),
        [setModalState]
    );

    const openModal = useCallback(
        ({ title, content, callback }: OpenModalType) =>
            setModalState({
                isOpen: true,
                title: title,
                content: content,
                callBack: callback
            }),
        [setModalState]
    );

    return { modalState, closeModal, openModal };
}

export default useModal;
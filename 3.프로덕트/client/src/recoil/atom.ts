import {atom} from "recoil";

type ModalType = {
    isOpen: boolean;
    title: string;
    content: JSX.Element | string;
    callBack?: () => any;
};

export const modalVisibleState = atom<ModalType>({
    key: 'modalVisibleState',
    default: {
        isOpen: false,
        title: "",
        content: ""
    }
});

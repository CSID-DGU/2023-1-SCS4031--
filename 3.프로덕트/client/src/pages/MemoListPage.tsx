import MemoAddButton from "../common/layer/MemoPage/MemoAddButton";
import {useState} from "react";

const MemoListPage = () => {
    const [memoCreateModalVisible, setMemoCreateModalVisible] = useState<boolean>(false);
    const [memoContentModalVisible, setMemoContentModalVisible] = useState<boolean>(false);

    return(
        <>
            {!memoContentModalVisible && !memoCreateModalVisible &&
                <MemoAddButton />
            }
        </>

    )

}

export default MemoListPage;
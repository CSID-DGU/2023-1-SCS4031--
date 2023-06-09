const useLocalStorageMemo = () => {
    const localMemo = localStorage.getItem("memoList");

    if (!localMemo) {
        localStorage.setItem("memoList", "");
    }
    const setLocalMemo: (value: any) => void = (
        value: any
    ) => {
        const jsonData = JSON.stringify([value, JSON.parse(localStorage.getItem("memoList") as string)])
        localStorage.setItem("memoList", jsonData);
    };

    return [localMemo as string, setLocalMemo as any];
};

export default useLocalStorageMemo;

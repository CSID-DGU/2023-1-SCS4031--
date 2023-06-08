const useLocalMemo = () => {
  const localMemo = localStorage.getItem("textAreaValue");

  if (!localMemo) {
    localStorage.setItem("textAreaValue", "");
  }
  const setLocalMemo: (value: string | null) => void = (
    value: string | null
  ) => {
    localStorage.setItem("textAreaValue", value || "");
  };

  return [localMemo as string, setLocalMemo as any];
};

export default useLocalMemo;

const useLocalMemo = () => {
  const localMemo = localStorage.getItem("textAreaValue");

  if (!localMemo) {
    localStorage.setItem("textAreaValue", "");
  }
  const setLocalMemo = (value: string) => {
    localStorage.setItem("textAreaValue", value);
  };

  return [localMemo as string, setLocalMemo];
};

export default useLocalMemo;

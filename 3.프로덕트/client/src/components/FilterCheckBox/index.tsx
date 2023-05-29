interface FilterCheckBoxProps {
  OptionName: string;
  OnClickEvent: any;
}

const FilterCheckBox = ({ OptionName, OnClickEvent }: FilterCheckBoxProps) => {
  return (
    <div className="form-control w-full">
      <label className="label cursor-pointer">
        <span className="label-text">{OptionName}</span>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          onChange={OnClickEvent}
        />
      </label>
    </div>
  );
};

export default FilterCheckBox;

interface FilterCheckBoxProps {
  OptionName: string;
  OnClickEvent: any;
}

const FilterCheckBox = ({ OptionName, OnClickEvent }: FilterCheckBoxProps) => {
  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">{OptionName}</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            onChange={OnClickEvent}
          />
        </label>
      </div>
    </div>
  );
};

export default FilterCheckBox;

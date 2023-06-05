interface FilterCheckBoxProps {
  OptionName: string;
  OnClickEvent: any;

  isChecked?: boolean;
}

const FilterCheckBox = ({
  OptionName,
  OnClickEvent,
  isChecked,
}: FilterCheckBoxProps) => {
  return (
    <div className="form-control w-full">
      <label className="label cursor-pointer">
        <span className="label-text">{OptionName}</span>
        <input
          type="checkbox"
          defaultChecked={isChecked}
          className="checkbox checkbox-primary"
          onChange={OnClickEvent}
        />
      </label>
    </div>
  );
};

export default FilterCheckBox;

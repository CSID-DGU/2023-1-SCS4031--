interface FilterCheckBoxProps {
  OptionName: string;
  OnClickEvent: any;

  isChecked?: boolean;
  isSub?: boolean;
}

const FilterCheckBox = ({
  OptionName,
  OnClickEvent,
  isChecked,
    isSub
}: FilterCheckBoxProps) => {
  return (
    <div className="form-control w-full mx-6">
      <label className="label cursor-pointer">
        <span className="label-text">{OptionName}</span>
        <input
          type="checkbox"
          defaultChecked={isChecked}
          className={`checkbox ${
              isSub? "checkbox-accent" : "checkbox-primary"
          }`}
          onChange={OnClickEvent}
        />
      </label>
    </div>
  );
};

export default FilterCheckBox;

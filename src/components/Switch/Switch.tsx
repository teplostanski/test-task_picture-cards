import React from "react";
import "./Switch.scss";

interface SwitchProps {
  onChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  return (
    <div className="switch__container">
      <label className="switch">
        <input
          type="checkbox"
          className="switch__input"
          onChange={(event) => props.onChange(event.target.checked)}
        />
        <span className="switch__body" />
      </label>
    </div>
  );
};

export default Switch;

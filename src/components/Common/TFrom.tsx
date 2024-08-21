import React from "react";
import {
  Input,
  SelectPicker,
  Checkbox,
  InputGroup,
  RadioGroup,
  Radio,
} from "rsuite";

interface FieldOption {
  label: string;
  value: string;
}

interface FieldProps {
  title: string;
  placeholder?: string;
  name: string;
  type: "input" | "select" | "checkbox" | "radio";
  options?: FieldOption[];
  value?: string | boolean;
  searchable?: boolean;
  onChange?: (name: string, value: string | boolean) => void;
}

const TInputField: React.FC<FieldProps> = ({
  title,
  placeholder,
  name,
  type,
  options = [],
  value,
  searchable = false,
  onChange,
}) => {
  const handleChange = (val: string | boolean | any) => {
    onChange?.(name, val);
  };

  return (
    <div
      style={{
        flex: 1,
        minWidth: "150px",
        maxWidth: "200px",
        marginBottom: "20px",
      }}
    >
      <div style={{ marginBottom: "4px", color: "grey" }}>{title}</div>
      <InputGroup inside style={{ width: "100%" }}>
        {type === "input" && (
          <Input
            placeholder={placeholder}
            value={value as string}
            onChange={(value) => handleChange(value)}
          />
        )}
        {type === "select" && (
          <SelectPicker
            data={options}
            placeholder={placeholder}
            value={value as string}
            onChange={(value) => handleChange(value)}
            searchable={searchable}
            style={{ width: "100%" }}
          />
        )}
        {type === "checkbox" && (
          <Checkbox
            checked={value as boolean}
            onChange={(value) => handleChange(value)}
          >
            {placeholder}
          </Checkbox>
        )}
        {type === "radio" && (
          <RadioGroup
            name={name}
            value={value as string}
            onChange={(value) => handleChange(value)}
          >
            {options.map((option) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        )}
      </InputGroup>
    </div>
  );
};

export default TInputField;

import React from "react";
import {
  Input,
  SelectPicker,
  Checkbox,
  InputGroup,
  RadioGroup,
  Radio,
} from "rsuite";
import TButton from "./TButton";

interface FieldOption {
  label: string;
  value: string;
}

interface FieldProps {
  title: string;
  placeholder?: string | any;
  name: string;
  type:
    | "input"
    | "select"
    | "checkbox"
    | "radio"
    | "input_btn"
    | "password"
    | "terms";
  options?: FieldOption[];
  value?: string | boolean;
  searchable?: boolean;
  onChange?: (name: string, value: string | boolean) => void;
}

const TFrom: React.FC<FieldProps> = ({
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
    <>
      {type === "input_btn" ? (
        <InputGroup inside style={{ width: "100%" }}>
          <Input
            placeholder={placeholder}
            value={value as string}
            onChange={(value) => handleChange(value)}
          />
          <TButton label={"Apply"} />
        </InputGroup>
      ) : (
        <div
          style={{
            flex: 2,
            marginBottom: "20px",
          }}
        >
          {type === "radio" ? (
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
          ) : type === "terms" ? (
            <Checkbox
              checked={value as boolean}
              onChange={(checked) => handleChange(checked)}
            >
              {placeholder}
            </Checkbox>
          ) : (
            <>
              <div
                style={{
                  marginBottom: "4px",
                  color: "grey",
                  fontWeight: "700",
                }}
              >
                {title}
              </div>
              <InputGroup inside style={{ width: "100%" }}>
                {type === "input" || type === "password" ? (
                  <Input
                    placeholder={placeholder}
                    type={type}
                    value={value as string}
                    onChange={(value) => handleChange(value)}
                  />
                ) : type === "select" ? (
                  <SelectPicker
                    data={options}
                    placeholder={placeholder}
                    value={value as string}
                    onChange={(value) => handleChange(value)}
                    searchable={searchable}
                    style={{ width: "100%" }}
                  />
                ) : type === "checkbox" ? (
                  <Checkbox
                    checked={value as boolean}
                    onChange={(checked) => handleChange(checked)}
                  >
                    {placeholder}
                  </Checkbox>
                ) : null}
              </InputGroup>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default TFrom;

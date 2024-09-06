import React, { useState } from "react";
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
  placeholder?: string;
  name: string;
  type: "input" | "select" | "checkbox" | "radio" | "input_btn";
  options?: FieldOption[];
  value?: string | boolean;
  layout?: "vertical" | "horizontal"; // Layout option for radio group
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
  layout = "vertical", // Default to vertical layout
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
            flex: 1,
            minWidth: "150px",
            maxWidth: "200px",
            marginBottom: "20px",
          }}
        >
          {type === "radio" ? (
            <RadioGroup
              name={name}
              value={value as string}
              onChange={(value) => handleChange(value)}
              inline={layout !== "horizontal"}
            >
              {options.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          ) : (
            <div>
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
              </InputGroup>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TFrom;

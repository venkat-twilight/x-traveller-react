import { ReactNode } from "react";

export interface FieldOptionProps {
  label: string;
  value: number | string;
}

export interface FieldProps {
  title?: string;
  placeholder?: string | any;
  name?: string;
  type?:
    | "input"
    | "select"
    | "checkbox"
    | "radio"
    | "input_btn"
    | "password"
    | "terms";
  options?: FieldOptionProps[];
  value?: string | boolean | any;
  searchable?: boolean;
  accepter?: any | null;
  validationMessage?: any;
  onChange?: (name: any, value: number | boolean | string) => void;
}

export interface TButtonProps {
  label?: string;
  type?: "primary" | "default" | "link" | "ghost";
  icon?: ReactNode;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
  padding?: string;
  block?: boolean; // Add this prop
  background?: string;
}

export interface TabNavItemProps {
  title: string;
  key: string;
  content: React.ReactNode;
}

export interface TTabProps {
  TabNav: TabNavItemProps[];
}

export interface DataItemProps {
  [key: string]: string;
}

export interface DataTableProps {
  data: DataItemProps[];
  headers: string[];
  icons?: { [key: string]: string };
}

export interface AccordionProps {
  header?: string; // The header text
  render?: ReactNode; // The content to render inside the accordion
  classname?: string; // Custom class for styling
  defaultExpanded?: boolean; // Boolean to set if the accordion is expanded by default
  icon?: string; // New icon prop of type ReactNode
}

export interface TimerProps {
  seconds?: number; // Optional prop for the initial time in seconds
  fontColor?: string; // Optional prop for the font color of non-zero values
  timeInSec?: number; // Optional prop for setting a specific time
}

export interface InitialStateProps {
  loading: boolean;
  data: any | null;
  error: any | null;
}

import { IEditFormValues } from "@/@types/global";
import { InputHTMLAttributes } from "react";

export interface IEditInputProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue: string;
  onFormSubmit: (formData: IEditFormValues) => Promise<void> | void;
}

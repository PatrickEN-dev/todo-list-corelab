import { TextareaHTMLAttributes } from "react";
import { IEditFormValues } from "@/@types/global";

export interface IEditTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  initialValue: string;
  onFormSubmit: (formData: IEditFormValues) => Promise<void> | void;
}

"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IEditTextAreaProps } from "./interfaces";
import { IEditFormValues } from "@/@types/global";

export const EditTextArea = ({ initialValue, onFormSubmit, ...rest }: IEditTextAreaProps) => {
  const [editing, setEditing] = useState(false);

  const { register, handleSubmit, watch } = useForm<IEditFormValues>({
    values: { value: initialValue },
  });

  const submit: SubmitHandler<IEditFormValues> = () => {
    const activeElement = document.activeElement;

    if (activeElement instanceof HTMLTextAreaElement) activeElement.blur();
  };

  const onTextAreaBlur = async () => {
    const value = watch("value");
    await onFormSubmit({ value });
    setEditing(false);
  };

  const onTextAreaClick = () => {
    if (!editing) setEditing(true);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <textarea
        {...register("value")}
        {...rest}
        onBlur={onTextAreaBlur}
        onClick={onTextAreaClick}
        readOnly={!editing}
      />
    </form>
  );
};

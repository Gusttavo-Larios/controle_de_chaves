import React from "react";
import {UseFormRegister} from 'react-hook-form'

import { InputProps } from "./interface";
import { BaseStyledInput } from "./styled";

const Input = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<InputProps>>
>((props, ref) => (
  <BaseStyledInput {...props} ref={ref} />
))

export { Input };

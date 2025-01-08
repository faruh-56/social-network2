import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }


export const Input = ({type, placeholder} : InputProps) => {
  return (
    <input type={type} placeholder={placeholder} />
  )
}

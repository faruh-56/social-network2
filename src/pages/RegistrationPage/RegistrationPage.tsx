import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/Typography";
import { Button } from "../../components/UI";
import { Input } from "../../components/UI";
import "./RegistrationPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegistrationForm {
    username: string;
    usersurname: string;
    usercity: string;
    useremail: string,
    userphone: string;
    userpassword: string;
}

const registrationFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле"),
  userpassword: yup.string().required("Обязательное поле").min(8, "Минимум 8 символов"),
  usercity: yup.string().required("Обязательное поле"),
  username: yup.string().required("Обязательное поле"),
  userphone: yup.string().required("Обязательное поле").min(13, "Минимум 13 символов"),
  usersurname: yup.string().required("Обязательное поле")
});

export const RegistrationPage = () => {
  const {
    control, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema), 
    defaultValues: {useremail: "", userpassword: "", username: "", usercity: "", usersurname: "", userphone: "", }})

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data);
    
  }

  return (
    <div className="RegistrationPage">
      <Heading type="h1" text="Регистрация" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="username" control={control} render={({ field }) => (
          <Input 
          isError={errors.username ? true : false} 
          errorMessage={errors.username?.message} 
          type="text" 
          placeholder="Имя" 
          {...field}/>
        )}/>
        <Controller name="usersurname" control={control} render={({ field }) => (
          <Input 
          isError={errors.usersurname ? true : false} 
          errorMessage={errors.usersurname?.message} 
          type="text" 
          placeholder="Фамилия" 
          {...field}/>
        )}/>
        <Controller name="usercity" control={control} render={({ field }) => (
          <Input 
          isError={errors.usercity ? true : false} 
          errorMessage={errors.usercity?.message} 
          type="text" 
          placeholder="Город" 
          {...field}/>
        )}/>
        <Controller name="useremail" control={control} render={({ field }) => (
          <Input 
          isError={errors.useremail ? true : false} 
          errorMessage={errors.useremail?.message} 
          type="text" 
          placeholder="Почта" 
          {...field}/>
        )}/>
        <Controller name="userphone" control={control} render={({ field }) => (
          <Input 
          isError={errors.userphone ? true : false} 
          errorMessage={errors.userphone?.message} 
          type="string" 
          placeholder="Номер телефона" 
          {...field}/>
        )}/>
        <Controller name="userpassword" control={control} render={({ field }) => (
          <Input 
          isError={errors.userpassword ? true : false} 
          errorMessage={errors.userpassword?.message} 
          type="password" 
          placeholder="Пароль" 
          {...field}/>
        )}/>
        <Button type="submit" text="Войти" />
      </form>
      <AppLink text="Забыли пароль?" href="#" />
      <AuthWith />
    </div>
  );
};
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل وارد شده معتبر نیست")
    .min(10, "ایمیل حداقل باید 10 کاراکتر داشته باشد")
    .max(30, "ایمیل حداکثر میتواند 30 کاراکتر داشته باشد")
    .required("ایمیل را وارد کنید"),
  password: Yup.string()
    .min(8, "پسورد باید حداقل 8 کاراکتر داشته باشد")
    .required("پسورد را وارد کنید")
});

export default registerSchema;

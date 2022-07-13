import * as yup from "yup";

export const defaultValues = {
  year: "2022",
  month: "",
  card: "",
  cvv: "432",
  country: "Canada",
  postal: "M5G2Y1",
};

export const validate = yup.object({
  year: yup.string().required("please enter year"),
  month: yup.string().required("please enter month"),
  card: yup
    .string()
    .required("please enter card")
    .min(12, "12 digits")
    .max(15, "15 digits including spaces"),
  cvv: yup
    .string()
    .required("enter 3 digit on the back of the card")
    .min(3, "minimum 3")
    .max(3, "maximum 3"),
  country: yup.string().required("enter country"),
  postal: yup.string().required("postal code").min(6, "eg: M4N 2J5").max(7),
});

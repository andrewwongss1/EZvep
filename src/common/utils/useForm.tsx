import { useState } from "react";
import { notification } from "antd";
import { handleSubmit as firebaseSubmit } from "../../backend/submitForm";
import { useHistory } from "react-router-dom";

interface IValues {
  name: string;
  phoneNumber: string;
  email: string;
}

const initialValues: IValues = {
  name: "",
  phoneNumber: "",
  email: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const history = useHistory();
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    try {
      if (Object.values(errors).every((error) => error === "")) {
        await firebaseSubmit(event, values.name, values.phoneNumber, values.email);
        event.target.reset();
        setFormState(() => ({
          values: { ...initialValues },
          errors: { ...initialValues },
        }));

        notification["success"]({
          message: "Success",
          description: "Your message has been sent!",
        });
        
        // Update URL for conversion tracking
        history.push("/thank-you-for-submission");
        
        // Send conversion event to Google Analytics if available
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-16913080207',
            'transaction_id': new Date().getTime().toString()
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};

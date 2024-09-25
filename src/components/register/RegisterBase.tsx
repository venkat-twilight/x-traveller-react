import React, { useState, useEffect, useMemo } from "react";
import TForm from "../Common/TForm";
import { Container, Heading, VStack } from "rsuite";
import { registerForm } from "@/src/utils/formData";
import TButton from "../Common/TButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchStateListData } from "../../serves/state.api";
import { register } from "../../serves/Register.api";
import { AppDispatch, RootState } from "../../utils/redux/store";
import { useRouter } from "next/navigation";
import { FormValues, RegisterPayload } from "@/src/models/register.model";
import { fetchCityListData } from "@/src/serves/city.api";
import { cityItemProps } from "@/src/models/city.model";
import { debounce } from "lodash"; // Adding lodash for debounce



const RegisterForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const stateList = useSelector(
    (state: RootState) => state.stateList.stateList
  );
  const districtList = useSelector(
    (state: RootState) => state.districtList.data
  );

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    state: null,
    district: null,
    confirmPassword: "",
    is_accept: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formValid, setFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch states on component mount
  useEffect(() => {
    dispatch(fetchStateListData());
  }, [dispatch]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (formValues.state) {
      dispatch(fetchCityListData(formValues.state));
    }
  }, [formValues.state, dispatch]);

  // Handle input change with debounce for optimization
  const handleChange = debounce(
    (name: keyof FormValues, value: number | boolean | string) => {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    200
  );

  // Validate form fields
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.mobile) newErrors.mobile = "Mobile number is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.password) newErrors.password = "Password is required";
    if (!formValues.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (formValues.password !== formValues.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formValues.state) newErrors.state = "State is required";
    if (!formValues.district) newErrors.district = "City is required";
    if (!formValues.is_accept)
      newErrors.is_accept = "You must accept the terms and conditions";

    setErrors(newErrors);
    setFormValid(Object.keys(newErrors).length === 0);
  };

  // Handle form submission
  const handleSubmit = () => {
    validate();

    if (!formValid) {
      return;
    }

    setIsSubmitting(true);

    const registerPayload: RegisterPayload = {
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      mobile_number: formValues.mobile,
      email: formValues.email,
      password: formValues.password,
      state: formValues.state,
      district: formValues.district,
    };

    dispatch(register(registerPayload))
      .then((result) => {
        console.log("Registration successful", result);
        router.push("/");
      })
      .catch((error) => {
        console.error("Registration failed", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Memoized transformation of state and district data to avoid unnecessary computations
  const stateOptions = useMemo(
    () => transformStateData(stateList),
    [stateList]
  );
  const districtOptions = useMemo(
    () => transformCityData(districtList),
    [districtList]
  );

  return (
    <Container>
      <div style={{ background: "#fff" }}>
        <br />
        <div style={{ textAlign: "center" }}>
          <Heading>Register</Heading>
          <br />
        </div>
        <div
          style={{
            margin: "auto",
            width: "45%",
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "1px 20px",
          }}
        >
          {registerForm.map((field) => (
            <div key={field.name} style={{ position: "relative" }}>
              <TForm
                title={field.title}
                placeholder={field.placeholder}
                type={
                  field.type.toLowerCase() as "input" | "password" | "select"
                }
                searchable={field.type === "select"}
                name={field.name}
                value={formValues[field.name as keyof FormValues]}
                validationMessage={errors[field.name]}
                options={
                  field.name === "state"
                    ? stateOptions
                    : field.name === "district"
                    ? districtOptions
                    : []
                }
                onChange={handleChange}
              />
            </div>
          ))}{" "}
          <TForm
            title="Terms and Conditions"
            placeholder={
              <>
                I accept the{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </a>
              </>
            }
            name="is_accept"
            type="checkbox"
            value={formValues.is_accept}
            validationMessage={errors.is_accept}
            onChange={() => handleChange("is_accept", !formValues.is_accept)}
          />
        </div>
        <VStack alignItems="center" justifyContent="center" spacing={10}>
          {" "}
          <TButton
            block={formValid}
            label="Register"
            onClick={handleSubmit}
            disabled={isSubmitting}
          />
          <div>
            Already have an account?
            <TButton link="/" type="link" label="Login" />
          </div>
        </VStack>
        <br />
      </div>
    </Container>
  );
};

export default RegisterForm;

// Data transformation functions
const transformStateData = (data: { id?: number; state: string }[]) => {
  return data
    ?.filter((item) => item.id !== undefined)
    .map((item) => ({
      label: item.state,
      value: item.id ?? 0, 
    }));
};

const transformCityData = (data: cityItemProps[]) => {
  return data
    ?.filter((item) => item.state_id !== undefined)
    .map((item) => ({
      label: item.city,
      value: item.state_id ?? 0, 
    }));
};

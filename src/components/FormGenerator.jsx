import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box, InputLabel, MenuItem, Select } from "@mui/material";
import TextFieldComponent from "./Fields/TextField";
import TextAreaComponent from "./Fields/TextArea";
import DropdownComponent from "./Fields/Dropdown";
import CheckboxComponent from "./Fields/CheckBox";
import RadioComponent from "./Fields/Radio";
import { DropdownOptions, Radioptions } from "../utils/data";

const FormGenerator = () => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm();
  const [formFields, setFormFields] = useState([]);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    localStorage.setItem("formFields", JSON.stringify(data));
  };

  const addFormField = (type) => {
    setFormFields([...formFields, { type, label: "" }]);
  };

  const removeFormField = (index) => {
    const updatedFormFields = [...formFields];
    updatedFormFields.splice(index, 1);
    setFormFields(updatedFormFields);
  };

  const renderField = (field, index) => {
    switch (field.type) {
      case "text":
        return (
          <TextFieldComponent
            label={field.label}
            register={register(`fields[${index}].value`, { required: true })}
            error={!!errors?.fields?.[index]?.value}
          />
        );
      case "textarea":
        return (
          <TextAreaComponent
            label={field.label}
            register={register(`fields[${index}].value`, { required: true })}
            error={!!errors?.fields?.[index]?.value}
          />
        );
      case "dropdown":
        return (
          <DropdownComponent
            label={field.label}
            register={register(`fields[${index}].value`, { required: true })}
            options={DropdownOptions}
            error={!!errors?.fields?.[index]?.value}
          />
        );
      case "checkbox":
        return (
          <CheckboxComponent
            label={"CheckBox"}
            register={register(`fields[${index}].value`, { required: true })}
            options={Radioptions}
          />
        );
      case "radio":
        return (
          <RadioComponent
            label={field.label}
            register={register(`fields[${index}].value`, { required: true })}
            options={Radioptions}
          />
        );
      default:
        return null;
    }
  };

  const saveFormConfig = () => {
    const formConfig = JSON.stringify(formFields);
    localStorage.setItem("formConfig", formConfig);
  };

  const loadFormConfig = () => {
    const savedFormConfig = localStorage.getItem("formConfig");
    if (savedFormConfig) {
      setFormFields(JSON.parse(savedFormConfig));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={3}>
        {formFields.map((field, index) => (
          <Box key={index} mb={2} display="flex" alignItems="center">
            <Box flex={1}>{renderField({ ...field, index })}</Box>
            <Box
              mx={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputLabel
                sx={{
                  marginRight: "10px",
                  padding: "0",
                }}
              >
                Field Type:{" "}
              </InputLabel>
              <Select
                style={{
                  width: "200px",
                }}
                value={field.type}
                onChange={(e) => {
                  setValue(`fields[${index}].type`, e.target.value);
                  setFormFields((prevFields) =>
                    prevFields.map((prevField, prevIndex) =>
                      prevIndex === index
                        ? { ...prevField, type: e.target.value }
                        : prevField
                    )
                  );
                }}
              >
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="textarea">Textarea</MenuItem>
                <MenuItem value="dropdown">Dropdown</MenuItem>
                <MenuItem value="checkbox">Checkbox</MenuItem>
                <MenuItem value="radio">Radio</MenuItem>
              </Select>
            </Box>
            <Button
              onClick={() => removeFormField(index)}
              variant="contained"
              color="error"
            >
              Remove
            </Button>
          </Box>
        ))}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Button
            onClick={() => addFormField("text")}
            variant="contained"
            color="primary"
          >
            Add Text Field
          </Button>
          <Button
            onClick={() => addFormField("textarea")}
            variant="contained"
            color="primary"
          >
            Add Textarea Field
          </Button>
          <Button
            onClick={() => addFormField("dropdown")}
            variant="contained"
            color="primary"
          >
            Add Dropdown Field
          </Button>
          <Button
            onClick={() => addFormField("checkbox")}
            variant="contained"
            color="primary"
          >
            Add Checkbox Field
          </Button>
          <Button
            onClick={() => addFormField("radio")}
            variant="contained"
            color="primary"
          >
            Add Radio Field
          </Button>
        </div>
        <Box
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: "10px",
          }}
        >
          <Button onClick={saveFormConfig} variant="contained" color="primary">
            Save Form Configuration
          </Button>
          <Button
            onClick={loadFormConfig}
            variant="contained"
            color="secondary"
          >
            Load Form Configuration
          </Button>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default FormGenerator;

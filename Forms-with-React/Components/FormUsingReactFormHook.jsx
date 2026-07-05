import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormUsingReactFormHook = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const resetForm = () => {
    reset();
  };

  // const validateName = (value) => {
  //   if (value != "admin") {
  //     return "Only admin is allowed";
  //   }
  // };

  // console.log(watch("name"));

  // const watchName = watch("name");
  // const watchEmail = watch("email");

  // useEffect(() => {
  //   console.log("Name: " + watchName);
  // }, [watchName]);

  // useEffect(() => {
  //   console.log("Email: " + watchEmail);
  // }, [watchEmail]);

  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <h1> Forms in React</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center w-full p-7"
          >
            <label className="mb-3 w-full">
              Name:{" "}
              <input
                {...register("name", {
                  // minLength: 4,
                  minLength: {
                    value: 2, // This is how we set a custom error message
                    message: "Name should be atleast 2 characters",
                  },
                  required: "Name should not be empty",
                  // validate: validateName,
                  validate: {
                    notAdmin: (value) =>
                      value !== "admin" || "Admin is not allowed",
                    isNotNumber: (value) =>
                      isNaN(value) || "Name cannot be a number",
                  }, // we can add as many as we want
                })}
                className="border rounded w-full ps-2 focus:ring-2 focus:ring-blue-500"
              />
            </label>
            {errors.name && <p>{errors.name.message}</p>}
            <label className="mb-3 w-full">
              Email :{" "}
              <input
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    cannotBeEmpty: (value) =>
                      value !== "" || "Email cannot be empty",
                  },
                })}
                className="border rounded w-full ps-2"
              />
            </label>
            {errors.email && <p>Email is required</p>}

            <div className="flex gap-2">
              <button type="submit" className="border p-1 rounded w-50">
                Submit
              </button>
              <button
                type="button"
                className="border p-1 rounded w-50"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

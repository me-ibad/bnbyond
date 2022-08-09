import React from "react";
import { useFormik } from "formik";

import { useNavigate, Link } from "react-router-dom";

import * as Yup from "yup";
import { useCreateEmailAccount } from "hooks";

function Signup() {
  let navigate = useNavigate();
  const { mutateAsync: createEmailAccount, isLoading } =
    useCreateEmailAccount();

  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      username: "",
      pass: "",
      cpass: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, "Must be more than 4 characters")
        .required("Required"),
      pass: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line
      const response = await createEmailAccount(values);
      navigate("/");
    },
  });
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div className="w-full lg:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-auth rounded-lg  border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-grey-500 text-sm font-bold">Sign up</h6>
            </div>

            <hr className="mt-6 border-b-1 border-grey-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-grey-600 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Name
                </label>
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  className="input-styl"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fname}
                />
                {formik.touched.fname && formik.errors.fname ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.fname}
                  </div>
                ) : null}
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-grey-600 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-styl"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-grey-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  User Name
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="input-styl"
                  placeholder="User Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-grey-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  name="pass"
                  id="pass"
                  type="password"
                  className="input-styl"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pass}
                />
                {formik.touched.pass && formik.errors.pass ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.pass}
                  </div>
                ) : null}
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-grey-600 text-xs font-bold mb-2"
                  htmlFor="grid-cpass"
                >
                  Confirm Password
                </label>
                <input
                  name="cpass"
                  id="cpass"
                  type="password"
                  className="input-styl"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cpass}
                />
                {formik.touched.cpass && formik.errors.cpass ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.cpass}
                  </div>
                ) : null}
              </div>

              <div className="text-center mt-6">
                {isLoading ? (
                  <div />
                ) : (
                  <>
                    <button className="btn-styl" type="submit">
                      Register
                    </button>
                  </>
                )}
              </div>
            </form>
            <a
              href="/auth/signin"
              className="flex float-right font-bold text mt-4 underline"
            >
              Signin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import React from 'react'
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useLoginEmailAccount } from "hooks";

function MemberForm() {
    let navigate = useNavigate();
   

    const formik = useFormik({
        initialValues: {
            ownerid: "",
            paddress: "",
          propertydetail:""
        },
        validationSchema: Yup.object().shape({
          username: Yup.string()
            
            .required("Required"),
          pass: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
         
        //   navigate("/");
        },
      });
  return (
    <>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <Grid container spacing={2}>
        <Grid item lg={12} md={5} sm={12} xs={12}>
          <div className="memberForm-wrapper relative flex flex-col min-w-0 break-words w-6/12  m-auto mb-6 shadow-lg bg-auth rounded-lg  border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-grey-500 text-sm font-bold">Member Info</h6>
              </div>

              <hr className="mt-6 border-b-1 border-grey-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-grey-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
               Owner ID
                  </label>
                  <input
                    id="ownerid"
                    name="ownerid"
                    type="text"
                    className="input-styl"
                    placeholder="Owner ID"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ownerid}
                  />
                  {formik.touched.ownerid && formik.errors.ownerid ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.ownerid}
                    </div>
                  ) : null}
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block text-grey-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Property Address
                  </label>
                  <input
                    name="paddress"
                    id="paddress"
                    type="text"
                    className="input-styl"
                    placeholder="Property Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.paddress}
                  />
                  {formik.touched.paddress && formik.errors.paddress ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.paddress}
                    </div>
                  ) : null}
                </div>


                <div className="relative w-full mb-3">
                  <label
                    className="block text-grey-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Property Details
                  </label>
                  <textarea
                    name="propertydetail"
                    id="propertydetail"
                    type="text"
                    className="input-styl"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propertydetail}
                  />
                  {formik.touched.propertydetail && formik.errors.propertydetail ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.propertydetail}
                    </div>
                  ) : null}
                </div>
               

                 <div className="text-center mt-6">
                 
                      <button className="btn-styl" type="submit">
                      Apply
                      </button>
                   
                </div> 
               

            
              </form>

            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default MemberForm


import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import { useMutation, useQuery } from "react-query";
import ErrorService from "services/formatError/ErrorService";
import userServices from "services/httpService/userAuth/userServices";
import userService from 'services/httpService/userAuth/userServices';

import Button from "@mui/material/Button";
import { localStorageData, Logout } from "services/auth/localStorageData";
import { useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Switch from '@mui/material/Switch';

const columns = [
  { id: "title", label: "Title", minWidth: 150 },
  { id: "address", label: "Address", minWidth: 150 },

  { id: "price", label: "Price", minWidth: 50 },
  { id: "edit", label: "edit", minWidth: 20 },
  { id: "availability", label: "availability", minWidth: 20 },
  { id: "viewListing", label: "viewListing", minWidth: 20 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

function ViewProperty() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [allPost, setallPost] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getAllPlaces = useQuery(
    "ordersData",
    () =>
      userServices.commonGetService(
        `/property/getPropertyByUserId/${localStorageData("_id")}`
      ),
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (res) => {
        console.log(res.data);
        // setListPlaces(res.data);
      },
    }
  );

  const getproperty = async () => {
    let res = await userServices.commonGetService(
      `/property/getPropertyByUserId/${localStorageData("_id")}`
    );
    setallPost(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getproperty();
  }, []);

  let navigate = useNavigate();



 const { mutate,isLoading } = useMutation(
  (token) => userService.commonPostService('/property/toogleProperty', token),
  {
    onError: (error) => {
      toast.error(ErrorService.uniformError(error),"error not available");
    },
    onSuccess: (data) => {
      toast.success('Property Status Changed');

     
      /// console.log(result);
    },
  }
);

  
const toggleHandleChange=(event,row)=>{

  
row.status=event.target.checked
  let toggleData={
    propertyId:row._id,
     status:event.target.checked
   }
mutate(toggleData)

}
const onClickView=(row)=>{
if(row._id){
  navigate('/propertydetails/'+row._id)
}
}
 
  return (
    <div className="mt-20">
      <Container maxWidth="lg">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {allPost != ""
                  ? allPost
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];

                              if (column.id === "edit") {
                                return (
                                  <TableCell
                                  key={column.id}
                                  align={column.align}
                                >
                                  <div
                                    className="m-4 bg-color-green p-2 font-bold rounded flex center-styl"
                                    onClick={() => {
                                      // console.log(row);
                                      // navigate('/propertylisting', { state: row })
                                      navigate('/propertylisting',{state:{offerState:row}})
                                    }}
                                  >
                                    <div classname="text-black  text-lg text-center ">
                                      Edit
                                    </div>
                                  
                                  </div>
                                  </TableCell>
                                  
                                );
                                
                               
                              } 
                              else if (column.id === "availability") {
                                return (

                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                  <div
                                    className="m-4 bg-color-green p-2 font-bold rounded flex center-styl"
                                  >
                                    <div classname="text-black  text-lg text-center ">
                                
                                    <Switch {...label} 
                                    checked={row.status}
                                    onChange={(event)=>toggleHandleChange(event,row)}/>
                                    </div>
                                   
                                  </div>
                                  </TableCell>
                                );
                                
                              } 
                              else if (column.id === "viewListing") {
                                return (

                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                  <div
                                    className="m-4 bg-color-green p-2 font-bold rounded flex center-styl"
                                  >
                                    <div classname="text-black  text-lg text-center "
                                    onClick={()=>onClickView(row)}
                                    >
                                
                                   viewListing
                                    </div>
                                   
                                  </div>
                                  </TableCell>
                                );
                                
                              } 
                            
                              else {
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                         

                                  </TableCell>
                                  
                                );
                              }
                            })} 
                  
                          </TableRow>
                        );
                      })
                  : ""}
                  
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={allPost.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
}

export default ViewProperty;

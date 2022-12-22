import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import { useMutation, useQuery } from 'react-query';
import ErrorService from 'services/formatError/ErrorService';
import userServices from 'services/httpService/userAuth/userServices';

import Button from '@mui/material/Button';
import { localStorageData, Logout } from 'services/auth/localStorageData';

import { toast } from 'react-toastify';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'fname', label: 'Title', minWidth: 150 },
  { id: 'email', label: 'Address', minWidth: 150 },

  //   { id: 'price', label: 'Price', minWidth: 50 },
  //   { id: 'status', label: 'Status', minWidth: 20 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

function ViewUser() {
  const [allusers, setallusers] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getproperty = async () => {
    let res = await userServices.commonGetService(`/admin/fetchAllUser`);
    setallusers(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getproperty();
  }, []);
  
    return (
      <div className='mt-20'>
        <Container maxWidth='lg'>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label='sticky table'>
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
                  {allusers != ''
                    ? allusers
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role='checkbox'
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
  
                                if (column.id === 'status') {
                                  return (
                                    <div className='m-4 bg-color-green p-2 font-bold rounded flex center-styl'>
                                      <div classname='text-black  text-lg text-center '>
                                        Active
                                      </div>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                }
                              })}
                            </TableRow>
                          );
                        })
                    : ''}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component='div'
              count={allusers.length}
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

export default ViewUser;

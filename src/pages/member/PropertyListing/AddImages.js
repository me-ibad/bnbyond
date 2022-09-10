import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useDropzone } from 'react-dropzone';

export default function AddImages(props) {
  const [option, setOption] = useState(null);
  const [img, setImg] = useState([]);

  const { acceptedFiles, fileRejections, open, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        'image/jpeg': [],
        'image/png': [],
      },
      maxFiles: 2,
      noClick: true,
      noKeyboard: true,
      onDrop: (acceptedFiles) => {
        setImg(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className='text-blue-800'>
      {file.path} - {file.size} bytes
    </li>
  ));

  const thumbs = img.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          className='w-10 h-10 object-contain'
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='bg-color-yellow p-10 grid center-styl rounded w-full h-96 relative'>
            <h1 className='text-5xl text-[#ead1a3] font-bold leading-tight'>
              What kind of property it is
            </h1>
            <div className='absolute right-0 bottom-0'>
              <img
                src={require('assets/img/icon.png')}
                alt='icon'
                className='w-20 h-20 rounded object-contain'
              />
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='mt-16'>
            <section className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} maxFiles={4} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <button type='button' onClick={open}>
                  Open File Dialog
                </button>
              </div>
              <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
                {thumbs}
              </aside>
            </section>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

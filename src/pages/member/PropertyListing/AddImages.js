import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useDropzone } from 'react-dropzone';
import ListingColor from 'components/Cards/ListingColor';
import { Dropzone, FileItem, FullScreenPreview } from '@dropzone-ui/react';

export default function AddImages({ state, setState }) {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log('incomming files', incommingFiles);
    setFiles(incommingFiles);
    setState((prevState) => ({ ...prevState, photos: incommingFiles }));
  };
  const onDelete = (id) => {

    console.log("id value is",id)
    setState((prevState) => ({ ...prevState, photos: state.photos.filter((x) => x.id !== id) }));


  
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log('list cleaned', files);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-yellow'
            text='Cool views of your property'
            color='text-[#ead1a3]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='lg:mt-16 sm:4'>
            <Dropzone
              style={{ minWidth: '550px' }}
              //view={"list"}
              onChange={updateFiles}
              minHeight='195px'
              onClean={handleClean}
              value={state.photos}
              minFiles={5}
              //header={false}
              // footer={false}
              maxFileSize={2998000}
              label='Drop your photos here (atleast 5)'
              //label="Suleta tus archivos aquí"
              accept='image/*'
              uploadingMessage={'Uploading...'}
              url='https://my-awsome-server/upload-my-file'
              //of course this url doens´t work, is only to make upload button visible
              //uploadOnDrop
              //clickable={false}
              fakeUploading
              //localization={"FR-fr"}
              disableScroll
            >
              {state.photos.length > 0 &&
                state.photos.map((file) => (
                  <FileItem
                    {...file}
                    key={file.id}
                    onDelete={onDelete}
                    onSee={handleSee}
                    //localization={"ES-es"}
                    resultOnTooltip
                    preview
                    info
                    hd
                  />
                ))}
            </Dropzone>
            <FullScreenPreview
              imgSource={imageSrc}
              openImage={imageSrc}
              onClose={(e) => handleSee}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tabs from 'components/Tabs/Tab';
import TabPane from 'components/Tabs/TabPane';
function PropertyDetails() {
  return (
    <main className='relative w-full  h-full  min-h-screen my-10'>
      <section>
        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            <Grid item lg={8} md={6} sm={12} xs={12}>
              <div className='my-2'>
                <div className='float-right grid grid-cols-2 gap-2 mb-2'>
                  <button className='border border-color-grey text-sm p-2 px-3 flex rounded-full'>
                    <i class='fas fa-share-square text-sm mx-2 my-1' />
                    Share
                  </button>
                  <button className='border border-color-grey text-sm p-2 px-3 flex rounded-full'>
                    <i class='far fa-heart text-red-500 text-sm mx-2 my-1' />
                    Star
                  </button>
                </div>
                <h1 className='text-2xl font-semibold text-black truncate'>
                  hack ton noves homes
                </h1>

                <div className='my-2'>
                  <img
                    src='https://img.freepik.com/premium-photo/luxury-interior-exterior-design-pool-villa-with-livingroom_41487-70.jpg?w=1060'
                    className='w-full h-96 object-cover rounded'
                    alt=''
                  />
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}></Grid>
          </Grid>
        </Container>
      </section>

      <section>
        <Container maxWidth='lg'>
          <Tabs>
            <TabPane name='dsfdf' key='1'>
              asdasd
            </TabPane>
            <TabPane name='erweitertes Profil' key='2'>
              asd
            </TabPane>
          </Tabs>
        </Container>
      </section>
    </main>
  );
}

export default PropertyDetails;

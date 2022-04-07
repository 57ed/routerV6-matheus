import React from 'react';

const Home = () => {
  const url = 'https://picsum.photos/200';
  const text = 'image card';

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='text-center text-primary'>Home</h1>
        </div>
        <div className='col-md-12 mt-4 mb-4'>
          <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className='col-md-4'>
              <div className='card'>
                <img src={url} className='card-img-top' alt={text} />

                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <img src={url} className='card-img-top' alt={text} />

                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <img src={url} className='card-img-top' alt={text} />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <img src={url} className='card-img-top' alt={text} />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

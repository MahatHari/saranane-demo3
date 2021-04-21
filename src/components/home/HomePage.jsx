import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container shadow-none p-3 mb-5 bg-light rounded'>
        <h1 className=' shadow-none p-3 mb-5 bg-light rounded'>
          Welcome to Our Home Page
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          laborum nobis dolores sit, fugit alias atque voluptatem laboriosam
          praesentium minus in magni aperiam, beatae dolorem omnis aspernatur
          natus ea dignissimos. Laboriosam, provident repellat voluptatem
          placeat delectus in odio modi unde natus voluptas quo ipsum deserunt
          impedit optio, iusto nesciunt totam rem. Nihil ratione voluptas
          tenetur maxime, aspernatur temporibus nisi ducimus. Quis voluptatibus
          ab, illo dolor perferendis necessitatibus beatae voluptates modi harum
          sapiente veniam doloribus optio possimus delectus assumenda commodi
          distinctio vel corporis, totam molestiae! Beatae delectus labore
          numquam odio unde!
        </p>
        <Link to='about'>
          <button className='btn btn-primary btn-xlg'>Read More...</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

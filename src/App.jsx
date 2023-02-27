import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.module.css';
const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./page/Home/Home'));
const Movie = lazy(() => import('./page/Movie/Movie'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <div>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="/movie/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

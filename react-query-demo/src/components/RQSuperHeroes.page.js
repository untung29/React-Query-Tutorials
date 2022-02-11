/**
 * Homework
 * Polling + Callback
 * refetchInterval option every 3 seconds
 * add a new superhero
 * If the new superhero is 4, then stop pulling, and if error stop pulling too
 */

import { useSuperHeroesData } from '../hooks/useSuperHeroesData.js';
import { Link } from 'react-router-dom';

export const RQSuperHeroesPage = () => {
  const onSuccess = data => {};

  const onError = error => {
    console.log(error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes!</button>
      {data?.data.map(hero => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

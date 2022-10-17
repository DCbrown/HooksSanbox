import useFetch from '../hooks/api/useFetch'

function TempComponent() {
  const { isLoading, serverError, apiData } = useFetch('https://zelda.fanapis.com/api/games')  

  const gameName = apiData[0].name;

  return (
    <> 
      {apiData && <h4>Custom API Hook Getting Data From API</h4>}
      {serverError && <h4>Error, could not get data</h4>}
      {isLoading && <h4>Loading...</h4>}
      {apiData && <p>{gameName}</p>}
    </>
  );
}

export default TempComponent

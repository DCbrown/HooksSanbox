import useFetch from '../hooks/api/useFetch'

function TempComponent() {
  const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1')
    
  return (
    <>
      {data && data}
    </>
  );
}

export default TempComponent

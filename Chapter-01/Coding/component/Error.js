import { useRouteError } from 'react-router-dom';

const Error = () => {
    const {status,statusText} = useRouteError();
    console.log(err);
  return (
    <>
        <h1>Erro Page, Something went Wrong  </h1>
        <h2>Hello From Error Page, No Page Found!</h2>
        <h3>{status + " : " +  statusText}</h3>
    </>
  )
}

export default Error
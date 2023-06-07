import { Helmet } from 'react-helmet-async';

export default function ProductPage() {
  return (
   isLoading ? (
      <LoadingBox />)
      : 
      error   ? (
        <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
      )
      : !product ? (
        <MessageBox variant="danger">Product Not Found</MessageBox>
      ):
    (<div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      ProductPage
    </div>
  );
}

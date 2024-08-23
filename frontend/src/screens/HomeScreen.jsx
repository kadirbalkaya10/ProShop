import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";

function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error.data.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;

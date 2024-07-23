import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./(component)/Navbar";
import Landing from "./(component)/Landing";
import Sponsors from "./(component)/Sponsors";
import Services from "./(component)/Services";
import Testimonial from "./(component)/Testimonial";
import Newsletter from "./(component)/NewsLetter";
import Footer from "./(component)/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Sponsors />
      <Services />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

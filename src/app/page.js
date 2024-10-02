import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import OurClients from "./components/OurClients";
import Process from "./components/Process";
import Service from "./components/Service";
export default function page() {
  return (
    <>
      <Home />
      <OurClients />
      <Service/>
      <Process />
      <Comparison/>
 
      <FAQ/>
    </>
  );
}

import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { useEffect } from "react";
import CustomCursor from './Components/CustomCursor';

function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <>
      <Component {...pageProps} />
      <CustomCursor />
    </>
  )
}
export default App;
import { useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import SEO from "../../helpers/SEO"

const Layout = () => {


  const location = useLocation();
  const {pathname} = location;


  let titleData;

  if(pathname === "/home"){
    titleData={
      title:"Bubble-Dervish-Home ",
      metaDescription: " Bubble-Dervish-Blog is a blog website that provides information about the latest technology, programming, and software development. It is a platform where you can find the latest news and updates about the tech world." ,
    }
  }else if(pathname === "/blogs"){
    titleData={
      title:"Bubble-Dervish-Blogs ",
      metaDescription: " Bubble-Dervish-Blog here is our blog page where you can find the latest blogs on technology, programming, and software development. It is a platform where you can find the latest news and updates about the tech world." ,
    }
  }else if(pathname === "/about"){
    titleData={
      title:"Bubble-Dervish-About ",
      metaDescription: " Bubble-Dervish-Blog this about page where you can read about the blogs purpose ." ,
    }
  }else if(pathname === "/contact"){
    titleData={
      title:"Bubble-Dervish-Contact ",
      metaDescription: " Bubble-Dervish-Blog this contact page where you can contact us ." ,
    }
  }else if(pathname === "/get-started/signin"){
    titleData={
      title:"Bubble-Dervish-Signin ",
      metaDescription: " Bubble-Dervish-Blog this signin page where you can signin let explore more ." ,
    }
  }else if(pathname === "/get-started/signup"){
    titleData={
      title:"Bubble-Dervish-Signup ",
      metaDescription: " Bubble-Dervish-Blog this signup page where you can signup to get started ." ,
    }
  }
  else{
    titleData={
      title:"Error 404-Page Not Found ",
      metaDescription: " Bubble-Dervish-Blog this page is not found ." ,
    }
  }

  SEO(titleData);


  return (
    <>
      <header className="fixed-top">
        <NavBar />
      </header>
      <main style={{ marginTop: "150px" }}>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

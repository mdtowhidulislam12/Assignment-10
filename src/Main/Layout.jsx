import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Countries from '../../public/public.json'
import { Outlet } from "react-router";






const Layout = () => {


    return (
        <div>
            {/* hearder */}
            <Navbar></Navbar>
            {/* main */}
            <main className=' min-h-56'>
                {/* <div>
                    {
                        Countries.map((c, index) => (<div>
                            <li>{c.country_name}</li>
                            <img src={c.country_image} alt="" />
                        </div>))
                    }
                </div> */}

                <Outlet></Outlet>
            </main>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;
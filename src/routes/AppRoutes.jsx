import { Route,Routes } from "react-router-dom";
import AdventureHomepage from "../components/AdventureHome";
import About from "../pages/About/About";
import Filters from "../pages/Tour/Filters";
import Destination from "../pages/Destination/Destination";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Booking from "../pages/Booking/Booking";
import Team from "../components/Team/Team";
import Navbar from "../components/Navbar";

function AppRoutes(props) {

    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route path="/" element={<Navbar />}>
    <Route index element={<AdventureHomepage {...props} />} />
    
    {/* nested routes, matches on /dash/messages etc */}
   
    
    <Route path='/about' element={<About {...props} />} />

    <Route path='/tour' element={<Filters {...props} />} />
    <Route path='/destination' element={<Destination {...props} />} />

    <Route path='/gallery' element={<Gallery {...props} />} />

    <Route path='/contact' element={<Contact {...props} />} />
    <Route path='/booking' element={<Booking {...props} />} />

    <Route path='/team' element={<Team {...props} />} />
    </Route>
    
    {/* special route to handle if none of the above match */}
    {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
    )
    }
    
    export default AppRoutes;
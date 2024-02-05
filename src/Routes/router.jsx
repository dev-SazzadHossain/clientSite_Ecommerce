import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "../Pages/Signup/Signup";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import { LoginUser, NotLogInUssr } from "../PrivateRoutes/LoginUser";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route errorElement={<h2>This Is Error Page</h2>}>
        <Route element={<LoginUser />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<NotLogInUssr />}>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Route>
      </Route>
    </Route>
  )
);

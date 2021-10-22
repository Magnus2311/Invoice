import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import HomePage from "./components/pages/home/HomePage";
import { connect, useStore } from "react-redux";
import Registration from "./components/pages/auth/Registration";
import Login from "./components/pages/auth/Login";
import { AuthenticatedRoute } from "./components/pages/auth/AuthenticatedRoute";
import EmailSent from "./components/pages/auth/EmailSent";
import EmailConfirmationPage from "./components/pages/auth/EmailConfirmationPage";
import Index from "./components/pages/auth/Index";
import ResetPassword from "./components/pages/auth/ResetPasswordPage";
import AddItemPage from "./components/pages/items/AddItemPage";
import * as itemAction from "./redux/actions/itemAction";
import AllItemsPage from "./components/pages/items/AllItemsPage";

function AppRouter(props) {
  const { dispatch } = props;

  const location = useLocation();

  var state = useStore().getState();
  return (
    <>
      <Switch key={location.key} location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/auth/registration" component={Registration} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/emailSent/:email" component={EmailSent} />
        <Route
          path="/auth/emailConfirmed/:email/:token"
          component={EmailConfirmationPage}
        />
        <Route path="/auth/index" component={Index} />
        <Route path="/items/addItem" component={AddItemPage} />
        {/* <Route path="/partners/addPartner" component={AddPartnerPage} /> */}
        <Route path="/items/all" component={AllItemsPage} />
        <Route path="/auth/resetPassword/:token" component={ResetPassword} />
      </Switch>
    </>
  );
}
export default connect()(AppRouter);

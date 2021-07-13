import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";

const ApplicationViews = () => {
  return (
    // The Switch component is going to look at the url and render the first route that is a match.
    <Switch>
      <Route path="/" exact>
        <VideoList />
      </Route>

      <Route path="/videos/add">
        <VideoForm />
      </Route>

      <Route path="/videos/:id">{/* TODO: Video Details Component */}</Route>
    </Switch>
  );
};

export default ApplicationViews;

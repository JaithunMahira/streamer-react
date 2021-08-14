import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route path="/streams/edit" component={StreamEdit}></Route>
          <Route path="/streams/delete" component={StreamDelete}></Route>
          <Route path="/streams/show" component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
//Client ID - 2306228860-bpcb6q9nl7kh2dn6bou8ggeailq1lvon.apps.googleusercontent.com
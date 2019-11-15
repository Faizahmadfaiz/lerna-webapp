import React from 'react';
import DevTools from 'mobx-react-devtools';
import { toast } from "react-toastify";
import MainLayout from "./MainLayout";
import { Provider } from 'mobx-react';
import LoaderResourceStore from "./store/LoaderStore";

import "./App.scss";

class App extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    toast.configure({
      autoClose: 5000,
      draggable: false,
      position: toast.POSITION.TOP_CENTER,
      pauseOnHover: false
    });
   	return (
       <div>
          <Provider
            loaderStore={LoaderResourceStore}
          >
              <MainLayout/>
          </Provider>
          <DevTools />
        </div>
  );
 }


}
export default App;

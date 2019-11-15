import React from "react";
import SearchUserContainer from "./SearchUser/SearchUserContainer";

import "./styles/ManagePreferences";

class ManagePreferences extends React.Component {
  render() {
    return (
      <div>
        <div>This is app2</div>
        <SearchUserContainer />
        
      </div>
    )
  }
  baseCls = "manage-preferences"
}

export default ManagePreferences;

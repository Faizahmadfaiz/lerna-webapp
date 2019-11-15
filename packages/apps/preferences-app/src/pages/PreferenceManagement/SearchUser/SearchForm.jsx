import React from "react";
import { Button } from 'buttons';

class SearchForm extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      searchKey: ""
    };
  }

  render() {
    const { searchKey } = this.state;
    return (
      <>
        <div>Below button is common component shared among apps</div>
        <Button
          btnType="button"
          btnName="Find"
          btnClass="btn btn-secondary"
        />
      </>
    );
  }


  baseCls = "search-form"
}

export default SearchForm;

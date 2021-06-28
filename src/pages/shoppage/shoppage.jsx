import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection/collection";

class Shoppage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: SHOP_DATA,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="shop-page">
          {data.map(({id, ...props }) => {
            return <CollectionPreview key={id} {...props} />;
          })}
        </div>
      </>
    );
  }
}

export default Shoppage;

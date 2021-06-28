import React from "react";
import { sections } from "./directory.data";
import MenuItem from "../menuitem/menuitem";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section, i) => {
          return (
            <MenuItem
              key={section.id}
              title={section.title}
              img={section.imageUrl}
              url={section.linkUrl}
              size={section.size}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;

import React, {Component, PropTypes} from "react";

import MediaItem from "./MediaItem";

export default class MediaList extends Component{

  render(){
    return(
      <div className="list-block media-list">
        <ul>
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
          <MediaItem goto="addproject" />
        </ul>
      </div>
    )
  }
}

MediaList.proptypes = {
  item: PropTypes.object.isRequired
}

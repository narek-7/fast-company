import React from 'react';
import Up from "../assets/hand_thumbs_up.png";
import Down from "../assets/hand_thumbs_down.png";


const Bookmark = (props) => {
	if (props.favorite) {
		return <img src={Up} alt="Up" width="20" height="20"></img>;
	}
	else {
		return <img src={Down} alt="Up" width="20" height="20"></img>;
	}
};

export default Bookmark;
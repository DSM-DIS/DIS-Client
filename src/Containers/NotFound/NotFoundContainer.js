import React from "react";
import NotFound from "../../Components/NotFound/NotFound";

const NotFoundContainer = () => {
	setTimeout(() => {
		alert("Not found page");
		window.location.href = "/main";
	}, 500);
	return <NotFound />;
};

export default NotFoundContainer;

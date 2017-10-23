import React from "react";
import { 
	Actions, 
	Scene, 
	Router 
} from "react-native-router-flux";
import HomeContainer from "./Home/containers";
// import TrackDriverContainer from "./TrackDriver/container/TrackDriverContainer";

const RouterComponent = () => {
return(
	<Router>
		<Scene key="root" hideNavBar>
			<Scene key="home" component={HomeContainer} title="home" initial />
			{/* <Scene key="trackDriver" component={TrackDriverContainer} title="trackDriver"/> */}
		</Scene>
	</Router>
	);
};

export default RouterComponent;
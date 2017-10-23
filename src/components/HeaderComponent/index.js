import React from "react";
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponentStyles";

export const HeaderComponent =  ({logo})=>{
	return (
		<Header style={{backgroundColor:"#73F3AB"}} iosBarStyle="light-content">
			
			<Body>{logo &&
					<Image resizeMode="contain" style={styles.logo} source={logo}/>
					||
					<Text style={styles.headerText}>Pick Location</Text>
				}
			</Body>
		</Header>
	);
}

export default HeaderComponent;
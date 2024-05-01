import { ImageBackground } from "react-native";

export function Background(props) {
    return (
        <ImageBackground 
            style={[{flex: 1}, props.style]} 
            source={require('../../assets/background.jpg')}
        >
            {props.children}
        </ImageBackground>
        
    );
}
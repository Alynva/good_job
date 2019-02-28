import React from "react"
import { createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"
import LandingPageScreen from "../screens/LandingPageScreen"
import SideBar from "./SideBar.js"

// export default class Navigator extends React.Component {
//     render() {
//         return (
//             <View></View>
//         )
//     }
// }

const LandingPageRouter = createDrawerNavigator(
    {
        LandingPage: { screen: LandingPageScreen }
    }, {
        contentComponent: props => <SideBar {...props} />
    }
)

export default createAppContainer(createSwitchNavigator(
    {
        LandingPage: LandingPageRouter
    }, {
        initialRouteName: "LandingPage"
    }
))
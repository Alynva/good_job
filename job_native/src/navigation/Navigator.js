import React from "react"
import { createDrawerNavigator, createAppContainer, createSwitchNavigator} from "react-navigation"
import LandingPageScreen from "../screens/LandingPageScreen"
import CompanyPageScreen from "../screens/CompanyPageScreen"
import SideBar from "./SideBar.js"

// export default class Navigator extends React.Component {
//     render() {
//         return (
//             <View></View>
//         )
//     }
// }

const LandingPageRouter = createSwitchNavigator(
    {
        LandingPage: { screen: LandingPageScreen, path : "LandingPage" },
        CompanyPage: { screen: CompanyPageScreen, path : "CompanyPage" }
    }, {
        initialRouteName: "LandingPage"
    }
)

export default createAppContainer(createDrawerNavigator(
    {
        CompanyPage: LandingPageRouter
    }, {
        contentComponent: props => <SideBar {...props} />
        
    }
))
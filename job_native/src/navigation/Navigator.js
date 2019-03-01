import React from "react"
import { createDrawerNavigator, createAppContainer, createSwitchNavigator} from "react-navigation"
import LandingPageScreen from "../screens/LandingPageScreen"
import CompanyPageScreen from "../screens/CompanyPageScreen"
import JobPageScreen from "../screens/JobPageScreen"
import ChatPageScreen from "../screens/ChatPageScreen"
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
        CompanyPage: { screen: CompanyPageScreen, path : "CompanyPage" },
        JobPage: { screen: JobPageScreen, path : "JobPage" },
        ChatPage: { screen: ChatPageScreen, path: "ChatPage" },
    }, {
        initialRouteName: "ChatPage"
    }
)

export default createAppContainer(createDrawerNavigator(
    {
        CompanyPage: LandingPageRouter
    }, {
        contentComponent: props => <SideBar {...props} />
        
    }
))
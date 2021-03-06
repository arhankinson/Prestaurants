import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultsShowScreen from "./src/Screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
},
{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Liverpool restaurant finder"
    
  }
});

export default createAppContainer(navigator);



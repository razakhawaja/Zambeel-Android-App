import { StackNavigator } from 'react-navigation'

import Home from '../screens/home'
import Loginsk from '../screens/loginscreen'

const Navigator=StackNavigator({
	home: {
		screen: Home,
	},
	loginn: {
		screen: Loginsk,
	},
})


export default Navigator
const {createContext} = require('react');
const UserContext = createContext({
    loggedInUser: "DefaultUser",
})
export default UserContext;
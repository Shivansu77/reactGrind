const {createContext} = require('react');
const UserContext = createContext({
    loggedInUser: "DsefaultUser",
})
export default UserContext;
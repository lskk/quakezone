
import {AsyncStorage} from 'react-native';

export default Globals = class Globals {
    Protocol = 'http://';
    Host = '10.60.155.38:9708/BPAManagement';
    UserToken = async () => {
        token = await AsyncStorage.getItem('userToken');
        return token;
    };
    First = {
        PageX :0,
        PageY:0,
        Width:0,
        Height:0
    };
    Second = {
        PageX :0,
        PageY:0,
        Width:0,
        Height:0
    };
    Third1 = {
        PageX :0,
        PageY:0,
        Width:0,
        Height:0
    };
    Third2 = {
        PageX :0,
        PageY:0,
        Width:0,
        Height:0
    };
    Third3 = {
        PageX :0,
        PageY:0,
        Width:0,
        Height:0
    };


}



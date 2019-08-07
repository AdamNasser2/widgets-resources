// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNativeFirebase from "react-native-firebase";

/**
 * Cancels all pending scheduled notifications.
 * @returns {boolean}
 */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
function CancelAllScheduledNotifications(): boolean {
    // BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/reference/Notifications#cancelAllNotifications

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const firebase: typeof ReactNativeFirebase = require("react-native-firebase");

    firebase.notifications().cancelAllNotifications();
    return true;

    // END USER CODE
}
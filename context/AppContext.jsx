import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
export const appContext = createContext();

export const useAppContext = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContext = ({ children }) => {
  const [userLogged, setUserLogged] = useState(null);
  // const [userLog, setUserLog] = useState({
  //   sessionData: {},
  //   componentLoadings: [],
  //   clickedButtons: [],
  // });
  // const [sessionId, setSessionId] = useState(null);

  // const userID = uuidv4();

  // const componentLoaded = (
  //   arrayInUser,
  //   variableName,
  //   variableData,
  //   eventName,
  //   platform
  // ) => {
  //   const user = userLog;

  //   platform
  //     ? user[arrayInUser].push({
  //         event: eventName,
  //         [`${variableName}`]: variableData || sessionId,
  //         loadedTime: new Date(),
  //         platform: platform,
  //       })
  //     : user[arrayInUser].push({
  //         event: eventName,
  //         [`${variableName}`]: variableData || sessionId,
  //         loadedTime: new Date(),
  //       });

  //   setUserLog(user);
  //   console.log(userLog)
  // };

  const userLogin = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUserLogged(userCredentials);
    localStorage.setItem("userData", userCredentials);
  };

  const userLogOut = async () => {
    await signOut(auth);
    setUserLogged(null);
    localStorage.setItem("userData", null);
  };

  // useEffect(() => {
  //   const savedId = localStorage.getItem("sessionId");

  //   savedId
  //     ? setSessionId(savedId)
  //     : (setUserId(userID), localStorage.setItem("sessionId", userID));

  //   setUserLog({
  //     ...userLog,
  //     sessionData: {
  //       event: "cobranded_landing.loaded",
  //       sessionId: savedId,
  //       sessionDate: new Date(),
  //     },
  //   });
  // }, []);

  return (
    <appContext.Provider
      value={{
        userLogged,
        userLogin,
        userLogOut,
        //  componentLoaded
      }}
    >
      {children}
    </appContext.Provider>
  );
};

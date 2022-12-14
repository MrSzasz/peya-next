import { useAppContext } from "../../context/AppContext";
import styles from "./index.module.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import { useRouter } from "next/router";

const index = () => {
  const { userLogged, userLogin } = useAppContext();
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userLogin($("#userMail").val(), $("#userPass").val());
      router.push("/private-dash");
    } catch (err) {
      console.error(err.message);
      setErrorMsg(err.message);
    }
  };

  useEffect(() => {
    const getUserFromStorage = localStorage.getItem("userData");
    if (getUserFromStorage !== "null") {
      router.push("/private-dash");
    }
  }, []);

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar sesión en el dash</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {errorMsg != "" ? (
          <div className={styles.errorContainer}>
            <h2>
              <BiError />
              {errorMsg}
            </h2>
          </div>
        ) : undefined}
        <div className={styles.inputGroup}>
          <label htmlFor="userMail">Mail</label>
          <input type="email" name="userMail" id="userMail" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="userPass">Contraseña</label>
          <input type="password" name="userPass" id="userPass" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default index;

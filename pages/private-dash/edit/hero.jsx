import { useState, useEffect } from "react";
import {
  deleteDoc,
  doc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import styles from "./edit.module.scss";
import Loading from "../../../components/Loading/Loading";
import { AiOutlineDelete, AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppContext } from "../../../context/AppContext";

const hero = () => {
  const [arrayFromFB, setArrayFromFB] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRouter().pathname.split("/").reverse()[0];
  const [userLoading, setUserLoading] = useState(true);
  const router = useRouter();

  const { userLogged } = useAppContext();

  const getProductsFromFirebase = async () => {
    const db = getFirestore();

    const queryCollection = collection(db, route);

    await getDocs(queryCollection).then((res) =>
      setArrayFromFB(res.docs.map((item) => ({ ...item.data(), id: item.id })))
    );
    setLoading(false);
  };

  const handleDelete = async (e, id) => {
    e.target.dataset.loading = "true";
    const db = await getFirestore();
    await deleteDoc(doc(db, "hero", id));
    setArrayFromFB(arrayFromFB.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const getUserFromStorage = localStorage.getItem("userData");
    getUserFromStorage
      ? console.log(getUserFromStorage)
      : localStorage.setItem("userData", "null");
    if (userLogged === null && getUserFromStorage === "null") {
      router.push("/");
    } else {
      setUserLoading(false);
    }
  }, []);
  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  return (
    <>
      {userLoading ? (
        <div className={styles.userLoading}>
          <h2>Cargando usuario...</h2>
        </div>
      ) : (
        <div className={styles.editContainer}>
          <Link href="/private-dash.html" className={styles.goToMain}>
          {/* <Link href="/private-dash" className={styles.goToMain}> */}
            <AiOutlineLeft />
            Volver a la página principal
          </Link>
          <div className={styles.editContainer}>
            <h1>EDITAR CONTENIDO DEL HERO EN BASE DE DATOS</h1>
            <p>
              En esta sección se podrán eliminar los datos del hero guardados en
              la base de datos, haciendo click en el botón <span>ELIMINAR</span>{" "}
              que se encuentra debajo de cada uno de las páginas{" "}
            </p>
            <div className={styles.dataCardContainer}>
              {loading ? (
                <Loading />
              ) : arrayFromFB.length === 0 ? (
                <h2>No hay datos para mostrar</h2>
              ) : (
                arrayFromFB.filter(item=> item.id !== "links").map((data) => (
                  <div key={data.id} className={styles.heroCard}>
                    <img src={data.url} />
                    <div className={styles.bottomContentHeroCard}>
                      <h3>Titulo: {data.title}</h3>
                      <h3>Subtitulo: {data.subtitle}</h3>
                      <h3>Link del botón: {data.buttonLink}</h3>
                    </div>
                    <button
                      data-loading="false"
                      onClick={(e) => handleDelete(e, data.id)}
                    >
                      <AiOutlineDelete />
                      ELIMINAR
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default hero;

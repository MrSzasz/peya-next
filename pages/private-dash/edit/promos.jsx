import { useState, useEffect } from "react";
import {
  deleteDoc,
  updateDoc,
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
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery"

const notifySuccess = () => toast.success("Datos subidos correctamente");
const notifyLoading = () =>
  toast.loading("Subiendo datos...", {
    id: "notifyLoadingID",
  });
const notifyError = () => toast.error("Hubo un error al subir los datos");

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
    await deleteDoc(doc(db, "promos", id));
    setArrayFromFB(arrayFromFB.filter((item) => item.id !== id));
  };

  const handleUpdate = async (id, alt, tyc, sort) => {
    notifyLoading();

    try {
      const db = await getFirestore();
      const dataRef = doc(db, "promos", id);

      await updateDoc(dataRef, {
        imgAlt: alt,
        tyc,
        sort,
      });
    } catch (err) {
      toast.dismiss("notifyLoadingID");
      notifyError();
      console.log(err);
    } finally {
      toast.dismiss("notifyLoadingID");
      notifySuccess();
    }
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
        <>
          <Toaster />
          <div className={styles.editContainer}>
            <Link href="/private-dash" className={styles.goToMain}>
              <AiOutlineLeft />
              Volver a la página principal
            </Link>
            <div className={styles.editContainer}>
              <h1>EDITAR CONTENIDO DE LAS PROMOS EN BASE DE DATOS</h1>
              <p className={styles.instructions}>
                <h3>INSTRUCCIONES</h3>
                Para editar los datos se deben cambiar en sus respectivos
                campos, luego hacer click en<span> EDITAR </span>
                <br />
                <br />
                <span>
                  TODOS LOS SLIDES IGUALES DEBEN TENER LA MISMA POSICIÓN PARA
                  EVITAR CONFLICTOS
                </span>
                <br />
                <br />
                Si se desea eliminar un slide se debe hacer click en el botón
                <span> ELIMINAR </span>
              </p>
              <div className={styles.dataCardContainer}>
                {loading ? (
                  <Loading />
                ) : arrayFromFB.length === 0 ? (
                  <h2>No hay datos para mostrar</h2>
                ) : (
                  arrayFromFB
                    .sort(function (a, b) {
                      return a.sort - b.sort;
                    })
                    .map((data) => (
                      <div key={data.id} className={styles.heroCard}>
                        <img src={data.url} />
                        <div className={styles.inputGroup}>
                          <p>{data.device ? "mobile" : "desktop"}</p>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`promosAlt${data.id}`}>ALT: </label>
                            <input
                              type="text"
                              name={`promosAlt${data.id}`}
                              id={`promosAlt${data.id}`}
                              defaultValue={data.imgAlt}
                            />
                          </div>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`promosTyC${data.id}`}>Términos y condiciones: </label>
                            <textarea
                              name={`promosTyC${data.id}`}
                              id={`promosTyC${data.id}`}
                              defaultValue={data.tyc}
                            />
                          </div>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`promosOrder${data.id}`}>
                              POSICIÓN EN FILA:{" "}
                            </label>
                            <input
                              type="number"
                              name={`promosOrder${data.id}`}
                              id={`promosOrder${data.id}`}
                              defaultValue={data.sort}
                            />
                          </div>
                        </div>
                        <button
                          className={styles.editButton}
                          onClick={() =>
                            handleUpdate(
                              data.id,
                              $(`#promosAlt${data.id}`).val().trim(),
                              $(`#promosTyC${data.id}`).val().trim(),
                              Number($(`#promosOrder${data.id}`).val().trim())
                            )
                          }
                        >
                          EDITAR
                        </button>
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
        </>
      )}
    </>
  );
};

export default hero;

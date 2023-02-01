// import { useState, useEffect } from "react";
// import {
//   deleteDoc,
//   updateDoc,
//   doc,
//   collection,
//   getDocs,
//   getFirestore,
// } from "firebase/firestore";
// import styles from "./edit.module.scss";
// import Loading from "../../../components/Loading/Loading";
// import { AiOutlineDelete, AiOutlineLeft } from "react-icons/ai";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { useAppContext } from "../../../context/AppContext";
// import toast, { Toaster } from "react-hot-toast";

// const notifySuccess = () => toast.success("Datos subidos correctamente");
// const notifyLoading = () => toast.loading("Subiendo datos...");
// const notifyError = () => toast.error("Hubo un error al subir los datos");

// const hero = () => {
//   const [arrayFromFB, setArrayFromFB] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const route = useRouter().pathname.split("/").reverse()[0];
//   const [userLoading, setUserLoading] = useState(true);
//   const router = useRouter();

//   const { userLogged } = useAppContext();

//   const getProductsFromFirebase = async () => {
//     const db = getFirestore();

//     const queryCollection = collection(db, route);

//     await getDocs(queryCollection).then((res) =>
//       setArrayFromFB(res.docs.map((item) => ({ ...item.data(), id: item.id })))
//     );
//     setLoading(false);
//   };

//   const handleDelete = async (e, id) => {
//     e.target.dataset.loading = "true";
//     const db = await getFirestore();
//     await deleteDoc(doc(db, "hero", id));
//     setArrayFromFB(arrayFromFB.filter((item) => item.id !== id));
//   };

//   const handleUpdate = async (
//     id,
//     device,
//     title,
//     subtitle,
//     order,
//     link,
//     alt,
//     buttonPosition,
//     imagePosition
//   ) => {
//     notifyLoading();

//     try {
//       const db = await getFirestore();
//       const dataRef = doc(db, "hero", id);

//       if (device === "mobile") {
//         await updateDoc(dataRef, {
//           title,
//           subtitle,
//           sort: order,
//           buttonLink: link,
//           imgAlt: alt,
//           mobileButtonPosition: buttonPosition,
//         });
//       } else {
//         await updateDoc(dataRef, {
//           title,
//           subtitle,
//           sort: order,
//           buttonLink: link,
//           imgAlt: alt,
//           desktopImagePosition: imagePosition,
//         });
//       }
//     } catch (err) {
//       notifyError();
//       console.log(err);
//     } finally {
//       notifySuccess();
//       alert("Editado correctamente");
//     }
//   };

//   useEffect(() => {
//     const getUserFromStorage = localStorage.getItem("userData");
//     getUserFromStorage
//       ? console.log(getUserFromStorage)
//       : localStorage.setItem("userData", "null");
//     if (userLogged === null && getUserFromStorage === "null") {
//       router.push("/");
//     } else {
//       setUserLoading(false);
//     }
//   }, []);
//   useEffect(() => {
//     getProductsFromFirebase();
//   }, []);

//   return (
//     <>
//       <Toaster />
//       {userLoading ? (
//         <div className={styles.userLoading}>
//           <h2>Cargando usuario...</h2>
//         </div>
//       ) : (
//         <div className={styles.editContainer}>
//           <Link href="/private-dash" className={styles.goToMain}>
//             <AiOutlineLeft />
//             Volver a la página principal
//           </Link>
//           <div className={styles.editContainer}>
//             <h1>EDITAR CONTENIDO DEL HERO EN BASE DE DATOS</h1>
//             <p className={styles.instructions}>
//               <h3>INSTRUCCIONES</h3>
//               Para editar los datos se deben cambiar en sus respectivos campos,
//               luego hacer click en<span> EDITAR </span>
//               <br />
//               <br />
//               <span>
//                 TODOS LOS SLIDES IGUALES DEBEN TENER LA MISMA POSICIÓN PARA
//                 EVITAR CONFLICTOS
//               </span>
//               <br />
//               <br />
//               Si se desea eliminar un slide se debe hacer click en el botón
//               <span> ELIMINAR </span>
//             </p>
//             <div className={styles.dataCardContainer}>
//               {loading ? (
//                 <Loading />
//               ) : arrayFromFB.length === 0 ? (
//                 <h2>No hay datos para mostrar</h2>
//               ) : (
//                 arrayFromFB
//                   .sort(function (a, b) {
//                     return a.sort - b.sort;
//                   })
//                   .map((data) => (
//                     <div key={data.id} className={styles.heroCard}>
//                       <img src={data.url} />
//                       <div className={styles.bottomContentHeroCard}>
//                         <p>{data.device}</p>
//                         <div className={styles.inputGroupWithLabel}>
//                           <label htmlFor={`heroTitle${data.id}`}>
//                             TÍTULO PRINCIPAL:{" "}
//                           </label>
//                           <input
//                             type="text"
//                             name={`heroTitle${data.id}`}
//                             id={`heroTitle${data.id}`}
//                             defaultValue={data.title}
//                           />
//                         </div>
//                         <div className={styles.inputGroupWithLabel}>
//                           <label htmlFor={`heroSubtitle${data.id}`}>
//                             SUBTÍTULO:{" "}
//                           </label>
//                           <input
//                             type="text"
//                             name={`heroSubtitle${data.id}`}
//                             id={`heroSubtitle${data.id}`}
//                             defaultValue={data.subtitle}
//                           />
//                         </div>
//                         <div className={styles.inputGroupWithLabel}>
//                           <label htmlFor={`heroOrder${data.id}`}>
//                             POSICIÓN EN FILA:{" "}
//                           </label>
//                           <input
//                             type="number"
//                             name={`heroOrder${data.id}`}
//                             id={`heroOrder${data.id}`}
//                             defaultValue={data.sort}
//                           />
//                         </div>
//                         <div className={styles.inputGroupWithLabel}>
//                           <label htmlFor={`heroLink${data.id}`}>
//                             LINK DEL BOTÓN:{" "}
//                           </label>
//                           <input
//                             type="text"
//                             name={`heroLink${data.id}`}
//                             id={`heroLink${data.id}`}
//                             defaultValue={data.buttonLink}
//                           />
//                         </div>
//                         <div className={styles.inputGroupWithLabel}>
//                           <label htmlFor={`heroAlt${data.id}`}>ALT: </label>
//                           <input
//                             type="text"
//                             name={`heroAlt${data.id}`}
//                             id={`heroAlt${data.id}`}
//                             defaultValue={data.imgAlt}
//                           />
//                         </div>
//                         {data.device === "mobile" ? (
//                           <div className={styles.inputGroupWithLabel}>
//                             <label htmlFor={`heroMobile_button${data.id}`}>
//                               BOTÓN:{" "}
//                             </label>
//                             <select
//                               name={`heroMobile_button${data.id}`}
//                               id={`heroMobile_button${data.id}`}
//                               defaultValue={data.mobileButtonPosition}
//                             >
//                               <option value="top">ARRIBA</option>
//                               <option value="bottom">ABAJO</option>
//                             </select>
//                           </div>
//                         ) : (
//                           <div className={styles.inputGroupWithLabel}>
//                             <label htmlFor={`heroDesktopImage${data.id}`}>
//                               POSICIÓN DE LA IMAGEN PRINCIPAL:{" "}
//                             </label>
//                             <select
//                               name={`heroDesktopImage${data.id}`}
//                               id={`heroDesktopImage${data.id}`}
//                               defaultValue={data.desktopImagePosition}
//                             >
//                               <option value="center">CENTRO</option>
//                               <option value="bottom">ABAJO</option>
//                             </select>
//                           </div>
//                         )}
//                       </div>
//                       <button
//                         className={styles.editButton}
//                         onClick={() =>
//                           handleUpdate(
//                             data.id,
//                             data.device,
//                             $(`#heroTitle${data.id}`).val().trim(),
//                             $(`#heroSubtitle${data.id}`).val().trim(),
//                             Number($(`#heroOrder${data.id}`).val().trim()),
//                             $(`#heroLink${data.id}`).val().trim(),
//                             $(`#heroAlt${data.id}`).val().trim(),
//                             $(
//                               `#heroMobile_button${data.id} option:selected`
//                             ).val(),
//                             $(
//                               `#heroDesktopImage${data.id} option:selected`
//                             ).val()
//                           )
//                         }
//                       >
//                         EDITAR
//                       </button>
//                       <button
//                         data-loading="false"
//                         onClick={(e) => handleDelete(e, data.id)}
//                       >
//                         <AiOutlineDelete />
//                         ELIMINAR
//                       </button>
//                     </div>
//                   ))
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default hero;

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
    await deleteDoc(doc(db, "hero", id));
    setArrayFromFB(arrayFromFB.filter((item) => item.id !== id));
  };

  const handleUpdate = async (
    id,
    device,
    title,
    subtitle,
    order,
    link,
    alt,
    buttonPosition,
    imagePosition
  ) => {
    notifyLoading();

    try {
      const db = await getFirestore();
      const dataRef = doc(db, "hero", id);

      if (device === "mobile") {
        await updateDoc(dataRef, {
          title,
          subtitle,
          sort: order,
          buttonLink: link,
          imgAlt: alt,
          mobileButtonPosition: buttonPosition,
        });
      } else {
        await updateDoc(dataRef, {
          title,
          subtitle,
          sort: order,
          buttonLink: link,
          imgAlt: alt,
          desktopImagePosition: imagePosition,
        });
      }
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
              <h1>EDITAR CONTENIDO DEL HERO EN BASE DE DATOS</h1>
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
                        <div className={styles.bottomContentHeroCard}>
                          <p>{data.device}</p>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`heroTitle${data.id}`}>
                              TÍTULO PRINCIPAL:{" "}
                            </label>
                            <input
                              type="text"
                              name={`heroTitle${data.id}`}
                              id={`heroTitle${data.id}`}
                              defaultValue={data.title}
                            />
                          </div>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`heroSubtitle${data.id}`}>
                              SUBTÍTULO:{" "}
                            </label>
                            <input
                              type="text"
                              name={`heroSubtitle${data.id}`}
                              id={`heroSubtitle${data.id}`}
                              defaultValue={data.subtitle}
                            />
                          </div>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`heroOrder${data.id}`}>
                              POSICIÓN EN FILA:{" "}
                            </label>
                            <input
                              type="number"
                              name={`heroOrder${data.id}`}
                              id={`heroOrder${data.id}`}
                              defaultValue={data.sort}
                            />
                          </div>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`heroLink${data.id}`}>
                              LINK DEL BOTÓN:{" "}
                            </label>
                            <input
                              type="text"
                              name={`heroLink${data.id}`}
                              id={`heroLink${data.id}`}
                              defaultValue={data.buttonLink}
                            />
                          </div>
                          <div className={styles.inputGroupWithLabel}>
                            <label htmlFor={`heroAlt${data.id}`}>ALT: </label>
                            <input
                              type="text"
                              name={`heroAlt${data.id}`}
                              id={`heroAlt${data.id}`}
                              defaultValue={data.imgAlt}
                            />
                          </div>
                          {data.device === "mobile" ? (
                            <div className={styles.inputGroupWithLabel}>
                              <label htmlFor={`heroMobile_button${data.id}`}>
                                BOTÓN:{" "}
                              </label>
                              <select
                                name={`heroMobile_button${data.id}`}
                                id={`heroMobile_button${data.id}`}
                                defaultValue={data.mobileButtonPosition}
                              >
                                <option value="top">ARRIBA</option>
                                <option value="bottom">ABAJO</option>
                              </select>
                            </div>
                          ) : (
                            <div className={styles.inputGroupWithLabel}>
                              <label htmlFor={`heroDesktopImage${data.id}`}>
                                POSICIÓN DE LA IMAGEN PRINCIPAL:{" "}
                              </label>
                              <select
                                name={`heroDesktopImage${data.id}`}
                                id={`heroDesktopImage${data.id}`}
                                defaultValue={data.desktopImagePosition}
                              >
                                <option value="center">CENTRO</option>
                                <option value="bottom">ABAJO</option>
                              </select>
                            </div>
                          )}
                        </div>
                        <button
                          className={styles.editButton}
                          onClick={() =>
                            handleUpdate(
                              data.id,
                              data.device,
                              $(`#heroTitle${data.id}`).val().trim(),
                              $(`#heroSubtitle${data.id}`).val().trim(),
                              Number($(`#heroOrder${data.id}`).val().trim()),
                              $(`#heroLink${data.id}`).val().trim(),
                              $(`#heroAlt${data.id}`).val().trim(),
                              $(
                                `#heroMobile_button${data.id} option:selected`
                              ).val(),
                              $(
                                `#heroDesktopImage${data.id} option:selected`
                              ).val()
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

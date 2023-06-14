import styles from "./index.module.scss";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import Link from "next/link";
import { useAppContext } from "../../../context/AppContext";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";
import AddBenefitCard from "../../../components/AddBenefitCard/AddBenefitCard";
import AddBenefitButton from "../../../components/AddBenefitButton/AddBenefitButton";
import EditSavedBenefitsCategories from "../../../components/EditSavedBenefitsCategories/EditSavedBenefitsCategories";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore"; // Importamos lo necesario
import { uploadFileToFirebase } from "../../../firebase/config";

const notifySuccess = () => toast.success("Datos subidos correctamente");
const notifyLoading = () =>
  toast.loading("Subiendo datos...", {
    id: "notifyLoadingID",
  });
const notifyError = () => toast.error("Hubo un error al subir los datos");

const index = () => {
  const [benefitArray, setBenefitArray] = useState([
    {
      benefitCategory: "",
      benefitTitle: "",
      benefitDescription: "",
      benefitImage: "",
      benefitStartDate: "",
      benefitEndDate: "",
      benefitTyC: "",
    },
  ]);

  const [categories, setCategories] = useState([]);
  const [categorySelection, setCategorySelection] = useState("");
  const [userLoading, setUserLoading] = useState(true);

  const { userLogged } = useAppContext();

  const router = useRouter();

  const handleDeleteBenefitCategory = (benefitTitleToDelete) => {
    const filteredCategories = categories.filter(
      (item) => item !== benefitTitleToDelete
    );
    setCategories(filteredCategories);
  };

  const handleAddBenefitCard = () => {
    setBenefitArray([
      ...benefitArray,
      {
        benefitCategory: "",
        benefitTitle: "",
        benefitDescription: "",
        benefitImage: "",
        benefitStartDate: "",
        benefitEndDate: "",
        benefitTyC: "",
      },
    ]);
  };

  const createNewBenefit = async (array) => {
    // Creamos la función para subir los datos
    const db = await getFirestore(); // Traemos la base de datos

    await array.forEach((benefit) => {
      // Subiremos uno por uno los datos dentro de nuestro array
      addDoc(
        collection(db, "benefits"), // Traemos la colección, pasando db y el nombre de la colección como parámetros
        { ...benefit } // Y le pasamos los datos a subir
      ).then(console.log("done")); // Por cada objeto subido imprimimos una confirmación
    });
  };

  const getCategoriesFromFB = async () => {
    const db = await getFirestore();

    const userInDB = await getDoc(doc(db, "benefits", "benefitsCategories")); // Pasamos la base de datos, la colección y el ID del objeto

    userInDB.exists() // Comprobamos si existe
      ? setCategories(userInDB.data().categories) // Si hay, lo muestra en consola
      : console.error("Not found"); // Sino, indica el error
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
    getCategoriesFromFB();
  }, []);

  const handleUpdate = async (newCategoriesForUpdate) => {
    const db = await getFirestore();
    const dataRef = doc(db, "benefits", "benefitsCategories"); // Buscamos el dato, pasando la base de datos, la colección y el ID del objeto

    await updateDoc(dataRef, { categories: newCategoriesForUpdate });
  };

  const handleSaveBenefitsModule = async () => {
    const benefitsContainer = Array.from(
      $("#currentBenefitsContainer")[0].children
    );

    benefitsContainer.pop();
    const arrayWithNewCategories = [];

    benefitsContainer.forEach((card) => {
      arrayWithNewCategories.push(card.children[0].value);
    });

    if (
      arrayWithNewCategories.includes("") ||
      arrayWithNewCategories.includes(" ")
    ) {
      alert("No pueden haber categorías vacías");
    } else {
      toast.loading("Guardando...", { id: "loadingEditCategories" });
      setCategories(arrayWithNewCategories);
      await handleUpdate(arrayWithNewCategories)
      toast.dismiss("loadingEditCategories");
      toast.success("Categorías guardadas");
      modal.close();
    }
  };

  const handleSaveBenefits = async () => {
    toast.loading("Guardando...", { id: "loadingCreateData" });

    const cardContainer = Array.from(
      $("#benefitCardsContainerRef")[0].children
    );

    cardContainer.pop();

    const arrayToSave = [];

    for (const card of cardContainer) {
      const generatedUrl = await uploadFileToFirebase(
        card.children[1].files[0],
        "benefits"
      );

      arrayToSave.push({
        benefitCategory: card.children[0].value,
        benefitTitle: card.children[2].value,
        benefitDescription: card.children[3].value,
        benefitImage: generatedUrl,
        benefitStartDate: card.children[4].children[0].value,
        benefitEndDate: card.children[4].children[1].value,
        benefitTyC: card.children[5].value,
      });
    }

    createNewBenefit(arrayToSave);

    toast.dismiss("loadingCreateData");
    toast.success("Guardado!");
  };

  const handleDeleteBenefit = (e) => {
    const parentElement = e.target.parentElement;
    parentElement.remove();
  };

  return (
    <>
      {userLoading ? (
        <div className={styles.userLoading}>
          <h2>Cargando usuario...</h2>
        </div>
      ) : (
        <>
          <Toaster />
          <div className={styles.dashContainer}>
            <Link href="/private-dash" className={styles.goToMain}>
              <AiOutlineLeft />
              Volver
            </Link>
            <div className={styles.sectionsContainer}>
              <section className={styles.dashHeroSectionContainer}>
                <p className="bg-yellow-500 text-black p-8">
                  Para editar las categorias se debe hacer click en{" "}
                  <strong>editar categorias guardadas</strong>, en el mismo se
                  podran eliminar las necesarias, editar o agregar. Cuando se
                  haya terminado se deberá tocar guardar <strong>SOLAMENTE SI SE AGREGO O EDITO ALGUNA CATEGORIA</strong>, sino tocar cerrar <br />
                  La imagen para la promocion <strong>DEBERA SER EN FORMATO WEBP</strong>, el tamaño maximo es 2mb, es recomendable usar una resolucion 1280x720
                </p>
                <Link className={styles.goToEdit} href={"edit/benefits"}>
                  Editar promociones guardadas
                  <AiOutlineRight />
                </Link>
                <div>
                  <button
                    onClick={() => {
                      modal = document.querySelector("#modal");
                      modal.showModal();
                    }}
                    className={styles.goToEdit}
                    style={{ backgroundColor: "green" }}
                  >
                    Editar categorías
                  </button>
                </div>

                <div
                  className={styles.benefitsCardContainer}
                  id="benefitCardsContainerRef"
                >
                  {benefitArray.map((benefit, i) => (
                    <AddBenefitCard
                      categories={categories}
                      benefit={benefit}
                      deleteElementFn={handleDeleteBenefit}
                    />
                  ))}
                  <button
                    className={styles.addNewCardButton}
                    onClick={handleAddBenefitCard}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleSaveBenefits}
                  className={styles.saveBenefits}
                >
                  Guardar beneficios
                </button>
              </section>
            </div>
          </div>
          <dialog id="modal" className={styles.benefitsModalContainer}>
            <form>
              {categories.length != 0 && (
                <EditSavedBenefitsCategories categories={categories} />
              )}
              <div className={styles.benefitsModalButtonsContainer}>
                <button
                  type="button"
                  className={styles.closeBenefitsModalButton}
                  onClick={() => {
                    modal.close();
                  }}
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className={styles.saveBenefitsModalButton}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSaveBenefitsModule();
                  }}
                >
                  Guardar
                </button>
              </div>
            </form>
          </dialog>
        </>
      )}
    </>
  );
};

export default index;

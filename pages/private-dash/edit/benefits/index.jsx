import styles from "./index.module.scss";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import Link from "next/link";
import { useAppContext } from "../../../../context/AppContext";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";
import AddBenefitCard from "../../../../components/AddBenefitCard/AddBenefitCard";
import AddBenefitButton from "../../../../components/AddBenefitButton/AddBenefitButton";
import EditSavedBenefitsCategories from "../../../../components/EditSavedBenefitsCategories/EditSavedBenefitsCategories";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore"; // Importamos lo necesario
import { deleteImageInStorage } from "../../../../firebase/config";

const notifySuccess = () => toast.success("Datos subidos correctamente");
const notifyLoading = () =>
  toast.loading("Subiendo datos...", {
    id: "notifyLoadingID",
  });
const notifyError = () => toast.error("Hubo un error al subir los datos");

const index = () => {
  const [dataFromDB, setDataFromDB] = useState([]);
  const [benefitsArray, setBenefitsArray] = useState([]);

  const [categoriesArray, setCategoriesArray] = useState([]);
  const [categorySelection, setCategorySelection] = useState("");
  const [userLoading, setUserLoading] = useState(true);

  const { userLogged } = useAppContext();

  const router = useRouter();

  const getProductsFromFirebase = async () => {
    const db = getFirestore();
    const queryCollection = collection(db, "benefits");
    await getDocs(queryCollection)
      .then((res) =>
        setDataFromDB(res.docs.map((item) => ({ ...item.data(), id: item.id })))
      )
      .finally(console.log("data fetched"));
  };

  const orderProducts = (mainArrayFromCollection) => {
    const benefitsArrayFromCollection = [];
    const categoriesArrayFromCollection = [];

    console.log("order", mainArrayFromCollection);

    if (mainArrayFromCollection.length !== 0) {
      mainArrayFromCollection.forEach((item) => {
        if (item.id === "benefitsCategories") {
          item.categories.forEach((category) => {
            categoriesArrayFromCollection.push(category);
          });
        } else {
          benefitsArrayFromCollection.push(item);
        }
      });

      setCategoriesArray(categoriesArrayFromCollection);
      setBenefitsArray(benefitsArrayFromCollection);
    }
  };

  const handleDeleteBenefitCategory = (benefitTitleToDelete) => {
    const filteredCategories = categories.filter(
      (item) => item !== benefitTitleToDelete
    );
    setCategories(filteredCategories);
    // console.log(benefitTitleToDelete);
  };

  const handleDelete = async (e, id, imageUrl) => {
    toast.loading("Eliminando...", { id: "deleteItemToast" });
    e.target.dataset.loading = "true";
    const db = await getFirestore();
    await deleteImageInStorage("benefits", imageUrl);
    await deleteDoc(doc(db, "benefits", id)).then(() => {
      const parentElement = e.target.parentElement;
      parentElement.remove();
    });
    toast.dismiss("deleteItemToast");
    toast.success("Eliminado correctamente!");
  };

  const handleUpdate = async (e, id) => {
    toast.loading("Guardando...", { id: "loadingCreateData" });
    const cardContainer = Array.from(e.target.parentElement.children);

    const objForUpdate = {
      benefitCategory: cardContainer[1].value,
      benefitTitle: cardContainer[2].value,
      benefitDescription: cardContainer[3].value,
      benefitStartDate: cardContainer[4].children[0].value,
      benefitEndDate: cardContainer[4].children[1].value,
      benefitTyC: cardContainer[5].value,
    };

    const db = await getFirestore();
    const dataRef = doc(db, "benefits", id); // Buscamos el dato, pasando la base de datos, la colección y el ID del objeto

    await updateDoc(dataRef, objForUpdate);

    toast.dismiss("loadingCreateData");
    toast.success("Guardado!");
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

  useEffect(() => {
    orderProducts(dataFromDB);
  }, [dataFromDB]);

  const handleSaveBenefitsModule = () => {
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
      setCategories(arrayWithNewCategories);
      modal.close();
    }
  };

  const handleSaveBenefits = () => {
    const cardContainer = Array.from(
      $("#benefitCardsContainerRef")[0].children
    );

    cardContainer.forEach((card) => {
      console.log({
        benefitCategory: card.children[0].value,
        benefitTitle: card.children[1].value,
        benefitDescription: card.children[2].value,
        benefitStartDate: card.children[3].children[0].value,
        benefitEndDate: card.children[3].children[1].value,
        benefitTyC: card.children[4].value,
      });
    });

    toast.dismiss("loadingCreateData");
    toast.success("Guardado!");
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
            <Link href="/private-dash/benefits" className={styles.goToMain}>
              <AiOutlineLeft />
              Volver
            </Link>
            <div className={styles.sectionsContainer}>
              <section className={styles.dashHeroSectionContainer}>
                <div
                  className={styles.benefitsCardContainer}
                  id="benefitCardsContainerRef"
                >
                  {benefitsArray.length === 0 ? (
                    <h2 className="col-span-full">No hay promociones para editar</h2>
                  ) : (
                    benefitsArray.map((benefit, i) => (
                      <AddBenefitCard
                        key={i}
                        edit
                        categories={categoriesArray}
                        benefit={benefit}
                        deleteElementFn={handleDelete}
                        saveElementFn={handleUpdate}
                      />
                    ))
                  )}
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default index;

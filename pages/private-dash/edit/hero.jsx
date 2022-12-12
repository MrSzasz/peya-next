import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import styles from "./hero.module.scss";
import Loading from "../../../components/Loading/Loading";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/router";

const hero = () => {
  const [arrayFromFB, setArrayFromFB] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRouter().pathname.split("/").reverse()[0];

  const getProductsFromFirebase = async () => {
    const db = getFirestore();

    const queryCollection = collection(db, route);

    await getDocs(queryCollection).then((res) =>
      setArrayFromFB(res.docs.map((item) => ({ ...item.data(), id: item.id })))
    );
    setLoading(false);
  };

  const handleDelete = (url, id) => {
    console.log(url, id);
  };

  useEffect(() => {
    getProductsFromFirebase();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        arrayFromFB.map((data, i) => (
          <div className={styles.heroImageCard} key={`${i}${Math.random()}`}>
            <img src={data.url} alt="" />
            <button onClick={() => handleDelete(data.url, data.id)}>
              <AiOutlineDelete />
              BORRAR
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default hero;

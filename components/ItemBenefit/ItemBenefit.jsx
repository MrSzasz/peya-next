const ItemBenefit = ({img, imgAlt, text}) => {
  return (
    <div>
      <img src={img} alt={imgAlt} />
      <p>{text}</p>
    </div>
  );
};

export default ItemBenefit;

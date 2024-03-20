
import ItemList from "./ItemList";

const ResturantCategory = ({ data ,showItems, setShowIndex}) => {
  

  const handliClicked = () => {
   setShowIndex();
  };
  return (
    <div>
      {/**header , accodrdian  */}
      <div className="accordian" onClick={handliClicked}>
        <span className="accordian-title">
          {data.title}({data.itemCards.length})
        </span>
        <span className="down-arrow">🔽</span>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default ResturantCategory;

import Item from "../item/Item";

function Lists({ data, setSkill }) {
  return (
    <ul className="flex flex-col gap-6">
      {data &&
        data.map((obj) => {
          return <Item key={obj.id} obj={obj} setSkill={setSkill} />;
        })}
    </ul>
  );
}

export default Lists;

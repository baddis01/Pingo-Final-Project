const PacksList = ({ packs }) => {
  let i = 0;

  return (
    <ul>
      {packs.map((pack) => {
        return <li key={i++}>{pack.title}</li>;
      })}
    </ul>
  );
};

export default PacksList;

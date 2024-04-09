const SheepGenerator = () => {
  const generateSheep = () => {
    const newSheep = new window.eSheep();
    newSheep.Start();
    return newSheep;
  };

  const handleGenerateSheep = () => {
    generateSheep();
  };

  return (
    <div className="pr-3">
      <button
        className="btn btn-secondary btn-circle"
        onClick={handleGenerateSheep}
      >
        Sheep
      </button>
    </div>
  );
};

export default SheepGenerator;

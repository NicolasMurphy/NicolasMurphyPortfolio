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
    <div className="pr-4">
      <button
        className="btn btn-accent btn-circle normal-case"
        onClick={handleGenerateSheep}
      >
        Sheep
      </button>
    </div>
  );
};

export default SheepGenerator;

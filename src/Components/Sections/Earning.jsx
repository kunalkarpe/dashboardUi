import Card from "@src/Helpers/Card";
const Earning = () => {
  const data = [
    {
      background: "bg-violet-300",
      name: "Total Earning",
      number: "242.65K",
      title: "From the Running Month",
    },
    {
      background: "bg-indigo-300",
      name: "Average Earning",
      number: "17.465K",
      title: "Daily Earning of the Month",
    },
    {
      background: "bg-teal-300",
      name: "Conversion Rate  ",
      number: "74.86%",
      title: "+6.04 Greater than Last ",
    },
  ];
  return (
    <>
      <section className="flex  shrink    px-4 xl:-mt-12">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              backGround={item.background}
              name={item.name}
              number={item.number}
              title={item.title}
            />
          );
        })}
      </section>
    </>
  );
};

export default Earning;

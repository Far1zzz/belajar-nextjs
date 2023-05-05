export default (req, res) => {
  res.status(200).json([
    {
      name: "fairiz",
      age: 20,
      country: "Indonesia",
    },
    {
      name: "Zulkifli",
      age: 15,
      country: "Japan",
    },
    {
      name: "ahmad",
      age: 19,
      country: "USA",
    },
    {
      name: "udin",
      age: 50,
      country: "Belgia",
    },
    {
      name: "Madun",
      age: 35,
      country: "Arab",
    },
  ]);
};

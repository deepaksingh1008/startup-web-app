// import csvtojson from "csvtojson";
// import csv from "csvtojson";
import fs from "fs";

// const csvFilePath = "startup_funding.csv";

// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     //console.log(jsonObj);
//     fs.writeFileSync("data.json", JSON.stringify(jsonObj), "utf-8", (err) => {
//       if (err) {
//         console.log("error");
//       }
//     });
//   });
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  try {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading JSON file:", err);
        res.status(500).send("Internal Server Error");
      } else {
        const jsonArray = JSON.parse(data);
        res.json(jsonArray);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen("5000", () => {
  console.log(`Server is running on port 5000`);
});

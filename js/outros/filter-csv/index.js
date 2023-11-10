require("dotenv").config();
const fs = require("fs");
const csv = require("fast-csv");

let maxRows = Number(process.env.MAX_ROWS);

if (maxRows === 0 || isNaN(maxRows)) {
  maxRows = undefined;
}

const countries = process.env.COUNTRIES?.split(",");

const headers = process.env.HEADERS?.split(",");

const writeStreams = {};
for (const country of countries) {
  const csvFormatterStream = csv.format({
    headers,
  });
  const writeStream = csvFormatterStream.pipe(
    fs.createWriteStream(`${country}.csv`)
  );
  writeStreams[country] = { csvFormatterStream, writeStream };
}

let accepted = 0,
  rejected = 0;

console.log(`processing file "${process.env.CSV}"...`);
csv
  .parseFile(process.env.CSV, { headers: true, delimiter: ",", maxRows })
  .on("error", (error) => console.error(error))
  .on("data", async (row) => {
    if (
      row.email?.includes("@mailinator.com") &&
      countries.includes(row.locale?.toLowerCase()) &&
      (process.env.ONLY_CONFIRMED?.toLowerCase() !== "true" ||
        row.UserStatus === "CONFIRMED")
    ) {
      accepted++;

      writeStreams[row.locale?.toLowerCase()].csvFormatterStream.write(
        headers.map((header) => row[header])
      );
    } else {
      rejected++;
    }
  })
  .on("end", (rowCount) => {
    for (const country of countries) {
      writeStreams[country].csvFormatterStream.end();
      writeStreams[country].writeStream.end();
    }
    console.log(`Parsed ${rowCount} rows`);
    console.log(`Accepted ${accepted} rows`);
    console.log(`Rejected ${rejected} rows`);
  });

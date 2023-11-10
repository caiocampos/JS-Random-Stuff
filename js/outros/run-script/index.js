require("dotenv").config();
const csv = require("fast-csv");
const shell = require("shelljs");

let maxRows = Number(process.env.MAX_ROWS);

if (maxRows === 0 || isNaN(maxRows)) {
  maxRows = undefined;
}

csv
  .parseFile(process.env.CSV, { headers: true, delimiter: ";", maxRows })
  .on("error", (error) => console.error(error))
  .on("data", (row) => {
    console.log(`Running for: ${row[process.env.FIELD]}`);
    const script = process.env.TEMPLATE?.replace("%%%", row[process.env.FIELD]);
    console.log(script);
    if (shell.exec(script).code !== 0) {
      shell.echo("Error: command failed");
      shell.exit(1);
    } else {
      shell.echo("Success");
    }
  })
  .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));


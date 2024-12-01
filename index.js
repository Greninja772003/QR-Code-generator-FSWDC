import inquirer from "inquirer";
import qrCode from "qr-image";
import fs from "fs";
inquirer
  .prompt([{ message: "Enter your URL: ", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    let qrPNG = qrCode.image(url, { type: "png" });
    qrPNG.pipe(fs.createWriteStream("qr_code.png"));

    fs.appendFile("URL.txt", `${url}\n`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("URL.txt file has been created");
    });
  })
  .catch((error) => {
    console.error(error);
  });

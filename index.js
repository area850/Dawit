import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

const data = {
  date: moment().subtract(5, 'd').format()
};

jsonfile.writeFile(path, data, () => {
  simpleGit()
    .add(".")
    .commit("update data", { "--date": new Date().toISOString() })
    .push();
});
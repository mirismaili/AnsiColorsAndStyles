/**
 * @author <a href="https://mirismaili.github.io">S. Mahdi Mir-Ismaili</a>.
 * Created on 1397/12/27 (2019/3/18).
 */

// import {RD} from "../library/dist/main.min";
const a = require("../library/index");

for (const i in a)
console.dir(`${i}: ${a[i]}`);

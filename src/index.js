// Trang hệ thống
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import  express  from 'express'; 
import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./route/webRoute.js";
import initAPIRoute from "./route/apiRoute.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);
app.use(express.static(path.join(import.meta.url, 'public')));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})




const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const router = require('./routes/user-Router');
const DBconnection = require('./DB/DBconnection');



const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// app.use(cors());

app.options('*', cors());
// app.use(cookieParser());
app.use(express.json());
app.use("/api", router);


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

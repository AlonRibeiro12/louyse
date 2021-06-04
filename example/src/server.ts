import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

const PORT = process.env.PORT||"3000"

http.listen(PORT, function() {
    console.log("Server running on port: ", PORT);   // 3
})


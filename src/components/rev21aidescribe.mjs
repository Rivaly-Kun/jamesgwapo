// rev21aidescribe.mjs
import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/proxy-upload", upload.single("file"), async (req, res) => {
  try {
    const form = new FormData();
    form.append("file", fs.createReadStream(req.file.path), req.file.originalname);

    const response = await fetch("https://ai-tools.rev21labs.com/api/v1/vision/describe-image", {
      method: "POST",
      headers: {
        "x-api-key": "YjkyMjkyZDgtMWVmNy00NGZhLTg3NGUtZmQ5ODBiMzJmYzJh",
        ...form.getHeaders()
      },
      body: form
    });

    const text = await response.text();
    res.send({ text });
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send({ error: "Proxy failed" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
});

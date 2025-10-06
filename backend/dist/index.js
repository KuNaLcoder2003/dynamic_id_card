import express from "express";
import QRCode from "qrcode";
import cors from "cors";
import multer, {} from "multer";
import { PrismaClient } from '../generated/prisma/index.js';
import crypto from "crypto";
const prisma = new PrismaClient();
import { uploadOnCloud } from "./functions/cloudinary.js";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const app = express();
app.use(cors());
app.use(express.json());
function toHash(string) {
    let hash = 0;
    if (string.length == 0)
        return hash;
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = ((hash << 5) + hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
function generateTokens(id) {
}
const VERIFICATION_URL = 'https://dynamic-id-card.vercel.app/verify';
app.post('/signup', upload.single('avatar'), async (req, res) => {
    try {
        const { aadhar_number, first_name, last_name } = req.body;
        const file = req.file;
        if (!aadhar_number || !first_name || !last_name || !file) {
            res.status(400).json({
                message: 'Incomplete details'
            });
            return;
        }
        const user = await prisma.user.findFirst({
            where: { aadhar_number: aadhar_number }
        });
        if (user) {
            res.status(402).json({
                message: 'Account already exixts'
            });
            return;
        }
        const buffer = Buffer.from(file.buffer);
        const result = await uploadOnCloud(buffer, 'sugee', 'image');
        if (result.error) {
            res.status(402).json({
                message: 'Unable to uplaod url on cloud'
            });
        }
        const hash = crypto.createHash("sha256").update(`${aadhar_number}${first_name}`).digest("hex");
        const new_user = await prisma.user.create({
            data: {
                first_name: first_name,
                last_name: last_name,
                aadhar_number: aadhar_number,
                picture_url: result.url,
                token: hash
            }
        });
        if (!new_user) {
            res.status(403).json({
                message: 'Unable to create account, please try again'
            });
        }
        res.status(200).json({
            message: 'Account created successfully',
            token: new_user.token,
            valid: true,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    }
});
app.post('/card/:dynamicId', async (req, res) => {
    try {
        const uuid = req.params.dynamicId;
        if (!uuid) {
            res.status(400).json({
                message: 'Bad request'
            });
            return;
        }
        const dymnaicId = await prisma.dynamicId.findFirst({
            where: { dynamicId: uuid }
        });
        if (!dymnaicId) {
            res.status(403).json({
                message: 'Please register'
            });
            return;
        }
        const user = await prisma.user.findFirst({
            where: { id: dymnaicId.user_id }
        });
        if (!user) {
            res.status(404).json({
                message: 'User Not Found'
            });
            return;
        }
        res.status(200).json({
            userId: {
                uuid: dymnaicId.dynamicId,
                user_id: user.id,
                name: `${user.first_name} ${user.last_name}`,
                qrCode: dymnaicId.qrCode,
                user_avatar: user.picture_url
            },
            valid: true
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    }
});
app.post('/createDynamicId/:token', async (req, res) => {
    try {
        const token = req.params.token;
        if (!token) {
            res.status(400).json({
                message: 'Bad request'
            });
            return;
        }
        const user = await prisma.user.findFirst({
            where: { token: token }
        });
        if (!user) {
            res.status(403).json({
                message: 'Please fill the registration form'
            });
            return;
        }
        const hash = toHash(`${user.aadhar_number}_${user.first_name}_${user.id}`);
        const qrcode = await QRCode.toDataURL(VERIFICATION_URL + '/' + `${hash}`);
        const new_dynamic_id = await prisma.dynamicId.create({
            data: {
                dynamicId: `${hash}`,
                user_id: user.id,
                qrCode: qrcode
            }
        });
        if (!new_dynamic_id) {
            res.status(402).json({
                message: 'Unable to create id, please contact admin'
            });
            return;
        }
        res.status(200).json({
            userId: {
                uuid: new_dynamic_id.dynamicId,
                user_id: user.id,
                name: `${user.first_name} ${user.last_name}`,
                qrCode: new_dynamic_id.qrCode,
                user_avatar: user.picture_url
            },
            valid: true
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    }
});
app.post('/verify/:dynamicId', async (req, res) => {
    try {
        const uuid = req.params.dynamicId;
        if (!uuid) {
            res.status(401).json({
                message: 'Not verified',
                valid: false
            });
            return;
        }
        const verified = await prisma.dynamicId.findFirst({
            where: {
                dynamicId: uuid
            }
        });
        if (!verified || !verified.user_id) {
            res.status(401).json({
                message: 'Not verified',
                valid: false
            });
            return;
        }
        const user = await prisma.user.findFirst({
            where: {
                id: verified.user_id
            }
        });
        if (!user) {
            res.status(403).json({
                message: 'User does not exists , not verified'
            });
            return;
        }
        res.status(200).json({
            message: 'User verified',
            userId: {
                uuid: verified.dynamicId,
                user_id: user.id,
                name: `${user.first_name} ${user.last_name}`,
                qrCode: verified.qrCode,
                user_avatar: user.picture_url
            },
            valid: true
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    }
});
app.listen(3000, () => {
    console.log('App started');
});
//# sourceMappingURL=index.js.map
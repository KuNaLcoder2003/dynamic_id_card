import { rejects } from "assert";
import cloudinary from "cloudinary";
import { error } from "console";
const cloud = cloudinary.v2;
cloud.config({
    cloud_name: 'doyifognr',
    api_key: '558719477873916',
    api_secret: 'v8ZvCjyKR-CgQwVd9D8qEpBygxw'
});
export function uploadOnCloud(buffer, folder_name, type) {
    return new Promise((resolve, reject) => {
        const result = cloud.uploader.upload_stream({
            folder: folder_name,
            resource_type: type,
            // type: "private"
        }, (error, res) => {
            if (error)
                reject({ valid: false, error: error, url: "" });
            else
                resolve({ valid: true, url: res?.secure_url || "", public_id: `${res?.public_id}` });
        });
        result.end(buffer);
    });
}
//# sourceMappingURL=cloudinary.js.map
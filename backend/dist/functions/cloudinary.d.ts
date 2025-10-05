interface CloudinaryResponse {
    valid?: boolean;
    error?: string;
    url: string;
    public_id?: string;
}
export declare function uploadOnCloud(buffer: Buffer, folder_name: string, type: ("video" | "image" | "raw" | "auto")): Promise<CloudinaryResponse>;
export {};
//# sourceMappingURL=cloudinary.d.ts.map
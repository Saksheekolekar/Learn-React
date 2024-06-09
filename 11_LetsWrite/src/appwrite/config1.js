import conf from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;
    constructor() {
        this.client
            .setEndPoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.
                appwriteDatabaseId,
                conf.appwriteCollectionId, slug,
                {
                    title, content, featuredImage, status, userId
                })
        } catch (error) {
            console.log("Appwrite services::createPost::Error", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return this.databases.updateDocument(appwriteDatabaseId,
                conf.appwriteCollectionId, slug,
                {
                    title, content, featuredImage, status
                })
        } catch (error) {
            console.log("Appwrite services::updatePost::Error", error);
        }
    }

    async deletePost(slug){
        try {
            return this.databases.deleteDocument(appwriteDatabaseId,
                conf.appwriteCollectionId, slug,
               )
            return true;
        } catch (error) {
            console.log("Appwrite services::deletePost::Error", error);
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(appwriteDatabaseId,
                conf.appwriteCollectionId, slug,
               )
        } catch (error) {
            console.log("Appwrite services::getPosts::Error", error);
            return false
        }
     }

    async getPosts(queries=[Query.equal("status"),"active"]){
        try {
            return this.databases.listDocumnets(appwriteDatabaseId,
                conf.appwriteCollectionId,queries) 
        } catch (error) {
            console.log("Appwrite services::getPosts::Error", error);
            return false
        }
     }

    async fileUpload(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId.ID.unique(),file
            )
            
        } catch (error) {
            console.log("Appwrite services::fileUpload::Error", error);
            return false
        }
     }
    
     async deleteFile(fileId    ){
        try {
            this.storage.deleteFile(conf.appwriteBucketId,fileId)
            return true
        } catch (error) {
            console.log("Appwrite services::deleteFile::Error", error);
            return false
        }
     }

     getFilepreview(fileId){
        return this.storage.getFilePreview(conf.appwriteBucketId,fileId)
     }
}
const service = new Service();
export default Service;
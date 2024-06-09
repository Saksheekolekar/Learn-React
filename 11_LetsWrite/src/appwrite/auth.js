import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndPoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
        } catch (error) {
            throw error;
        }
        if (userAccount) {
            //call another method
            return this.login({email,password})
        } else {
            return userAccount;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
           throw error 
        }
    }

    async getCurrentUser(){
       try {
         return await this.account.get();
       } catch (error) {
        console.log("Appwrite services::getCurrentUser::Error",error);
       }
       return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite services::logOut::Error",error);
        }
    }
}
const authService = new AuthService();

export default authService
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import path, { resolve } from "path";
import { Usuarios } from "../interfaces/Usuarios";
import {Response} from "../interfaces/Response";

const PATH_PROTO = path.join(__dirname,"..", "..", "/protointerfaces/schema/src/main/proto/usuario.proto")


const packageDefinition = protoLoader.loadSync(PATH_PROTO, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as any;

const client = new proto.ServiceUsuario('localhost:50051', grpc.credentials.createInsecure());

export const getUsuarios = (): Promise<Usuarios> => {
    return new Promise((resolve, reject) => {
        client.GetUsuarios({}, (err: any, response: Usuarios) => {
            if (err) {
                reject(err)
            }else {
                resolve(response)
            }
        })
    })
}

export const createUsuario = (firstname: string, lastname: string, email: string,address: string): Promise<Response> => {
    return new Promise((resolve, reject) => {
        client.createUsuario({firstname, lastname, email, address}, (err: any, response: any) => {
            console.log(firstname)
            if (err) reject(err)
            resolve(response)
        } )
    } ) 
}

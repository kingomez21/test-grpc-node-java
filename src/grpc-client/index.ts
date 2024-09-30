import * as grpc from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import path from "path";
import {ProtoGrpcType} from "../interfaces/Usuario";
import { Usuarios } from "../interfaces/Usuarios";

const PATH_PROTO = path.join(__dirname,"..", "..", "/protointerfaces/schema/src/main/proto/usuario.proto")


const packageDefinition = protoLoader.loadSync(PATH_PROTO, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

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

package com.appservice.services;

import java.util.ArrayList;
import java.util.List;

import com.appservice.controllers.UsuarioController;
import com.protointerfaces.grpc.ServiceUsuarioGrpc.ServiceUsuarioImplBase;
import com.protointerfaces.grpc.ServiceUsuarioProto.Empty;
import com.protointerfaces.grpc.ServiceUsuarioProto.Response;
import com.protointerfaces.grpc.ServiceUsuarioProto.Usuario;
import com.protointerfaces.grpc.ServiceUsuarioProto.Usuarios;
import com.protointerfaces.models.UsuarioModel;

import io.grpc.stub.StreamObserver;

public class ServiceUsuario extends ServiceUsuarioImplBase{
    @Override
    public void getUsuarios(Empty request, StreamObserver<Usuarios> responseObserver) {

        List<UsuarioModel> users = UsuarioController.getUsers();

        List<Usuario> dataUsers = new ArrayList<Usuario>();

        for (UsuarioModel user : users) {
            dataUsers.add(Usuario.newBuilder()
                    .setId(user.getId())
                    .setFirstname(user.getFirstname())
                    .setLastname(user.getLastname())
                    .setAddress(user.getAddress())
                    .setEmail(user.getEmail())
                    .build()
                );
        }
        
        Usuarios responseUser = Usuarios.newBuilder().addAllUsers(dataUsers).build();

        responseObserver.onNext(responseUser);
        responseObserver.onCompleted();

    }

    @Override
    public void createUsuario(Usuario request, StreamObserver<Response> responseObserver) {
        
        boolean success = UsuarioController.createUsuario(request);

        if (success) {
            Response reply = Response.newBuilder()
                        .setMsg("Guardado exitosamente")
                        .setStatus(success)
                        .build();

            responseObserver.onNext(reply);
            responseObserver.onCompleted();
        }else {
            Response reply = Response.newBuilder()
                        .setMsg("No se pudo guardar")
                        .setStatus(success)
                        .build();

            responseObserver.onNext(reply);
            responseObserver.onCompleted();
        }

       
    }
}

package com.appservice.services;

import java.util.ArrayList;
import java.util.List;

import com.protointerfaces.grpc.ServiceUsuarioGrpc.ServiceUsuarioImplBase;
import com.protointerfaces.grpc.ServiceUsuarioProto.Empty;
import com.protointerfaces.grpc.ServiceUsuarioProto.Usuario;
import com.protointerfaces.grpc.ServiceUsuarioProto.Usuarios;
import com.protointerfaces.models.UsuarioModel;

import io.grpc.stub.StreamObserver;

public class ServiceUsuario extends ServiceUsuarioImplBase{
    @Override
    public void getUsuarios(Empty request, StreamObserver<Usuarios> responseObserver) {

        List<UsuarioModel> users = new ArrayList<UsuarioModel>();    
        
        users.add(new UsuarioModel("Juan Sebastian", "Gomez Mezu", "juan@gmail.com", "Villa Rica"));
        users.add(new UsuarioModel("Juan Sebastian2", "Gomez Mezu2", "juan@gmail.com2", "Villa Rica2"));
        users.add(new UsuarioModel("Juan Sebastian3", "Gomez Mezu2", "juan@gmail.com2", "Villa Rica2"));
        users.add(new UsuarioModel("Juan Sebastian4", "Gomez Mezu2", "juan@gmail.com2", "Villa Rica2"));
        users.add(new UsuarioModel("Juan Sebastian5", "Gomez Mezu2", "juan@gmail.com2", "Villa Rica2"));

        List<Usuario> dataUsers = new ArrayList<Usuario>();

        for (UsuarioModel user : users) {
            dataUsers.add(Usuario.newBuilder()
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
}

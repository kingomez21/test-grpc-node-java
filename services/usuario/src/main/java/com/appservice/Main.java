package com.appservice;

import java.io.IOException;

import com.appservice.services.ServiceUsuario;

import io.grpc.Server;
import io.grpc.ServerBuilder;

public class Main {
    
    public static void main(String[] args) {
        
        Server server = ServerBuilder.forPort(50051)
                .addService(new ServiceUsuario())
                .build();;
        try {
            server.start();
            System.out.println("server on port 50051");
            server.awaitTermination();
        } catch (InterruptedException e) {
            server.shutdown();
            System.err.println("server shutdown");
        } catch (IOException e){
            System.err.println("error"+ e.getMessage());
        }
        
    }
}
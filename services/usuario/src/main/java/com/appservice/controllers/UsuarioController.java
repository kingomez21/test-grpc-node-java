package com.appservice.controllers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.appservice.database.DatabaseConector;
import com.protointerfaces.grpc.ServiceUsuarioProto.Usuario;
import com.protointerfaces.models.UsuarioModel;

public class UsuarioController {

    
    public static List<UsuarioModel> getUsers() {
        Connection conn = DatabaseConector.getConnection();
        String query = "SELECT * FROM User";
        List<UsuarioModel> dataUsers = new ArrayList<UsuarioModel>();

        try {
            PreparedStatement preparedQuery = conn.prepareStatement(query);
            ResultSet result = preparedQuery.executeQuery();

            while (result.next()) {
                dataUsers.add(new UsuarioModel(
                    result.getInt("id"),
                    result.getString("firstname"),
                    result.getString("lastname"),
                    result.getString("email"),
                    result.getString("address")
                    )
                );
            }
            conn.close();
        } catch (Exception e) {
            System.err.println("ocurrio un error"+ e.getMessage());
        }

        return dataUsers;
    }

    public static boolean createUsuario(Usuario newUser){
        Connection conn = DatabaseConector.getConnection();
        String query = "INSERT INTO user (firstname, lastname, email, address) VALUES (?,?,?,?)";
        int rowAffected = 0;
        try {
            PreparedStatement preparedInsert = conn.prepareStatement(query);
            preparedInsert.setString(1, newUser.getFirstname());
            preparedInsert.setString(2, newUser.getLastname());
            preparedInsert.setString(3, newUser.getEmail());
            preparedInsert.setString(4, newUser.getAddress());
            rowAffected = preparedInsert.executeUpdate();
            conn.close();
        } catch (Exception e) {
            System.err.println("error al guardar" + e.getMessage());
        }

        return rowAffected != 0 ? true : false;
    }

}

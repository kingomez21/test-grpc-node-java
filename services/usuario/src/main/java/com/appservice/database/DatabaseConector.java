package com.appservice.database;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConector {
    private static final String URL = "jdbc:mysql://localhost:3306/";
    private static final String DATABASE_NAME = "db_test_grpc";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static Connection getConnection(){
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(URL+DATABASE_NAME, USER, PASSWORD);
            return conn;
        } catch (Exception e) {
            System.err.println("ocurrio un error inesperado"+e.getMessage());
        }

        return conn;
    }

}

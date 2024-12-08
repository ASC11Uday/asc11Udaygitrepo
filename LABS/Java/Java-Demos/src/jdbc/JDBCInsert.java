package jdbc;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCInsert {
    public static void main(String[] args) {
        try {
            System.out.println("1.establishing a connection to the database");
            Connection connection  = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb1","root","mysql");
            System.out.println("2.Createa the statement.");
            Statement statement = connection. createStatement();
            System.out.println("3.Execute the query");
            int noOfRowsAffected = statement.executeUpdate("Insert into user (User_id,email,first_name,last_name) values (6,'user@gm.com','Uday','kiran');");
            System.out.println("4.process the status.");

            if(noOfRowsAffected > 0)
            System.out.println(noOfRowsAffected + "Record inserted successfully");
            else
                System.out.println("Record not inserted successfully");
        } catch  (SQLException exception) {
            System.out.println("error: could not connect to the database."+ exception.getMessage());
        }
    }
}

package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCInsertUpdateDeletePostSQL {
    public static void main(String[] args) {
        Connection connection = null;
        try{
            System.out.println("Driver Loaded");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb1","root","mysql");
            System.out.println("Connection established");
            Statement statement  = connection.createStatement();
            System.out.println("Statement created");

            int noOfRows = statement.executeUpdate("Delete from user where user_id  = 102");
            System.out.println(noOfRows + "deleted!");
        }
        catch (SQLException sQLException){
            System.out.println("Error processing db operational!"+ sQLException.getMessage());
            
        }
        finally{
            try {
                connection.close();
            } catch (SQLException sqlexception) {
                System.out.println("Unble to close te connection"+ sqlexception.getMessage());
            }
            System.out.println("Connection closed successfully!");
        }
    }
    
}

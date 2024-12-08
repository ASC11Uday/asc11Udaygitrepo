package jdbc;

import java.sql.*;

public class JDBCSelect {

    public static void main(String[] args) {
        try {
            System.out.println("1.Establishing a connection to the database");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila", "root", "mysql");
            System.out.println("2.create a statement");
            Statement statement = connection.createStatement();
            System.out.println("3.Execute the query");
            ResultSet resultSet = statement.executeQuery("select *from actor");
            System.out.println("4.Process the results");
            while(resultSet.next()) {
                System.out.println(resultSet.getInt(1) + "\t" + resultSet.getString(2) +
                        "\t" + resultSet.getString("last_name"));
            }
        } catch (SQLException exception) {
            System.out.println("error ,cannot connect to database" + exception.getMessage());
        }
    }
}

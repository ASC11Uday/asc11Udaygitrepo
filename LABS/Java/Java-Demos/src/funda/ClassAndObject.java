package funda;

class Car{
    //instance variables
    // String type = "Petrol";
    // int price = 110;
    String type;
    int price;
    Car(){
            type = "company";
            price = 1100000;
    }
    void  display(){
        System.out.println(" Bharghavi company :" + type);
        System.err.println("SALARY :"+ price);

    }
    @Override

public String toString(){
    String message = "Type of car:" + type+"\nPrice of car:" + price;
    return message;

}

}
public class ClassAndObject {
    public static void main(String[] args) {
        Car car = null;
        car = new Car();
        // System.out.println("Type of car:" + car.type);
        // System.err.println("price of car:"+ car.price);
        car.display();
        System.out.println(car);
        String message = car.toString();
        System.out.println(message);
        System.err.println(car.toString());
        System.out.println(car);
    }
}

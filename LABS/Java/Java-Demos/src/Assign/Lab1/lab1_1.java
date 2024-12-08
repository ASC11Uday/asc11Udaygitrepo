package Assign.Lab1;

public class lab1_1 {
    public static void main(String[] args) {
        Overloading obj = new Overloading();
        System.out.println(obj.add((short)10, (short)20));
        System.out.println(obj.add((float)10.5, 20.1));
        System.out.println(obj.add(10, 20, 30));
        System.out.println(obj.add("Hello", 20));
    }
    
}
class Overloading{
    short add(short num1, short num2){
        int result= num1 + num2;
        return (short)result;
    }

    double add(float num1, double num2){
        double result = num1 +num2;
        return (double)result;
    }
    short add(int num1, int num2, int num3){
        return (short)(num1+ num2+ num3);
    }
    String add(String name, int num){
        return name+ num;
    }
}
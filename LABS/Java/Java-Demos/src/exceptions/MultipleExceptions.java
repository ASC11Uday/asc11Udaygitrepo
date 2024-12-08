package exceptions;

import java.util.Scanner;

public class MultipleExceptions {
    public static void main(String[] args) {
        int num1 = 0;
        int  num2 = 10;
        int values[] = {10,20,30};

        try(Scanner sc = new Scanner(System.in)){
            String num1String = sc.nextLine();
            num1 = Integer.parseInt(num1String);
            System.err.println(num1/num2);
            System.out.println(values[3]);
        } catch(NumberFormatException numberFormatException){
            System.out.println("invalid value for number");
        }
        catch(ArithmeticException arithmeticException){
            System.out.println("cannot divide buy zero");
        }
        catch (Throwable exception){
            System.out.println("All exceptions(which are not handled above)");
            System.out.println(exception);
        }
    }
    
}

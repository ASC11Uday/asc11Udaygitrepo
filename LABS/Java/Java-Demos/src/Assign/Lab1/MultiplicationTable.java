package Assign.Lab1;

import org.omg.Messaging.SyncScopeHelper;

import java.util.Scanner;

public class MultiplicationTable {
    public static void printTableForLoop(int number) {
        System.out.println("Using for loop:");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
    public static void main(String[] args) {
//        int number = 2;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number!");
        int number = sc.nextInt();
        printTableForLoop(number);
    }
    
}

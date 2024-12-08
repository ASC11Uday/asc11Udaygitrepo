package inheritance;

public class MultiLevelInheritance {
    public static void main(String[] args) {
        C1 c = new C1();
        c.displayA1();
        c.displayB1();
        c.displayC1();
    }
    
}
class A1{
    void displayA1(){
        System.out.println("A1");
    }
}

class B1 extends A1{
    void displayB1(){
        System.out.println("B1");
    }
}

class C1 extends B1 {
    void displayC1(){
        System.out.println("C1");
    }
}
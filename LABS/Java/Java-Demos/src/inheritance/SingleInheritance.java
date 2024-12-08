package inheritance;

public class SingleInheritance {
    public static void main(String[] args){
        A a = new A();
        a.display();
        B b = new B();
        b.display();
    }
    
}

class  A{

    //package-private access modifer
    protected String message = "Welcome";

    //Default construtor
    public A(){
        System.err.println("A()");
    }

    //parameterized constructor

    public A(String message){
        this.message = message;
        System.err.println("A(String)");
    }

    void display(){
        System.out.println("Base/parent/super class method");
    }
}

class B extends A {
    public B(){
        System.out.println("B()");
    }

    void display(){
        System.out.println("derive/child/sub class method");
    }

}
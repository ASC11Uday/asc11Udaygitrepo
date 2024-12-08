package funda;

public class DefaultConstructor {
    int intVar;
    int floatVar;
    boolean  booleanVar;

    // public  DefaultConstructor(){
    //     intVar = 20;
    //     floatVar = 90;
    //     booleanVar = true;
    // }

    

    public static  void main(String[] args){
       
        DefaultConstructor defaultConstructor;
        // defaultConstructor = new DefaultConstructor();
        // System.out.println(defaultConstructor.intVar);
        // System.out.println(defaultConstructor.floatVar);
        // System.out.println(defaultConstructor.booleanVar);

        Thread thread = Thread.currentThread();
        System.err.println(thread);
        System.err.println(thread.getName());


        defaultConstructor = new DefaultConstructor(1, 2.0f, true);
        System.err.println(defaultConstructor);
        
    }

    public  DefaultConstructor(){
        floatVar  = 20;
        booleanVar = true;
    }

    public DefaultConstructor(int intVar, float floatVar, boolean booleanVar){
        intVar = intVar;
        floatVar = floatVar;
        booleanVar = booleanVar;

    }

    @Override
    public String toString() {
        return "DefaultConstructor{" +
                "intVar=" + intVar +
                ", floatVar=" + floatVar +
                ", booleanVar=" + booleanVar +
                '}';
    }
}

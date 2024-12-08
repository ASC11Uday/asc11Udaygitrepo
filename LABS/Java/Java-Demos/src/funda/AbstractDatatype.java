package funda;

public class AbstractDatatype {

    // primitive datatypes
    //methods declared in class are called instance variables
    byte byteVar = -128;
    short ShortVar = 32434;
    int intVar = -2414314;
    long longVar = 1434435353;
    float floatVar = 143.141f;
    double doubleVar = 154.241;
    char charVar = 'U';
    boolean boolVar = true;

    public  void display(){

        System.out.println("byteVar:" + byteVar);
        System.out.println("shortVar:" + ShortVar);
        System.out.println("intVar:"+intVar);
        System.out.println("longVar:"+longVar);
        System.out.println("floatVar"+floatVar);
        System.out.println("doubleVar"+doubleVar);
        System.out.println("charVar:"+charVar);
        System.out.println("boolvar:"+boolVar);
    }
    public static void main(String[] args){
        //AbstarctDatatypes is a  class , which is a user defined data type/ abstract data types
        // abstractdatatype is a reference variable
        // new is a keyword , which is used to create an object
        //abstractdatatype() is a constructor
        AbstractDatatype abstractDatatype = new AbstractDatatype();
        System.out.println(abstractDatatype.byteVar);
        System.out.println(abstractDatatype.ShortVar);
        System.out.println(abstractDatatype.intVar);
        System.out.println(abstractDatatype.longVar);
        System.out.println(abstractDatatype.floatVar);
        System.out.println(abstractDatatype.doubleVar);
        System.out.println(abstractDatatype.charVar);
        System.out.println(abstractDatatype.boolVar);
    }
}

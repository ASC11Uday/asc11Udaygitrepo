package Collection;
import java.util.*;

// Arraylist is a class in java.util package
// ArrayList is a collection calss.
// ArrayList is a dynamic array.
// ArrayList is a generic 

public class ArrayListEx {
    public static void main(String[] args){
        
        // usingGenericTypes();
        arrayListMethods();


    }

    public static void usingGenericTypes(){
        // type safety : compile time checking.
        ArrayList<String> colors = new ArrayList<String>(5);

        colors.add("Red");
        colors.add("blue");
        colors.add("black");
        System.out.println(colors);

    }

    private static void usingRawTypes(){
        ArrayList color = new ArrayList();
        color.add("Red");
        color.add(1);
        int x=10;
        // Boxing- converting primitive to object.
        Integer xToInteger = new Integer(x);
        color.add(xToInteger);
        color.add(false);

        boolean b= true;
        Boolean bToBoolean = new Boolean(b);

        color.add(bToBoolean);
        System.out.println(color);
    }

    private static void arrayListMethods(){
        ArrayList<String> colors = new ArrayList<String>();

        colors.add("Red");
        colors.add("Orange");
        colors.add("Yellow");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Violet");
        colors.add("Purpule");
        System.out.println(colors);

        String colors1= colors.get(1);
        String color = colors.get(3);
        if(color.equals(colors1)){
            System.out.println("Same color");
        }else{
            System.out.println("DIfferent color");
        }

        colors.remove(3);

        System.out.println(colors);
        System.out.println(colors.size());
        System.out.println(colors.contains("Green"));
        System.out.println(colors.indexOf("Green"));

        colors.add("Green");
        System.out.println(colors.lastIndexOf("Green"));
        System.out.println(colors.isEmpty());

        colors.clear();
        System.out.println(colors);
    }
}

package Collections;

import java.util.HashSet;

public class SetEx {
    public static void main(String[] args){
        HashSet<String> colors  = new HashSet<String>();
        colors.add("Red");
        colors.add("Orange");
        colors.add("Yellow");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Violet");
        colors.add("Purpule");
        //why add method with index is available in list but not available in set?
        //beacuse of array data structures used in list
        
        System.out.println(colors);
        colors.add(null);
        colors.add("Orange");
        System.out.print(colors);
    }
    
}

package funda;

public class StringEx{
    String message = "Wells, Its a wonderful day!";
    String mess = "welcome$abc!test";
    boolean result = message.endsWith("!");
    public static void main (String[] args){
        StringEx stringObj = new  StringEx();
        System.out.println(stringObj.result);
        
        int index = stringObj.message.indexOf("l");
        System.out.println(index);
        System.out.println(stringObj.message.indexOf("z"));


        //substrings
        System.out.println(stringObj.message.substring(0,5));

        //remove special characters
        System.out.println(stringObj.mess.replaceAll("[^a-zA-Z0-9]", ""));

        // Explore any 5 methods of your choice,frequently used methods in string.
        // charAt, compareTo, concat, indexOf, contains, endsWith, equals, equalsIgnoreCase, formate, getBytes
        char ch = stringObj.mess.charAt(7); //charAt
        System.out.println(ch);

        
    }
    
}
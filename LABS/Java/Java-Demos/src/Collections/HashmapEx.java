package Collections;

import java.util.HashMap;

public class HashmapEx {

    public static void main(String[] args) {
        HashMap<String,Integer> countryCodesMap = new HashMap<String,Integer>();

        countryCodesMap.put("America", 1);
        countryCodesMap.put("singapore", 65);
        countryCodesMap.put("India", 91);
        countryCodesMap.put("Japan", 81);
        countryCodesMap.put("japan".toUpperCase(),  81);
        System.out.println(countryCodesMap);
        System.err.println(countryCodesMap.isEmpty());
        //search operation  ifa singapore key is present ,if 65 values is presnt
        System.out.println(countryCodesMap.containsKey("singapore"));
        System.out.println(countryCodesMap.containsValue(65));
    }
    
}

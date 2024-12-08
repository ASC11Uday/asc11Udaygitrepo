package funda;

public class ArrayEx {
    private  void primitiveArray(){
        //arrays r used to store multiple values in a single varible, instead of declaring separate varoables for each value.
        // to declare an array

        int intArray[]= new int[5];
        intArray[0] = 10;
        intArray[1] = 20;
        intArray[2] = 30;
        intArray[3] = 40;
        intArray[4] = 50;

        for (int i = 0;i<intArray.length;i++){
            System.out.println("intArray["+i+"]="+ intArray[i]);
        }
    }
    public static void main(String[] args){
        ArrayEx arrayEx = null;
        arrayEx = new ArrayEx();
        arrayEx.primitiveArray();
    }
}

package exceptions;

public class CustomExceptionEx {
    public static void main(String[] args) {
        int age = 100;
        if(age < 21 || age > 60){
            AgeInvalidException ageInvalidException = new  AgeInvalidException("Invalid age , sorry you are not eligibleto apply for the job");
            // System.out.println("Hi you can work beacause your age is vaild");
            // throw ageInvalidException;
            try{
                throw ageInvalidException;
            } catch (AgeInvalidException ageInvalidException1){
                System.out.println(ageInvalidException.getMessage());
            }
        } else {
            System.out.println("You are eligible to apply for job");
        }
        System.out.println("Done");
    }
    
}
class AgeInvalidException extends RuntimeException {
    public AgeInvalidException(String message){
        super(message);
    }
}

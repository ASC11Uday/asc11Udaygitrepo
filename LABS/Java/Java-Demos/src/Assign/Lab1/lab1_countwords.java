package  Assign.Lab1;

public class lab1_countwords {
    public static int countWordsExcludingNumbers(String input) {
        if (input == null || input.isEmpty()) {
            return 0; // Return 0 for null or empty strings
        }


        String[] parts = input.trim().split("\\s+");
        int wordCount = 0;


        for (String part : parts) {
            if (!part.matches("\\d+")) { 
                wordCount++;
            }
        }

        return wordCount;
    }

    public static void main(String[] args) {
        String testString = "Sum of 12 and 20 is 32";
        int wordCount = countWordsExcludingNumbers(testString);
        System.out.println("Number of words (excluding numbers): " + wordCount); // Output: 4
    }
}

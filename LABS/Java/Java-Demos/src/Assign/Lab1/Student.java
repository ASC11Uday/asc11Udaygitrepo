package Assign.Lab1;

public class Student {
    private int studentId;
    private String studentName;
    private String city;
    private int marks1;
    private int marks2;
    private int marks3;
    private float feePerMonth;
    private boolean isEligibleForScholarship;


    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getMarks1() {
        return marks1;
    }

    public void setMarks1(int marks1) {
        this.marks1 = marks1;
    }

    public int getMarks2() {
        return marks2;
    }

    public void setMarks2(int marks2) {
        this.marks2 = marks2;
    }

    public int getMarks3() {
        return marks3;
    }

    public void setMarks3(int marks3) {
        this.marks3 = marks3;
    }

    public float getFeePerMonth() {
        return feePerMonth;
    }

    public void setFeePerMonth(float feePerMonth) {
        this.feePerMonth = feePerMonth;
    }

    public boolean isEligibleForScholarship() {
        return isEligibleForScholarship;
    }

    public void setEligibleForScholarship(boolean isEligibleForScholarship) {
        this.isEligibleForScholarship = isEligibleForScholarship;
    }


    public float getAnualFee() {
        return feePerMonth * 12;
    }

    // Method to calculate total marks
    public int getTotalMarks() {
        return marks1 + marks2 + marks3;
    }

    // Method to calculate average marks
    public float getAverage() {
        return getTotalMarks() / 3.0f;
    }

    // Method to determine result
    public String getResult() {
        if (marks1 > 60 && marks2 > 60 && marks3 > 60) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
}

class Tester {
    public static void main(String[] args) {
        // Create three Student objects
        Student student1 = new Student();
        Student student2 = new Student();
        Student student3 = new Student();


        student1.setStudentId(1);
        student1.setStudentName("Uday");
        student1.setCity("Vijayawada");
        student1.setMarks1(85);
        student1.setMarks2(90);
        student1.setMarks3(88);
        student1.setFeePerMonth(500);
        student1.setEligibleForScholarship(true);

        student2.setStudentId(2);
        student2.setStudentName("Bharghav");
        student2.setCity("kenya");
        student2.setMarks1(60);
        student2.setMarks2(55);
        student2.setMarks3(70);
        student2.setFeePerMonth(400);
        student2.setEligibleForScholarship(false);

        student3.setStudentId(3);
        student3.setStudentName("sandeep");
        student3.setCity("Vizag");
        student3.setMarks1(80);
        student3.setMarks2(75);
        student3.setMarks3(90);
        student3.setFeePerMonth(500);
        student3.setEligibleForScholarship(true);

        Student highestScorer = student1;
        if (student2.getTotalMarks() > highestScorer.getTotalMarks()) {
            highestScorer = student2;
        }
        if (student3.getTotalMarks() > highestScorer.getTotalMarks()) {
            highestScorer = student3;
        }
        System.out.println("Student with the highest total marks: " + highestScorer.getStudentName());


        Student lowestFeePayer = student1;
        if (student2.getFeePerMonth() < lowestFeePayer.getFeePerMonth()) {
            lowestFeePayer = student2;
        }
        if (student3.getFeePerMonth() < lowestFeePayer.getFeePerMonth()) {
            lowestFeePayer = student3;
        }
        System.out.println("Student who pays the least monthly fee: " + lowestFeePayer.getStudentName() +
                ", Fee: $" + lowestFeePayer.getFeePerMonth());

        for (Student student : new Student[]{student1, student2, student3}) {
            System.out.println("\nStudent Name: " + student.getStudentName());
            System.out.println("Total Marks: " + student.getTotalMarks());
            System.out.println("Average Marks: " + student.getAverage());
            System.out.println("Result: " + student.getResult());
            System.out.println(student.isEligibleForScholarship() ? "Scholarship available" : "Scholarship not available");
        }
    }
}

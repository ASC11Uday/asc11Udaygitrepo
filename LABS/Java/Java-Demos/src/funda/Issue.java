package funda;

import java.util.Scanner;
import java.util.Date;
import javax.xml.crypto.Data;

public class Issue {
    int IssueId;
    String Title;
    String Description;
    String Priority;
    String Status;
    String Assignee;
    Date Issuedate;
    
    void takeIssue(){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the IssueId:");
        IssueId = sc.nextInt();
        sc.nextLine();

        System.out.println("Enter the Title:");
        Title = sc.nextLine();

        System.out.println("Enter the Description:");
        Description = sc.nextLine();

        System.out.println("Enter the Priority (Low,Medium,High):");
        Priority = sc.nextLine();

        System.out.println("Enter the Status(e.g., Open, In Progress, Resolved,Closed):");
        Status = sc.nextLine();

        System.out.println("Enter the assigne:");
        Assignee = sc.nextLine();

        // System.out.println("Enter the data:");
        // date = new Date();
        Issuedate = new Date();
        sc.nextLine();
        
    }

    void display(){
        System.out.println(IssueId);
        System.err.println(Title);
        System.out.println(Description);
        System.out.println(Priority);
        System.out.println(Status);
        System.out.println(Assignee);
        System.out.println(Issuedate);
    }

    @Override
    public String toString(){
        return   "Issueid: "+IssueId+
        "\nTitle: " + Title +
        "\nDescription: "+Description+
        "\nPriority: "+ Priority+
        "\nStatus: "+Status+
        "\nAssigness: "+Assignee+
        "\nissuedate: "+ Issuedate;
    }

    public static void main(String[] args) {
        Issue obj = new Issue();
        obj.takeIssue();

        System.out.println(obj);

    
    }
}

// export interface Issue {
//     id: number;
//     title: string;
//     status: string;
//     priority: string;
//     assignee: string;
//     description: string;
//   }
  
// src/app/model/issue.model.ts
export interface Issue {
  id: number;              
  title: string;          
  description: string;     // Detailed description of the issue
  priority: string;        // Priority level (e.g., Low, Medium, High)
  status: string;          // Status (e.g., Open, In Progress, Resolved, Closed)
  assignee: string;        // Team member assigned to the issue
  date: string;            // Date the issue was created or last updated
}

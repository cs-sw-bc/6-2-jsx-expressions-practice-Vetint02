export const patron = {
  firstName: "Emma",
  lastName: "Johnson",
  libraryCardNumber: "LIB-98765",
  email: "emma.johnson@email.com",
  memberSince: 2019,
  isActive: true,
  hasLateFees: true,
  lateFeeAmount: 3.50,
  booksCheckedOut: [
    { 
      id: 1, 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      dueDate: "March 10, 2024",
      isOverdue: true,
      category: "Fiction"
    },
    { 
      id: 2, 
      title: "Sapiens", 
      author: "Yuval Noah Harari", 
      dueDate: "March 18, 2024",
      isOverdue: false,
      category: "Non-Fiction"
    },
    { 
      id: 3, 
      title: "1984", 
      author: "George Orwell", 
      dueDate: "March 12, 2024",
      isOverdue: true,
      category: "Fiction"
    },
    { 
      id: 4, 
      title: "Educated", 
      author: "Tara Westover", 
      dueDate: "March 20, 2024",
      isOverdue: false,
      category: "Biography"
    }
  ],
  favoriteGenres: ["Fiction", "History", "Biography"],
  booksReadThisYear:29,
  readingGoal: 30
};